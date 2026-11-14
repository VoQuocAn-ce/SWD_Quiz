/**
 * SWD392 Quiz Engine - Tu Tiên Kiếm (Cultivation Sword)
 * Tích hợp Tâm Ma Lục (Lưu trữ và ôn tập câu sai) & Sửa lỗi hiển thị font
 */

(function () {
  'use strict';

  // Parse URL Parameters
  const params = new URLSearchParams(window.location.search);
  const quizId = params.get('quiz') || '1';
  const mode = params.get('mode') || 'practice'; // 'practice' or 'exam' or 'review'
  const part = params.get('part') || 'all'; // '1', '2', '3', 'all'

  let allQuestions = [];
  let currentList = [];
  let currentIndex = 0;
  const userAnswers = {}; // { questionId: selectedKey }
  const flagged = new Set();
  const openedHints = new Set();
  let examTimeRemaining = 60 * 60; // 60 mins default
  let timerInterval = null;
  let isSubmitted = false;
  let lastRenderedIndex = -1;

  // Tự động cuộn màn hình lên đầu phần câu hỏi khi đổi sang câu khác
  function scrollToQuestionTop() {
    const target = document.querySelector('.question-pane') || document.getElementById('q-index-display');
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = Math.max(0, rect.top + scrollTop - 12);
      try {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      } catch (e) {
        window.scrollTo(0, targetY);
      }
    }
  }

  // Cultivation Realms
  const REALMS = [
    { threshold: 0, title: "Luyện Khí Kỳ", desc: "Sơ nhập tiên đạo, tâm đắc còn nông cạn." },
    { threshold: 25, title: "Trúc Cơ Kỳ", desc: "Đạo cơ vững chắc, lĩnh ngộ kiến trúc cơ bản." },
    { threshold: 50, title: "Kim Đan Kỳ", desc: "Kim đan đại thành, tinh thông mẫu thiết kế GoF & COMET." },
    { threshold: 75, title: "Nguyên Anh Kỳ", desc: "Nguyên anh xuất khiếu, nắm rõ phân tầng và điều phối hệ thống." },
    { threshold: 90, title: "Hóa Thần Phi Thăng", desc: "Đại Đạo Chí Tôn, dung hợp hoàn mỹ kiến trúc phần mềm!" }
  ];

  function getRealm(percentage) {
    let current = REALMS[0];
    for (const r of REALMS) {
      if (percentage >= r.threshold) {
        current = r;
      }
    }
    return current;
  }

  // Quiz Metadata
  const QUIZ_METADATA = {
    '1': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 1', subtitle: 'Software Architecture & Design (COMET & UML)' },
    '2': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 2', subtitle: 'Đề Thi Summer 2025 Final Exam (SU25 - FE4148)' },
    '3': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 3', subtitle: 'Software Design Concepts & Architecture Principles' },
    '4': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 4', subtitle: 'Requirements Capture, Use Cases & Structural Design' },
    '5': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 5', subtitle: 'Architecture Modeling & Design Concepts' },
    '6': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 6', subtitle: 'Structural & Behavioral Modeling' },
    '7': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 7', subtitle: 'Software Design Patterns & SPL' },
    '8': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 8', subtitle: 'Đề Thi Spring 2025 Final Exam (SP25 - FE3635)' },
    '9': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 9', subtitle: 'Subsystem & Component-Based Design' },
    '10': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 10', subtitle: 'Dynamic Interaction & Statecharts' },
    '11': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 11', subtitle: 'Đề Thi Fall 2024 Final Exam (FA24 - FE3001)' },
    '12': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 12', subtitle: 'Đề Thi Summer 2024 Final Exam (SU24 - FE2316)' },
    '13': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 13', subtitle: 'Đề Thi Spring 2024 Final Exam (SP24 - FE1619)' },
    '14': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 14', subtitle: 'Đề Thi Fall 2024 Block 5 Final Exam (FA24 - FE3238)' },
    '15': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 15', subtitle: 'Đề Thi Lại Spring 2024 (SP24 - RE1692)' },
    '16': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 16', subtitle: 'Đề Thi Lại Summer 2024 (SU24 - RE2471)' },
    '17': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 17', subtitle: 'Đề Thi Fall 2022 Final Exam (FA22 - FE165)' },
    '18': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 18', subtitle: 'Đề Thi Lại Fall 2023 (FA23 - RE1142)' },
    '19': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 19', subtitle: 'Đề Thi Fall 2023 Final Exam (FA23 - FE1069)' },
    '20': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 20', subtitle: 'Đề Thi Summer 2023 Final Exam (SU23 - FE412)' },
    '21': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 21', subtitle: 'Đề Thi Spring 2023 Final Exam (SP23 - FE399)' },
    '22': { title: 'THÍ LUYỆN BÍ CẢNH: QUIZ 22', subtitle: 'Đề Thi Summer 2023 Block 10W (SU23 - FE355)' }
  };

  // Initialize Data
  function initData() {
    const dataKey = 'QUIZ' + quizId + '_DATA';
    const targetData = window[dataKey] || window.QUIZ1_DATA;
    if (targetData && Array.isArray(targetData)) {
      allQuestions = targetData;
    } else {
      console.error("Quiz data not loaded for Quiz " + quizId);
      return;
    }

    // Update Header Title
    const titleEl = document.getElementById('quiz-header-title');
    const meta = QUIZ_METADATA[quizId] || { title: `THÍ LUYỆN BÍ CẢNH: QUIZ ${quizId}`, subtitle: 'Kiến Trúc & Thiết Kế Phần Mềm SWD392' };
    if (titleEl) {
      titleEl.textContent = meta.title;
      if (titleEl.nextElementSibling) {
        titleEl.nextElementSibling.textContent = meta.subtitle;
      }
    }

    // Filter by Part or Review Mode
    if (mode === 'review') {
      const wrongIds = window.wrongManager ? window.wrongManager.getIds() : [];
      if (wrongIds.length > 0) {
        currentList = allQuestions.filter(q => wrongIds.includes(q.id));
      } else {
        alert("Hiện tại chưa có câu hỏi nào trong Tâm Ma Lục (Danh sách câu sai)! Chuyển về làm toàn bộ đề.");
        currentList = allQuestions;
      }
    } else if (part === '1') {
      currentList = allQuestions.slice(0, 20); // 1-20
    } else if (part === '2') {
      currentList = allQuestions.slice(20, 40); // 21-40
    } else if (part === '3') {
      currentList = allQuestions.slice(40, 60); // 41-60
    } else {
      currentList = allQuestions; // All 60
    }

    if (currentList.length === 0) {
      currentList = allQuestions;
    }

    // Show Review Mode Banner if applicable
    const reviewBanner = document.getElementById('review-mode-banner');
    if (reviewBanner) {
      if (mode === 'review') {
        reviewBanner.style.display = 'flex';
        document.getElementById('review-count-text').textContent = `Đang ôn tập ${currentList.length} câu đã từng làm sai`;
      } else if (mode === 'answers') {
        reviewBanner.style.display = 'flex';
        reviewBanner.style.background = 'linear-gradient(135deg, #16a085, #0e6251)';
        reviewBanner.style.borderColor = '#a3e4d7';
        document.getElementById('review-count-text').innerHTML = `<strong>📖 BÍ KÍP TRA CỨU:</strong> Đang xem trước toàn bộ ${currentList.length} đáp án & tâm pháp luận giải chuẩn xác.`;
      } else {
        reviewBanner.style.display = 'none';
      }
    }
  }

  // Render question UI
  function renderQuestion(index) {
    if (index < 0 || index >= currentList.length) return;
    const isNewQuestion = (lastRenderedIndex !== -1 && lastRenderedIndex !== index);
    currentIndex = index;
    lastRenderedIndex = index;
    const q = currentList[currentIndex];

    // Tự động cuộn màn hình lên đầu câu hỏi khi chuyển câu
    if (isNewQuestion) {
      scrollToQuestionTop();
    }

    // Update Header / Index
    const qIndexEl = document.getElementById('q-index-display');
    if (qIndexEl) {
      qIndexEl.innerHTML = `<span>⚔️</span> ${mode === 'review' ? 'Tâm Ma' : (mode === 'answers' ? 'Bí Kíp' : 'Bí Cảnh')} Tầng ${currentIndex + 1} / ${currentList.length} (Gốc #Q${q.id})`;
    }

    const topicEl = document.getElementById('q-topic-display');
    if (topicEl) {
      topicEl.textContent = q.topic || 'Software Architecture';
    }

    // Flag button state
    const flagBtn = document.getElementById('btn-flag');
    if (flagBtn) {
      if (flagged.has(q.id)) {
        flagBtn.classList.add('active');
        flagBtn.title = "Bỏ đánh dấu lưu ý";
      } else {
        flagBtn.classList.remove('active');
        flagBtn.title = "Đánh dấu câu hỏi cần xem lại";
      }
    }

    // Manual Save Wrong Question Button (Bookmark into Tâm Ma Lục)
    const saveWrongBtn = document.getElementById('btn-manual-save-wrong');
    if (saveWrongBtn) {
      const isAlreadyWrong = window.wrongManager && window.wrongManager.isWrong(q.id);
      if (isAlreadyWrong) {
        saveWrongBtn.innerHTML = `<span>👹</span> Đã Trong Tâm Ma Lục`;
        saveWrongBtn.style.color = '#c0392b';
        saveWrongBtn.style.borderColor = '#e74c3c';
      } else {
        saveWrongBtn.innerHTML = `<span>💾</span> Lưu Vào Tâm Ma`;
        saveWrongBtn.style.color = 'var(--primary-deep)';
        saveWrongBtn.style.borderColor = 'var(--primary-dark)';
      }
    }

    // In Review Mode: Show Mastered Button (Xóa khỏi câu sai)
    const masterBtn = document.getElementById('btn-master-question');
    if (masterBtn) {
      if (mode === 'review') {
        masterBtn.style.display = 'inline-flex';
      } else {
        masterBtn.style.display = 'none';
      }
    }

    // Question Text (English)
    const textEl = document.getElementById('q-text-display');
    if (textEl) {
      textEl.textContent = q.question;
    }

    // Original Image toggle
    const origBox = document.getElementById('orig-image-box');
    const origImg = document.getElementById('orig-img-tag');
    if (origBox && origImg) {
      origBox.classList.remove('show');
      origImg.src = q.image;
    }

    // Render Options
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const isAnswersMode = mode === 'answers';
      const selected = isAnswersMode ? q.answer : userAnswers[q.id];
      const hasAnswered = selected !== undefined;
      const revealAnswer = isAnswersMode || (mode === 'practice' && hasAnswered) || (mode === 'review' && hasAnswered) || isSubmitted;

      q.options.forEach(opt => {
        const item = document.createElement('div');
        item.className = 'option-item';
        item.dataset.key = opt.key;

        let badgeHtml = '';

        // Visual states
        if (revealAnswer) {
          item.classList.add('disabled');
          if (opt.key === q.answer) {
            item.classList.add('correct');
            if (hasAnswered && opt.key === selected) {
              badgeHtml = `<span class="option-status-badge correct-chosen">✓ Bạn chọn chính xác</span>`;
            } else {
              badgeHtml = `<span class="option-status-badge correct-answer">✓ Đáp án đúng</span>`;
            }
          } else if (opt.key === selected) {
            item.classList.add('wrong');
            badgeHtml = `<span class="option-status-badge wrong-chosen">✗ Bạn đã chọn</span>`;
          }
        } else if (hasAnswered && opt.key === selected) {
          item.classList.add('selected');
          badgeHtml = `<span class="option-status-badge is-selected">🗡️ Đã chọn</span>`;
        }

        item.innerHTML = `
          <div class="option-key">${opt.key}</div>
          <div class="option-text">${opt.text}</div>
          ${badgeHtml}
          <div class="option-sword-icon">🗡️</div>
        `;

        if (mode !== 'answers' && (!revealAnswer || (mode === 'exam' && !isSubmitted))) {
          item.addEventListener('click', () => handleSelectOption(q, opt.key));
        }

        optionsContainer.appendChild(item);
      });
    }

    // Render Hint
    const hintBox = document.getElementById('hint-box');
    const hintText = document.getElementById('hint-text');
    if (hintBox && hintText) {
      hintText.textContent = q.hint;
      if (mode === 'answers' || openedHints.has(q.id)) {
        hintBox.classList.add('show');
      } else {
        hintBox.classList.remove('show');
      }
    }

    // Render Explanation
    renderExplanation(q);

    // Update Palette & Navigation
    updatePalette();
    updateProgress();
    updateNavButtons();
  }

  // Render Explanation Box
  function renderExplanation(q) {
    const expContainer = document.getElementById('explanation-container');
    if (!expContainer) return;

    const selected = userAnswers[q.id];
    const shouldShow = ((mode === 'practice' || mode === 'review') && selected !== undefined) || isSubmitted;

    if (!shouldShow) {
      expContainer.classList.remove('show');
      return;
    }

    expContainer.classList.add('show');

    // Header Result Tag
    const resultTag = document.getElementById('exp-result-tag');
    if (resultTag) {
      if (selected === q.answer) {
        resultTag.className = 'explanation-result-tag correct';
        resultTag.textContent = '✓ Lĩnh Ngộ Chính Xác';
      } else {
        resultTag.className = 'explanation-result-tag wrong';
        resultTag.textContent = `✗ Chọn ${selected || 'chưa chọn'} - Đáp án đúng: ${q.answer}`;
      }
    }

    // Summary Text
    const summaryEl = document.getElementById('exp-summary');
    if (summaryEl) {
      summaryEl.textContent = q.explanation.summary;
    }

    // Options breakdown
    const breakdownList = document.getElementById('breakdown-list');
    if (breakdownList) {
      breakdownList.innerHTML = '';
      ['A', 'B', 'C', 'D'].forEach(key => {
        if (q.explanation.breakdown[key]) {
          const div = document.createElement('div');
          const isCorrect = key === q.answer;
          div.className = `breakdown-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;
          div.innerHTML = `<strong>${key}:</strong> ${q.explanation.breakdown[key]}`;
          breakdownList.appendChild(div);
        }
      });
    }
  }

  // Handle Option Selection
  function handleSelectOption(q, key) {
    if ((mode === 'practice' || mode === 'review') && userAnswers[q.id] !== undefined) {
      return; // Already answered
    }

    userAnswers[q.id] = key;

    // Play sword slash
    if (window.cultivationAudio) {
      window.cultivationAudio.playSwordSlash();
    }

    const isCorrect = key === q.answer;

    if (mode === 'practice' || mode === 'review') {
      if (isCorrect) {
        if (window.cultivationAudio) window.cultivationAudio.playCorrectChime();
        if (mode === 'review') {
          // In review mode, show notice that they got it right!
          if (window.wrongManager) {
            window.wrongManager.showToast(`Chúc mừng! Bạn đã trả lời đúng câu #${q.id}. Bạn có thể nhấn 'Đã Nắm Rõ' để xóa khỏi danh sách.`);
          }
        }
      } else {
        if (window.cultivationAudio) window.cultivationAudio.playIncorrectSound();
        // Save to Wrong Questions storage automatically!
        if (window.wrongManager) {
          window.wrongManager.add(q.id, key, q.answer, q.question, quizId);
          window.wrongManager.showToast(`Đã lưu câu #${q.id} vào Tâm Ma Lục để ôn tập lại!`, 'error');
        }
      }
    }

    renderQuestion(currentIndex);
  }

  // Manual Bookmark / Save Wrong Question
  function toggleManualSaveWrong() {
    const q = currentList[currentIndex];
    if (!q || !window.wrongManager) return;

    if (window.wrongManager.isWrong(q.id)) {
      window.wrongManager.remove(q.id);
      window.wrongManager.showToast(`Đã xóa câu #${q.id} khỏi Tâm Ma Lục!`);
    } else {
      window.wrongManager.add(q.id, userAnswers[q.id] || 'Chưa làm', q.answer, q.question, quizId);
      window.wrongManager.showToast(`Đã thêm câu #${q.id} vào Tâm Ma Lục để ôn tập lại!`);
    }
    renderQuestion(currentIndex);
  }

  // Mastered / Remove from Wrong List in Review Mode
  function masterCurrentQuestion() {
    const q = currentList[currentIndex];
    if (!q || !window.wrongManager) return;

    window.wrongManager.remove(q.id);
    if (window.cultivationAudio) window.cultivationAudio.playBreakthroughSound();
    window.wrongManager.showToast(`Đã hóa giải tâm ma câu #${q.id}!`);

    // Remove from current list in review mode
    currentList.splice(currentIndex, 1);
    if (currentList.length === 0) {
      alert("Tuyệt vời! Bạn đã hoàn thành hóa giải toàn bộ các câu hỏi trong Tâm Ma Lục!");
      window.location.href = 'index.html';
      return;
    }
    if (currentIndex >= currentList.length) {
      currentIndex = currentList.length - 1;
    }
    renderQuestion(currentIndex);
  }

  // Toggle Hint
  function toggleHint() {
    const q = currentList[currentIndex];
    const hintBox = document.getElementById('hint-box');
    if (!hintBox || !q) return;

    if (openedHints.has(q.id)) {
      openedHints.delete(q.id);
      hintBox.classList.remove('show');
    } else {
      openedHints.add(q.id);
      hintBox.classList.add('show');
      if (window.cultivationAudio) {
        window.cultivationAudio.playHintSound();
      }
    }
  }

  // Toggle Flag
  function toggleFlag() {
    const q = currentList[currentIndex];
    if (!q) return;
    if (flagged.has(q.id)) {
      flagged.delete(q.id);
    } else {
      flagged.add(q.id);
    }
    renderQuestion(currentIndex);
  }

  // Toggle Original Image
  function toggleOriginalImage() {
    const origBox = document.getElementById('orig-image-box');
    if (origBox) {
      origBox.classList.toggle('show');
    }
  }

  // Update Question Palette (Bát Quái Trận Đồ)
  function updatePalette() {
    const grid = document.getElementById('question-palette-grid');
    if (!grid) return;
    grid.innerHTML = '';

    currentList.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;

      if (idx === currentIndex) {
        btn.classList.add('current');
      }

      if (mode === 'answers') {
        btn.classList.add('answered', 'correct');
      } else {
        const ans = userAnswers[q.id];
        if (ans !== undefined) {
          if (mode === 'practice' || mode === 'review' || isSubmitted) {
            if (ans === q.answer) {
              btn.classList.add('correct');
            } else {
              btn.classList.add('wrong');
            }
          } else {
            btn.style.background = '#2cb5bc';
            btn.style.color = '#fff';
          }
        }
      }

      if (flagged.has(q.id)) {
        btn.classList.add('flagged');
      }

      btn.addEventListener('click', () => {
        renderQuestion(idx);
        scrollToQuestionTop();
      });
      grid.appendChild(btn);
    });
  }

  // Update Progress & Live Cultivation Realm
  function updateProgress() {
    if (mode === 'answers') {
      const bar = document.getElementById('progress-bar-fill');
      if (bar) bar.style.width = '100%';
      const realmTitleEl = document.getElementById('realm-title-display');
      const realmPercentEl = document.getElementById('realm-percent-display');
      if (realmTitleEl) realmTitleEl.textContent = 'Đại Viên Mãn (Thông Tri Đạo Pháp)';
      if (realmPercentEl) realmPercentEl.textContent = `100% (${currentList.length}/${currentList.length})`;
      const liveScoreEl = document.getElementById('live-score-display');
      if (liveScoreEl) liveScoreEl.textContent = `${currentIndex + 1}/${currentList.length} Tra Cứu`;
      return;
    }
    let answeredCount = 0;
    let correctCount = 0;

    currentList.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans !== undefined) {
        answeredCount++;
        if (ans === q.answer) correctCount++;
      }
    });

    const percent = Math.round((answeredCount / currentList.length) * 100);

    const bar = document.getElementById('progress-bar-fill');
    if (bar) bar.style.width = `${percent}%`;

    const realm = getRealm(percent);
    const realmTitleEl = document.getElementById('realm-title-display');
    const realmPercentEl = document.getElementById('realm-percent-display');

    if (realmTitleEl) realmTitleEl.textContent = realm.title;
    if (realmPercentEl) realmPercentEl.textContent = `${percent}% (${answeredCount}/${currentList.length})`;

    // Live score counter in sidebar
    const liveScoreEl = document.getElementById('live-score-display');
    if (liveScoreEl) {
      if (mode === 'practice' || mode === 'review' || isSubmitted) {
        liveScoreEl.textContent = `${correctCount}/${currentList.length} Đúng`;
      } else {
        liveScoreEl.textContent = `${answeredCount}/${currentList.length} Đã làm`;
      }
    }
  }

  // Navigation Buttons
  function updateNavButtons() {
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');

    if (prevBtn) {
      prevBtn.disabled = currentIndex === 0;
      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    }
    if (nextBtn) {
      if (currentIndex === currentList.length - 1) {
        if (mode === 'answers') {
          nextBtn.innerHTML = `Về Kiếm Các <span>🚪</span>`;
        } else {
          nextBtn.innerHTML = `Hoàn Tất <span>🏁</span>`;
        }
      } else {
        nextBtn.innerHTML = `Tầng Kế <span>🗡️</span>`;
      }
    }
  }

  function nextQuestion() {
    if (currentIndex < currentList.length - 1) {
      renderQuestion(currentIndex + 1);
      scrollToQuestionTop();
    } else {
      finishQuiz();
    }
  }

  function prevQuestion() {
    if (currentIndex > 0) {
      renderQuestion(currentIndex - 1);
      scrollToQuestionTop();
    }
  }

  // Submit / Finish Quiz
  function finishQuiz() {
    isSubmitted = true;
    if (timerInterval) clearInterval(timerInterval);

    let correctCount = 0;
    let wrongQuestionsToSave = [];

    currentList.forEach(q => {
      const selected = userAnswers[q.id];
      if (selected === q.answer) {
        correctCount++;
      } else {
        wrongQuestionsToSave.push({
          id: q.id,
          selected: selected || 'Chưa chọn',
          correct: q.answer,
          text: q.question
        });
      }
    });

    // Auto-save all wrong questions into WrongManager!
    if (window.wrongManager && wrongQuestionsToSave.length > 0) {
      wrongQuestionsToSave.forEach(item => {
        window.wrongManager.add(item.id, item.selected, item.correct, item.text, quizId);
      });
    }

    const total = currentList.length;
    const finalPercent = Math.round((correctCount / total) * 100);
    const achievedRealm = getRealm(finalPercent);

    // Save history in LocalStorage
    saveHistory(correctCount, total, achievedRealm.title);

    // Play celebration audio
    if (window.cultivationAudio) {
      window.cultivationAudio.playBreakthroughSound();
    }

    // Show Result Modal
    showResultModal(correctCount, total, finalPercent, achievedRealm);
  }

  function showResultModal(correct, total, percent, realm) {
    const modal = document.getElementById('result-modal');
    if (!modal) return;

    document.getElementById('modal-score-num').textContent = correct;
    document.getElementById('modal-score-total').textContent = `/ ${total}`;
    document.getElementById('modal-realm-text').textContent = `${realm.title} - ${realm.desc}`;
    document.getElementById('modal-accuracy').textContent = `${percent}%`;
    document.getElementById('modal-wrong').textContent = `${total - correct}`;

    modal.classList.add('show');
  }

  function saveHistory(correct, total, realmTitle) {
    try {
      const history = JSON.parse(localStorage.getItem('swd_quiz_history') || '[]');
      history.push({
        date: new Date().toLocaleString('vi-VN'),
        quizId: quizId,
        correct: correct,
        total: total,
        percent: Math.round((correct / total) * 100),
        realm: realmTitle
      });
      localStorage.setItem('swd_quiz_history', JSON.stringify(history));
    } catch (e) {
      console.warn(e);
    }
  }

  // Timer for Exam Mode
  function startTimer() {
    if (mode !== 'exam') return;
    const timerEl = document.getElementById('timer-display');
    if (!timerEl) return;
    timerEl.style.display = 'inline-flex';

    timerInterval = setInterval(() => {
      examTimeRemaining--;
      if (examTimeRemaining <= 0) {
        clearInterval(timerInterval);
        alert("Hết giờ làm bài! Tông môn tự động thu hồi bài thí luyện.");
        finishQuiz();
        return;
      }
      const m = Math.floor(examTimeRemaining / 60).toString().padStart(2, '0');
      const s = (examTimeRemaining % 60).toString().padStart(2, '0');
      timerEl.textContent = `⏳ ${m}:${s}`;
    }, 1000);
  }

  // Keyboard Shortcuts Setup
  function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const key = e.key.toUpperCase();
      const q = currentList[currentIndex];
      if (!q) return;

      if (['A', 'B', 'C', 'D'].includes(key)) {
        handleSelectOption(q, key);
      } else if (key === '1') {
        handleSelectOption(q, 'A');
      } else if (key === '2') {
        handleSelectOption(q, 'B');
      } else if (key === '3') {
        handleSelectOption(q, 'C');
      } else if (key === '4') {
        handleSelectOption(q, 'D');
      } else if (key === 'H') {
        toggleHint();
      } else if (key === 'F') {
        toggleFlag();
      } else if (e.key === 'ArrowRight') {
        nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        prevQuestion();
      }
    });
  }

  // Sound & BGM Controls Setup
  function setupAudioToggle() {
    const bgmBtn = document.getElementById('btn-bgm-toggle');
    const bgmText = document.getElementById('bgm-text');
    const bgmIcon = document.getElementById('bgm-icon');
    const sfxBtn = document.getElementById('btn-sfx-toggle');
    const sfxText = document.getElementById('sfx-text');
    const volSlider = document.getElementById('bgm-vol-slider');

    function updateAudioUI() {
      if (!window.cultivationAudio) return;
      const bgmOn = window.cultivationAudio.bgmEnabled;
      const sfxOn = window.cultivationAudio.sfxEnabled;

      if (bgmBtn && bgmText && bgmIcon) {
        bgmText.textContent = bgmOn ? 'Lan Đình Tự: Bật' : 'Lan Đình Tự: Tắt';
        bgmIcon.textContent = bgmOn ? '🎶' : '🎵';
        bgmBtn.classList.toggle('active', bgmOn);
      }
      if (sfxBtn && sfxText) {
        sfxBtn.classList.toggle('active', sfxOn);
        sfxText.textContent = sfxOn ? 'Hiệu Ứng' : 'Hiệu Ứng: Tắt';
      }
      if (volSlider) {
        volSlider.value = window.cultivationAudio.bgmVolume;
      }
    }

    updateAudioUI();

    if (bgmBtn) {
      bgmBtn.addEventListener('click', () => {
        if (window.cultivationAudio) {
          window.cultivationAudio.toggleBGM();
          updateAudioUI();
        }
      });
    }

    if (sfxBtn) {
      sfxBtn.addEventListener('click', () => {
        if (window.cultivationAudio) {
          window.cultivationAudio.toggleSFX();
          updateAudioUI();
        }
      });
    }

    if (volSlider) {
      volSlider.addEventListener('input', (e) => {
        if (window.cultivationAudio) {
          window.cultivationAudio.setBGMVolume(parseFloat(e.target.value));
        }
      });
    }
  }

  // DOM Loaded Entrypoint
  document.addEventListener('DOMContentLoaded', () => {
    initData();
    renderQuestion(0);
    startTimer();
    setupKeyboard();
    setupAudioToggle();

    // Attach event listeners
    const btnHint = document.getElementById('btn-hint');
    if (btnHint) btnHint.addEventListener('click', toggleHint);

    const btnFlag = document.getElementById('btn-flag');
    if (btnFlag) btnFlag.addEventListener('click', toggleFlag);

    const btnSaveWrong = document.getElementById('btn-manual-save-wrong');
    if (btnSaveWrong) btnSaveWrong.addEventListener('click', toggleManualSaveWrong);

    const btnMaster = document.getElementById('btn-master-question');
    if (btnMaster) btnMaster.addEventListener('click', masterCurrentQuestion);

    const btnViewOrig = document.getElementById('btn-view-orig');
    if (btnViewOrig) btnViewOrig.addEventListener('click', toggleOriginalImage);

    const btnPrev = document.getElementById('btn-prev');
    if (btnPrev) btnPrev.addEventListener('click', prevQuestion);

    const btnNext = document.getElementById('btn-next');
    if (btnNext) btnNext.addEventListener('click', nextQuestion);

    const btnSubmit = document.getElementById('btn-submit-quiz');
    if (btnSubmit) {
      if (mode === 'answers') {
        btnSubmit.innerHTML = '🗡️ Vào Làm Đề Này';
        btnSubmit.style.background = 'linear-gradient(135deg, #16a085, #0e6251)';
        btnSubmit.style.borderColor = '#a3e4d7';
        btnSubmit.addEventListener('click', () => {
          window.location.href = `quiz.html?quiz=${quizId}&mode=practice`;
        });
      } else {
        btnSubmit.addEventListener('click', () => {
          if (confirm("Đạo hữu có chắc chắn muốn nộp bài kết thúc thí luyện?")) {
            finishQuiz();
          }
        });
      }
    }

    const btnToggleAnswers = document.getElementById('btn-toggle-answers-mode');
    if (btnToggleAnswers) {
      if (mode === 'answers') {
        btnToggleAnswers.innerHTML = '<span>🗡️</span> Bắt Đầu Tự Làm Đề Này';
        btnToggleAnswers.style.background = '#eafaf1';
        btnToggleAnswers.style.borderColor = '#2ecc71';
        btnToggleAnswers.style.color = '#145a32';
        btnToggleAnswers.href = `quiz.html?quiz=${quizId}&mode=practice`;
      } else {
        btnToggleAnswers.innerHTML = '<span>📜</span> Xem Toàn Bộ Đáp Án & Luận Giải';
        btnToggleAnswers.href = `quiz.html?quiz=${quizId}&mode=answers`;
      }
    }

    // Switch to Mobile Version link
    const btnSwitchMobile = document.getElementById('btn-switch-mobile-quiz');
    if (btnSwitchMobile) {
      btnSwitchMobile.href = `mobile.html?quiz=${quizId}&mode=${mode}`;
    }

    // Modal buttons
    const btnModalReview = document.getElementById('btn-modal-review');
    if (btnModalReview) {
      btnModalReview.addEventListener('click', () => {
        document.getElementById('result-modal').classList.remove('show');
        renderQuestion(0);
      });
    }

    const btnModalRetryWrong = document.getElementById('btn-modal-retry-wrong');
    if (btnModalRetryWrong) {
      btnModalRetryWrong.addEventListener('click', () => {
        window.location.href = `quiz.html?quiz=1&mode=review`;
      });
    }
  });

})();
