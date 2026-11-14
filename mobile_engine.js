/**
 * VẤN ĐẠO MOBILE ENGINE - Tối ưu hóa trải nghiệm trắc nghiệm trên thiết bị di động
 */

(function () {
  'use strict';

  // State Management
  let currentTab = 'lobby';
  let activeQuizId = 1;
  let activeMode = 'practice'; // 'practice' | 'exam' | 'answers' | 'review'
  let currentList = [];
  let currentIndex = 0;
  let userAnswers = {};
  let flagged = new Set();
  let openedHints = new Set();
  let isSubmitted = false;
  let examTimeRemaining = 60 * 60;
  let timerInterval = null;
  let lastRenderedIndex = -1;
  let compactExplanationMode = localStorage.getItem('swd_compact_explanation') === 'true';

  window.toggleMobileCompactExp = function () {
    compactExplanationMode = !compactExplanationMode;
    localStorage.setItem('swd_compact_explanation', compactExplanationMode ? 'true' : 'false');
    updateMobileCompactExpBtn();
    renderQuestion(currentIndex);
  };

  function updateMobileCompactExpBtn() {
    const btn = document.getElementById('m-btn-toggle-compact-exp');
    if (btn) {
      if (compactExplanationMode) {
        btn.classList.add('active');
        btn.textContent = '⚡ Luận Giải: Gọn';
      } else {
        btn.classList.remove('active');
        btn.textContent = '📜 Luận Giải: Đủ';
      }
    }
  }

  function scrollToQuestionTop() {
    const target = document.querySelector('.m-quiz-header') || document.querySelector('.m-question-card') || document.getElementById('view-quiz');
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = Math.max(0, rect.top + scrollTop - 10);
      try {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      } catch (e) {
        window.scrollTo(0, targetY);
      }
    }
  }

  // Cache DOM Elements
  const tabLobby = document.getElementById('view-lobby');
  const tabQuiz = document.getElementById('view-quiz');
  const tabWrong = document.getElementById('view-wrong');
  const tabProfile = document.getElementById('view-profile');
  const navBtns = document.querySelectorAll('.m-nav-item');

  // Bottom Sheets
  const sheetAction = document.getElementById('sheet-quiz-action');
  const sheetPalette = document.getElementById('sheet-palette');
  const sheetResult = document.getElementById('sheet-result');

  // Realms Definition
  const REALMS = [
    { threshold: 0, title: "Luyện Khí Kỳ", desc: "Mới bước chân vào tiên đạo SWD392" },
    { threshold: 40, title: "Trúc Cơ Kỳ", desc: "Nền tảng kiến trúc vững chắc" },
    { threshold: 60, title: "Kim Đan Kỳ", desc: "Tinh thông COMET & UML Diagrams" },
    { threshold: 75, title: "Nguyên Anh Kỳ", desc: "Kiếm khí tung hoành, vững vàng qua môn" },
    { threshold: 85, title: "Hóa Thần Kỳ", desc: "Cao thủ thiết kế hệ thống phần mềm" },
    { threshold: 95, title: "Độ Kiếp Phi Thăng", desc: "Đạt cảnh giới tối thượng FE SWD392" }
  ];

  function getRealm(percent) {
    let r = REALMS[0];
    for (let i = 0; i < REALMS.length; i++) {
      if (percent >= REALMS[i].threshold) r = REALMS[i];
    }
    return r;
  }

  // ===================================================================
  // 1. TAB SWITCHING
  // ===================================================================
  window.switchTab = function (tabName) {
    currentTab = tabName;

    // Hide all views
    tabLobby.classList.remove('active');
    tabQuiz.classList.remove('active');
    tabWrong.classList.remove('active');
    tabProfile.classList.remove('active');

    // Show target view
    if (tabName === 'lobby') {
      tabLobby.classList.add('active');
      renderLobby();
    } else if (tabName === 'quiz') {
      tabQuiz.classList.add('active');
      if (currentList.length === 0) {
        // If no quiz loaded yet, launch Quiz 1
        launchQuiz(1, 'practice');
      } else {
        renderQuestion(currentIndex);
      }
    } else if (tabName === 'wrong') {
      tabWrong.classList.add('active');
      renderWrongTab();
    } else if (tabName === 'profile') {
      tabProfile.classList.add('active');
      renderProfileTab();
    }

    // Update Bottom Nav
    navBtns.forEach(btn => {
      if (btn.dataset.tab === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update PC Switch Button Link
    const btnGoPc = document.getElementById('m-btn-go-pc');
    if (btnGoPc) {
      if (tabName === 'quiz' && activeQuizId) {
        btnGoPc.href = `quiz.html?quiz=${activeQuizId}&mode=${activeMode}&view=pc`;
      } else {
        btnGoPc.href = 'index.html?view=pc';
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ===================================================================
  // 2. LOBBY VIEW (SẢNH BÍ CẢNH)
  // ===================================================================
  let activeFilter = 'all';
  let searchTerm = '';

  function renderLobby() {
    updateMiniStats();
    renderQuizList();
  }

  function updateMiniStats() {
    // Total Questions
    const elTot = document.getElementById('m-stat-total');
    if (elTot) elTot.textContent = '1322';

    // Wrong Count
    const wrongCount = window.wrongManager ? window.wrongManager.getCount() : 0;
    const elWrong = document.getElementById('m-stat-wrong');
    if (elWrong) elWrong.textContent = wrongCount;

    // Badges in bottom nav
    const navBadges = document.querySelectorAll('.m-nav-badge-wrong');
    navBadges.forEach(b => {
      if (wrongCount > 0) {
        b.style.display = 'block';
        b.textContent = wrongCount;
      } else {
        b.style.display = 'none';
      }
    });

    // Highest Score & Completed
    try {
      const hist = JSON.parse(localStorage.getItem('swd_quiz_history') || '[]');
      let maxPct = 0;
      hist.forEach(h => {
        const pct = Math.round((h.correct / h.total) * 100);
        if (pct > maxPct) maxPct = pct;
      });
      const elScore = document.getElementById('m-stat-score');
      if (elScore) elScore.textContent = maxPct + '%';

      const elTimes = document.getElementById('m-stat-times');
      if (elTimes) elTimes.textContent = hist.length;

      // Update realm badge in header
      const realm = getRealm(maxPct);
      const realmEl = document.getElementById('m-header-realm');
      if (realmEl) realmEl.textContent = realm.title;
    } catch (e) {}
  }

  function renderQuizList() {
    const listEl = document.getElementById('m-quiz-items-container');
    if (!listEl) return;
    listEl.innerHTML = '';

    const catalog = window.QUIZ_CATALOG || [];

    const filtered = catalog.filter(q => {
      // Category filter
      if (activeFilter === 'fe' && !q.title.includes('Exam') && !q.title.includes('FE')) return false;
      if (activeFilter === 'sect' && q.id > 10) return false;
      if (activeFilter === 'wrong') {
        const hasWrong = window.wrongManager && window.wrongManager.getWrongList().some(w => String(w.quizId) === String(q.id));
        if (!hasWrong) return false;
      }

      // Search term
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const matchTitle = q.title.toLowerCase().includes(term);
        const matchDesc = q.desc.toLowerCase().includes(term);
        const matchId = ('quiz ' + q.id).includes(term) || ('#' + q.id).includes(term);
        if (!matchTitle && !matchDesc && !matchId) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 30px 10px; color: #5a7b7e;">
          <div style="font-size: 2rem; margin-bottom: 6px;">🗡️</div>
          <div style="font-weight: 700;">Không tìm thấy bí cảnh phù hợp!</div>
          <div style="font-size: 0.8rem; margin-top: 4px;">Thử xóa bớt từ khóa tìm kiếm nhé Đạo hữu.</div>
        </div>
      `;
      return;
    }

    filtered.forEach(q => {
      const item = document.createElement('div');
      item.className = 'm-quiz-item';

      let badgeClass = 'teal';
      if (q.badge.includes('ĐỀ THI') || q.badge.includes('FE')) badgeClass = 'orange';
      if (q.badge.includes('BLOCK') || q.id > 16) badgeClass = 'purple';

      item.innerHTML = `
        <div class="m-quiz-item-left">
          <span class="m-quiz-item-badge ${badgeClass}">${q.badge}</span>
          <div class="m-quiz-item-title">${q.title}</div>
          <div class="m-quiz-item-meta">
            <span>📖 ${q.questions} câu</span>
            <span>🌐 ${q.examType}</span>
          </div>
        </div>
        <div class="m-quiz-item-btn">
          <span>Vào Thi</span> ❯
        </div>
      `;

      item.addEventListener('click', () => {
        openQuizActionSheet(q);
      });

      listEl.appendChild(item);
    });
  }

  // ===================================================================
  // 3. ACTION SHEET (CHỌN CHẾ ĐỘ THÍ LUYỆN)
  // ===================================================================
  let selectedQuizData = null;

  function openQuizActionSheet(q) {
    selectedQuizData = q;
    const titleEl = document.getElementById('sheet-quiz-title');
    const descEl = document.getElementById('sheet-quiz-desc');
    if (titleEl) titleEl.textContent = q.title;
    if (descEl) descEl.textContent = q.desc;

    sheetAction.classList.add('show');
  }

  window.closeSheet = function (id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('show');
  };

  window.startMobileQuiz = function (mode) {
    if (!selectedQuizData) return;
    closeSheet('sheet-quiz-action');
    launchQuiz(selectedQuizData.id, mode);
  };

  // ===================================================================
  // 4. MOBILE QUIZ ENGINE & PLAYER
  // ===================================================================
  function launchQuiz(quizId, mode) {
    activeQuizId = Number(quizId);
    activeMode = mode;
    isSubmitted = false;
    userAnswers = {};
    flagged.clear();
    openedHints.clear();
    currentIndex = 0;

    // Load data from window['QUIZ' + quizId + '_DATA']
    const dataVar = window['QUIZ' + activeQuizId + '_DATA'];
    if (!dataVar || !Array.isArray(dataVar)) {
      alert(`Đang tải dữ liệu Quiz ${activeQuizId}... Vui lòng đợi hoặc thử lại!`);
      return;
    }

    currentList = dataVar;

    // Review mode: filter wrong questions
    if (activeMode === 'review') {
      if (window.wrongManager) {
        const wrongList = window.wrongManager.getWrongList();
        const mapAll = {};
        for (let i = 1; i <= 22; i++) {
          const arr = window['QUIZ' + i + '_DATA'];
          if (arr) arr.forEach(q => { mapAll[q.id] = q; });
        }
        const filtered = wrongList.map(w => mapAll[w.id]).filter(Boolean);
        if (filtered.length === 0) {
          alert("Tuyệt vời! Hiện không còn câu hỏi nào trong Tâm Ma Lục!");
          switchTab('lobby');
          return;
        }
        currentList = filtered;
      }
    }

    // Set Timer for Exam Mode
    if (timerInterval) clearInterval(timerInterval);
    const timerPill = document.getElementById('m-quiz-timer');
    if (activeMode === 'exam') {
      examTimeRemaining = 60 * 60;
      if (timerPill) timerPill.style.display = 'inline-block';
      startExamTimer();
    } else {
      if (timerPill) timerPill.style.display = 'none';
    }

    // Update Mode Pill Text
    const modePill = document.getElementById('m-quiz-mode-pill');
    if (modePill) {
      if (activeMode === 'practice') modePill.textContent = '🗡️ Tự Do Ngộ Đạo';
      else if (activeMode === 'exam') modePill.textContent = '⏳ Thi Thử 60p';
      else if (activeMode === 'answers') modePill.textContent = '👁️ Tra Cứu Bí Kíp';
      else if (activeMode === 'review') modePill.textContent = '👺 Ôn Tâm Ma Lục';
    }

    // Update Active Tab in bottom nav
    const navQuizBtn = document.querySelector('[data-tab="quiz"]');
    if (navQuizBtn) {
      navQuizBtn.querySelector('.m-nav-label').textContent = `Quiz ${activeQuizId}`;
    }

    switchTab('quiz');
    renderQuestion(0);
  }

  function startExamTimer() {
    timerInterval = setInterval(() => {
      examTimeRemaining--;
      if (examTimeRemaining <= 0) {
        clearInterval(timerInterval);
        alert("Hết giờ làm bài! Tông môn tự động thu hồi bài thi.");
        finishMobileQuiz();
        return;
      }
      const m = Math.floor(examTimeRemaining / 60).toString().padStart(2, '0');
      const s = (examTimeRemaining % 60).toString().padStart(2, '0');
      const timerPill = document.getElementById('m-quiz-timer');
      if (timerPill) timerPill.textContent = `⏱️ ${m}:${s}`;
    }, 1000);
  }

  function renderQuestion(index) {
    if (index < 0 || index >= currentList.length) return;
    const isNewQuestion = (lastRenderedIndex !== -1 && lastRenderedIndex !== index);
    currentIndex = index;
    lastRenderedIndex = index;
    const q = currentList[currentIndex];

    // Tự động cuộn màn hình lên đầu phần câu hỏi
    if (isNewQuestion) {
      scrollToQuestionTop();
    }

    // Update Index Display
    const idxEl = document.getElementById('m-q-index');
    if (idxEl) {
      idxEl.innerHTML = `<span>⚔️</span> Câu ${currentIndex + 1} / ${currentList.length} <small style="color: #6a9296;">(#Q${q.id})</small>`;
    }

    // Update Topic
    const topicEl = document.getElementById('m-q-topic');
    if (topicEl) topicEl.textContent = q.topic || 'Software Architecture';

    // Update Progress Bar
    const progressFill = document.getElementById('m-progress-fill');
    if (progressFill) {
      const pct = Math.round(((currentIndex + 1) / currentList.length) * 100);
      progressFill.style.width = pct + '%';
    }

    // Flag button state
    const flagBtn = document.getElementById('m-btn-flag');
    if (flagBtn) {
      if (flagged.has(q.id)) {
        flagBtn.classList.add('active');
        flagBtn.textContent = '🚩 Đã Lưu Ý';
      } else {
        flagBtn.classList.remove('active');
        flagBtn.textContent = '🚩 Lưu Ý';
      }
    }

    // Save to Wrong state
    const wrongBtn = document.getElementById('m-btn-save-wrong');
    if (wrongBtn) {
      const isWrong = window.wrongManager && window.wrongManager.isWrong(q.id);
      if (isWrong) {
        wrongBtn.classList.add('active');
        wrongBtn.textContent = '👺 Trong Tâm Ma';
      } else {
        wrongBtn.classList.remove('active');
        wrongBtn.textContent = '👺 Lưu Tâm Ma';
      }
    }

    // Original Image
    const origBox = document.getElementById('m-orig-box');
    const origImg = document.getElementById('m-orig-img');
    const btnOrig = document.getElementById('m-btn-orig');
    if (origBox && origImg) {
      origBox.classList.remove('show');
      if (q.image) {
        origImg.src = q.image;
        if (btnOrig) btnOrig.style.display = 'inline-flex';
      } else {
        if (btnOrig) btnOrig.style.display = 'none';
      }
    }

    // Question Text
    const qTextEl = document.getElementById('m-question-text');
    if (qTextEl) qTextEl.textContent = q.question;

    // Render Options List
    renderOptions(q);

    // Render Hint
    const hintText = document.getElementById('m-hint-text');
    const hintContent = document.getElementById('m-hint-content');
    if (hintText && hintContent) {
      hintText.textContent = q.hint || "Hãy tập trung vào từ khóa cốt lõi của câu hỏi để suy luận.";
      if (activeMode === 'answers' || openedHints.has(q.id)) {
        hintContent.classList.add('show');
      } else {
        hintContent.classList.remove('show');
      }
    }

    // Render Explanation Box
    renderExplanation(q);

    // Update Navigation buttons
    const btnPrev = document.getElementById('m-btn-prev');
    const btnNext = document.getElementById('m-btn-next');
    if (btnPrev) btnPrev.style.opacity = currentIndex === 0 ? '0.4' : '1';
    if (btnNext) {
      if (currentIndex === currentList.length - 1) {
        btnNext.textContent = 'Nộp Bài ⚔️';
        btnNext.className = 'm-btn-nav submit-btn';
      } else {
        btnNext.textContent = 'Tiếp ❯';
        btnNext.className = 'm-btn-nav primary';
      }
    }

    // Update Palette button label
    const btnPal = document.getElementById('m-btn-palette-open');
    if (btnPal) btnPal.textContent = `🧭 ${currentIndex + 1}/${currentList.length}`;
  }

  function renderOptions(q) {
    const container = document.getElementById('m-options-container');
    if (!container) return;
    container.innerHTML = '';

    const isAnswersMode = activeMode === 'answers';
    const selected = isAnswersMode ? q.answer : userAnswers[q.id];
    const hasAnswered = selected !== undefined;
    const reveal = isAnswersMode || (activeMode === 'practice' && hasAnswered) || (activeMode === 'review' && hasAnswered) || isSubmitted;

    q.options.forEach(opt => {
      const item = document.createElement('div');
      item.className = 'm-option-item';

      let badgeHtml = '';
      let inlineExpHtml = '';

      if (reveal) {
        item.classList.add('disabled');
        if (opt.key === q.answer) {
          item.classList.add('correct');
          if (hasAnswered && opt.key === selected) {
            badgeHtml = `<span class="m-opt-badge correct">✓ Bạn chọn đúng</span>`;
          } else {
            badgeHtml = `<span class="m-opt-badge correct">✓ Đáp án đúng</span>`;
          }

          // Hiển thị giải thích gọn ngay trong khung đáp án đúng khi bật option
          if (compactExplanationMode) {
            const correctBreakdown = q.explanation && q.explanation.breakdown ? q.explanation.breakdown[q.answer] : '';
            const summaryText = q.explanation ? q.explanation.summary : '';
            const reasonText = correctBreakdown || summaryText || "Phương án này hoàn toàn chính xác.";
            inlineExpHtml = `
              <div class="m-inline-correct-exp">
                <div class="m-inline-exp-title">
                  <span>💡</span> <strong>Luận giải câu đúng:</strong>
                </div>
                <div class="m-inline-exp-text">${reasonText}</div>
              </div>
            `;
          }
        } else if (opt.key === selected) {
          item.classList.add('wrong');
          badgeHtml = `<span class="m-opt-badge wrong">✗ Bạn đã chọn</span>`;
        }
      } else if (hasAnswered && opt.key === selected) {
        item.classList.add('selected');
        badgeHtml = `<span class="m-opt-badge selected">🗡️ Đã chọn</span>`;
      }

      item.innerHTML = `
        <div class="m-option-key">${opt.key}</div>
        <div class="m-option-body-wrap">
          <div class="m-option-main-row">
            <div class="m-option-text">${opt.text}</div>
            ${badgeHtml}
          </div>
          ${inlineExpHtml}
        </div>
      `;

      if (activeMode !== 'answers' && (!reveal || (activeMode === 'exam' && !isSubmitted))) {
        item.addEventListener('click', () => {
          handleSelectOption(q, opt.key);
        });
      }

      container.appendChild(item);
    });
  }

  function handleSelectOption(q, key) {
    if ((activeMode === 'practice' || activeMode === 'review') && userAnswers[q.id] !== undefined) {
      return; // Already answered
    }

    userAnswers[q.id] = key;

    // Haptic vibration feedback on mobile
    if (navigator.vibrate) {
      navigator.vibrate(25);
    }

    // Audio SFX
    if (window.cultivationAudio) {
      window.cultivationAudio.playSwordSlash();
    }

    const isCorrect = key === q.answer;

    if (activeMode === 'practice' || activeMode === 'review') {
      if (isCorrect) {
        if (window.cultivationAudio) window.cultivationAudio.playCorrectChime();
        if (activeMode === 'review' && window.wrongManager) {
          window.wrongManager.remove(q.id);
        }
      } else {
        if (window.cultivationAudio) window.cultivationAudio.playIncorrectSound();
        if (window.wrongManager) {
          window.wrongManager.add(q.id, key, q.answer, q.question, activeQuizId);
        }
      }
    }

    renderQuestion(currentIndex);
  }

  function renderExplanation(q) {
    const expBox = document.getElementById('m-explanation-box');
    if (!expBox) return;

    const selected = userAnswers[q.id];
    const shouldShow = ((activeMode === 'practice' || activeMode === 'review') && selected !== undefined) || activeMode === 'answers' || isSubmitted;

    if (!shouldShow || compactExplanationMode) {
      expBox.classList.remove('show');
      return;
    }

    expBox.classList.add('show');

    const resultTag = document.getElementById('m-exp-result-tag');
    if (resultTag) {
      if (selected === q.answer) {
        resultTag.className = 'm-exp-tag correct';
        resultTag.textContent = '✓ Lĩnh Ngộ Chính Xác';
      } else {
        resultTag.className = 'm-exp-tag wrong';
        resultTag.textContent = `✗ Chọn ${selected || 'chưa'} - Đáp án đúng: ${q.answer}`;
      }
    }

    const exp = q.explanation || {};
    const sumEl = document.getElementById('m-exp-summary');
    if (sumEl) sumEl.textContent = exp.summary || 'Không có giải thích tóm tắt.';

    const coreEl = document.getElementById('m-exp-core');
    if (coreEl) coreEl.textContent = exp.coreConcept || 'Khái niệm kiến trúc phần mềm cốt lõi.';

    const whyEl = document.getElementById('m-exp-why-correct');
    if (whyEl) whyEl.textContent = exp.whyCorrect || '';

    const wrongWrap = document.getElementById('m-exp-wrong-breakdown');
    if (wrongWrap) {
      wrongWrap.innerHTML = '';
      if (exp.wrongOptions && typeof exp.wrongOptions === 'object') {
        Object.keys(exp.wrongOptions).forEach(k => {
          const div = document.createElement('div');
          div.style.marginBottom = '4px';
          div.innerHTML = `<strong>${k}:</strong> ${exp.wrongOptions[k]}`;
          wrongWrap.appendChild(div);
        });
      }
    }
  }

  // Navigation handlers
  window.mobilePrevQuestion = function () {
    if (currentIndex > 0) {
      renderQuestion(currentIndex - 1);
      scrollToQuestionTop();
    }
  };

  window.mobileNextQuestion = function () {
    if (currentIndex < currentList.length - 1) {
      renderQuestion(currentIndex + 1);
      scrollToQuestionTop();
    } else {
      if (confirm("Đạo hữu có muốn nộp bài thí luyện?")) {
        finishMobileQuiz();
      }
    }
  };

  window.toggleMobileHint = function () {
    const q = currentList[currentIndex];
    if (!q) return;
    const content = document.getElementById('m-hint-content');
    if (!content) return;

    if (openedHints.has(q.id)) {
      openedHints.delete(q.id);
      content.classList.remove('show');
    } else {
      openedHints.add(q.id);
      content.classList.add('show');
      if (window.cultivationAudio) window.cultivationAudio.playHintSound();
    }
  };

  window.toggleMobileFlag = function () {
    const q = currentList[currentIndex];
    if (!q) return;
    if (flagged.has(q.id)) flagged.delete(q.id);
    else flagged.add(q.id);
    renderQuestion(currentIndex);
  };

  window.toggleMobileSaveWrong = function () {
    const q = currentList[currentIndex];
    if (!q || !window.wrongManager) return;
    if (window.wrongManager.isWrong(q.id)) {
      window.wrongManager.remove(q.id);
      alert(`Đã xóa câu #${q.id} khỏi Tâm Ma Lục!`);
    } else {
      window.wrongManager.add(q.id, userAnswers[q.id] || 'Chưa làm', q.answer, q.question, activeQuizId);
      alert(`Đã lưu câu #${q.id} vào Tâm Ma Lục!`);
    }
    renderQuestion(currentIndex);
  };

  window.toggleMobileOrig = function () {
    const origBox = document.getElementById('m-orig-box');
    if (origBox) origBox.classList.toggle('show');
  };

  // ===================================================================
  // 5. BOTTOM SHEET: BÁT QUÁI TRẬN ĐỒ (QUESTION PALETTE)
  // ===================================================================
  window.openPaletteSheet = function () {
    const grid = document.getElementById('m-palette-grid');
    if (!grid) return;
    grid.innerHTML = '';

    currentList.forEach((q, idx) => {
      const btn = document.createElement('div');
      btn.className = 'm-pal-btn';
      btn.textContent = idx + 1;

      if (idx === currentIndex) btn.classList.add('current');

      const ans = userAnswers[q.id];
      if (activeMode === 'answers') {
        btn.classList.add('correct');
      } else if (ans !== undefined) {
        if (activeMode === 'practice' || activeMode === 'review' || isSubmitted) {
          if (ans === q.answer) btn.classList.add('correct');
          else btn.classList.add('wrong');
        } else {
          btn.classList.add('answered');
        }
      }

      if (flagged.has(q.id)) {
        btn.classList.add('flagged');
      }

      btn.addEventListener('click', () => {
        closeSheet('sheet-palette');
        renderQuestion(idx);
        scrollToQuestionTop();
      });

      grid.appendChild(btn);
    });

    sheetPalette.classList.add('show');
  };

  // Finish Quiz
  function finishMobileQuiz() {
    isSubmitted = true;
    if (timerInterval) clearInterval(timerInterval);

    let correct = 0;
    currentList.forEach(q => {
      if (userAnswers[q.id] === q.answer) correct++;
      else {
        if (window.wrongManager) {
          window.wrongManager.add(q.id, userAnswers[q.id] || 'Chưa làm', q.answer, q.question, activeQuizId);
        }
      }
    });

    const total = currentList.length;
    const pct = Math.round((correct / total) * 100);
    const realm = getRealm(pct);

    // Save history
    try {
      const hist = JSON.parse(localStorage.getItem('swd_quiz_history') || '[]');
      hist.push({
        date: new Date().toLocaleString('vi-VN'),
        quizId: activeQuizId,
        correct: correct,
        total: total,
        realm: realm.title
      });
      localStorage.setItem('swd_quiz_history', JSON.stringify(hist));
    } catch (e) {}

    // Show Result Sheet
    const scoreVal = document.getElementById('m-result-score-val');
    const scoreText = document.getElementById('m-result-score-text');
    const realmTitle = document.getElementById('m-result-realm-title');
    const realmDesc = document.getElementById('m-result-realm-desc');

    if (scoreVal) scoreVal.textContent = pct + '%';
    if (scoreText) scoreText.textContent = `Đúng ${correct} / ${total} câu`;
    if (realmTitle) realmTitle.textContent = realm.title;
    if (realmDesc) realmDesc.textContent = realm.desc;

    if (window.cultivationAudio) {
      window.cultivationAudio.playBreakthroughSound();
    }

    sheetResult.classList.add('show');
  }

  // ===================================================================
  // 6. TAB 3: TÂM MA LỤC (WRONG QUESTIONS)
  // ===================================================================
  function renderWrongTab() {
    const listEl = document.getElementById('m-wrong-cards-list');
    const countEl = document.getElementById('m-wrong-tab-count');
    if (!listEl) return;
    listEl.innerHTML = '';

    const wrongList = window.wrongManager ? window.wrongManager.getWrongList() : [];
    if (countEl) countEl.textContent = `${wrongList.length} câu`;

    if (wrongList.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: #5a7b7e;">
          <div style="font-size: 2.2rem; margin-bottom: 6px;">✨</div>
          <div style="font-weight: 800; font-size: 1.05rem; color: #16a085;">Tâm Thức Thanh Tịnh!</div>
          <div style="font-size: 0.85rem; margin-top: 6px;">Đạo hữu chưa làm sai câu hỏi nào, hoặc đã hóa giải toàn bộ tâm ma.</div>
        </div>
      `;
      return;
    }

    // Build data map
    const mapAll = {};
    for (let i = 1; i <= 22; i++) {
      const arr = window['QUIZ' + i + '_DATA'];
      if (arr) arr.forEach(q => { mapAll[q.id] = q; });
    }

    wrongList.forEach(w => {
      const q = mapAll[w.id];
      const card = document.createElement('div');
      card.className = 'm-wrong-card';

      const qText = q ? q.question : (w.questionText || `Câu hỏi #${w.id}`);
      const correctAns = q ? q.answer : (w.correctAnswer || '?');
      const yourAns = w.yourAnswer || 'Chưa rõ';
      const summary = q && q.explanation ? q.explanation.summary : '';

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-size: 0.76rem; color: #7f8c8d; margin-bottom: 4px;">
          <span style="font-weight: 800; color: #c0392b;">Tầng #${w.id} (Quiz ${w.quizId || '1'})</span>
          <span>Lần sai: ${w.timesWrong || 1}</span>
        </div>
        <div class="m-wrong-q-title">${qText}</div>
        <div class="m-wrong-choices">
          <span style="color: #c0392b; font-weight: 700;">✗ Đã chọn: ${yourAns}</span> | 
          <span style="color: #27ae60; font-weight: 700;">✓ Đáp án: ${correctAns}</span>
        </div>
        ${summary ? `<div style="font-size: 0.82rem; background: #f0faf9; padding: 6px 10px; border-radius: 8px; color: #12575e; margin-bottom: 8px;"><strong>Tâm pháp:</strong> ${summary}</div>` : ''}
        <div style="display: flex; justify-content: flex-end;">
          <button class="m-btn-mini" style="background: #e8f8f5; border-color: #27ae60; color: #16a085;" onclick="window.removeWrongMobile(${w.id})">
            ✓ Đã Hiểu (Xóa)
          </button>
        </div>
      `;

      listEl.appendChild(card);
    });
  }

  window.removeWrongMobile = function (id) {
    if (window.wrongManager) {
      window.wrongManager.remove(id);
      renderWrongTab();
      updateMiniStats();
    }
  };

  window.clearAllWrongMobile = function () {
    if (confirm("Đạo hữu có chắc chắn muốn làm mới toàn bộ kho câu sai?")) {
      if (window.wrongManager) {
        window.wrongManager.clearAll();
        renderWrongTab();
        updateMiniStats();
      }
    }
  };

  window.startWrongReviewMobile = function () {
    launchQuiz(1, 'review');
  };

  // ===================================================================
  // 7. TAB 4: TU VI & CÀI ĐẶT
  // ===================================================================
  function renderProfileTab() {
    try {
      const hist = JSON.parse(localStorage.getItem('swd_quiz_history') || '[]');
      let maxPct = 0;
      hist.forEach(h => {
        const pct = Math.round((h.correct / h.total) * 100);
        if (pct > maxPct) maxPct = pct;
      });
      const realm = getRealm(maxPct);
      const nameEl = document.getElementById('m-profile-realm-name');
      const descEl = document.getElementById('m-profile-realm-desc');
      if (nameEl) nameEl.textContent = realm.title;
      if (descEl) descEl.textContent = realm.desc;

      const pScore = document.getElementById('m-profile-highest-score');
      if (pScore) pScore.textContent = maxPct + '%';

      const pTimes = document.getElementById('m-profile-times');
      if (pTimes) pTimes.textContent = hist.length;
    } catch (e) {}
  }

  // Audio Switch Handlers
  window.toggleMobileBgm = function (cb) {
    if (window.cultivationAudio) {
      if (cb.checked) {
        window.cultivationAudio.playBgm();
      } else {
        window.cultivationAudio.pauseBgm();
      }
    }
  };

  window.toggleMobileSfx = function (cb) {
    if (window.cultivationAudio) {
      window.cultivationAudio.sfxMuted = !cb.checked;
    }
  };

  // ===================================================================
  // 8. INITIALIZATION & URL PARAMS
  // ===================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // Search input listener
    const searchInput = document.getElementById('m-search-input');
    const searchClear = document.getElementById('m-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.trim();
        if (searchClear) searchClear.style.display = searchTerm ? 'block' : 'none';
        renderQuizList();
      });
    }

    if (searchClear && searchInput) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchTerm = '';
        searchClear.style.display = 'none';
        renderQuizList();
      });
    }

    // Filter chips listeners
    const chips = document.querySelectorAll('.m-chip-btn');
    chips.forEach(c => {
      c.addEventListener('click', () => {
        chips.forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        activeFilter = c.dataset.filter;
        renderQuizList();
      });
    });

    updateMobileCompactExpBtn();

    // Check URL Parameters
    const params = new URLSearchParams(window.location.search);
    const paramQuiz = params.get('quiz');
    const paramMode = params.get('mode') || 'practice';

    if (paramQuiz) {
      launchQuiz(Number(paramQuiz), paramMode);
    } else {
      switchTab('lobby');
    }
  });

})();
