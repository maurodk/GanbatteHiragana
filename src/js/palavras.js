const words = [
  {
    hiragana: "いぬ",
    romaji: "i-nu",
    traducao: ["cachorro", "cão"],
    exemplo: "かわいい いぬ ですね。(É um cachorro fofo, né?)",
    imagem:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ねこ",
    romaji: "ne-ko",
    traducao: "gato",
    exemplo: "ねこ が すき です。(Eu gosto de gatos.)",
    imagem:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "とり",
    romaji: "to-ri",
    traducao: "pássaro",
    exemplo: "そら に とり が とんで います。(Pássaros estão voando no céu.)",
    imagem:
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "さかな",
    romaji: "sa-ka-na",
    traducao: "peixe",
    exemplo: "さかな を たべます。(Eu como peixe.)",
    imagem:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "みず",
    romaji: "mi-zu",
    traducao: "água",
    exemplo: "みず を のみます。(Eu bebo água.)",
    imagem:
      "https://images.unsplash.com/photo-1523740872499-96adc80b168a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Trocado, anterior não funcionava
  {
    hiragana: "ごはん",
    romaji: "go-ha-n",
    traducao: ["arroz cozido", "refeição"],
    exemplo: "まいにち ごはん を たべます。(Eu como arroz todos os dias.)",
    imagem:
      "https://images.unsplash.com/photo-1596699721049-941a75c53e38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "くるま",
    romaji: "ku-ru-ma",
    traducao: "carro",
    exemplo: "あたらしい くるま を かいました。(Comprei um carro novo.)",
    imagem:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "でんしゃ",
    romaji: "de-n-sha",
    traducao: "trem",
    exemplo:
      "でんしゃ で がっこう に いきます。(Eu vou para a escola de trem.)",
    imagem:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "いえ",
    romaji: "i-e",
    traducao: "casa",
    exemplo: "わたしの いえ は おおきい です。(Minha casa é grande.)",
    imagem:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "がっこう",
    romaji: "ga-kko-u",
    traducao: "escola",
    exemplo: "がっこう で べんきょうします。(Eu estudo na escola.)",
    imagem:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "つくえ",
    romaji: "tsu-ku-e",
    traducao: "mesa",
    exemplo:
      "つくえ の うえ に ほん が あります。(Há um livro em cima da mesa.)",
    imagem:
      "https://images.unsplash.com/photo-1533090481720-856c6e7c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "いす",
    romaji: "i-su",
    traducao: "cadeira",
    exemplo: "この いす に すわってください。(Por favor, sente nesta cadeira.)",
    imagem:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ほん",
    romaji: "ho-n",
    traducao: "livro",
    exemplo:
      "おもしろい ほん を よんでいます。(Estou lendo um livro interessante.)",
    imagem:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "えんぴつ",
    romaji: "e-n-pi-tsu",
    traducao: "lápis",
    exemplo: "えんぴつ で かきます。(Eu escrevo com um lápis.)",
    imagem:
      "https://images.unsplash.com/photo-1580762970426-0191fc8e2e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "あし",
    romaji: "a-shi",
    traducao: ["pé", "perna"],
    exemplo: "あし が いたいです。(Meu pé/perna dói.)",
    imagem:
      "https://images.unsplash.com/photo-1580130379629-277903829b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "て",
    romaji: "te",
    traducao: "mão",
    exemplo: "て を あらいます。(Eu lavo as mãos.)",
    imagem:
      "https://images.unsplash.com/photo-1604207977805-4407350a4c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "め",
    romaji: "me",
    traducao: "olho",
    exemplo: "かれ の め は あおいです。(Os olhos dele são azuis.)",
    imagem:
      "https://images.unsplash.com/photo-1528961195190-f6baea971c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "くち",
    romaji: "ku-chi",
    traducao: "boca",
    exemplo: "くち を おおきく あけて ください。(Abra bem a boca, por favor.)",
    imagem:
      "https://images.unsplash.com/photo-1595950710003-0357d33e3916?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "やま",
    romaji: "ya-ma",
    traducao: "montanha",
    exemplo:
      "ふじさん は たかい やま です。(O Monte Fuji é uma montanha alta.)",
    imagem:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "かわ",
    romaji: "ka-wa",
    traducao: "rio",
    exemplo: "かわ で およぎます。(Eu nado no rio.)",
    imagem:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "そら",
    romaji: "so-ra",
    traducao: "céu",
    exemplo: "きょう の そら は きれい です。(O céu hoje está bonito.)",
    imagem:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "たいよう",
    romaji: "ta-i-yo-u",
    traducao: "sol",
    exemplo: "たいよう が のぼります。(O sol nasce.)",
    imagem:
      "https://images.unsplash.com/photo-1500332927459-c1b850070a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "つき",
    romaji: "tsu-ki",
    traducao: "lua",
    exemplo:
      "こんばん は つき が きれい ですね。(A lua está bonita esta noite, né?)",
    imagem:
      "https://images.unsplash.com/photo-1532370072499-391f25076858?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ほし",
    romaji: "ho-shi",
    traducao: "estrela",
    exemplo:
      "よる に たくさん の ほし が みえます。(Muitas estrelas são visíveis à noite.)",
    imagem:
      "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "はな",
    romaji: "ha-na",
    traducao: "flor",
    exemplo:
      "きれいな はな が さいて います。(Uma flor bonita está desabrochando.)",
    imagem:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "き",
    romaji: "ki",
    traducao: "árvore",
    exemplo: "おおきな き が あります。(Há uma árvore grande.)",
    imagem:
      "https://images.unsplash.com/photo-1458966480358-a0ac421690e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "くも",
    romaji: "ku-mo",
    traducao: "nuvem",
    exemplo:
      "しろい くも が うかんで います。(Nuvens brancas estão flutuando.)",
    imagem:
      "https://images.unsplash.com/photo-1501630834273-4b5604d2eb31?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "あめ",
    romaji: "a-me",
    traducao: "chuva",
    exemplo: "あめ が ふって います。(Está chovendo.)",
    imagem:
      "https://images.unsplash.com/photo-1515694346937-94d85e41e680?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ゆき",
    romaji: "yu-ki",
    traducao: "neve",
    exemplo: "ゆき が つもって います。(A neve está acumulada.)",
    imagem:
      "https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "かぜ",
    romaji: "ka-ze",
    traducao: "vento",
    exemplo: "つよい かぜ が ふいて います。(Um vento forte está soprando.)",
    imagem:
      "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "はる",
    romaji: "ha-ru",
    traducao: "primavera",
    exemplo: "はる に はな が さきます。(As flores desabrocham na primavera.)",
    imagem:
      "https://images.unsplash.com/photo-1520052990130-c394034369e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "なつ",
    romaji: "na-tsu",
    traducao: "verão",
    exemplo: "なつ は あついです。(O verão é quente.)",
    imagem:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "あき",
    romaji: "a-ki",
    traducao: "outono",
    exemplo:
      "あき に もみじ が きれい です。(As folhas de outono são bonitas.)",
    imagem:
      "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ふゆ",
    romaji: "fu-yu",
    traducao: "inverno",
    exemplo: "ふゆ は さむいです。(O inverno é frio.)",
    imagem:
      "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "あさ",
    romaji: "a-sa",
    traducao: "manhã",
    exemplo: "あさ はやく おきます。(Eu acordo cedo de manhã.)",
    imagem:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ひる",
    romaji: "hi-ru",
    traducao: ["meio-dia", "tarde"],
    exemplo: "ひる に ごはん を たべます。(Eu almoço ao meio-dia.)",
    imagem:
      "https://images.unsplash.com/photo-1596841013098-92a787a01201?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Imagem de almoço/dia
  {
    hiragana: "よる",
    romaji: "yo-ru",
    traducao: "noite",
    exemplo: "よる に ねます。(Eu durmo à noite.)",
    imagem:
      "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "きのう",
    romaji: "ki-no-u",
    traducao: "ontem",
    exemplo: "きのう えいが を みました。(Eu assisti um filme ontem.)",
    imagem:
      "https://images.unsplash.com/photo-1518661083175-8c143677a036?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Página de calendário virada para ontem
  {
    hiragana: "きょう",
    romaji: "kyo-u",
    traducao: "hoje",
    exemplo: "きょう は いい てんき です。(Hoje está um bom tempo.)",
    imagem:
      "https://images.unsplash.com/photo-1604307429607-a808546a0931?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Página de calendário mostrando hoje
  {
    hiragana: "あした",
    romaji: "a-shi-ta",
    traducao: "amanhã",
    exemplo: "あした はれでしょう。(Amanhã fará sol, provavelmente.)",
    imagem:
      "https://images.unsplash.com/photo-1545987336-16575790c827?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Página de calendário virada para amanhã
  {
    hiragana: "おとこ",
    romaji: "o-to-ko",
    traducao: "homem",
    exemplo: "あの おとこ の ひとは だれ ですか。(Quem é aquele homem?)",
    imagem:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "おんな",
    romaji: "o-n-na",
    traducao: "mulher",
    exemplo: "きれいな おんな の ひと ですね。(É uma mulher bonita, né?)",
    imagem:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "こども",
    romaji: "ko-do-mo",
    traducao: "criança",
    exemplo: "こども たち が あそんで います。(As crianças estão brincando.)",
    imagem:
      "https://images.unsplash.com/photo-1488998527040-cf5330052197?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ともだち",
    romaji: "to-mo-da-chi",
    traducao: "amigo",
    exemplo: "わたし の ともだち です。(É meu amigo.)",
    imagem:
      "https://images.unsplash.com/photo-1508609349936-5cf100d39137?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "かぞく",
    romaji: "ka-zo-ku",
    traducao: "família",
    exemplo:
      "わたし の かぞく は よにん です。(Minha família tem quatro pessoas.)",
    imagem:
      "https://images.unsplash.com/photo-1583308064406-f0f1676518a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "せんせい",
    romaji: "se-n-se-i",
    traducao: "professor",
    exemplo:
      "せんせい に しつもん が あります。(Tenho uma pergunta para o professor.)",
    imagem:
      "https://images.unsplash.com/photo-1580894732444-8ec53376912c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "がくせい",
    romaji: "ga-ku-se-i",
    traducao: "estudante",
    exemplo: "わたし は がくせい です。(Eu sou estudante.)",
    imagem:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "かいしゃ",
    romaji: "ka-i-sha",
    traducao: "empresa",
    exemplo: "かいしゃ に つとめます。(Eu trabalho em uma empresa.)",
    imagem:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Prédio de escritórios
  {
    hiragana: "くに",
    romaji: "ku-ni",
    traducao: "país",
    exemplo: "あなたの くに は どこ ですか。(De qual país você é?)",
    imagem:
      "https://images.unsplash.com/photo-1491960763302-08b753001a41?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Globo terrestre ou mapa
  {
    hiragana: "まち",
    romaji: "ma-chi",
    traducao: "cidade",
    exemplo: "この まち は にぎやか です。(Esta cidade é movimentada.)",
    imagem:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "えき",
    romaji: "e-ki",
    traducao: "estação (trem)",
    exemplo: "えき で あいましょう。(Vamos nos encontrar na estação.)",
    imagem:
      "https://images.unsplash.com/photo-1526776909569-08994951d1bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "みせ",
    romaji: "mi-se",
    traducao: "loja",
    exemplo: "あたらしい みせ が できました。(Uma nova loja abriu.)",
    imagem:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "にわ",
    romaji: "ni-wa",
    traducao: "jardim",
    exemplo: "にわ に はな が たくさん あります。(Há muitas flores no jardim.)",
    imagem:
      "https://images.unsplash.com/photo-1460270720990-393f0d81cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "へや",
    romaji: "he-ya",
    traducao: "quarto",
    exemplo: "わたし の へや は ひろい です。(Meu quarto é espaçoso.)",
    imagem:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "おてら",
    romaji: "o-te-ra",
    traducao: "templo (budista)",
    exemplo:
      "きょうと には おてら が おおいです。(Há muitos templos em Kyoto.)",
    imagem:
      "https://images.unsplash.com/photo-1508025839848-168846570de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "じんじゃ",
    romaji: "ji-n-ja",
    traducao: "santuário (xintoísta)",
    exemplo: "じんじゃ に おまいり に いきます。(Vou ao santuário para rezar.)",
    imagem:
      "https://images.unsplash.com/photo-1545569544-759301b3ce15?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "どうぶつ",
    romaji: "do-u-bu-tsu",
    traducao: "animal",
    exemplo: "どうぶつえん に いきました。(Fui ao zoológico.)",
    imagem:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Vários animais
  {
    hiragana: "たべもの",
    romaji: "ta-be-mo-no",
    traducao: "comida",
    exemplo: "すきな たべもの は なん ですか。(Qual é a sua comida favorita?)",
    imagem:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Prato variado
  {
    hiragana: "のみもの",
    romaji: "no-mi-mo-no",
    traducao: "bebida",
    exemplo:
      "のみもの は なに に しますか。(O que você vai querer para beber?)",
    imagem:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Várias bebidas
  {
    hiragana: "くだもの",
    romaji: "ku-da-mo-no",
    traducao: "fruta",
    exemplo: "くだもの を たくさん たべます。(Eu como muitas frutas.)",
    imagem:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Cesta de frutas
  {
    hiragana: "やさい",
    romaji: "ya-sa-i",
    traducao: "vegetal",
    exemplo: "やさい は からだ に いい です。(Vegetais são bons para o corpo.)",
    imagem:
      "https://images.unsplash.com/photo-1590779033100-5a77a83151a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Variedade de vegetais
  {
    hiragana: "にく",
    romaji: "ni-ku",
    traducao: "carne",
    exemplo: "わたし は にく が すき です。(Eu gosto de carne.)",
    imagem:
      "https://images.unsplash.com/photo-1603048200343-09b7ab704c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Carne crua ou cozida
  {
    hiragana: "たまご",
    romaji: "ta-ma-go",
    traducao: "ovo",
    exemplo:
      "あさごはん に たまご を たべます。(Eu como ovo no café da manhã.)",
    imagem:
      "https://images.unsplash.com/photo-1582722872445-45dc5f91063a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "からだ",
    romaji: "ka-ra-da",
    traducao: "corpo",
    exemplo: "からだ の ちょうし が いい です。(Estou me sentindo bem.)",
    imagem:
      "https://images.unsplash.com/photo-1519824106702-7192ea2992be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Silhueta ou pessoa se alongando
  {
    hiragana: "あたま",
    romaji: "a-ta-ma",
    traducao: "cabeça",
    exemplo: "あたま が いたいです。(Minha cabeça dói.)",
    imagem:
      "https://images.unsplash.com/photo-1554811660-9f567144885f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa pensativa ou tocando a cabeça
  {
    hiragana: "かみ",
    romaji: "ka-mi",
    traducao: "cabelo",
    exemplo: "かのじょ の かみ は ながいです。(O cabelo dela é comprido.)",
    imagem:
      "https://images.unsplash.com/photo-1557799880-442634a0013a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "かお",
    romaji: "ka-o",
    traducao: "rosto",
    exemplo: "かお を あらいます。(Eu lavo o rosto.)",
    imagem:
      "https://images.unsplash.com/photo-1599707615918-a29e09e09968?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "みみ",
    romaji: "mi-mi",
    traducao: "orelha",
    exemplo:
      "いぬ の みみ は おおきいです。(As orelhas do cachorro são grandes.)",
    imagem:
      "https://images.unsplash.com/photo-1598244836820-a0f71af10295?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Close de orelha humana ou de animal
  {
    hiragana: "はな (鼻)",
    romaji: "ha-na",
    traducao: "nariz",
    exemplo: "はな が たかい ですね。(Seu nariz é proeminente, né?)",
    imagem:
      "https://images.unsplash.com/photo-1589817296799-a91b500d1587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Close de nariz
  {
    hiragana: "は (歯)",
    romaji: "ha",
    traducao: "dente",
    exemplo: "は を みがきます。(Eu escovo os dentes.)",
    imagem:
      "https://images.unsplash.com/photo-1583339090030-1c1f92396c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Sorriso mostrando dentes ou escova
  {
    hiragana: "うで",
    romaji: "u-de",
    traducao: "braço",
    exemplo: "うで を あげてください。(Por favor, levante o braço.)",
    imagem:
      "https://images.unsplash.com/photo-1559588510-4158089731b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ゆび",
    romaji: "yu-bi",
    traducao: "dedo",
    exemplo: "ゆび を きりました。(Eu cortei o dedo.)",
    imagem:
      "https://images.unsplash.com/photo-1590006863749-a03f62c48017?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "おなか",
    romaji: "o-na-ka",
    traducao: "barriga",
    exemplo: "おなか が すきました。(Estou com fome.)",
    imagem:
      "https://images.unsplash.com/photo-1604882355140-9b4497a73290?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa tocando a barriga
  {
    hiragana: "せなか",
    romaji: "se-na-ka",
    traducao: "costas",
    exemplo: "せなか が かゆいです。(Minhas costas estão coçando.)",
    imagem:
      "https://images.unsplash.com/photo-1544164552-1b0950a69787?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "こし",
    romaji: "ko-shi",
    traducao: ["quadril", "cintura", "lombar"],
    exemplo: "こし が いたいです。(Meu quadril/lombar dói.)",
    imagem:
      "https://images.unsplash.com/photo-1579806350598-168a1375adf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa com dor na lombar
  {
    hiragana: "ひざ",
    romaji: "hi-za",
    traducao: "joelho",
    exemplo: "ひざ を うちました。(Eu bati o joelho.)",
    imagem:
      "https://images.unsplash.com/photo-1593810454357-93b2745116c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "いろ",
    romaji: "i-ro",
    traducao: "cor",
    exemplo: "すきな いろ は なん ですか。(Qual é a sua cor favorita?)",
    imagem:
      "https://images.unsplash.com/photo-1490844083138-44df68713b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Paleta de cores ou lápis de cor
  {
    hiragana: "あか",
    romaji: "a-ka",
    traducao: "vermelho",
    exemplo: "あかいくるま が ほしい です。(Quero um carro vermelho.)",
    imagem:
      "https://images.unsplash.com/photo-1508013807015-93c43d4e9308?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Algo vermelho
  {
    hiragana: "あお",
    romaji: "a-o",
    traducao: "azul",
    exemplo: "そら は あおいです。(O céu é azul.)",
    imagem:
      "https://images.unsplash.com/photo-1533127321598-8c69387e55be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Algo azul
  {
    hiragana: "しろ",
    romaji: "shi-ro",
    traducao: "branco",
    exemplo: "しろい ねこ が かわいい です。(O gato branco é fofo.)",
    imagem:
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Gato branco
  {
    hiragana: "くろ",
    romaji: "ku-ro",
    traducao: "preto",
    exemplo: "くろい ふく を きています。(Estou vestindo roupa preta.)",
    imagem:
      "https://images.unsplash.com/photo-1508344928950-a14ea521794a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Roupa preta
  {
    hiragana: "きいろ",
    romaji: "ki-i-ro",
    traducao: "amarelo",
    exemplo:
      "きいろい はな が さいています。(Flores amarelas estão desabrochando.)",
    imagem:
      "https://images.unsplash.com/photo-1468327768560-75b7a92c6208?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Flores amarelas
  {
    hiragana: "みどり",
    romaji: "mi-do-ri",
    traducao: "verde",
    exemplo: "やま は みどり です。(A montanha é verde.)",
    imagem:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Paisagem verde
  {
    hiragana: "ちゃいろ",
    romaji: "cha-i-ro",
    traducao: "marrom",
    exemplo: "ちゃいろ の かばん を もっています。(Eu tenho uma bolsa marrom.)",
    imagem:
      "https://images.unsplash.com/photo-1591163905180-7a7a4c277f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Bolsa marrom
  {
    hiragana: "おおきい",
    romaji: "o-o-ki-i",
    traducao: "grande",
    exemplo: "この いえ は おおきい です。(Esta casa é grande.)",
    imagem:
      "https://images.unsplash.com/photo-1515974256630-babc85765b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Algo grande vs pequeno
  {
    hiragana: "ちいさい",
    romaji: "chi-i-sa-i",
    traducao: "pequeno",
    exemplo:
      "ちいさい こども が あそんでいます。(Uma criança pequena está brincando.)",
    imagem:
      "https://images.unsplash.com/photo-1604936149368-7077741a3541?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Algo pequeno
  {
    hiragana: "たかい",
    romaji: "ta-ka-i",
    traducao: ["alto", "caro"],
    exemplo: "あの やま は たかい です。(Aquela montanha é alta.)",
    imagem:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Montanha alta
  {
    hiragana: "ひくい",
    romaji: "hi-ku-i",
    traducao: "baixo (altura)",
    exemplo: "この つくえ は ひくい です。(Esta mesa é baixa.)",
    imagem:
      "https://images.unsplash.com/photo-1505304292203-3ac81b9cb4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Objeto baixo
  {
    hiragana: "ながい",
    romaji: "na-ga-i",
    traducao: ["longo", "comprido"],
    exemplo: "かわ は ながいです。(O rio é longo.)",
    imagem:
      "https://images.unsplash.com/photo-1503618792826-4130586943a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Algo comprido, como uma estrada
  {
    hiragana: "みじかい",
    romaji: "mi-ji-ka-i",
    traducao: "curto",
    exemplo: "かれ の はなし は みじかい です。(A história dele é curta.)",
    imagem:
      "https://images.unsplash.com/photo-1517345883938-9938b96f1a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Algo curto, como um lápis
  {
    hiragana: "あつい",
    romaji: "a-tsu-i",
    traducao: "quente (clima/objeto)",
    exemplo: "きょう は あつい です。(Hoje está quente.)",
    imagem:
      "https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Sol forte ou termômetro
  {
    hiragana: "さむい",
    romaji: "sa-mu-i",
    traducao: "frio (clima)",
    exemplo: "ふゆ は さむい です。(O inverno é frio.)",
    imagem:
      "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Neve ou pessoa agasalhada
  {
    hiragana: "つめたい",
    romaji: "tsu-me-ta-i",
    traducao: "frio (objeto/toque)",
    exemplo: "つめたい みず を のみたい です。(Quero beber água fria.)",
    imagem:
      "https://images.unsplash.com/photo-1600078027809-995c11486b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Copo com gelo
  {
    hiragana: "あたらしい",
    romaji: "a-ta-ra-shi-i",
    traducao: "novo",
    exemplo: "あたらしい くつ を かいました。(Comprei sapatos novos.)",
    imagem:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Sapatos novos
  {
    hiragana: "ふるい",
    romaji: "fu-ru-i",
    traducao: "velho (coisas)",
    exemplo: "この ほん は ふるい です。(Este livro é velho.)",
    imagem:
      "https://images.unsplash.com/photo-1507090595156-8c671479c9e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Livro antigo
  {
    hiragana: "いい",
    romaji: "i-i",
    traducao: "bom",
    exemplo: "いい てんき ですね。(Está um tempo bom, né?)",
    imagem:
      "https://images.unsplash.com/photo-1530951401735-31e03c54554e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Polegar para cima ou sorriso
  {
    hiragana: "わるい",
    romaji: "wa-ru-i",
    traducao: "ruim",
    exemplo: "かれ は わるい ひとではありません。(Ele não é uma pessoa ruim.)",
    imagem:
      "https://images.unsplash.com/photo-1555025053-c2f855d44e08?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Polegar para baixo ou expressão triste
  {
    hiragana: "おもしろい",
    romaji: "o-mo-shi-ro-i",
    traducao: ["interessante", "engraçado"],
    exemplo: "この えいが は おもしろい です。(Este filme é interessante.)",
    imagem:
      "https://images.unsplash.com/photo-1574267432553-9b4628088309?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa rindo ou filme
  {
    hiragana: "つまらない",
    romaji: "tsu-ma-ra-na-i",
    traducao: ["chato", "entediante"],
    exemplo:
      "この テレビばんぐみ は つまらない です。(Este programa de TV é chato.)",
    imagem:
      "https://images.unsplash.com/photo-1509347019443-0ac4551f2053?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa entediada
  {
    hiragana: "おいしい",
    romaji: "o-i-shi-i",
    traducao: "delicioso",
    exemplo: "この ケーキ は おいしい です。(Este bolo é delicioso.)",
    imagem:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Comida gostosa
  {
    hiragana: "まずい",
    romaji: "ma-zu-i",
    traducao: "ruim (sabor)",
    exemplo: "この りょうり は まずい です。(Esta comida está ruim.)",
    imagem:
      "https://images.unsplash.com/photo-1505253669027-c4f77d0fac90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Comida com aparência ruim ou pessoa fazendo careta
  {
    hiragana: "たのしい",
    romaji: "ta-no-shi-i",
    traducao: ["divertido", "agradável"],
    exemplo: "りょこう は たのしい です。(Viajar é divertido.)",
    imagem:
      "https://images.unsplash.com/photo-1501117715929-021069201543?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoas se divertindo
  {
    hiragana: "うれしい",
    romaji: "u-re-shi-i",
    traducao: ["feliz", "contente"],
    exemplo:
      "プレゼント を もらって うれしい です。(Estou feliz por ter recebido o presente.)",
    imagem:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa sorrindo ou presente
  {
    hiragana: "かなしい",
    romaji: "ka-na-shi-i",
    traducao: "triste",
    exemplo:
      "ともだち と わかれて かなしい です。(Estou triste por me separar do meu amigo.)",
    imagem:
      "https://images.unsplash.com/photo-1534335945067-8f4d84889725?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa triste ou chorando
  {
    hiragana: "いそがしい",
    romaji: "i-so-ga-shi-i",
    traducao: "ocupado",
    exemplo: "きょう は とても いそがしい です。(Hoje estou muito ocupado.)",
    imagem:
      "https://images.unsplash.com/photo-1554224154-260325c7579c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa trabalhando muito
  {
    hiragana: "ひま",
    romaji: "hi-ma",
    traducao: ["livre", "desocupado"],
    exemplo: "きょう は ひま です。(Hoje estou livre.)",
    imagem:
      "https://images.unsplash.com/photo-1507808913259-86c765b9076a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa relaxando
  {
    hiragana: "げんき",
    romaji: "ge-n-ki",
    traducao: ["saudável", "animado", "bem"],
    exemplo: "おげんきですか。(Como você está?)",
    imagem:
      "https://images.unsplash.com/photo-1567413778900-a435450026a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa saudável e feliz
  {
    hiragana: "しずか",
    romaji: "shi-zu-ka",
    traducao: ["quieto", "calmo", "silencioso"],
    exemplo: "この へや は しずか です。(Este quarto é quieto.)",
    imagem:
      "https://images.unsplash.com/photo-1499622503166-083e07ae23fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Biblioteca ou paisagem calma
  {
    hiragana: "にぎやか",
    romaji: "ni-gi-ya-ka",
    traducao: ["movimentado", "barulhento", "animado"],
    exemplo:
      "しぶや は にぎやか な まち です。(Shibuya é uma cidade movimentada.)",
    imagem:
      "https://images.unsplash.com/photo-1506038731962-e7a4b5a27569?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Rua movimentada
  {
    hiragana: "きれい",
    romaji: "ki-re-i",
    traducao: ["bonito", "limpo"],
    exemplo: "この はな は きれい ですね。(Esta flor é bonita, né?)",
    imagem:
      "https://images.unsplash.com/photo-1460039230329-eb070fc6477c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Flor bonita ou quarto limpo
  {
    hiragana: "てんき",
    romaji: "te-n-ki",
    traducao: "tempo (clima)",
    exemplo: "いい てんき です。(Está um tempo bom.)",
    imagem:
      "https://images.unsplash.com/photo-1530569220548-cf131691c1f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Sol e nuvens
  {
    hiragana: "でんき",
    romaji: "de-n-ki",
    traducao: ["eletricidade", "luz"],
    exemplo: "でんき を つけてください。(Por favor, acenda a luz.)",
    imagem:
      "https://images.unsplash.com/photo-1487754180451-c456fccbd318?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Lâmpada
  {
    hiragana: "じかん",
    romaji: "ji-ka-n",
    traducao: ["tempo (duração)", "hora"],
    exemplo: "じかん が ありません。(Não tenho tempo.)",
    imagem:
      "https://images.unsplash.com/photo-1495055154266-57bbdeada43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Relógio
  {
    hiragana: "おかね",
    romaji: "o-ka-ne",
    traducao: "dinheiro",
    exemplo: "おかね が たりません。(Não tenho dinheiro suficiente.)",
    imagem:
      "https://images.unsplash.com/photo-1521383767067-0b1b8142a7b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ことば",
    romaji: "ko-to-ba",
    traducao: ["palavra", "linguagem"],
    exemplo: "あたらしい ことば を おぼえます。(Eu aprendo palavras novas.)",
    imagem:
      "https://images.unsplash.com/photo-1455390587461-d28cba44a1b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Dicionário ou letras
  {
    hiragana: "もじ",
    romaji: "mo-ji",
    traducao: ["letra", "caractere"],
    exemplo:
      "ひらがな は にほん の もじ です。(Hiragana são caracteres japoneses.)",
    imagem:
      "https://images.unsplash.com/photo-1580377968131-bac075a3f3d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Letras aleatórias
  {
    hiragana: "え",
    romaji: "e",
    traducao: ["desenho", "pintura"],
    exemplo: "え を かく のが すき です。(Gosto de desenhar.)",
    imagem:
      "https://images.unsplash.com/photo-1505692089404-61739008f931?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "おんがく",
    romaji: "o-n-ga-ku",
    traducao: "música",
    exemplo: "おんがく を ききます。(Eu ouço música.)",
    imagem:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Fones de ouvido ou notas musicais
  {
    hiragana: "うた",
    romaji: "u-ta",
    traducao: "canção",
    exemplo: "うた を うたいます。(Eu canto uma canção.)",
    imagem:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Microfone ou pessoa cantando
  {
    hiragana: "しごと",
    romaji: "shi-go-to",
    traducao: ["trabalho", "emprego"],
    exemplo: "しごと が いそがしい です。(O trabalho está corrido.)",
    imagem:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pessoa trabalhando no computador
  {
    hiragana: "べんきょう",
    romaji: "be-n-kyo-u",
    traducao: "estudo",
    exemplo:
      "まいにち にほんご を べんきょうします。(Eu estudo japonês todos os dias.)",
    imagem:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Livros e caderno
  {
    hiragana: "りょこう",
    romaji: "ryo-ko-u",
    traducao: "viagem",
    exemplo:
      "なつやすみ に りょこう に いきます。(Vou viajar nas férias de verão.)",
    imagem:
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Paisagem de viagem
  {
    hiragana: "しゃしん",
    romaji: "sha-shi-n",
    traducao: "foto",
    exemplo: "しゃしん を とってもいいですか。(Posso tirar uma foto?)",
    imagem:
      "https://images.unsplash.com/photo-1495745966610-2a64c16003ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Câmera
  {
    hiragana: "てがみ",
    romaji: "te-ga-mi",
    traducao: "carta",
    exemplo:
      "ともだち に てがみ を かきます。(Eu escrevo uma carta para um amigo.)",
    imagem:
      "https://images.unsplash.com/photo-1517862039366-c19a01c7a400?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "きっぷ",
    romaji: "ki-ppu",
    traducao: ["bilhete", "passagem"],
    exemplo: "えき で きっぷ を かいます。(Eu compro o bilhete na estação.)",
    imagem:
      "https://images.unsplash.com/photo-1524171139119-fb0a8525859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Bilhetes de trem ou avião
  {
    hiragana: "かぎ",
    romaji: "ka-gi",
    traducao: "chave",
    exemplo: "いえ の かぎ を なくしました。(Perdi a chave de casa.)",
    imagem:
      "https://images.unsplash.com/photo-1575368160898-6e81657202ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "とけい",
    romaji: "to-ke-i",
    traducao: "relógio",
    exemplo:
      "いま なんじ ですか、とけい を みてください。(Que horas são agora, por favor olhe o relógio.)",
    imagem:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "かさ",
    romaji: "ka-sa",
    traducao: "guarda-chuva",
    exemplo:
      "あめ ですから、かさ を もっていきます。(Como está chovendo, vou levar o guarda-chuva.)",
    imagem:
      "https://images.unsplash.com/photo-1534089720013-9f5214595136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "くつ",
    romaji: "ku-tsu",
    traducao: "sapato",
    exemplo: "あたらしい くつ を はきます。(Eu calço sapatos novos.)",
    imagem:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ふく",
    romaji: "fu-ku",
    traducao: "roupa",
    exemplo: "ふく を かいに いきます。(Vou comprar roupas.)",
    imagem:
      "https://images.unsplash.com/photo-1593030103051-1055808059b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Arara de roupas
  {
    hiragana: "かばん",
    romaji: "ka-ba-n",
    traducao: ["bolsa", "mala"],
    exemplo: "この かばん は おもいです。(Esta bolsa é pesada.)",
    imagem:
      "https://images.unsplash.com/photo-1584917865452-dea61d610a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "めがね",
    romaji: "me-ga-ne",
    traducao: "óculos",
    exemplo: "わたし は めがね を かけています。(Eu uso óculos.)",
    imagem:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },

  // --- 50 NOVAS PALAVRAS (Com URLs do Unsplash - VERIFIQUE TODAS!) ---
  {
    hiragana: "しんぶん",
    romaji: "shi-n-bu-n",
    traducao: "jornal",
    exemplo: "まいあさ しんぶん を よみます。(Eu leio o jornal toda manhã.)",
    imagem:
      "https://images.unsplash.com/photo-1585241936939-e079305b8f47?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ざっし",
    romaji: "za-sshi",
    traducao: "revista",
    exemplo: "この ざっし は おもしろい です。(Esta revista é interessante.)",
    imagem:
      "https://images.unsplash.com/photo-1543094758-0ebc3a494082?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "じしょ",
    romaji: "ji-sho",
    traducao: "dicionário",
    exemplo:
      "わからない ことば を じしょ で しらべます。(Eu procuro palavras que não entendo no dicionário.)",
    imagem:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ちず",
    romaji: "chi-zu",
    traducao: "mapa",
    exemplo: "ちず を みて いきましょう。(Vamos olhando o mapa.)",
    imagem:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "おみやげ",
    romaji: "o-mi-ya-ge",
    traducao: ["lembrancinha", "souvenir"],
    exemplo:
      "ともだち に おみやげ を かいました。(Comprei uma lembrancinha para meu amigo.)",
    imagem:
      "https://images.unsplash.com/photo-1507546563915-3747e5c87893?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "もんだい",
    romaji: "mo-n-da-i",
    traducao: ["problema", "questão"],
    exemplo: "この もんだい は むずかしい です。(Este problema é difícil.)",
    imagem:
      "https://images.unsplash.com/photo-1521737852577-688864a85992?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Ponto de interrogação
  {
    hiragana: "こたえ",
    romaji: "ko-ta-e",
    traducao: "resposta",
    exemplo: "こたえ を おしえてください。(Por favor, me diga a resposta.)",
    imagem:
      "https://images.unsplash.com/photo-1501527459-2d5161103493?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Lâmpada de ideia ou checkmark
  {
    hiragana: "はじめ",
    romaji: "ha-ji-me",
    traducao: ["começo", "início"],
    exemplo: "はじめ に なに を しますか。(O que você faz no começo?)",
    imagem:
      "https://images.unsplash.com/photo-1486572788966-cfce76179e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Linha de partida
  {
    hiragana: "おわり",
    romaji: "o-wa-ri",
    traducao: ["fim", "final"],
    exemplo:
      "えいが の おわり は かんどうてき でした。(O final do filme foi emocionante.)",
    imagem:
      "https://images.unsplash.com/photo-1590663699153-27d3607cce9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // "The End" ou linha de chegada
  {
    hiragana: "あさって",
    romaji: "a-sa-tte",
    traducao: "depois de amanhã",
    exemplo: "あさって テスト が あります。(Tenho uma prova depois de amanhã.)",
    imagem:
      "https://images.unsplash.com/photo-1521993981536-57898c397c5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário com data futura
  {
    hiragana: "おととい",
    romaji: "o-to-to-i",
    traducao: "anteontem",
    exemplo: "おととい かいもの に いきました。(Fui às compras anteontem.)",
    imagem:
      "https://images.unsplash.com/photo-1551100103-108a27559743?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário com data passada
  {
    hiragana: "せんしゅう",
    romaji: "se-n-shu-u",
    traducao: "semana passada",
    exemplo:
      "せんしゅう きょうと へ いきました。(Fui para Kyoto na semana passada.)",
    imagem:
      "https://images.unsplash.com/photo-1545987336-16575790c827?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário mostrando semana anterior
  {
    hiragana: "こんしゅう",
    romaji: "ko-n-shu-u",
    traducao: "esta semana",
    exemplo: "こんしゅう は いそがしい です。(Esta semana estou ocupado.)",
    imagem:
      "https://images.unsplash.com/photo-1604307429607-a808546a0931?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário destacando a semana atual
  {
    hiragana: "らいしゅう",
    romaji: "ra-i-shu-u",
    traducao: "próxima semana",
    exemplo: "らいしゅう りょこう に いきます。(Vou viajar na próxima semana.)",
    imagem:
      "https://images.unsplash.com/photo-1518661083175-8c143677a036?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário mostrando próxima semana
  {
    hiragana: "せんげつ",
    romaji: "se-n-ge-tsu",
    traducao: "mês passado",
    exemplo:
      "せんげつ あたらしい くるま を かいました。(Comprei um carro novo no mês passado.)",
    imagem:
      "https://images.unsplash.com/photo-1551100103-108a27559743?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário mostrando mês anterior
  {
    hiragana: "こんげつ",
    romaji: "ko-n-ge-tsu",
    traducao: "este mês",
    exemplo:
      "こんげつ は しごと が おおいです。(Este mês tenho muito trabalho.)",
    imagem:
      "https://images.unsplash.com/photo-1518661083175-8c143677a036?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário destacando o mês atual
  {
    hiragana: "らいげつ",
    romaji: "ra-i-ge-tsu",
    traducao: "próximo mês",
    exemplo: "らいげつ ひっこします。(Vou me mudar no próximo mês.)",
    imagem:
      "https://images.unsplash.com/photo-1604307429607-a808546a0931?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário mostrando próximo mês
  {
    hiragana: "きょねん",
    romaji: "kyo-ne-n",
    traducao: "ano passado",
    exemplo: "きょねん にほん へ いきました。(Fui ao Japão no ano passado.)",
    imagem:
      "https://images.unsplash.com/photo-1545987336-16575790c827?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário mostrando ano anterior
  {
    hiragana: "ことし",
    romaji: "ko-to-shi",
    traducao: "este ano",
    exemplo:
      "ことし は いい とし に なりそうです。(Este ano parece que vai ser bom.)",
    imagem:
      "https://images.unsplash.com/photo-1518661083175-8c143677a036?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário destacando o ano atual
  {
    hiragana: "らいねん",
    romaji: "ra-i-ne-n",
    traducao: "próximo ano",
    exemplo:
      "らいねん だいがく を そつぎょうします。(Vou me formar na universidade no próximo ano.)",
    imagem:
      "https://images.unsplash.com/photo-1604307429607-a808546a0931?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Calendário mostrando próximo ano
  {
    hiragana: "きた",
    romaji: "ki-ta",
    traducao: "norte",
    exemplo: "きた に やま が あります。(Há montanhas ao norte.)",
    imagem:
      "https://images.unsplash.com/photo-1505491338633-79507c40f3e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Bússola apontando norte ou paisagem norte
  {
    hiragana: "みなみ",
    romaji: "mi-na-mi",
    traducao: "sul",
    exemplo:
      "みなみ の しま は あたたかい です。(As ilhas do sul são quentes.)",
    imagem:
      "https://images.unsplash.com/photo-1569360402466-9095989e4618?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Bússola apontando sul ou paisagem tropical
  {
    hiragana: "ひがし",
    romaji: "hi-ga-shi",
    traducao: "leste",
    exemplo: "ひがし から たいよう が のぼります。(O sol nasce do leste.)",
    imagem:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Nascer do sol
  {
    hiragana: "にし",
    romaji: "ni-shi",
    traducao: "oeste",
    exemplo: "にし に うみ が みえます。(O mar é visível a oeste.)",
    imagem:
      "https://images.unsplash.com/photo-1501419737910-812171703800?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Pôr do sol
  {
    hiragana: "うえ",
    romaji: "u-e",
    traducao: ["em cima", "acima", "sobre"],
    exemplo:
      "つくえ の うえ に ほん が あります。(Há um livro em cima da mesa.)",
    imagem:
      "https://images.unsplash.com/photo-1517415223980-91c0dd5c600e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Objeto em cima de outro
  {
    hiragana: "した",
    romaji: "shi-ta",
    traducao: ["embaixo", "abaixo", "sob"],
    exemplo: "いす の した に ねこ が います。(Há um gato embaixo da cadeira.)",
    imagem:
      "https://images.unsplash.com/photo-1604134967507-d369797a0298?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Objeto embaixo de outro
  {
    hiragana: "まえ",
    romaji: "ma-e",
    traducao: ["frente", "antes", "diante"],
    exemplo:
      "えき の まえ で あいましょう。(Vamos nos encontrar na frente da estação.)",
    imagem:
      "https://images.unsplash.com/photo-1506755594592-3ab4d12f0050?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Vista frontal de algo
  {
    hiragana: "うしろ",
    romaji: "u-shi-ro",
    traducao: "atrás",
    exemplo:
      "いえ の うしろ に にわ が あります。(Há um jardim atrás da casa.)",
    imagem:
      "https://images.unsplash.com/photo-1526040073869-2889404a0159?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Vista traseira de algo
  {
    hiragana: "みぎ",
    romaji: "mi-gi",
    traducao: "direita",
    exemplo:
      "つぎ の かど を みぎ に まがってください。(Por favor, vire à direita na próxima esquina.)",
    imagem:
      "https://images.unsplash.com/photo-1596908012090-a23170770e05?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Seta para a direita ou mão direita
  {
    hiragana: "ひだり",
    romaji: "hi-da-ri",
    traducao: "esquerda",
    exemplo: "ひだり に ぎんこう が あります。(Há um banco à esquerda.)",
    imagem:
      "https://images.unsplash.com/photo-1596908012003-1993048099d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Seta para a esquerda ou mão esquerda
  {
    hiragana: "なか",
    romaji: "na-ka",
    traducao: "dentro",
    exemplo: "はこ の なか に なに が ありますか。(O que há dentro da caixa?)",
    imagem:
      "https://images.unsplash.com/photo-1590698933947-a202b069a861?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Algo dentro de uma caixa
  {
    hiragana: "そと",
    romaji: "so-to",
    traducao: "fora",
    exemplo: "そと は さむい です。(Está frio lá fora.)",
    imagem:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Paisagem externa
  {
    hiragana: "となり",
    romaji: "to-na-ri",
    traducao: "ao lado",
    exemplo:
      "ゆうびんきょく の となり に スーパー が あります。(Há um supermercado ao lado dos correios.)",
    imagem:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Dois objetos lado a lado
  {
    hiragana: "ちかく",
    romaji: "chi-ka-ku",
    traducao: "perto",
    exemplo: "えき の ちかく に すんでいます。(Eu moro perto da estação.)",
    imagem:
      "https://images.unsplash.com/photo-1506787295929-039276360139?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Zoom em um mapa ou objetos próximos
  {
    hiragana: "あいだ",
    romaji: "a-i-da",
    traducao: "entre",
    exemplo:
      "ぎんこう と スーパー の あいだ に はなや が あります。(Há uma floricultura entre o banco e o supermercado.)",
    imagem:
      "https://images.unsplash.com/photo-1529220461409-045141ca92c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Objeto entre outros dois
  {
    hiragana: "くすり",
    romaji: "ku-su-ri",
    traducao: "remédio",
    exemplo:
      "かぜ を ひいたので くすり を のみました。(Peguei um resfriado, então tomei remédio.)",
    imagem:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ふうとう",
    romaji: "fu-u-to-u",
    traducao: "envelope",
    exemplo:
      "てがみ を ふうとう に いれました。(Coloquei a carta no envelope.)",
    imagem:
      "https://images.unsplash.com/photo-1600106769094-69979991f530?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "きって",
    romaji: "ki-tte",
    traducao: "selo",
    exemplo: "ふうとう に きって を はります。(Eu colo o selo no envelope.)",
    imagem:
      "https://images.unsplash.com/photo-1611289449045-505ab7f31d84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "はがき",
    romaji: "ha-ga-ki",
    traducao: "cartão postal",
    exemplo:
      "ともだち に はがき を おくります。(Eu envio um cartão postal para um amigo.)",
    imagem:
      "https://images.unsplash.com/photo-1518064710948-5b06d0850dea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "にもつ",
    romaji: "ni-mo-tsu",
    traducao: ["bagagem", "pacote", "carga"],
    exemplo: "この にもつ は おもい です。(Esta bagagem é pesada.)",
    imagem:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "げんかん",
    romaji: "ge-n-ka-n",
    traducao: "entrada (de casa japonesa)",
    exemplo: "げんかん で くつ を ぬぎます。(Tiramos os sapatos na entrada.)",
    imagem:
      "https://images.unsplash.com/photo-1605090049521-06b310911004?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Entrada japonesa
  {
    hiragana: "ろうか",
    romaji: "ro-u-ka",
    traducao: "corredor",
    exemplo:
      "ろうか は しずか に あるきましょう。(Vamos andar em silêncio no corredor.)",
    imagem:
      "https://images.unsplash.com/photo-1580096760995-79f3c5b03a10?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "かいだん",
    romaji: "ka-i-da-n",
    traducao: ["escada", "escadas"],
    exemplo: "かいだん を のぼります。(Subo as escadas.)",
    imagem:
      "https://images.unsplash.com/photo-1507035576003-6d1000300e9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "おふろ",
    romaji: "o-fu-ro",
    traducao: "banho (banheira japonesa)",
    exemplo:
      "まいにち おふろ に はいります。(Eu tomo banho (de banheira) todos os dias.)",
    imagem:
      "https://images.unsplash.com/photo-1580542040274-6df1822d6eaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Banheira
  {
    hiragana: "といれ",
    romaji: "to-i-re",
    traducao: ["banheiro", "toalete", "sanitário"],
    exemplo: "といれ は どこ ですか。(Onde é o banheiro?)",
    imagem:
      "https://images.unsplash.com/photo-1599846848210-630d50a43345?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "まど",
    romaji: "ma-do",
    traducao: "janela",
    exemplo: "まど を あけてください。(Por favor, abra a janela.)",
    imagem:
      "https://images.unsplash.com/photo-1520430049103-74c91f405ec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ドア",
    romaji: "do-a",
    traducao: "porta",
    exemplo: "ドア を しめてください。(Por favor, feche a porta.)",
    imagem:
      "https://images.unsplash.com/photo-1525306520449-cdd8acc28f4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "でんわ",
    romaji: "de-n-wa",
    traducao: "telefone",
    exemplo: "ともだち に でんわ を します。(Eu telefono para um amigo.)",
    imagem:
      "https://images.unsplash.com/photo-1591462339919-5508a89702de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    hiragana: "ばんごう",
    romaji: "ba-n-go-u",
    traducao: "número",
    exemplo:
      "でんわ ばんごう を おしえてください。(Por favor, me diga seu número de telefone.)",
    imagem:
      "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  }, // Teclado numérico ou números
];
