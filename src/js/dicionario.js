document.addEventListener("DOMContentLoaded", () => {
  const dictionaryListDiv = document.getElementById("dictionary-list");
  const searchInput = document.getElementById("search-input");

  // Função para normalizar strings (para busca)
  function normalizeText(text) {
    if (typeof text !== "string") return "";
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function displayWords(wordsToDisplay) {
    dictionaryListDiv.innerHTML = ""; // Limpa a lista atual

    if (wordsToDisplay.length === 0) {
      dictionaryListDiv.innerHTML =
        '<p class="no-results">Nenhuma palavra encontrada.</p>';
      return;
    }

    wordsToDisplay.forEach((wordData) => {
      const card = document.createElement("div");
      card.className = "dictionary-card";

      const hiraganaEl = document.createElement("div");
      hiraganaEl.className = "card-hiragana";
      hiraganaEl.textContent = wordData.hiragana;
      card.appendChild(hiraganaEl);

      const romajiEl = document.createElement("div");
      romajiEl.className = "card-romaji";
      romajiEl.textContent = wordData.romaji;
      card.appendChild(romajiEl);

      const translationsEl = document.createElement("div");
      translationsEl.className = "card-translations";
      const translations = Array.isArray(wordData.traducao)
        ? wordData.traducao.join(", ")
        : wordData.traducao;
      translationsEl.innerHTML = `<strong>Tradução:</strong> ${translations}`;
      card.appendChild(translationsEl);

      if (wordData.exemplo) {
        const exampleEl = document.createElement("div");
        exampleEl.className = "card-example";
        exampleEl.textContent = wordData.exemplo;
        card.appendChild(exampleEl);
      }

      const imageContainer = document.createElement("div");
      imageContainer.className = "card-image-container";
      if (
        wordData.imagem &&
        typeof wordData.imagem === "string" &&
        wordData.imagem.trim() !== "" &&
        !wordData.imagem.toUpperCase().startsWith("URL_DO_") &&
        !wordData.imagem.toUpperCase().startsWith("BUSCAR_IMAGEM")
      ) {
        const imageEl = document.createElement("img");
        imageEl.className = "card-image";
        imageEl.src = wordData.imagem;
        imageEl.alt = `Imagem de ${wordData.hiragana}`;
        imageEl.onerror = () => {
          // Fallback se a imagem falhar
          imageEl.style.display = "none"; // Esconde a tag img quebrada
          const noImgText = document.createElement("div");
          noImgText.className = "card-no-image";
          noImgText.textContent = "Imagem Indisponível";
          imageContainer.appendChild(noImgText);
        };
        imageContainer.appendChild(imageEl);
      } else {
        const noImgText = document.createElement("div");
        noImgText.className = "card-no-image";
        noImgText.textContent = "Sem Imagem";
        imageContainer.appendChild(noImgText);
      }
      card.appendChild(imageContainer);

      dictionaryListDiv.appendChild(card);
    });
  }

  function filterWords() {
    const searchTerm = normalizeText(searchInput.value);
    if (!searchTerm) {
      displayWords(words); // Mostra todas se a busca estiver vazia
      return;
    }

    const filteredWords = words.filter((wordData) => {
      const hiragana = normalizeText(wordData.hiragana);
      const romaji = normalizeText(wordData.romaji);
      const translations = Array.isArray(wordData.traducao)
        ? wordData.traducao.map((t) => normalizeText(t))
        : [normalizeText(wordData.traducao)];

      if (hiragana.includes(searchTerm) || romaji.includes(searchTerm)) {
        return true;
      }
      for (const trans of translations) {
        if (trans.includes(searchTerm)) {
          return true;
        }
      }
      return false;
    });
    displayWords(filteredWords);
  }

  // Event Listeners
  searchInput.addEventListener("input", filterWords);

  // Inicialização
  if (typeof words !== "undefined" && words.length > 0) {
    displayWords(words); // Mostra todas as palavras inicialmente
  } else {
    dictionaryListDiv.innerHTML =
      "<p>Erro: Lista de palavras não carregada. Verifique palavras.js</p>";
  }

  // Carregar tema (se você quiser que o dicionário também tenha modo escuro)
  function loadThemeForDictionary() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  loadThemeForDictionary(); // Aplicar o tema ao carregar a página do dicionário
});
