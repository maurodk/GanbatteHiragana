// script.js (para a página do jogo - index.html)

document.addEventListener("DOMContentLoaded", () => {
  // Elementos do DOM (da página do jogo)
  const hiraganaDisplay = document.getElementById("hiragana-display");
  const romajiDisplay = document.getElementById("romaji-display");
  const answerInput = document.getElementById("answer-input");
  const submitBtn = document.getElementById("submit-btn");
  const feedbackText = document.getElementById("feedback-text");
  const streakCounterDisplay = document.getElementById("streak-counter");
  const wordDisplayArea = document.getElementById("word-display-area");
  const container = document.querySelector(".container"); // Usado para efeito de 5 acertos
  const hintBtn = document.getElementById("hint-btn");
  const hintTextDisplay = document.getElementById("hint-text");
  const hintImageDisplay = document.getElementById("hint-image");
  const noImageTextDisplay = document.getElementById("no-image-text"); // Para a mensagem "SEM IMAGEM"
  const darkModeToggleBtn = document.getElementById("dark-mode-toggle");

  // O array 'words' agora é carregado de 'palavras.js' e está disponível globalmente.
  // Não é necessário declará-lo aqui novamente.

  let currentWord = null;
  let streak = 0;
  let usedWords = [];
  let hintShownForCurrentWord = false; // Mantido, pode ser útil para futuras lógicas de dica

  const EMOJI_SUN = "☀️";
  const EMOJI_MOON = "🌙";

  // --- Funções ---

  // Função para normalizar strings (remover acentos, lowercase, etc.)
  function normalizeString(str) {
    if (typeof str !== "string") return "";
    return str
      .toLowerCase()
      .normalize("NFD") // Decompõe acentos (ex: "á" -> "a" + "´")
      .replace(/[\u0300-\u036f]/g, "") // Remove os diacríticos (acentos)
      .replace(/ç/g, "c") // Trata cedilha especificamente
      .trim();
  }

  function getRandomWord() {
    // Verifica se 'words' foi carregado de palavras.js
    if (typeof words === "undefined" || words.length === 0) {
      hiraganaDisplay.textContent = "!";
      romajiDisplay.textContent = "Erro: Palavras não carregadas.";
      answerInput.disabled = true;
      submitBtn.disabled = true;
      hintBtn.disabled = true;
      console.error(
        "Array 'words' não está definido ou está vazio. Verifique se 'palavras.js' está carregado corretamente antes de 'script.js'."
      );
      return null;
    }

    if (usedWords.length === words.length) {
      usedWords = []; // Resetar se todas as palavras foram usadas
    }
    let availableWords = words.filter((word) => !usedWords.includes(word));
    if (availableWords.length === 0) {
      // Caso fallback
      availableWords = words;
      usedWords = [];
    }
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const word = availableWords[randomIndex];
    usedWords.push(word);
    // Mantém o histórico de palavras usadas em um tamanho gerenciável
    if (
      usedWords.length > Math.floor(words.length / 1.5) &&
      words.length > 10
    ) {
      // Evita encurtar demais com poucas palavras
      usedWords.shift();
    }
    return word;
  }

  function displayNewWord() {
    currentWord = getRandomWord();
    if (!currentWord) return; // Se getRandomWord retornar null

    hiraganaDisplay.textContent = currentWord.hiragana;
    romajiDisplay.textContent = currentWord.romaji;
    answerInput.value = "";
    answerInput.disabled = false;
    submitBtn.disabled = false;
    feedbackText.textContent = "";
    feedbackText.className = "";

    // Resetar área da dica
    hintTextDisplay.textContent = "";
    hintImageDisplay.src = "";
    hintImageDisplay.alt = "";
    hintImageDisplay.style.display = "none";
    noImageTextDisplay.style.display = "none";
    hintBtn.disabled = false;
    hintShownForCurrentWord = false;

    answerInput.focus();
  }

  function updateStreakDisplay() {
    streakCounterDisplay.textContent = `Sequência: ${streak}`;
    if (streak >= 5) {
      streakCounterDisplay.classList.add("fire-streak");
      if (!streakCounterDisplay.textContent.includes("🔥")) {
        streakCounterDisplay.textContent += " 🔥";
      }
    } else {
      streakCounterDisplay.classList.remove("fire-streak");
      streakCounterDisplay.textContent =
        streakCounterDisplay.textContent.replace(" 🔥", "");
    }
  }

  function playCorrectEffect() {
    wordDisplayArea.classList.add("correct-flash-effect");
    setTimeout(() => {
      wordDisplayArea.classList.remove("correct-flash-effect");
    }, 500);
  }

  function playStreak5Effect() {
    container.classList.add("streak-5-effect");
    setTimeout(() => {
      container.classList.remove("streak-5-effect");
    }, 1500);
  }

  function showHint() {
    if (currentWord) {
      // Exemplo de frase
      if (currentWord.exemplo) {
        hintTextDisplay.textContent = `Ex: ${currentWord.exemplo}`;
      } else {
        hintTextDisplay.textContent = "Nenhum exemplo de frase disponível.";
      }

      // Lógica para imagem ou texto "SEM IMAGEM"
      hintImageDisplay.style.display = "none";
      noImageTextDisplay.style.display = "none";

      const imageUrl = currentWord.imagem;
      // Verifica se a URL é válida e não é um placeholder de instrução
      if (
        imageUrl &&
        typeof imageUrl === "string" &&
        imageUrl.trim() !== "" &&
        !imageUrl.toUpperCase().includes("URL_DO_") &&
        !imageUrl.toUpperCase().includes("BUSCAR_IMAGEM")
      ) {
        // console.log("Tentando carregar imagem da dica:", imageUrl);
        hintImageDisplay.src = imageUrl;
        hintImageDisplay.alt = `Imagem para ${
          Array.isArray(currentWord.traducao)
            ? currentWord.traducao[0]
            : currentWord.traducao
        }`;
        hintImageDisplay.style.display = "block";

        hintImageDisplay.onerror = () => {
          // console.error("Erro ao carregar imagem da dica:", imageUrl);
          hintImageDisplay.style.display = "none";
          noImageTextDisplay.style.display = "block";
        };
        hintImageDisplay.onload = () => {
          // console.log("Imagem da dica carregada:", imageUrl);
          noImageTextDisplay.style.display = "none";
          if (hintImageDisplay.src === imageUrl) {
            hintImageDisplay.onerror = null;
          }
        };
      } else {
        // console.log("Nenhuma URL de imagem válida para dica ou é placeholder:", imageUrl);
        noImageTextDisplay.style.display = "block";
      }
      // hintBtn.disabled = true; // Opcional: desabilitar dica após uso
    }
  }

  function checkAnswer() {
    if (!currentWord) return;

    const userAnswerRaw = answerInput.value;
    const userNormalizedAnswer = normalizeString(userAnswerRaw);

    let isCorrect = false;
    let correctAnswers = [];

    if (Array.isArray(currentWord.traducao)) {
      correctAnswers = currentWord.traducao.map((t) => normalizeString(t));
    } else {
      correctAnswers = [normalizeString(currentWord.traducao)];
    }

    for (const correctAnswer of correctAnswers) {
      if (userNormalizedAnswer === correctAnswer) {
        isCorrect = true;
        break;
      }
      // Verificação de plural simples
      if (
        userNormalizedAnswer === correctAnswer + "s" ||
        (userNormalizedAnswer.endsWith("s") &&
          userNormalizedAnswer.slice(0, -1) === correctAnswer) ||
        (correctAnswer.endsWith("s") &&
          userNormalizedAnswer === correctAnswer.slice(0, -1))
      ) {
        isCorrect = true;
        break;
      }
    }

    const displayCorrectAnswer = Array.isArray(currentWord.traducao)
      ? currentWord.traducao.join(" / ")
      : currentWord.traducao;

    if (isCorrect) {
      feedbackText.textContent = "Correto!";
      feedbackText.className = "correct";
      playCorrectEffect();
      streak++;

      if (streak > 0 && streak % 5 === 0) {
        playStreak5Effect();
      }
      setTimeout(displayNewWord, 1000);
    } else {
      feedbackText.textContent = `Incorreto. Resposta(s): ${displayCorrectAnswer}`;
      feedbackText.className = "incorrect";
      streak = 0;
      setTimeout(displayNewWord, 2800);
    }
    updateStreakDisplay();
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      darkModeToggleBtn.textContent = EMOJI_SUN;
    } else {
      localStorage.setItem("theme", "light");
      darkModeToggleBtn.textContent = EMOJI_MOON;
    }
  }

  function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      darkModeToggleBtn.textContent = EMOJI_SUN;
    } else {
      document.body.classList.remove("dark-mode");
      darkModeToggleBtn.textContent = EMOJI_MOON;
    }
  }

  // --- Event Listeners ---
  submitBtn.addEventListener("click", checkAnswer);
  answerInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });
  hintBtn.addEventListener("click", showHint);
  darkModeToggleBtn.addEventListener("click", toggleDarkMode);

  // --- Inicialização ---
  loadTheme(); // Carrega o tema antes de tudo
  // Verifica se 'words' está definido antes de tentar usá-lo
  if (typeof words !== "undefined" && words.length > 0) {
    displayNewWord(); // Carrega a primeira palavra
    updateStreakDisplay(); // Inicializa o display da sequência
  } else {
    // Trata o caso onde 'words' não foi carregado (erro já logado em getRandomWord)
    console.error(
      "A inicialização do jogo não pode prosseguir pois o array 'words' não está disponível."
    );
    // Você pode querer exibir uma mensagem mais amigável para o usuário aqui também,
    // por exemplo, alterando o conteúdo de 'hiraganaDisplay' ou 'feedbackText'.
    hiraganaDisplay.textContent = "Erro";
    romajiDisplay.textContent = "Falha ao carregar palavras.";
    feedbackText.textContent =
      "Por favor, verifique o console para mais detalhes (F12).";
  }
});
