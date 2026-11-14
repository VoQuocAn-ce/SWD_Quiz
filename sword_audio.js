/**
 * Web Audio & MP3 BGM Controller for Xianxia / Cultivation Sword
 * Phát nhạc nền "Lan Đình Tự (兰亭序) - Châu Kiệt Luân Instrumental"
 * Kèm hệ thống hiệu ứng kiếm khí Web Audio API Synthesizer (100% Offline)
 */

class CultivationAudio {
  constructor() {
    this.ctx = null;
    this.sfxEnabled = true;
    this.bgmEnabled = true; // Default true so user can enjoy Lan Đình Tự right away
    this.bgmVolume = 0.4;
    this.bgmIsPlaying = false;
    this.bgmTitle = "Lan Đình Tự (兰亭序) - Châu Kiệt Luân";

    this.masterGain = null;
    this.sfxGain = null;

    // Load Lan Đình Tự MP3 from 'nhạc nền' folder
    this.bgmSrc = encodeURI('nhạc nền/Châu Kiệt Luân Lan Đình Tự 兰亭序 Instrumental 1.10x.mp3');
    try {
      this.bgmAudio = new Audio(this.bgmSrc);
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = this.bgmVolume;
      this.bgmAudio.preload = 'auto';

      this.bgmAudio.addEventListener('play', () => {
        this.bgmIsPlaying = true;
      });
      this.bgmAudio.addEventListener('pause', () => {
        this.bgmIsPlaying = false;
      });
    } catch (e) {
      console.warn("Could not initialize HTMLAudioElement for BGM:", e);
      this.bgmAudio = null;
    }

    this.loadSettings();
    this.initAudioContext();
  }

  loadSettings() {
    try {
      const sfx = localStorage.getItem('swd_sfx_enabled');
      const bgm = localStorage.getItem('swd_bgm_enabled');
      const vol = localStorage.getItem('swd_bgm_vol');
      if (sfx !== null) this.sfxEnabled = (sfx === 'true');
      if (bgm !== null) this.bgmEnabled = (bgm === 'true');
      if (vol !== null) this.bgmVolume = parseFloat(vol);
      if (this.bgmAudio) {
        this.bgmAudio.volume = this.bgmVolume;
      }
    } catch (e) {
      console.warn("Storage access failed:", e);
    }
  }

  saveSettings() {
    try {
      localStorage.setItem('swd_sfx_enabled', String(this.sfxEnabled));
      localStorage.setItem('swd_bgm_enabled', String(this.bgmEnabled));
      localStorage.setItem('swd_bgm_vol', String(this.bgmVolume));
    } catch (e) {
      console.warn("Storage access failed:", e);
    }
  }

  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
        this.sfxGain.connect(this.masterGain);
      }
    } catch (e) {
      console.warn("Web Audio Context not supported:", e);
    }
  }

  ensureContext() {
    if (!this.ctx) {
      this.initAudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // ==========================================
  // BACKGROUND MUSIC (BGM): LAN ĐÌNH TỰ
  // ==========================================

  startBGM() {
    if (!this.bgmAudio) return;
    this.ensureContext();
    this.bgmAudio.volume = this.bgmVolume;
    const promise = this.bgmAudio.play();
    if (promise !== undefined) {
      promise.then(() => {
        this.bgmIsPlaying = true;
      }).catch(err => {
        console.log("Audio autoplay waiting for user interaction:", err);
      });
    }
  }

  stopBGM() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmIsPlaying = false;
    }
  }

  toggleBGM() {
    this.ensureContext();
    this.bgmEnabled = !this.bgmEnabled;
    this.saveSettings();

    if (this.bgmEnabled) {
      this.startBGM();
    } else {
      this.stopBGM();
    }
    return this.bgmEnabled;
  }

  setBGMVolume(val) {
    this.bgmVolume = Math.max(0, Math.min(1, val));
    if (this.bgmAudio) {
      this.bgmAudio.volume = this.bgmVolume;
    }
    this.saveSettings();
  }

  // ==========================================
  // SOUND EFFECTS (SFX) KIẾM KHÍ & THÍ LUYỆN
  // ==========================================

  toggleSFX() {
    this.sfxEnabled = !this.sfxEnabled;
    this.saveSettings();
    return this.sfxEnabled;
  }

  // Tiếng kiếm khí vút chém (Sword slash)
  playSwordSlash() {
    if (!this.sfxEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(750, t);
    osc.frequency.exponentialRampToValueAtTime(1500, t + 0.05);
    osc.frequency.exponentialRampToValueAtTime(280, t + 0.22);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, t);
    filter.Q.setValueAtTime(7, t);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.22);

    this.playNoise(t, 0.12, 0.1);
  }

  // Tiên âm ngộ đạo (Đáp án đúng)
  playCorrectChime() {
    if (!this.sfxEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.07);

      gain.gain.setValueAtTime(0.001, t + idx * 0.07);
      gain.gain.linearRampToValueAtTime(0.2, t + idx * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.07 + 0.8);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t + idx * 0.07);
      osc.stop(t + idx * 0.07 + 0.8);
    });
  }

  // Tâm ma quấy nhiễu (Đáp án sai)
  playIncorrectSound() {
    if (!this.sfxEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(140, t);
    osc1.frequency.exponentialRampToValueAtTime(85, t + 0.45);

    osc2.frequency.setValueAtTime(133, t);
    osc2.frequency.exponentialRampToValueAtTime(80, t + 0.45);

    gain.gain.setValueAtTime(0.22, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.5);
    osc2.stop(t + 0.5);
  }

  // Khai mở linh thức (Gợi ý)
  playHintSound() {
    if (!this.sfxEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.2);

    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.35);
  }

  // Đột phá cảnh giới (Breakthrough)
  playBreakthroughSound() {
    if (!this.sfxEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    const notes = [293.66, 369.99, 440.00, 587.33, 739.99, 880.00, 1174.66];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = (i % 2 === 0) ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, t + i * 0.08);

      gain.gain.setValueAtTime(0.001, t + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.25, t + i * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.08 + 1.2);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t + i * 0.08);
      osc.stop(t + i * 0.08 + 1.2);
    });
  }

  playNoise(startTime, duration, vol) {
    if (!this.ctx) return;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1200, startTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start(startTime);
    noise.stop(startTime + duration);
  }
}

window.cultivationAudio = new CultivationAudio();

// Auto unlock audio context & start Lan Đình Tự BGM on first interaction anywhere
function unlockAudioOnInteraction() {
  if (window.cultivationAudio) {
    window.cultivationAudio.ensureContext();
    if (window.cultivationAudio.bgmEnabled && !window.cultivationAudio.bgmIsPlaying) {
      window.cultivationAudio.startBGM();
    }
  }
  document.removeEventListener('click', unlockAudioOnInteraction);
  document.removeEventListener('keydown', unlockAudioOnInteraction);
}

document.addEventListener('click', unlockAudioOnInteraction, { once: true });
document.addEventListener('keydown', unlockAudioOnInteraction, { once: true });
