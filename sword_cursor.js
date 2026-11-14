/**
 * NGỰ KIẾM THUẬT - VẠN KIẾM QUY TÔNG
 * Hiệu ứng 8 Phi Kiếm Nhỏ Bất Diệt:
 * - Khi đứng yên: Tự động bay lượn xoay vòng tròn xung quanh con trỏ chuột (Kiếm Trận Hộ Thể)
 * - Khoảng cách giữa các kiếm gần nhau, kích thước nhỏ gọn thanh mảnh
 * - Khi di chuyển: Đồng loạt lướt theo sau chuột thành đội hình thoi/cánh cung
 * - Khi bấm chuột: Bộc phát kiếm trận tỏa tròn rồi quy tụ lại
 * - Có nút Bật/Tắt hiệu ứng tiện lợi, lưu trạng thái vào localStorage
 */

(function () {
  'use strict';

  // Trạng thái Bật/Tắt hiệu ứng (Đọc từ localStorage)
  let isEnabled = true;
  try {
    const saved = localStorage.getItem('swd_sword_cursor_enabled');
    if (saved !== null) {
      isEnabled = (saved === 'true');
    }
  } catch (e) {
    console.warn("Storage access failed:", e);
  }

  // 1. Tạo Canvas Overlay toàn màn hình
  const canvas = document.createElement('canvas');
  canvas.id = 'sword-cursor-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    display: ${isEnabled ? 'block' : 'none'};
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Tọa độ & vận tốc chuột
  const mouse = {
    x: width / 2,
    y: height / 2,
    vx: 0,
    vy: 0,
    speed: 0,
    lastMoveTime: Date.now()
  };

  // Hệ số trạng thái di chuyển: 0 = đứng yên xoay vòng tròn, 1 = lướt theo đuôi
  let moveFactor = 0;

  // Góc xoay vòng tròn toàn cục quanh chuột khi đứng yên
  let globalOrbitAngle = 0;
  const ORBIT_RADIUS = 26; // Khoảng cách bán kính vòng tròn quanh con trỏ chuột (rất gần và gọn)
  const ORBIT_SPEED = 0.048; // Tốc độ xoay vòng tròn quanh chuột

  // Danh sách các hạt Linh Khí tia sáng tạm thời
  const qiSparks = [];

  // ==========================================
  // CẤU HÌNH 8 THANH PHI KIẾM NHỎ GỌN (BÁT ĐẠI TIÊN KIẾM)
  // Kích thước nhỏ gọn, lưỡi kiếm thanh mảnh, tinh xảo
  // ==========================================
  const SWORD_CONFIGS = [
    {
      name: "Thanh Sương",
      bladeLength: 32,
      bladeWidth: 2.6,
      guardWidth: 9,
      color: "#7fe5ea",     // Xanh ngọc lam chủ đạo
      glowColor: "#a8f5f8"
    },
    {
      name: "Hiên Viên",
      bladeLength: 30,
      bladeWidth: 2.4,
      guardWidth: 8.5,
      color: "#ffd700",     // Hoàng kim
      glowColor: "#fff2a1"
    },
    {
      name: "Thu Thủy",
      bladeLength: 29,
      bladeWidth: 2.3,
      guardWidth: 8,
      color: "#ffffff",     // Bạch ngọc linh khí
      glowColor: "#c7f8fc"
    },
    {
      name: "Thừa Ảnh",
      bladeLength: 31,
      bladeWidth: 2.5,
      guardWidth: 8.5,
      color: "#00d2d3",     // Lam ngọc
      glowColor: "#48dbfb"
    },
    {
      name: "Tử Tiêu",
      bladeLength: 30,
      bladeWidth: 2.4,
      guardWidth: 8.5,
      color: "#a29bfe",     // Tử lôi huyền ảo
      glowColor: "#e056fd"
    },
    {
      name: "Xích Tiêu",
      bladeLength: 31,
      bladeWidth: 2.5,
      guardWidth: 9,
      color: "#ff7675",     // Chu sa xích diễm
      glowColor: "#fab1a0"
    },
    {
      name: "Bích Lạc",
      bladeLength: 28,
      bladeWidth: 2.3,
      guardWidth: 8,
      color: "#2ecc71",     // Thanh bích ngọc
      glowColor: "#55efc4"
    },
    {
      name: "Huyền Minh",
      bladeLength: 30,
      bladeWidth: 2.4,
      guardWidth: 8.5,
      color: "#38ada9",     // Thâm hải u lam
      glowColor: "#78e08f"
    }
  ];

  // ==========================================
  // LỚP PHI KIẾM BẤT DIỆT (PERPETUAL FLYING SWORD)
  // ==========================================
  class PersistentSword {
    constructor(cfg, index, total) {
      this.cfg = cfg;
      this.index = index;
      this.total = total;

      // Vị trí khởi tạo đều quanh chuột
      const angle = (Math.PI * 2 * index) / total;
      this.x = mouse.x + Math.cos(angle) * ORBIT_RADIUS;
      this.y = mouse.y + Math.sin(angle) * ORBIT_RADIUS;
      this.vx = 0;
      this.vy = 0;
      this.angle = angle + Math.PI / 2;

      // Vệt kiếm khí lưu ảnh (Sword Qi Trail)
      this.trail = [];
      this.maxTrail = 7;

      // Xung lực khi Click "Vạn Kiếm Xuất Kích"
      this.burstVx = 0;
      this.burstVy = 0;
    }

    update(time) {
      // 1. Ghi lại vệt kiếm khí ngắn thanh thoát
      this.trail.unshift({ x: this.x, y: this.y, angle: this.angle });
      if (this.trail.length > this.maxTrail) this.trail.pop();

      // 2. TỌA ĐỘ KHI ĐỨNG YÊN: VÒNG TRÒN TỰ XOAY QUANH CHUỘT
      const baseAngle = (Math.PI * 2 * this.index) / this.total;
      const orbitAngle = globalOrbitAngle + baseAngle;
      const orbitTargetX = mouse.x + Math.cos(orbitAngle) * ORBIT_RADIUS;
      const orbitTargetY = mouse.y + Math.sin(orbitAngle) * ORBIT_RADIUS;
      const orbitFacingAngle = orbitAngle + Math.PI / 2;

      // 3. TỌA ĐỘ KHI DI CHUYỂN: BÁM ĐUÔI GẦN NHAU (CHEVRON SWARM)
      const moveAngle = Math.atan2(mouse.vy, mouse.vx);
      const backAngle = moveAngle + Math.PI;
      const sideAngle = moveAngle + Math.PI / 2;

      const trailDist = 10 + (this.index + 1) * 5.2;
      const sideSign = (this.index % 2 === 0) ? 1 : -1;
      const sideDist = sideSign * (4 + Math.floor(this.index / 2) * 4.2);
      const wave = Math.sin(time * 0.008 + this.index * 0.7) * 3;

      const trailTargetX = mouse.x + Math.cos(backAngle) * trailDist + Math.cos(sideAngle) * (sideDist + wave);
      const trailTargetY = mouse.y + Math.sin(backAngle) * trailDist + Math.sin(sideAngle) * (sideDist + wave);
      const trailFacingAngle = Math.atan2(this.vy, this.vx) + Math.PI / 2;

      // 4. HÒA TRỘN MỤC TIÊU
      const targetX = orbitTargetX * (1 - moveFactor) + trailTargetX * moveFactor;
      const targetY = orbitTargetY * (1 - moveFactor) + trailTargetY * moveFactor;

      // 5. VẬT LÝ DI CHUYỂN & LỰC KÉO LÒ XO
      const dx = targetX - this.x;
      const dy = targetY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const spring = dist > 150 ? 0.15 : 0.09;
      const fx = (dist > 0.001) ? (dx / dist) * Math.min(dist * spring, 16) : 0;
      const fy = (dist > 0.001) ? (dy / dist) * Math.min(dist * spring, 16) : 0;

      this.burstVx *= 0.86;
      this.burstVy *= 0.86;

      this.vx = (this.vx + fx + this.burstVx) * 0.84;
      this.vy = (this.vy + fy + this.burstVy) * 0.84;

      this.x += this.vx;
      this.y += this.vy;

      // 6. GÓC XOAY CỦA KIẾM
      let targetAngle;
      const curSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (moveFactor > 0.35 && curSpeed > 1.2) {
        targetAngle = trailFacingAngle;
      } else {
        targetAngle = orbitFacingAngle;
      }

      let diff = targetAngle - this.angle;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.angle += diff * 0.22;

      if (curSpeed > 7 && Math.random() < 0.2) {
        qiSparks.push(new QiSpark(this.x, this.y, this.cfg.color));
      }
    }

    burst(cx, cy) {
      const angle = (Math.PI * 2 * this.index) / this.total;
      const speed = 12 + Math.random() * 4;
      this.burstVx = Math.cos(angle) * speed;
      this.burstVy = Math.sin(angle) * speed;

      for (let i = 0; i < 2; i++) {
        qiSparks.push(new QiSpark(this.x, this.y, this.cfg.color));
      }
    }

    draw(ctx) {
      const cfg = this.cfg;
      const len = cfg.bladeLength;
      const w = cfg.bladeWidth;
      const gw = cfg.guardWidth;

      // 1. Vẽ Vệt Kiếm Khí
      if (this.trail.length > 2) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.trail[0].x, this.trail[0].y);
        for (let i = 1; i < this.trail.length; i++) {
          ctx.lineTo(this.trail[i].x, this.trail[i].y);
        }
        ctx.strokeStyle = cfg.color;
        ctx.lineWidth = w * 0.75;
        ctx.shadowColor = cfg.glowColor;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = 0.35;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();
      }

      // 2. Vẽ Thân Phi Kiếm Nhỏ Gọn
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);

      ctx.shadowColor = cfg.glowColor;
      ctx.shadowBlur = 8;

      // === LƯỠI KIẾM ===
      ctx.beginPath();
      ctx.moveTo(0, -len);
      ctx.lineTo(w / 2, -len * 0.22);
      ctx.lineTo(w / 2, 0);
      ctx.lineTo(-w / 2, 0);
      ctx.lineTo(-w / 2, -len * 0.22);
      ctx.closePath();

      const bladeGrad = ctx.createLinearGradient(-w / 2, 0, w / 2, 0);
      bladeGrad.addColorStop(0, '#ffffff');
      bladeGrad.addColorStop(0.35, cfg.color);
      bladeGrad.addColorStop(0.65, cfg.color);
      bladeGrad.addColorStop(1, '#ffffff');
      ctx.fillStyle = bladeGrad;
      ctx.fill();

      // Sống kiếm
      ctx.beginPath();
      ctx.moveTo(0, -len + 2);
      ctx.lineTo(0, 0);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 0.9;
      ctx.stroke();

      // === HỘ THỦ KIẾM ===
      ctx.beginPath();
      ctx.moveTo(-gw / 2, -1.2);
      ctx.lineTo(0, -0.4);
      ctx.lineTo(gw / 2, -1.2);
      ctx.lineTo(gw / 2 - 0.8, 2.2);
      ctx.lineTo(0, 1.2);
      ctx.lineTo(-gw / 2 + 0.8, 2.2);
      ctx.closePath();
      ctx.fillStyle = '#d4af37';
      ctx.shadowColor = '#f5d76e';
      ctx.shadowBlur = 4;
      ctx.fill();

      // Hạt ngọc hộ thủ
      ctx.beginPath();
      ctx.arc(0, 0.6, 1.1, 0, Math.PI * 2);
      ctx.fillStyle = cfg.color;
      ctx.fill();

      // === CHUÔI KIẾM ===
      const hiltLen = 6.5;
      ctx.fillStyle = '#1e272e';
      ctx.fillRect(-w * 0.35, 2.2, w * 0.7, hiltLen);

      // Chỉ vàng
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(-w * 0.35, 4.2);
      ctx.lineTo(w * 0.35, 4.8);
      ctx.moveTo(-w * 0.35, 6.2);
      ctx.lineTo(w * 0.35, 6.8);
      ctx.stroke();

      // === ĐỐC KIẾM ===
      ctx.beginPath();
      ctx.arc(0, 2.2 + hiltLen, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = '#d4af37';
      ctx.fill();

      // === TUA KIẾM ===
      const pommelY = 2.2 + hiltLen;
      const tasselLen = 7.5;
      ctx.beginPath();
      ctx.moveTo(0, pommelY);
      ctx.lineTo(0, pommelY + tasselLen);
      ctx.strokeStyle = '#e74c3c';
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // Hạt ngọc tua
      ctx.beginPath();
      ctx.arc(0, pommelY + tasselLen, 1.1, 0, Math.PI * 2);
      ctx.fillStyle = '#f1c40f';
      ctx.fill();

      ctx.restore();
    }
  }

  // ==========================================
  // HẠT LINH KHÍ (QI SPARK)
  // ==========================================
  class QiSpark {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 1.5;
      this.vy = (Math.random() - 0.5) * 1.5;
      this.size = 1.2 + Math.random() * 1.5;
      this.color = color || '#7fe5ea';
      this.life = 0;
      this.maxLife = 14 + Math.random() * 10;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.size *= 0.93;
      this.life++;
      return this.life < this.maxLife;
    }

    draw(ctx) {
      const alpha = Math.max(0, 1 - this.life / this.maxLife);
      ctx.save();
      ctx.globalAlpha = alpha * 0.6;
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Khởi tạo 8 Thanh Phi Kiếm Bất Diệt
  const swords = SWORD_CONFIGS.map((cfg, idx) => new PersistentSword(cfg, idx, SWORD_CONFIGS.length));

  // ==========================================
  // QUẢN LÝ BẬT / TẮT KIẾM TRẬN
  // ==========================================

  function setEnabled(val) {
    isEnabled = !!val;
    try {
      localStorage.setItem('swd_sword_cursor_enabled', String(isEnabled));
    } catch (e) {}

    if (canvas) {
      canvas.style.display = isEnabled ? 'block' : 'none';
      if (!isEnabled) {
        ctx.clearRect(0, 0, width, height);
      }
    }
    updateButtonUI();
    return isEnabled;
  }

  function toggle() {
    return setEnabled(!isEnabled);
  }

  function updateButtonUI() {
    const btn = document.getElementById('btn-sword-cursor-toggle');
    const textEl = document.getElementById('sword-cursor-text');
    const iconEl = document.getElementById('sword-cursor-icon');

    if (btn) {
      btn.classList.toggle('active', isEnabled);
      btn.title = isEnabled 
        ? "Đang bật Vạn Kiếm Quy Tông (Nhấn để tắt)" 
        : "Đang tắt Vạn Kiếm Quy Tông (Nhấn để bật)";
    }
    if (textEl) {
      textEl.textContent = isEnabled ? "Kiếm Trận: Bật" : "Kiếm Trận: Tắt";
    }
    if (iconEl) {
      iconEl.textContent = isEnabled ? "🗡️" : "🚫";
    }
  }

  function bindButton() {
    const btn = document.getElementById('btn-sword-cursor-toggle');
    if (btn && !btn._swordBound) {
      btn._swordBound = true;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggle();
      });
    }
    updateButtonUI();
  }

  // Expose global controller
  window.swordCursor = {
    isEnabled: () => isEnabled,
    setEnabled: setEnabled,
    toggle: toggle,
    updateUI: updateButtonUI
  };

  // ==========================================
  // SỰ KIỆN CHUỘT
  // ==========================================

  window.addEventListener('mousemove', (e) => {
    if (!isEnabled) return;
    const dx = e.clientX - mouse.x;
    const dy = e.clientY - mouse.y;

    mouse.vx = mouse.vx * 0.35 + dx * 0.65;
    mouse.vy = mouse.vy * 0.35 + dy * 0.65;
    mouse.speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.lastMoveTime = Date.now();
  });

  // Khi click chuột: Bộc phát "Vạn Kiếm Xuất Kích" (nếu đang bật)
  window.addEventListener('click', (e) => {
    if (!isEnabled) return;
    // Bỏ qua nếu click trực tiếp vào nút toggle
    if (e.target.closest && e.target.closest('#btn-sword-cursor-toggle')) return;

    try {
      if (window.cultivationAudio && window.cultivationAudio.sfxEnabled) {
        window.cultivationAudio.playSwordSlash();
      }
    } catch (err) {}

    swords.forEach(sword => sword.burst(e.clientX, e.clientY));
  });

  // Hỗ trợ màn hình cảm ứng
  window.addEventListener('touchmove', (e) => {
    if (!isEnabled) return;
    if (e.touches && e.touches[0]) {
      const touch = e.touches[0];
      mouse.vx = (touch.clientX - mouse.x) * 0.7;
      mouse.vy = (touch.clientY - mouse.y) * 0.7;
      mouse.speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
      mouse.lastMoveTime = Date.now();
    }
  }, { passive: true });

  // ==========================================
  // VÒNG LẶP HOẠT HỌA 60 FPS
  // ==========================================
  function animate(time) {
    if (!isEnabled) {
      // Khi tắt: tạm dừng render để tiết kiệm tài nguyên máy tính
      requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    globalOrbitAngle += ORBIT_SPEED;
    if (globalOrbitAngle > Math.PI * 2) {
      globalOrbitAngle -= Math.PI * 2;
    }

    const timeSinceMove = Date.now() - mouse.lastMoveTime;
    if (timeSinceMove > 50) {
      mouse.speed *= 0.85;
      mouse.vx *= 0.85;
      mouse.vy *= 0.85;
    }

    if (mouse.speed > 1.2) {
      moveFactor = Math.min(1, moveFactor + 0.1);
    } else {
      moveFactor = Math.max(0, moveFactor - 0.05);
    }

    // 1. Cập nhật & Vẽ hạt Linh Khí
    for (let i = qiSparks.length - 1; i >= 0; i--) {
      const p = qiSparks[i];
      if (p.update()) {
        p.draw(ctx);
      } else {
        qiSparks.splice(i, 1);
      }
    }

    // 2. Cập nhật & Vẽ 8 Thanh Phi Kiếm
    swords.forEach(sword => {
      sword.update(time);
      sword.draw(ctx);
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  // Gắn sự kiện nút bấm khi trang sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindButton);
  } else {
    bindButton();
  }

})();
