/**
 * TÂM MA LỤC - Quản lý lưu trữ và ôn tập các câu hỏi làm sai (Wrong Questions Manager)
 * Lưu trữ bền vững trong LocalStorage, hỗ trợ tra cứu, ôn luyện và xóa câu đã nắm rõ.
 */
class WrongQuestionsManager {
  constructor() {
    this.STORAGE_KEY = 'swd_wrong_questions_detailed';
    this.LEGACY_KEY = 'swd_wrong_questions';
    this.migrateLegacyData();
  }

  // Migrate older array format [1, 2, 3] to detailed object format
  migrateLegacyData() {
    try {
      const legacy = localStorage.getItem(this.LEGACY_KEY);
      const detailed = localStorage.getItem(this.STORAGE_KEY);
      if (legacy && !detailed) {
        const ids = JSON.parse(legacy);
        if (Array.isArray(ids)) {
          const newMap = {};
          ids.forEach(id => {
            newMap[id] = {
              id: Number(id),
              quizId: '1',
              addedAt: new Date().toLocaleDateString('vi-VN'),
              timesWrong: 1
            };
          });
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newMap));
        }
      }
    } catch (e) {
      console.warn("Migration failed:", e);
    }
  }

  // Get raw map from storage
  getMap() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.warn("Read failed:", e);
      return {};
    }
  }

  // Save map to storage and sync legacy ID array
  saveMap(map) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(map));
      const ids = Object.keys(map).map(k => Number(k));
      localStorage.setItem(this.LEGACY_KEY, JSON.stringify(ids));
      window.dispatchEvent(new CustomEvent('swd_wrong_updated', { detail: { count: ids.length } }));
    } catch (e) {
      console.warn("Save failed:", e);
    }
  }

  // Get all wrong questions as array
  getAll() {
    const map = this.getMap();
    return Object.values(map);
  }

  // Get all question IDs
  getIds() {
    return Object.keys(this.getMap()).map(k => Number(k));
  }

  // Check if a question is currently in the wrong list
  isWrong(qid) {
    const map = this.getMap();
    return !!map[qid];
  }

  // Get total count of wrong questions
  getCount() {
    return Object.keys(this.getMap()).length;
  }

  // Add or update a wrong question
  add(qid, yourAnswer = '', correctAnswer = '', questionText = '', quizId = '1') {
    const map = this.getMap();
    const existing = map[qid];
    const times = existing ? (existing.timesWrong || 1) + 1 : 1;

    map[qid] = {
      id: Number(qid),
      quizId: String(quizId),
      yourAnswer: yourAnswer || (existing ? existing.yourAnswer : ''),
      correctAnswer: correctAnswer || (existing ? existing.correctAnswer : ''),
      questionText: questionText || (existing ? existing.questionText : ''),
      addedAt: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      timesWrong: times
    };

    this.saveMap(map);
    return true;
  }

  // Remove a question when user has mastered it
  remove(qid) {
    const map = this.getMap();
    if (map[qid]) {
      delete map[qid];
      this.saveMap(map);
      return true;
    }
    return false;
  }

  // Clear all saved wrong questions
  clearAll() {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.LEGACY_KEY);
    window.dispatchEvent(new CustomEvent('swd_wrong_updated', { detail: { count: 0 } }));
  }

  // Show a cultivation toast notification
  showToast(message, type = 'success') {
    let container = document.getElementById('cultivation-toast-box');
    if (!container) {
      container = document.createElement('div');
      container.id = 'cultivation-toast-box';
      container.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    toast.style.cssText = `
      background: ${isSuccess ? 'linear-gradient(135deg, #12575e, #1f7d85)' : 'linear-gradient(135deg, #7b1d12, #a82e22)'};
      color: #fff;
      border: 1.5px solid ${isSuccess ? '#7fe5ea' : '#f5a69b'};
      border-radius: 12px;
      padding: 12px 20px;
      font-size: 0.92rem;
      font-weight: 700;
      box-shadow: 0 8px 24px rgba(0,0,0,0.25);
      display: flex;
      align-items: center;
      gap: 10px;
      animation: toastIn 0.3s ease;
      pointer-events: auto;
    `;
    toast.innerHTML = `<span>${isSuccess ? '🗡️' : '👹'}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
}

window.wrongManager = new WrongQuestionsManager();
