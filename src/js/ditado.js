// ditado.js
document.addEventListener("DOMContentLoaded", () => {
  const romajiPromptDisplay = document.getElementById("romaji-prompt");
  const hiraganaAnswerInput = document.getElementById("hiragana-answer");
  const checkAnswerBtn = document.getElementById("check-answer-btn");
  const feedbackMessageDiv = document.getElementById("feedback-message");
  const correctCountDisplay = document.getElementById("correct-count");
  const incorrectCountDisplay = document.getElementById("incorrect-count");
  const livesCountDisplay = document.getElementById("lives-count");
  const hiraganaKeyboardDiv = document.getElementById("hiragana-keyboard");
  const logListUl = document.getElementById("log-list");

  const keyboardLayout = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "ゆ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
    "を",
    "ん",
    "が",
    "ぎ",
    "ぐ",
    "げ",
    "ご",
    "ざ",
    "じ",
    "ず",
    "ぜ",
    "ぞ",
    "だ",
    "ぢ",
    "づ",
    "で",
    "ど",
    "ば",
    "び",
    "ぶ",
    "べ",
    "ぼ",
    "ぱ",
    "ぴ",
    "ぷ",
    "ぺ",
    "ぽ",
    "BACKSPACE",
    "CLEAR",
  ];

  let availablePairs = [];
  let currentPair = null;
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  const MAX_LIVES = 3;
  let currentLives = MAX_LIVES;

  function createVirtualKeyboard() {
    hiraganaKeyboardDiv.innerHTML = "";
    keyboardLayout.forEach((char) => {
      if (char === null) {
        const emptySpot = document.createElement("div");
        hiraganaKeyboardDiv.appendChild(emptySpot);
        return;
      }
      const btn = document.createElement("button");
      btn.classList.add("keyboard-btn");
      if (char === "BACKSPACE") {
        btn.innerHTML = "⌫";
        btn.classList.add("keyboard-special-key", "keyboard-backspace");
        btn.addEventListener("click", () => {
          if (!hiraganaAnswerInput.disabled) {
            hiraganaAnswerInput.value = hiraganaAnswerInput.value.slice(0, -1);
            hiraganaAnswerInput.focus();
          }
        });
      } else if (char === "CLEAR") {
        btn.textContent = "Limpar";
        btn.classList.add("keyboard-special-key", "keyboard-clear");
        btn.addEventListener("click", () => {
          if (!hiraganaAnswerInput.disabled) {
            hiraganaAnswerInput.value = "";
            hiraganaAnswerInput.focus();
          }
        });
      } else {
        btn.textContent = char;
        btn.addEventListener("click", () => {
          if (!hiraganaAnswerInput.disabled) {
            hiraganaAnswerInput.value += char;
            hiraganaAnswerInput.focus();
          }
        });
      }
      hiraganaKeyboardDiv.appendChild(btn);
    });
  }

  function addLogEntry(message, type) {
    const li = document.createElement("li");
    const placeholder = logListUl.querySelector(".log-placeholder");
    if (placeholder) {
      placeholder.remove();
    }

    li.innerHTML = message;
    if (type) {
      li.classList.add(`log-${type}`);
    }
    // Adiciona no topo da lista para as entradas mais recentes ficarem visíveis
    logListUl.insertBefore(li, logListUl.firstChild);
    // Mantém o scroll no topo, a menos que a lista seja muito grande e precise rolar para ver os mais antigos
    // logListUl.scrollTop = 0; // Para sempre mostrar o mais recente no topo
  }

  function initializeDitado() {
    availablePairs = [
      ...hiraganaReferencePairs.filter(
        (p) =>
          p.category === "gojuon" ||
          p.category === "dakuten" ||
          p.category === "handakuten"
      ),
    ];
    if (availablePairs.length === 0) {
      romajiPromptDisplay.textContent = "Erro!";
      feedbackMessageDiv.textContent =
        "Não foi possível carregar os Hiraganas.";
      checkAnswerBtn.disabled = true;
      console.error("Verifique hiraganaPares.js e as categorias.");
      return;
    }
    correctAnswers = 0;
    incorrectAnswers = 0;
    logListUl.innerHTML =
      '<li class="log-placeholder">Seu histórico aparecerá aqui...</li>';
    loadNewChallenge();
    updateStats();
    createVirtualKeyboard();
  }

  function loadNewChallenge() {
    currentLives = MAX_LIVES;
    updateLivesDisplay();

    if (availablePairs.length === 0) {
      availablePairs = [
        ...hiraganaReferencePairs.filter(
          (p) =>
            p.category === "gojuon" ||
            p.category === "dakuten" ||
            p.category === "handakuten"
        ),
      ];
      if (availablePairs.length === 0) {
        romajiPromptDisplay.textContent = "Fim!";
        feedbackMessageDiv.textContent =
          "Você revisou todos os Hiraganas disponíveis!";
        checkAnswerBtn.disabled = true;
        hiraganaAnswerInput.disabled = true;
        addLogEntry("🎉 Fim do Ditado! 🎉", "correct"); // Log de fim
        return;
      }
    }
    const randomIndex = Math.floor(Math.random() * availablePairs.length);
    currentPair = availablePairs[randomIndex];

    romajiPromptDisplay.textContent = currentPair.romaji;
    romajiPromptDisplay.classList.remove("correct-flash");
    hiraganaAnswerInput.value = "";
    hiraganaAnswerInput.disabled = false;
    feedbackMessageDiv.textContent = "";
    feedbackMessageDiv.className = "feedback-message";
    checkAnswerBtn.disabled = false;
    hiraganaAnswerInput.focus();
  }

  function checkAnswer() {
    if (!currentPair || hiraganaAnswerInput.disabled) return;

    const userAnswer = hiraganaAnswerInput.value.trim();
    romajiPromptDisplay.classList.remove("correct-flash");
    feedbackMessageDiv.className = "feedback-message";

    const correctAnswerText = `${currentPair.hiragana} (${currentPair.romaji})`;

    if (userAnswer === currentPair.hiragana) {
      feedbackMessageDiv.textContent = "Correto!";
      feedbackMessageDiv.classList.add("feedback-correct", "vibrant-correct");
      romajiPromptDisplay.classList.add("correct-flash");
      correctAnswers++;
      updateStats();
      addLogEntry(
        `✔️ Acertou! <strong>${userAnswer}</strong> era ${correctAnswerText}.`,
        "correct"
      );

      hiraganaAnswerInput.disabled = true;
      checkAnswerBtn.disabled = true;
      setTimeout(loadNewChallenge, 1200);
    } else {
      currentLives--;
      updateLivesDisplay();
      feedbackMessageDiv.classList.add("feedback-incorrect");

      if (currentLives > 0) {
        feedbackMessageDiv.textContent = `Incorreto. Tente novamente!`;
        addLogEntry(
          `❌ Tentativa: <strong>${
            userAnswer || "[vazio]"
          }</strong>. <span class="life-lost">-1 vida!</span> (Romaji: ${
            currentPair.romaji
          })`,
          "attempt-failed"
        );
        hiraganaAnswerInput.value = "";
        hiraganaAnswerInput.focus();
      } else {
        feedbackMessageDiv.textContent = `Fim das tentativas. A resposta era: ${correctAnswerText}`;
        incorrectAnswers++;
        updateStats();
        addLogEntry(
          `<span class="skull">☠️</span> Fim das tentativas para ${
            currentPair.romaji
          }. Correto: <strong>${
            currentPair.hiragana
          }</strong>. Você digitou: <strong>${
            userAnswer || "[vazio]"
          }</strong>.`,
          "final-failure"
        );

        hiraganaAnswerInput.disabled = true;
        checkAnswerBtn.disabled = true;
        setTimeout(loadNewChallenge, 2500);
      }
    }
  }

  function updateStats() {
    correctCountDisplay.textContent = correctAnswers;
    incorrectCountDisplay.textContent = incorrectAnswers;
  }

  function updateLivesDisplay() {
    livesCountDisplay.innerHTML = "";
    for (let i = 0; i < MAX_LIVES; i++) {
      if (i < currentLives) {
        livesCountDisplay.innerHTML += "❤️";
      } else {
        livesCountDisplay.innerHTML += "🖤";
      }
    }
  }

  function loadThemeForDitado() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  // Event Listeners
  checkAnswerBtn.addEventListener("click", checkAnswer);
  hiraganaAnswerInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && !checkAnswerBtn.disabled) {
      checkAnswer();
    }
  });

  // Inicialização
  if (
    typeof hiraganaReferencePairs !== "undefined" &&
    hiraganaReferencePairs.length > 0
  ) {
    initializeDitado();
    loadThemeForDitado();
  } else {
    romajiPromptDisplay.textContent = "Erro!";
    feedbackMessageDiv.textContent =
      "Lista de Hiragana não encontrada. Verifique 'hiraganaPares.js'.";
    console.error(
      "Array 'hiraganaReferencePairs' não está definido ou está vazio."
    );
  }
});
