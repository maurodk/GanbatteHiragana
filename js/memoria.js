// memoria.js
document.addEventListener("DOMContentLoaded", () => {
  const memoryBoard = document.getElementById("memory-board");
  const startGameButton = document.getElementById("start-game-button");
  const playAgainButton = document.getElementById("play-again-config-button");
  const pairsMatchedDisplay = document.getElementById("pairs-matched");
  const totalPairsGameDisplay = document.getElementById("total-pairs-game");
  const winMessageDiv = document.getElementById("win-message");
  const numPairsSelect = document.getElementById("num-pairs-select");
  const currentStreakDisplay = document.getElementById("current-streak");

  const cbGojuon = document.getElementById("cb-gojuon");
  const cbDakuten = document.getElementById("cb-dakuten");
  const cbHandakuten = document.getElementById("cb-handakuten");
  const cbYoon = document.getElementById("cb-yoon");

  // 'hiraganaReferencePairs' vem de 'hiraganaPares.js'

  let gameCardsData = [];
  let flippedCardsElements = [];
  let matchedPairsCount = 0;
  let totalPairsInCurrentGame = 0;
  let boardLocked = true;
  let currentMatchStreak = 0;

  function getSelectedCategories() {
    const categories = [];
    if (cbGojuon.checked) categories.push("gojuon");
    if (cbDakuten.checked) categories.push("dakuten");
    if (cbHandakuten.checked) categories.push("handakuten");
    if (cbYoon.checked) categories.push("yoon");
    return categories;
  }

  function filterPairsByCategories(categories) {
    if (categories.length === 0) return [];
    return hiraganaReferencePairs.filter((pair) =>
      categories.includes(pair.category)
    );
  }

  function selectPairsForGame(numPairsToSelect, availablePairs) {
    if (availablePairs.length === 0) return [];
    const shuffledAvailable = shuffle([...availablePairs]);
    return shuffledAvailable.slice(0, numPairsToSelect);
  }

  function initializeGame() {
    boardLocked = true;
    winMessageDiv.classList.add("hidden");
    memoryBoard.innerHTML =
      '<p class="board-placeholder">Configurando o jogo...</p>';

    const selectedCategories = getSelectedCategories();
    if (selectedCategories.length === 0) {
      memoryBoard.innerHTML =
        '<p class="board-placeholder">Por favor, selecione ao menos uma categoria de Hiragana!</p>';
      totalPairsGameDisplay.textContent = "0";
      pairsMatchedDisplay.textContent = "0";
      currentStreakDisplay.textContent = "0";
      currentStreakDisplay.classList.remove("fire-streak");
      return;
    }

    const pairsFromCategories = filterPairsByCategories(selectedCategories);
    if (pairsFromCategories.length === 0) {
      memoryBoard.innerHTML =
        '<p class="board-placeholder">Nenhum Hiragana encontrado para as categorias selecionadas.</p>';
      totalPairsGameDisplay.textContent = "0";
      pairsMatchedDisplay.textContent = "0";
      currentStreakDisplay.textContent = "0";
      currentStreakDisplay.classList.remove("fire-streak");
      return;
    }

    let numPairsWanted = parseInt(numPairsSelect.value);
    numPairsWanted = Math.min(numPairsWanted, pairsFromCategories.length);

    if (numPairsWanted === 0) {
      memoryBoard.innerHTML =
        '<p class="board-placeholder">Não há pares suficientes nas categorias selecionadas para o número de pares desejado.</p>';
      totalPairsGameDisplay.textContent = "0";
      pairsMatchedDisplay.textContent = "0";
      currentStreakDisplay.textContent = "0";
      currentStreakDisplay.classList.remove("fire-streak");
      return;
    }

    const finalPairsForGame = selectPairsForGame(
      numPairsWanted,
      pairsFromCategories
    );
    totalPairsInCurrentGame = finalPairsForGame.length;

    let items = [];
    finalPairsForGame.forEach((pair) => {
      items.push({
        type: "hiragana",
        value: pair.hiragana,
        pairId: pair.romaji,
      });
      items.push({ type: "romaji", value: pair.romaji, pairId: pair.romaji });
    });

    gameCardsData = shuffle(items);
    memoryBoard.innerHTML = "";
    matchedPairsCount = 0;
    currentMatchStreak = 0;
    updateScoreAndStreak();

    const numCards = gameCardsData.length;
    let columns = 4;
    if (numPairsWanted <= 4) columns = 4;
    else if (numPairsWanted <= 6) columns = 4;
    else if (numPairsWanted <= 8) columns = 4;
    else if (numPairsWanted <= 10) columns = 5;
    else if (numPairsWanted <= 12) columns = 6;
    else if (numPairsWanted <= 15) columns = 6;
    else if (numPairsWanted <= 18) columns = 6;
    else columns = 6;

    if (finalPairsForGame.length * 2 > 40 && finalPairsForGame.length * 2 <= 48)
      columns = 8; // Ex: 24 pares = 48 cartas, 8 colunas
    else if (finalPairsForGame.length * 2 > 48) columns = 9; // Para muitos Yoons

    memoryBoard.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    gameCardsData.forEach((itemData) => {
      // Removido 'index' não utilizado
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      // cardElement.dataset.index = index; // Não é mais estritamente necessário
      cardElement.dataset.value = itemData.value; // Usado para debug ou futuras lógicas
      cardElement.dataset.pairId = itemData.pairId; // Essencial para checar o par

      const cardFace = document.createElement("div");
      cardFace.classList.add("card-face");
      cardFace.textContent = itemData.value;

      const cardBack = document.createElement("div");
      cardBack.classList.add("card-back");
      cardBack.textContent = "?";

      cardElement.appendChild(cardFace);
      cardElement.appendChild(cardBack);

      cardElement.addEventListener("click", handleCardClick);
      memoryBoard.appendChild(cardElement);
    });
    boardLocked = false;
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleCardClick(event) {
    if (boardLocked) return;
    const clickedCardElement = event.currentTarget;

    if (
      clickedCardElement.classList.contains("flipped") ||
      clickedCardElement.classList.contains("matched")
    ) {
      return;
    }

    flipCard(clickedCardElement);
    flippedCardsElements.push(clickedCardElement);

    if (flippedCardsElements.length === 2) {
      boardLocked = true;
      checkForMatch();
    }
  }

  function flipCard(cardElement) {
    cardElement.classList.add("flipped");
  }

  function checkForMatch() {
    const [cardOneEl, cardTwoEl] = flippedCardsElements;
    const isMatch = cardOneEl.dataset.pairId === cardTwoEl.dataset.pairId;

    if (isMatch) {
      disableMatchedCards(cardOneEl, cardTwoEl);
      matchedPairsCount++;
      currentMatchStreak++;
      updateScoreAndStreak();
      resetTurn();
      if (matchedPairsCount === totalPairsInCurrentGame) {
        endGame();
      }
    } else {
      currentMatchStreak = 0;
      updateScoreAndStreak();
      setTimeout(() => {
        unflipCards(cardOneEl, cardTwoEl);
        resetTurn();
      }, 1000); // Tempo para ver as cartas antes de desvirar
    }
  }

  function disableMatchedCards(cardOneEl, cardTwoEl) {
    // Apenas adiciona a classe 'matched'.
    // A classe 'flipped' não precisa ser removida aqui porque 'matched'
    // no CSS também aplica o transform: rotateY(180deg)
    cardOneEl.classList.remove("flipped"); // <<< ADICIONE ESTA LINHA
    cardOneEl.classList.add("matched");

    cardTwoEl.classList.remove("flipped"); // <<< ADICIONE ESTA LINHA
    cardTwoEl.classList.add("matched");
  }

  function unflipCards(cardOneEl, cardTwoEl) {
    cardOneEl.classList.remove("flipped");
    cardTwoEl.classList.remove("flipped");
  }

  function resetTurn() {
    flippedCardsElements = [];
    boardLocked = false;
  }

  function updateScoreAndStreak() {
    pairsMatchedDisplay.textContent = matchedPairsCount;
    totalPairsGameDisplay.textContent = totalPairsInCurrentGame;
    currentStreakDisplay.textContent = currentMatchStreak;

    if (currentMatchStreak >= 2) {
      currentStreakDisplay.classList.add("fire-streak");
    } else {
      currentStreakDisplay.classList.remove("fire-streak");
    }
  }

  function endGame() {
    boardLocked = true;
    winMessageDiv.classList.remove("hidden");
    currentStreakDisplay.classList.remove("fire-streak");
  }

  // Event Listeners
  startGameButton.addEventListener("click", initializeGame);
  playAgainButton.addEventListener("click", () => {
    winMessageDiv.classList.add("hidden");
    initializeGame();
  });

  // Inicialização
  function loadThemeForMemory() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  loadThemeForMemory();
  totalPairsGameDisplay.textContent = "0"; // Estado inicial
  pairsMatchedDisplay.textContent = "0";
  currentStreakDisplay.textContent = "0";
});
