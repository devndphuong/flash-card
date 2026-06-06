export interface Flashcard {
  word: string; // Kanji
  type: string; // Loại từ (N, V, A...)
  reading: string; // Hiragana
  romaji: string;
  meaning: string; // Nghĩa tiếng Việt
  id?: string; // optional unique id
  idChapter: number; 
  uniqueId: string;
}

export const initialBaiExp: Flashcard[] = [
  {
    id: "1",
    word: "私",
    type: "(N)",
    reading: "わたし",
    romaji: "watashi",
    meaning: "tôi",
    idChapter: 0,
    uniqueId: ""
  }
];

export const initialBai1: Flashcard[] = [
  {
    id: "1",
    word: "私",
    type: "(N)",
    reading: "わたし",
    romaji: "watashi",
    meaning: "tôi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "私たち",
    type: "(N)",
    reading: "わたしたち",
    romaji: "watashitachi",
    meaning: "chúng tôi, chúng ta",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "彼",
    type: "(N)",
    reading: "かれ",
    romaji: "kare",
    meaning: "anh ấy, bạn trai",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "彼女",
    type: "(N)",
    reading: "かのじょ",
    romaji: "kanojo",
    meaning: "cô ấy, bạn gái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "皆さん",
    type: "(N)",
    reading: "みなさん",
    romaji: "minasan",
    meaning: "các anh chị, các ông bà, các bạn, quý vị",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "あなた",
    type: "(N)",
    reading: "あなた",
    romaji: "anata",
    meaning: "anh/chị, ông/bà, bạn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "あの人",
    type: "(N)",
    reading: "あのひと",
    romaji: "ano hito",
    meaning: "người đó, anh kia, chị kia",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "あの方",
    type: "(N)",
    reading: "あのかた",
    romaji: "ano kata",
    meaning: "(vị kia) là cách nói lịch sự của あのひと",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "教師",
    type: "(N)",
    reading: "きょうし",
    romaji: "kyoushi",
    meaning: "giáo viên",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "先生",
    type: "(N)",
    reading: "せんせい",
    romaji: "sensei",
    meaning: "thầy/cô",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "学生",
    type: "(N)",
    reading: "がくせい",
    romaji: "gakusei",
    meaning: "học sinh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "運転手",
    type: "(N)",
    reading: "うんてんしゅ",
    romaji: "untenshu",
    meaning: "tài xế",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "会社員",
    type: "(N)",
    reading: "かいしゃいん",
    romaji: "kaishain",
    meaning: "nhân viên công ty",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "社員",
    type: "(N)",
    reading: "しゃいん",
    romaji: "shain",
    meaning: "nhân viên công ty",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "銀行員",
    type: "(N)",
    reading: "ぎんこういん",
    romaji: "ginkouin",
    meaning: "nhân viên ngân hàng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "医者",
    type: "(N)",
    reading: "いしゃ",
    romaji: "isha",
    meaning: "bác sĩ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "エンジニア",
    type: "(N)",
    reading: "エンジニア",
    romaji: "enjinia",
    meaning: "kỹ sư",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "研究者",
    type: "(N)",
    reading: "けんきゅうしゃ",
    romaji: "kenkyuusha",
    meaning: "nhà nghiên cứu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "留学生",
    type: "(N)",
    reading: "りゅうがくせい",
    romaji: "ryuugakusei",
    meaning: "du học sinh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "だれ",
    type: "(N)",
    reading: "だれ",
    romaji: "dare",
    meaning: "ai",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "どなた",
    type: "(N)",
    reading: "どなた",
    romaji: "donata",
    meaning: "(vị nào) là cách nói lịch sự của だれ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "大学",
    type: "(N)",
    reading: "だいがく",
    romaji: "daigaku",
    meaning: "đại học, trường đại học",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "病院",
    type: "(N)",
    reading: "びょういん",
    romaji: "byouin",
    meaning: "bệnh viện",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "ベトナムご",
    type: "(N)",
    reading: "ベトナムご",
    romaji: "Betonamugo",
    meaning: "tiếng Việt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "日本",
    type: "(N)",
    reading: "にほん",
    romaji: "Nihon",
    meaning: "Nhật Bản",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "韓国",
    type: "(N)",
    reading: "かんこく",
    romaji: "Kankoku",
    meaning: "Hàn Quốc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "中国",
    type: "(N)",
    reading: "ちゅうごく",
    romaji: "Chuugoku",
    meaning: "Trung Quốc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "アメリカ",
    type: "(N)",
    reading: "アメリカ",
    romaji: "Amerika",
    meaning: "Mỹ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "イギリス",
    type: "(N)",
    reading: "イギリス",
    romaji: "Igirisu",
    meaning: "Anh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "～人",
    type: "(N)",
    reading: "～じん",
    romaji: "~jin",
    meaning: "người ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "～語",
    type: "(N)",
    reading: "～ご",
    romaji: "~go",
    meaning: "tiếng ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "出身",
    type: "(N)",
    reading: "しゅっしん",
    romaji: "shusshin",
    meaning: "xuất thân, quê quán",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "～から来ました",
    type: "(Phr)",
    reading: "～からきました",
    romaji: "~kara kimashita",
    meaning: "(tôi) đến từ ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "はい",
    type: "(Exp)",
    reading: "はい",
    romaji: "hai",
    meaning: "vâng, dạ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "いいえ",
    type: "(Exp)",
    reading: "いいえ",
    romaji: "iie",
    meaning: "không",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "失礼ですが",
    type: "(Exp)",
    reading: "しつれいですが",
    romaji: "shitsurei desu ga",
    meaning: "Xin lỗi,… (dùng khi hỏi thông tin cá nhân)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "お名前をもう一度",
    type: "(Exp)",
    reading: "おなまえをもういちど",
    romaji: "onamae o mou ichido",
    meaning: "Anh/Chị vui lòng nhắc lại tên một lần nữa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "お願いします",
    type: "(Exp)",
    reading: "おねがいします",
    romaji: "onegaishimasu",
    meaning: "Rất mong được giúp đỡ / Xin vui lòng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39",
    word: "どうぞよろしく",
    type: "(Exp)",
    reading: "どうぞよろしく",
    romaji: "douzo yoroshiku",
    meaning: "Rất mong được giúp đỡ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40",
    word: "そうですか",
    type: "(Exp)",
    reading: "そうですか",
    romaji: "sou desu ka",
    meaning: "Vậy à / Thế à?",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41",
    word: "お仕事は何ですか",
    type: "(Exp)",
    reading: "おしごとはなんですか",
    romaji: "oshigoto wa nan desu ka",
    meaning: "Công việc của anh/chị là gì?",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai2: Flashcard[] = [
  {
    id: "1",
    word: "これ",
    type: "Đại từ",
    reading: "これ",
    romaji: "kore",
    meaning: "cái này, đây (vật ở gần người nói)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "それ",
    type: "Đại từ",
    reading: "それ",
    romaji: "sore",
    meaning: "cái đó, đó (vật ở gần người nghe)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "あれ",
    type: "Đại từ",
    reading: "あれ",
    romaji: "are",
    meaning: "cái kia, kia (vật ở xa cả người nói và người nghe)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "この～",
    type: "Cụm từ",
    reading: "この～",
    romaji: "kono ~",
    meaning: "~ này",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "その～",
    type: "Cụm từ",
    reading: "その～",
    romaji: "sono ~",
    meaning: "~ đó",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "あの～",
    type: "Cụm từ",
    reading: "あの～",
    romaji: "ano ~",
    meaning: "~ kia",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "パソコン",
    type: "Danh từ",
    reading: "パソコン",
    romaji: "pasokon",
    meaning: "máy tính cá nhân",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "携帯",
    type: "Danh từ",
    reading: "けいたい",
    romaji: "keitai",
    meaning: "điện thoại di động",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "電話",
    type: "Danh từ",
    reading: "でんわ",
    romaji: "denwa",
    meaning: "điện thoại",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "アイフォン",
    type: "Danh từ",
    reading: "アイフォン",
    romaji: "aifon",
    meaning: "iPhone",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "充電器",
    type: "Danh từ",
    reading: "じゅうでんき",
    romaji: "juudenki",
    meaning: "sạc pin",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "ヘッドフォン",
    type: "Danh từ",
    reading: "ヘッドフォン",
    romaji: "heddofon",
    meaning: "tai nghe",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "カメラ",
    type: "Danh từ",
    reading: "カメラ",
    romaji: "kamera",
    meaning: "máy ảnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "テレビ",
    type: "Danh từ",
    reading: "テレビ",
    romaji: "terebi",
    meaning: "tivi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "車",
    type: "Danh từ",
    reading: "くるま",
    romaji: "kuruma",
    meaning: "ô tô, xe hơi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "時計",
    type: "Danh từ",
    reading: "とけい",
    romaji: "tokei",
    meaning: "đồng hồ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "ペン",
    type: "Danh từ",
    reading: "ペン",
    romaji: "pen",
    meaning: "bút",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "ボールペン",
    type: "Danh từ",
    reading: "ボールペン",
    romaji: "boorupen",
    meaning: "bút bi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "鉛筆",
    type: "Danh từ",
    reading: "えんぴつ",
    romaji: "enpitsu",
    meaning: "bút chì",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "シャープペンシル",
    type: "Danh từ",
    reading: "シャープペンシル",
    romaji: "shaapupenshiru",
    meaning: "bút chì kim",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "消しゴム",
    type: "Danh từ",
    reading: "けしゴム",
    romaji: "keshigomu",
    meaning: "tẩy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "本",
    type: "Danh từ",
    reading: "ほん",
    romaji: "hon",
    meaning: "sách",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "ノート",
    type: "Danh từ",
    reading: "ノート",
    romaji: "nooto",
    meaning: "vở",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "手帳",
    type: "Danh từ",
    reading: "てちょう",
    romaji: "techou",
    meaning: "sổ tay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "ことば",
    type: "Danh từ",
    reading: "ことば",
    romaji: "kotoba",
    meaning: "từ vựng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "辞書",
    type: "Danh từ",
    reading: "じしょ",
    romaji: "jisho",
    meaning: "từ điển",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "新聞",
    type: "Danh từ",
    reading: "しんぶん",
    romaji: "shinbun",
    meaning: "báo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "雑誌",
    type: "Danh từ",
    reading: "ざっし",
    romaji: "zasshi",
    meaning: "tạp chí",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "名刺",
    type: "Danh từ",
    reading: "めいし",
    romaji: "meishi",
    meaning: "danh thiếp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "カード",
    type: "Danh từ",
    reading: "カード",
    romaji: "kaado",
    meaning: "thẻ, cạc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "クレジットカード",
    type: "Danh từ",
    reading: "クレジットカード",
    romaji: "kurejittokaado",
    meaning: "thẻ tín dụng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "帽子",
    type: "Danh từ",
    reading: "ぼうし",
    romaji: "boushi",
    meaning: "mũ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "財布",
    type: "Danh từ",
    reading: "さいふ",
    romaji: "saifu",
    meaning: "ví",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "かばん",
    type: "Danh từ",
    reading: "かばん",
    romaji: "kaban",
    meaning: "cặp sách, túi sách",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "靴",
    type: "Danh từ",
    reading: "くつ",
    romaji: "kutsu",
    meaning: "giày",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "スリッパ",
    type: "Danh từ",
    reading: "スリッパ",
    romaji: "surippa",
    meaning: "dép đi trong nhà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "靴下",
    type: "Danh từ",
    reading: "くつした",
    romaji: "kutsushita",
    meaning: "tất",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "鍵",
    type: "Danh từ",
    reading: "かぎ",
    romaji: "kagi",
    meaning: "chìa khóa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39",
    word: "傘",
    type: "Danh từ",
    reading: "かさ",
    romaji: "kasa",
    meaning: "ô, dù",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40",
    word: "机",
    type: "Danh từ",
    reading: "つくえ",
    romaji: "tsukue",
    meaning: "bàn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41",
    word: "椅子",
    type: "Danh từ",
    reading: "いす",
    romaji: "isu",
    meaning: "cái ghế",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "42",
    word: "英語",
    type: "Danh từ",
    reading: "えいご",
    romaji: "eigo",
    meaning: "tiếng Anh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "43",
    word: "何",
    type: "Danh từ",
    reading: "なん",
    romaji: "nan",
    meaning: "cái gì (từ để hỏi)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "44",
    word: "違う",
    type: "Động từ",
    reading: "ちがう",
    romaji: "chigau",
    meaning: "đúng, phải, đúng vậy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "45",
    word: "違います",
    type: "Động từ",
    reading: "ちがいます",
    romaji: "chigaimasu",
    meaning: "không phải, sai rồi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "46",
    word: "ほんの気持ち",
    type: "Danh từ",
    reading: "ほんのきもち",
    romaji: "hon no kimochi",
    meaning: "Đây là chút lòng thành của tôi!",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai3: Flashcard[] = [
  {
    id: "1",
    word: "ここ",
    type: "Địa điểm",
    reading: "ここ",
    romaji: "koko",
    meaning: "chỗ này, đây",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "そこ",
    type: "Địa điểm",
    reading: "そこ",
    romaji: "soko",
    meaning: "chỗ đó, đó",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "あそこ",
    type: "Địa điểm",
    reading: "あそこ",
    romaji: "asoko",
    meaning: "chỗ kia, kia",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "どこ",
    type: "Địa điểm",
    reading: "どこ",
    romaji: "doko",
    meaning: "chỗ nào, đâu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "こちら",
    type: "Địa điểm (lịch sự)",
    reading: "こちら",
    romaji: "kochira",
    meaning: "phía này (cách nói lịch sự của ここ)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "そちら",
    type: "Địa điểm (lịch sự)",
    reading: "そちら",
    romaji: "sochira",
    meaning: "phía đó (cách nói lịch sự của そこ)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "あちら",
    type: "Địa điểm (lịch sự)",
    reading: "あちら",
    romaji: "achira",
    meaning: "phía kia (cách nói lịch sự của あそこ)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "どちら",
    type: "Địa điểm (lịch sự)",
    reading: "どちら",
    romaji: "dochira",
    meaning: "phía nào (cách nói lịch sự của どこ)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "9",
    word: "受付",
    type: "Danh từ",
    reading: "うけつけ",
    romaji: "uketsuke",
    meaning: "quầy lễ tân (dùng cho công ty, cơ quan)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "フロント",
    type: "Danh từ",
    reading: "フロント",
    romaji: "furonto",
    meaning: "quầy lễ tân (dùng cho khách sạn)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "階段",
    type: "Danh từ",
    reading: "かいだん",
    romaji: "kaidan",
    meaning: "cầu thang",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "エレベーター",
    type: "Danh từ",
    reading: "エレベーター",
    romaji: "erebeetaa",
    meaning: "thang máy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "エスカレーター",
    type: "Danh từ",
    reading: "エスカレーター",
    romaji: "esukareetaa",
    meaning: "thang cuốn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "お手洗い",
    type: "Danh từ",
    reading: "おてあらい",
    romaji: "otearai",
    meaning: "phòng vệ sinh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "トイレ",
    type: "Danh từ",
    reading: "トイレ",
    romaji: "toire",
    meaning: "phòng vệ sinh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "うち",
    type: "Danh từ",
    reading: "うち",
    romaji: "uchi",
    meaning: "nhà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "いえ",
    type: "Danh từ",
    reading: "いえ",
    romaji: "ie",
    meaning: "nhà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "部屋",
    type: "Danh từ",
    reading: "へや",
    romaji: "heya",
    meaning: "căn phòng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "教室",
    type: "Danh từ",
    reading: "きょうしつ",
    romaji: "kyoushitsu",
    meaning: "phòng học",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "事務所",
    type: "Danh từ",
    reading: "じむしょ",
    romaji: "jimusho",
    meaning: "văn phòng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "会議室",
    type: "Danh từ",
    reading: "かいぎしつ",
    romaji: "kaigishitsu",
    meaning: "phòng họp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "食堂",
    type: "Danh từ",
    reading: "しょくどう",
    romaji: "shokudou",
    meaning: "nhà ăn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "ビル",
    type: "Danh từ",
    reading: "ビル",
    romaji: "biru",
    meaning: "tòa nhà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "デパート",
    type: "Danh từ",
    reading: "デパート",
    romaji: "depaato",
    meaning: "trung tâm thương mại",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "スーパー",
    type: "Danh từ",
    reading: "スーパー",
    romaji: "suupaa",
    meaning: "siêu thị",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "センター",
    type: "Danh từ",
    reading: "センター",
    romaji: "sentaa",
    meaning: "trung tâm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "映画館",
    type: "Danh từ",
    reading: "えいがかん",
    romaji: "eigakan",
    meaning: "rạp chiếu phim",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "喫茶店",
    type: "Danh từ",
    reading: "きっさてん",
    romaji: "kissaten",
    meaning: "quán trà, cà phê",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "図書館",
    type: "Danh từ",
    reading: "としょかん",
    romaji: "toshokan",
    meaning: "thư viện",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "会社",
    type: "Danh từ",
    reading: "かいしゃ",
    romaji: "kaisha",
    meaning: "công ty",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "学校",
    type: "Danh từ",
    reading: "がっこう",
    romaji: "gakkou",
    meaning: "trường học",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "郵便局",
    type: "Danh từ",
    reading: "ゆうびんきょく",
    romaji: "yuubinkyoku",
    meaning: "bưu điện",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "銀行",
    type: "Danh từ",
    reading: "ぎんこう",
    romaji: "ginkou",
    meaning: "ngân hàng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "バス停",
    type: "Danh từ",
    reading: "バスてい",
    romaji: "basutei",
    meaning: "trạm xe bus",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "駅",
    type: "Danh từ",
    reading: "えき",
    romaji: "eki",
    meaning: "nhà ga",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "国",
    type: "Danh từ",
    reading: "[お] くに",
    romaji: "o-kuni",
    meaning: "đất nước (của anh/chị)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "いくら",
    type: "Danh từ",
    reading: "いくら",
    romaji: "ikura",
    meaning: "bao nhiêu tiền",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "円",
    type: "Danh từ",
    reading: "えん",
    romaji: "en",
    meaning: "yên",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai8: Flashcard[] = [
  {
    id: "1",
    word: "イケメン",
    type: "Tính từ na",
    reading: "イケメン",
    romaji: "ikemen",
    meaning: "đẹp trai",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "きれい",
    type: "Tính từ na",
    reading: "きれい",
    romaji: "kirei",
    meaning: "xinh, đẹp, sạch",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "親切",
    type: "Tính từ na",
    reading: "しんせつ",
    romaji: "shinsetsu",
    meaning: "tốt bụng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "元気",
    type: "Tính từ na",
    reading: "げんき",
    romaji: "genki",
    meaning: "khỏe mạnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "静か",
    type: "Tính từ na",
    reading: "しずか",
    romaji: "shizuka",
    meaning: "yên tĩnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "にぎやか",
    type: "Tính từ na",
    reading: "にぎやか",
    romaji: "nigiyaka",
    meaning: "náo nhiệt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "有名",
    type: "Tính từ na",
    reading: "ゆうめい",
    romaji: "yuumei",
    meaning: "nổi tiếng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "便利",
    type: "Tính từ na",
    reading: "べんり",
    romaji: "benri",
    meaning: "tiện lợi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "大切",
    type: "Tính từ na",
    reading: "たいせつ",
    romaji: "taisetsu",
    meaning: "quan trọng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "暇",
    type: "Tính từ na",
    reading: "ひま",
    romaji: "hima",
    meaning: "rảnh rỗi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "忙しい",
    type: "Tính từ i",
    reading: "いそがしい",
    romaji: "isogashii",
    meaning: "bận rộn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "大きい",
    type: "Tính từ i",
    reading: "おおきい",
    romaji: "ookii",
    meaning: "to, lớn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "小さい",
    type: "Tính từ i",
    reading: "ちいさい",
    romaji: "chiisai",
    meaning: "nhỏ, bé",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "新しい",
    type: "Tính từ i",
    reading: "あたらしい",
    romaji: "atarashii",
    meaning: "mới",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "古い",
    type: "Tính từ i",
    reading: "ふるい",
    romaji: "furui",
    meaning: "cũ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "いい（良い）",
    type: "Tính từ i",
    reading: "いい",
    romaji: "ii",
    meaning: "tốt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "悪い",
    type: "Tính từ i",
    reading: "わるい",
    romaji: "warui",
    meaning: "xấu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "暑い",
    type: "Tính từ i",
    reading: "あつい",
    romaji: "atsui",
    meaning: "nóng (thời tiết)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "寒い",
    type: "Tính từ i",
    reading: "さむい",
    romaji: "samui",
    meaning: "lạnh, rét (thời tiết)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "熱い",
    type: "Tính từ i",
    reading: "あつい",
    romaji: "atsui",
    meaning: "nóng (cảm giác)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "冷たい",
    type: "Tính từ i",
    reading: "つめたい",
    romaji: "tsumetai",
    meaning: "lạnh, buốt (cảm giác)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "難しい",
    type: "Tính từ i",
    reading: "むずかしい",
    romaji: "muzukashii",
    meaning: "khó",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "優しい",
    type: "Tính từ i",
    reading: "やさしい",
    romaji: "yasashii",
    meaning: "dễ, hiền lành",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "高い",
    type: "Tính từ i",
    reading: "たかい",
    romaji: "takai",
    meaning: "đắt, cao",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "安い",
    type: "Tính từ i",
    reading: "やすい",
    romaji: "yasui",
    meaning: "rẻ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "低い",
    type: "Tính từ i",
    reading: "ひくい",
    romaji: "hikui",
    meaning: "thấp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "明るい",
    type: "Tính từ i",
    reading: "あかるい",
    romaji: "akarui",
    meaning: "sáng sủa, tươi sáng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "暗い",
    type: "Tính từ i",
    reading: "くらい",
    romaji: "kurai",
    meaning: "tối, u ám",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "面白い",
    type: "Tính từ i",
    reading: "おもしろい",
    romaji: "omoshiroi",
    meaning: "thú vị",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "かわいい",
    type: "Tính từ i",
    reading: "かわいい",
    romaji: "kawaii",
    meaning: "dễ thương",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "おいしい",
    type: "Tính từ i",
    reading: "おいしい",
    romaji: "oishii",
    meaning: "ngon",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "楽しい",
    type: "Tính từ i",
    reading: "たのしい",
    romaji: "tanoshii",
    meaning: "vui vẻ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "白い",
    type: "Tính từ i",
    reading: "しろい",
    romaji: "shiroi",
    meaning: "trắng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "赤い",
    type: "Tính từ i",
    reading: "あかい",
    romaji: "akai",
    meaning: "đỏ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "青い",
    type: "Tính từ i",
    reading: "あおい",
    romaji: "aoi",
    meaning: "xanh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "黒い",
    type: "Tính từ i",
    reading: "くろい",
    romaji: "kuroi",
    meaning: "đen",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "寂しい",
    type: "Tính từ i",
    reading: "さびしい",
    romaji: "sabishii",
    meaning: "cô đơn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "花",
    type: "Danh từ",
    reading: "はな",
    romaji: "hana",
    meaning: "hoa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39",
    word: "桜",
    type: "Danh từ",
    reading: "さくら",
    romaji: "sakura",
    meaning: "hoa anh đào",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40",
    word: "山",
    type: "Danh từ",
    reading: "やま",
    romaji: "yama",
    meaning: "núi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41",
    word: "富士山",
    type: "Danh từ",
    reading: "ふじさん",
    romaji: "fujisan",
    meaning: "núi Phú Sĩ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "42",
    word: "町",
    type: "Danh từ",
    reading: "まち",
    romaji: "machi",
    meaning: "thị trấn, thành phố",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "43",
    word: "食べ物",
    type: "Danh từ",
    reading: "たべもの",
    romaji: "tabemono",
    meaning: "đồ ăn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "44",
    word: "着物",
    type: "Danh từ",
    reading: "きもの",
    romaji: "kimono",
    meaning: "kimono",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "45",
    word: "機械",
    type: "Danh từ",
    reading: "きかい",
    romaji: "kikai",
    meaning: "máy móc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "46",
    word: "所",
    type: "Danh từ",
    reading: "ところ",
    romaji: "tokoro",
    meaning: "nơi, chỗ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "47",
    word: "勉強",
    type: "Danh từ",
    reading: "べんきょう",
    romaji: "benkyou",
    meaning: "học, việc học",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "48",
    word: "生活",
    type: "Danh từ",
    reading: "せいかつ",
    romaji: "seikatsu",
    meaning: "cuộc sống, sinh hoạt, đời sống",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "49",
    word: "物価",
    type: "Danh từ",
    reading: "ぶっか",
    romaji: "bukka",
    meaning: "vật giá",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "50",
    word: "お仕事",
    type: "Danh từ",
    reading: "おしごと",
    romaji: "oshigoto",
    meaning: "công việc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "51",
    word: "料理",
    type: "Danh từ",
    reading: "りょうり",
    romaji: "ryouri",
    meaning: "món ăn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "52",
    word: "パスポート",
    type: "Danh từ",
    reading: "パスポート",
    romaji: "pasupo-to",
    meaning: "hộ chiếu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "53",
    word: "どう",
    type: "Trạng từ",
    reading: "どう",
    romaji: "dou",
    meaning: "thế nào",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "54",
    word: "どんな",
    type: "Trạng từ",
    reading: "どんな",
    romaji: "donna",
    meaning: "như thế nào",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "55",
    word: "どれ",
    type: "Danh từ",
    reading: "どれ",
    romaji: "dore",
    meaning: "cái nào",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "56",
    word: "とても",
    type: "Trạng từ",
    reading: "とても",
    romaji: "totemo",
    meaning: "rất",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "57",
    word: "あまり",
    type: "Trạng từ",
    reading: "あまり",
    romaji: "amari",
    meaning: "không ~ lắm (dùng với thể phủ định)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "58",
    word: "そして",
    type: "Liên từ",
    reading: "そして",
    romaji: "soshite",
    meaning: "hơn nữa, và (dùng để nối 2 câu)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "59",
    word: "～が、～",
    type: "Liên từ",
    reading: "～が、～",
    romaji: "~ ga, ~",
    meaning: "～ nhưng ～",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai4: Flashcard[] = [
  {
    id: "1",
    word: "月曜日",
    type: "Danh từ",
    reading: "げつようび",
    romaji: "getsuyoubi",
    meaning: "thứ hai",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "火曜日",
    type: "Danh từ",
    reading: "かようび",
    romaji: "kayoubi",
    meaning: "thứ ba",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "水曜日",
    type: "Danh từ",
    reading: "すいようび",
    romaji: "suiyoubi",
    meaning: "thứ tư",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "木曜日",
    type: "Danh từ",
    reading: "もくようび",
    romaji: "mokuyoubi",
    meaning: "thứ năm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "金曜日",
    type: "Danh từ",
    reading: "きんようび",
    romaji: "kinyoubi",
    meaning: "thứ sáu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "土曜日",
    type: "Danh từ",
    reading: "どようび",
    romaji: "doyoubi",
    meaning: "thứ bảy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "日曜日",
    type: "Danh từ",
    reading: "にちようび",
    romaji: "nichiyoubi",
    meaning: "chủ nhật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "何曜日",
    type: "Danh từ",
    reading: "なんようび",
    romaji: "nanyoubi",
    meaning: "thứ mấy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "今",
    type: "Danh từ/Trạng từ",
    reading: "いま",
    romaji: "ima",
    meaning: "bây giờ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "午前",
    type: "Danh từ",
    reading: "ごぜん",
    romaji: "gozen",
    meaning: "sáng, trước 12 giờ trưa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "午後",
    type: "Danh từ",
    reading: "ごご",
    romaji: "gogo",
    meaning: "chiều, sau 12 giờ trưa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "半",
    type: "Danh từ",
    reading: "はん",
    romaji: "han",
    meaning: "rưỡi, nửa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "朝",
    type: "Danh từ",
    reading: "あさ",
    romaji: "asa",
    meaning: "buổi sáng, sáng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "昼",
    type: "Danh từ",
    reading: "ひる",
    romaji: "hiru",
    meaning: "buổi trưa, trưa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "夕方",
    type: "Danh từ",
    reading: "ゆうがた",
    romaji: "yuugata",
    meaning: "buổi chiều, chiều",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "晩",
    type: "Danh từ",
    reading: "ばん",
    romaji: "ban",
    meaning: "buổi tối, tối",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "夜",
    type: "Danh từ",
    reading: "よる",
    romaji: "yoru",
    meaning: "đêm, khuya",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "一昨日",
    type: "Danh từ/Trạng từ",
    reading: "おととい",
    romaji: "ototoi",
    meaning: "hôm kia",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "昨日",
    type: "Danh từ/Trạng từ",
    reading: "きのう",
    romaji: "kinou",
    meaning: "hôm qua",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "今日",
    type: "Danh từ/Trạng từ",
    reading: "きょう",
    romaji: "kyou",
    meaning: "hôm nay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "明日",
    type: "Danh từ/Trạng từ",
    reading: "あした",
    romaji: "ashita",
    meaning: "ngày mai",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "明後日",
    type: "Danh từ/Trạng từ",
    reading: "あさって",
    romaji: "asatte",
    meaning: "ngày kia",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "今朝",
    type: "Danh từ/Trạng từ",
    reading: "けさ",
    romaji: "kesa",
    meaning: "sáng nay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "今晩",
    type: "Danh từ/Trạng từ",
    reading: "こんばん",
    romaji: "konban",
    meaning: "tối nay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "今夜",
    type: "Danh từ/Trạng từ",
    reading: "こんや",
    romaji: "konya",
    meaning: "đêm nay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "休み",
    type: "Danh từ",
    reading: "やすみ",
    romaji: "yasumi",
    meaning: "nghỉ, nghỉ phép, ngày nghỉ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "昼休み",
    type: "Danh từ",
    reading: "ひるやすみ",
    romaji: "hiruyasumi",
    meaning: "nghỉ trưa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "毎朝",
    type: "Trạng từ",
    reading: "まいあさ",
    romaji: "maiasa",
    meaning: "mỗi sáng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "毎晩",
    type: "Trạng từ",
    reading: "まいばん",
    romaji: "maiban",
    meaning: "mỗi tối",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "毎日",
    type: "Trạng từ",
    reading: "まいにち",
    romaji: "mainichi",
    meaning: "mỗi ngày",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "何時",
    type: "Danh từ",
    reading: "なんじ",
    romaji: "nanji",
    meaning: "mấy giờ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "何分",
    type: "Danh từ",
    reading: "なんぷん",
    romaji: "nanpun",
    meaning: "mấy phút",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "働く",
    type: "Động từ nhóm I",
    reading: "はたらく",
    romaji: "hataraku",
    meaning: "làm việc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "休む",
    type: "Động từ nhóm I",
    reading: "やすむ",
    romaji: "yasumu",
    meaning: "nghỉ, nghỉ ngơi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "終わる",
    type: "Động từ nhóm I",
    reading: "おわる",
    romaji: "owaru",
    meaning: "hết, kết thúc, xong",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "起きる",
    type: "Động từ nhóm II",
    reading: "おきる",
    romaji: "okiru",
    meaning: "thức dậy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "寝る",
    type: "Động từ nhóm II",
    reading: "ねる",
    romaji: "neru",
    meaning: "ngủ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "勉強する",
    type: "Động từ nhóm III",
    reading: "べんきょうする",
    romaji: "benkyou suru",
    meaning: "học",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39",
    word: "～から",
    type: "Cụm từ",
    reading: "～から",
    romaji: "~kara",
    meaning: "từ ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40",
    word: "～まで",
    type: "Cụm từ",
    reading: "～まで",
    romaji: "~made",
    meaning: "đến ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41",
    word: "～と～",
    type: "Cụm từ",
    reading: "～と～",
    romaji: "~to~",
    meaning: "~ và ~ (dùng để nối hai danh từ)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "42",
    word: "試験",
    type: "Danh từ",
    reading: "しけん",
    romaji: "shiken",
    meaning: "kỳ thi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "43",
    word: "会議",
    type: "Danh từ",
    reading: "かいぎ",
    romaji: "kaigi",
    meaning: "cuộc họp",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai5: Flashcard[] = [
  {
    id: "1",
    word: "飛行機",
    type: "Danh từ",
    reading: "ひこうき",
    romaji: "hikouki",
    meaning: "máy bay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "船",
    type: "Danh từ",
    reading: "ふね",
    romaji: "fune",
    meaning: "thuyền, tàu thủy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "地下鉄",
    type: "Danh từ",
    reading: "ちかてつ",
    romaji: "chikatetsu",
    meaning: "tàu điện ngầm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "電車",
    type: "Danh từ",
    reading: "でんしゃ",
    romaji: "densha",
    meaning: "tàu điện",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "バイク",
    type: "Danh từ",
    reading: "バイク",
    romaji: "baiku",
    meaning: "xe máy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "バス",
    type: "Danh từ",
    reading: "バス",
    romaji: "basu",
    meaning: "xe bus",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "タクシー",
    type: "Danh từ",
    reading: "タクシー",
    romaji: "takushii",
    meaning: "taxi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "自転車",
    type: "Danh từ",
    reading: "じてんしゃ",
    romaji: "jitensha",
    meaning: "xe đạp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "歩いて",
    type: "Động từ",
    reading: "あるいて",
    romaji: "aruite",
    meaning: "đi bộ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "ホテル",
    type: "Danh từ",
    reading: "ホテル",
    romaji: "hoteru",
    meaning: "khách sạn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "美術館",
    type: "Danh từ",
    reading: "びじゅつかん",
    romaji: "bijutsukan",
    meaning: "bảo tàng mỹ thuật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "ホーチミン市",
    type: "Danh từ",
    reading: "ホーチミンし",
    romaji: "Ho Chi Minh-shi",
    meaning: "Thành phố Hồ Chí Minh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "ハイズオン",
    type: "Danh từ",
    reading: "ハイズオン",
    romaji: "Haizuon",
    meaning: "Hải Dương",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "ハロン湾",
    type: "Danh từ",
    reading: "ハロンわん",
    romaji: "Harong Wan",
    meaning: "vịnh Hạ Long",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "友達",
    type: "Danh từ",
    reading: "ともだち",
    romaji: "tomodachi",
    meaning: "bạn, bạn bè",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "一人で",
    type: "Trạng từ",
    reading: "ひとりで",
    romaji: "hitori de",
    meaning: "một mình",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "人",
    type: "Danh từ",
    reading: "ひと",
    romaji: "hito",
    meaning: "người",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "家族",
    type: "Danh từ",
    reading: "かぞく",
    romaji: "kazoku",
    meaning: "gia đình",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "先週",
    type: "Danh từ",
    reading: "せんしゅう",
    romaji: "senshuu",
    meaning: "tuần trước",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "今週",
    type: "Danh từ",
    reading: "こんしゅう",
    romaji: "konshuu",
    meaning: "tuần này",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "来週",
    type: "Danh từ",
    reading: "らいしゅう",
    romaji: "raishuu",
    meaning: "tuần sau",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "先月",
    type: "Danh từ",
    reading: "せんげつ",
    romaji: "sengetsu",
    meaning: "tháng trước",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "今月",
    type: "Danh từ",
    reading: "こんげつ",
    romaji: "kongetsu",
    meaning: "tháng này",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "来月",
    type: "Danh từ",
    reading: "らいげつ",
    romaji: "raigetsu",
    meaning: "tháng sau",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "去年",
    type: "Danh từ",
    reading: "きょねん",
    romaji: "kyonen",
    meaning: "năm ngoái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "今年",
    type: "Danh từ",
    reading: "ことし",
    romaji: "kotoshi",
    meaning: "năm nay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "来年",
    type: "Danh từ",
    reading: "らいねん",
    romaji: "rainen",
    meaning: "năm sau",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "一日",
    type: "Danh từ",
    reading: "ついたち",
    romaji: "tsuitachi",
    meaning: "mồng 1",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "二日",
    type: "Danh từ",
    reading: "ふつか",
    romaji: "futsuka",
    meaning: "mồng 2",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "三日",
    type: "Danh từ",
    reading: "みっか",
    romaji: "mikka",
    meaning: "mồng 3",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "四日",
    type: "Danh từ",
    reading: "よっか",
    romaji: "yokka",
    meaning: "mồng 4",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "五日",
    type: "Danh từ",
    reading: "いつか",
    romaji: "itsuka",
    meaning: "mồng 5",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "六日",
    type: "Danh từ",
    reading: "むいか",
    romaji: "muika",
    meaning: "mồng 6",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "七日",
    type: "Danh từ",
    reading: "なのか",
    romaji: "nanoka",
    meaning: "mồng 7",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "八日",
    type: "Danh từ",
    reading: "ようか",
    romaji: "youka",
    meaning: "mồng 8",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "九日",
    type: "Danh từ",
    reading: "ここのか",
    romaji: "kokonoka",
    meaning: "mồng 9",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "十日",
    type: "Danh từ",
    reading: "とおか",
    romaji: "tooka",
    meaning: "mồng 10",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "十四日",
    type: "Danh từ",
    reading: "じゅうよっか",
    romaji: "juuyokka",
    meaning: "ngày 14",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39",
    word: "二十日",
    type: "Danh từ",
    reading: "はつか",
    romaji: "hatsuka",
    meaning: "ngày 20",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40",
    word: "二十四日",
    type: "Danh từ",
    reading: "にじゅうよっか",
    romaji: "nijuu yokka",
    meaning: "ngày 24",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41",
    word: "誕生日",
    type: "Danh từ",
    reading: "たんじょうび",
    romaji: "tanjoubi",
    meaning: "sinh nhật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "42",
    word: "～ごろ",
    type: "Trạng từ",
    reading: "～ごろ",
    romaji: "~goro",
    meaning: "khoảng ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "43",
    word: "何日",
    type: "Danh từ",
    reading: "なんにち",
    romaji: "nan nichi",
    meaning: "ngày mấy, ngày bao nhiêu, mấy ngày, bao nhiêu ngày",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "44",
    word: "何月",
    type: "Danh từ",
    reading: "なんがつ",
    romaji: "nan gatsu",
    meaning: "tháng mấy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "45",
    word: "いつ",
    type: "Trạng từ",
    reading: "いつ",
    romaji: "itsu",
    meaning: "bao giờ, khi nào",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "46",
    word: "行く",
    type: "Động từ",
    reading: "いく / いきます",
    romaji: "iku / ikimasu",
    meaning: "đi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "47",
    word: "来る",
    type: "Động từ",
    reading: "くる / きます",
    romaji: "kuru / kimasu",
    meaning: "đến",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "48",
    word: "帰る",
    type: "Động từ",
    reading: "かえる / かえります",
    romaji: "kaeru / kaerimasu",
    meaning: "về",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "49",
    word: "日記",
    type: "Danh từ",
    reading: "にっき",
    romaji: "nikki",
    meaning: "Nhật kí",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "50",
    word: "本社",
    type: "Danh từ",
    reading: "ほんしゃ",
    romaji: "honsha",
    meaning: "Trụ sở chính",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "51",
    word: "空港",
    type: "Danh từ",
    reading: "くうこう",
    romaji: "kuukou",
    meaning: "Sân bay",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai6: Flashcard[] = [
  // DANH TỪ
  {
    id: "1",
    word: "チョコレート",
    type: "Danh từ",
    reading: "チョコレート",
    romaji: "chokoreeto",
    meaning: "sô cô la",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "パン",
    type: "Danh từ",
    reading: "パン",
    romaji: "pan",
    meaning: "bánh mỳ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "ご飯",
    type: "Danh từ",
    reading: "ごはん",
    romaji: "gohan",
    meaning: "cơm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "卵",
    type: "Danh từ",
    reading: "たまご",
    romaji: "tamago",
    meaning: "trứng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "肉",
    type: "Danh từ",
    reading: "にく",
    romaji: "niku",
    meaning: "thịt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "牛肉",
    type: "Danh từ",
    reading: "ぎゅうにく",
    romaji: "gyuuniku",
    meaning: "thịt bò",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "魚",
    type: "Danh từ",
    reading: "さかな",
    romaji: "sakana",
    meaning: "cá",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "野菜",
    type: "Danh từ",
    reading: "やさい",
    romaji: "yasai",
    meaning: "rau củ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "果物",
    type: "Danh từ",
    reading: "くだもの",
    romaji: "kudamono",
    meaning: "hoa quả",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "水",
    type: "Danh từ",
    reading: "みず",
    romaji: "mizu",
    meaning: "nước",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "お茶",
    type: "Danh từ",
    reading: "おちゃ",
    romaji: "ocha",
    meaning: "trà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "コーヒー",
    type: "Danh từ",
    reading: "コーヒー",
    romaji: "koohii",
    meaning: "cà phê",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "ワイン",
    type: "Danh từ",
    reading: "ワイン",
    romaji: "wain",
    meaning: "rượu vang",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "ジュース",
    type: "Danh từ",
    reading: "ジュース",
    romaji: "juusu",
    meaning: "nước hoa quả",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "ビール",
    type: "Danh từ",
    reading: "ビール",
    romaji: "biiru",
    meaning: "bia",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "お酒",
    type: "Danh từ",
    reading: "おさけ",
    romaji: "osake",
    meaning: "rượu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "たばこ",
    type: "Danh từ",
    reading: "たばこ",
    romaji: "tabako",
    meaning: "thuốc lá",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "薬",
    type: "Danh từ",
    reading: "くすり",
    romaji: "kusuri",
    meaning: "thuốc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "手紙",
    type: "Danh từ",
    reading: "てがみ",
    romaji: "tegami",
    meaning: "thư, bức thư",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "メール",
    type: "Danh từ",
    reading: "メール",
    romaji: "meeru",
    meaning: "mail",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "レポート",
    type: "Danh từ",
    reading: "レポート",
    romaji: "repooto",
    meaning: "bản báo cáo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "コメント",
    type: "Danh từ",
    reading: "コメント",
    romaji: "komento",
    meaning: "bình luận",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "音楽",
    type: "Danh từ",
    reading: "おんがく",
    romaji: "ongaku",
    meaning: "âm nhạc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "映画",
    type: "Danh từ",
    reading: "えいが",
    romaji: "eiga",
    meaning: "phim, điện ảnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "写真",
    type: "Danh từ",
    reading: "しゃしん",
    romaji: "shashin",
    meaning: "ảnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "宿題",
    type: "Danh từ",
    reading: "しゅくだい",
    romaji: "shukudai",
    meaning: "bài về nhà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "レストラン",
    type: "Danh từ",
    reading: "レストラン",
    romaji: "resutoran",
    meaning: "nhà hàng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "カフェ",
    type: "Danh từ",
    reading: "カフェ",
    romaji: "kafe",
    meaning: "quán cà phê",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "庭",
    type: "Danh từ",
    reading: "にわ",
    romaji: "niwa",
    meaning: "vườn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "店",
    type: "Danh từ",
    reading: "みせ",
    romaji: "mise",
    meaning: "cửa hàng, tiệm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "お正月",
    type: "Danh từ",
    reading: "おしょうがつ",
    romaji: "oshougatsu",
    meaning: "Tết, năm mới",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "[お]花見",
    type: "Danh từ",
    reading: "[お]はなみ",
    romaji: "ohanami",
    meaning: "ngắm hoa anh đào",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "みんなで",
    type: "Cụm từ",
    reading: "みんなで",
    romaji: "minnade",
    meaning: "mọi người cùng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "何",
    type: "Danh từ",
    reading: "なに",
    romaji: "nani",
    meaning: "cái gì, gì",
    idChapter: 0,
    uniqueId: ""
  },

  // ĐỘNG TỪ NHÓM I
  {
    id: "35",
    word: "読む",
    type: "Động từ nhóm I",
    reading: "よみます",
    romaji: "yomimasu",
    meaning: "đọc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "書く",
    type: "Động từ nhóm I",
    reading: "かきます",
    romaji: "kakimasu",
    meaning: "viết",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "買う",
    type: "Động từ nhóm I",
    reading: "かいます",
    romaji: "kaimasu",
    meaning: "mua",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "撮る",
    type: "Động từ nhóm I",
    reading: "とります",
    romaji: "torimasu",
    meaning: "chụp ảnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39",
    word: "聞く",
    type: "Động từ nhóm I",
    reading: "ききます",
    romaji: "kikimasu",
    meaning: "nghe",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40",
    word: "吸う",
    type: "Động từ nhóm I",
    reading: "すいます",
    romaji: "suimasu",
    meaning: "hút thuốc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41",
    word: "会う",
    type: "Động từ nhóm I",
    reading: "あいます",
    romaji: "aimasu",
    meaning: "gặp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "42",
    word: "飲む",
    type: "Động từ nhóm I",
    reading: "のみます",
    romaji: "nomimasu",
    meaning: "uống",
    idChapter: 0,
    uniqueId: ""
  },

  // ĐỘNG TỪ NHÓM II
  {
    id: "43",
    word: "食べる",
    type: "Động từ nhóm II",
    reading: "たべます",
    romaji: "tabemasu",
    meaning: "ăn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "44",
    word: "見る",
    type: "Động từ nhóm II",
    reading: "みます",
    romaji: "mimasu",
    meaning: "xem, nhìn, trông",
    idChapter: 0,
    uniqueId: ""
  },

  // ĐỘNG TỪ NHÓM III
  {
    id: "45",
    word: "する",
    type: "Động từ nhóm III",
    reading: "します",
    romaji: "shimasu",
    meaning: "làm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "46",
    word: "食事する",
    type: "Động từ nhóm III",
    reading: "しょくじします",
    romaji: "shokuji shimasu",
    meaning: "dùng bữa",
    idChapter: 0,
    uniqueId: ""
  },

  // TRẠNG TỪ
  {
    id: "47",
    word: "いっしょに",
    type: "Trạng từ",
    reading: "いっしょに",
    romaji: "issho ni",
    meaning: "cùng nhau",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "48",
    word: "ちょっと",
    type: "Trạng từ",
    reading: "ちょっと",
    romaji: "chotto",
    meaning: "một chút",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "49",
    word: "いつも",
    type: "Trạng từ",
    reading: "いつも",
    romaji: "itsumo",
    meaning: "luôn luôn, lúc nào cũng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "50",
    word: "ときどき",
    type: "Trạng từ",
    reading: "ときどき",
    romaji: "tokidoki",
    meaning: "thỉnh thoảng",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai7: Flashcard[] = [
  {
    id: "1",
    word: "毎週",
    type: "Trạng từ",
    reading: "まいしゅう",
    romaji: "maishuu",
    meaning: "mỗi tuần",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "毎月",
    type: "Trạng từ",
    reading: "まいつき",
    romaji: "maitsuki",
    meaning: "mỗi tháng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "毎年",
    type: "Trạng từ",
    reading: "まいとし",
    romaji: "maitoshi",
    meaning: "mỗi năm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "父",
    type: "Danh từ",
    reading: "ちち",
    romaji: "chichi",
    meaning: "bố (dùng khi nói về bố mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "母",
    type: "Danh từ",
    reading: "はは",
    romaji: "haha",
    meaning: "mẹ (dùng khi nói về mẹ mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "お父さん",
    type: "Danh từ",
    reading: "おとうさん",
    romaji: "otousan",
    meaning: "bố (dùng khi nói về bố người khác hoặc xưng hô với bố mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "お母さん",
    type: "Danh từ",
    reading: "おかあさん",
    romaji: "okaasan",
    meaning: "mẹ (dùng khi nói về mẹ người khác hoặc xưng hô với mẹ mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "夫／主人",
    type: "Danh từ",
    reading: "おっと／しゅじん",
    romaji: "otto / shujin",
    meaning: "chồng (của mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "妻／家内",
    type: "Danh từ",
    reading: "つま／かない",
    romaji: "tsuma / kanai",
    meaning: "vợ (của mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "ご主人",
    type: "Danh từ",
    reading: "ごしゅじん",
    romaji: "goshujin",
    meaning: "chồng (của người khác)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "奥さん",
    type: "Danh từ",
    reading: "おくさん",
    romaji: "okusan",
    meaning: "vợ (của người khác)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "手",
    type: "Danh từ",
    reading: "て",
    romaji: "te",
    meaning: "tay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "箸",
    type: "Danh từ",
    reading: "はし",
    romaji: "hashi",
    meaning: "đũa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "スプーン",
    type: "Danh từ",
    reading: "スプーン",
    romaji: "supuun",
    meaning: "thìa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "フォーク",
    type: "Danh từ",
    reading: "フォーク",
    romaji: "fooku",
    meaning: "dĩa, nĩa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "ナイフ",
    type: "Danh từ",
    reading: "ナイフ",
    romaji: "naifu",
    meaning: "dao",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "鋏",
    type: "Danh từ",
    reading: "はさみ",
    romaji: "hasami",
    meaning: "kéo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "紙",
    type: "Danh từ",
    reading: "かみ",
    romaji: "kami",
    meaning: "giấy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "花",
    type: "Danh từ",
    reading: "はな",
    romaji: "hana",
    meaning: "hoa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "シャツ",
    type: "Danh từ",
    reading: "シャツ",
    romaji: "shatsu",
    meaning: "áo sơ mi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "プレゼント",
    type: "Danh từ",
    reading: "プレゼント",
    romaji: "purezento",
    meaning: "quà tặng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "切符",
    type: "Danh từ",
    reading: "きっぷ",
    romaji: "kippu",
    meaning: "vé",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "お茶碗",
    type: "Danh từ",
    reading: "おちゃわん",
    romaji: "ochawan",
    meaning: "bát",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "ことば",
    type: "Danh từ",
    reading: "ことば",
    romaji: "kotoba",
    meaning: "từ vựng, ngôn ngữ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "お金",
    type: "Danh từ",
    reading: "おかね",
    romaji: "okane",
    meaning: "tiền",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "クリスマス",
    type: "Danh từ",
    reading: "クリスマス",
    romaji: "kurisumasu",
    meaning: "Giáng sinh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "インターネット",
    type: "Danh từ",
    reading: "インターネット",
    romaji: "intaanetto",
    meaning: "Internet",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "ニュース",
    type: "Danh từ",
    reading: "ニュース",
    romaji: "nyuusu",
    meaning: "tin tức, bản tin",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "切る",
    type: "Động từ nhóm I",
    reading: "きる",
    romaji: "kiru",
    meaning: "cắt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "切ります",
    type: "Động từ nhóm I",
    reading: "きります",
    romaji: "kirimasu",
    meaning: "cắt (dạng lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "送る",
    type: "Động từ nhóm I",
    reading: "おくる",
    romaji: "okuru",
    meaning: "gửi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "送ります",
    type: "Động từ nhóm I",
    reading: "おくります",
    romaji: "okurimasu",
    meaning: "gửi (dạng lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "もらう",
    type: "Động từ nhóm I",
    reading: "もらう",
    romaji: "morau",
    meaning: "nhận",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "もらいます",
    type: "Động từ nhóm I",
    reading: "もらいます",
    romaji: "moraimasu",
    meaning: "nhận (dạng lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "習う",
    type: "Động từ nhóm I",
    reading: "ならう",
    romaji: "narau",
    meaning: "học",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "習います",
    type: "Động từ nhóm I",
    reading: "ならいます",
    romaji: "naraimasu",
    meaning: "học (dạng lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "貸す",
    type: "Động từ nhóm I",
    reading: "かす",
    romaji: "kasu",
    meaning: "cho mượn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "貸します",
    type: "Động từ nhóm I",
    reading: "かします",
    romaji: "kashimasu",
    meaning: "cho mượn (dạng lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39",
    word: "上げる",
    type: "Động từ nhóm II",
    reading: "あげる",
    romaji: "ageru",
    meaning: "cho, tặng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40",
    word: "上げます",
    type: "Động từ nhóm II",
    reading: "あげます",
    romaji: "agemasu",
    meaning: "cho, tặng (dạng lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41",
    word: "教える",
    type: "Động từ nhóm II",
    reading: "おしえる",
    romaji: "oshieru",
    meaning: "dạy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "42",
    word: "教えます",
    type: "Động từ nhóm II",
    reading: "おしえます",
    romaji: "oshiemasu",
    meaning: "dạy (dạng lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "43",
    word: "かける",
    type: "Động từ nhóm II",
    reading: "かける",
    romaji: "kakeru",
    meaning: "gọi điện thoại",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "44",
    word: "かけます",
    type: "Động từ nhóm II",
    reading: "かけます",
    romaji: "kakemasu",
    meaning: "gọi điện thoại (dạng lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "45",
    word: "借りる",
    type: "Động từ nhóm II",
    reading: "かりる",
    romaji: "kariru",
    meaning: "vay, mượn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "46",
    word: "借ります",
    type: "Động từ nhóm II",
    reading: "かります",
    romaji: "karimasu",
    meaning: "vay, mượn (dạng lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "47",
    word: "もう",
    type: "Trạng từ",
    reading: "もう",
    romaji: "mou",
    meaning: "đã",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "48",
    word: "まだ",
    type: "Trạng từ",
    reading: "まだ",
    romaji: "mada",
    meaning: "vẫn, chưa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "49",
    word: "これから",
    type: "Trạng từ",
    reading: "これから",
    romaji: "korekara",
    meaning: "từ bây giờ, từ nay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "50",
    word: "この間",
    type: "Trạng từ",
    reading: "このあいだ",
    romaji: "kono aida",
    meaning: "vừa rồi, hôm nọ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "51",
    word: "恋人",
    type: "Danh từ",
    reading: "こいびと",
    romaji: "koibito",
    meaning: "người yêu",
    idChapter: 0,
    uniqueId: ""
  },
];
export const initialBai9: Flashcard[] = [
  {
    id: "1",
    word: "好き",
    type: "Tính từ-na",
    reading: "すき[な]",
    romaji: "suki",
    meaning: "thích",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "嫌い",
    type: "Tính từ-na",
    reading: "きらい[な]",
    romaji: "kirai",
    meaning: "ghét, không thích",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "上手",
    type: "Tính từ-na",
    reading: "じょうず[な]",
    romaji: "jouzu",
    meaning: "giỏi, khéo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "下手",
    type: "Tính từ-na",
    reading: "へた[な]",
    romaji: "heta",
    meaning: "kém",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "痛い",
    type: "Tính từ-i",
    reading: "いたい",
    romaji: "itai",
    meaning: "đau",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "お祖父さん",
    type: "Danh từ",
    reading: "おじいさん",
    romaji: "ojiisan",
    meaning: "ông",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "お祖父ちゃん",
    type: "Danh từ",
    reading: "おじいちゃん",
    romaji: "ojiichan",
    meaning: "ông",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "お祖母さん",
    type: "Danh từ",
    reading: "おばあさん",
    romaji: "obaasan",
    meaning: "bà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "お祖母ちゃん",
    type: "Danh từ",
    reading: "おばあちゃん",
    romaji: "obaachan",
    meaning: "bà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "歯医者",
    type: "Danh từ",
    reading: "はいしゃ",
    romaji: "haisha",
    meaning: "nha sĩ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "料理",
    type: "Danh từ/Động từ",
    reading: "りょうり",
    romaji: "ryouri",
    meaning: "món ăn, việc nấu ăn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "飲み物",
    type: "Danh từ",
    reading: "のみもの",
    romaji: "nomimono",
    meaning: "đồ uống",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "スポーツ",
    type: "Danh từ",
    reading: "スポーツ",
    romaji: "supootsu",
    meaning: "thể thao",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "野球",
    type: "Danh từ",
    reading: "やきゅう",
    romaji: "yakyuu",
    meaning: "bóng chày",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "ダンス",
    type: "Danh từ",
    reading: "ダンス",
    romaji: "dansu",
    meaning: "nhảy, khiêu vũ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "カラオケ",
    type: "Danh từ",
    reading: "カラオケ",
    romaji: "karaoke",
    meaning: "karaoke",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "歌",
    type: "Danh từ",
    reading: "うた",
    romaji: "uta",
    meaning: "bài hát",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "歌舞伎",
    type: "Danh từ",
    reading: "かぶき",
    romaji: "kabuki",
    meaning: "kịch kabuki",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "絵",
    type: "Danh từ",
    reading: "え",
    romaji: "e",
    meaning: "tranh, hội họa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "字",
    type: "Danh từ",
    reading: "じ",
    romaji: "ji",
    meaning: "chữ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "漢字",
    type: "Danh từ",
    reading: "かんじ",
    romaji: "kanji",
    meaning: "chữ Hán",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "風邪をひきます",
    type: "Động từ",
    reading: "かぜ 「～をひきます」",
    romaji: "kaze o hikimasu",
    meaning: "cảm, cúm [bị cảm]",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "熱があります",
    type: "Động từ",
    reading: "ねつ 「～があります」",
    romaji: "netsu ga arimasu",
    meaning: "sốt [bị sốt]",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "時間",
    type: "Danh từ",
    reading: "じかん",
    romaji: "jikan",
    meaning: "thời gian",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "用事",
    type: "Danh từ",
    reading: "ようじ",
    romaji: "youji",
    meaning: "việc bận, công chuyện",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "約束",
    type: "Danh từ",
    reading: "やくそく",
    romaji: "yakusoku",
    meaning: "cuộc hẹn, lời hứa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "歯",
    type: "Danh từ",
    reading: "は",
    romaji: "ha",
    meaning: "răng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "どうして",
    type: "Trạng từ",
    reading: "どうして",
    romaji: "doushite",
    meaning: "tại sao",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "分かる",
    type: "Động từ",
    reading: "わかる",
    romaji: "wakaru",
    meaning: "hiểu, nắm được",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "分かります",
    type: "Động từ",
    reading: "わかります",
    romaji: "wakarimasu",
    meaning: "hiểu, nắm được (lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "有る",
    type: "Động từ",
    reading: "ある",
    romaji: "aru",
    meaning: "có (sở hữu)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "あります",
    type: "Động từ",
    reading: "あります",
    romaji: "arimasu",
    meaning: "có (sở hữu) (lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "よく",
    type: "Trạng từ",
    reading: "よく",
    romaji: "yoku",
    meaning: "tốt, rõ (chỉ mức độ), thường",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "だいたい",
    type: "Trạng từ",
    reading: "だいたい",
    romaji: "daitai",
    meaning: "đại khái, đại thể",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "たくさん",
    type: "Trạng từ",
    reading: "たくさん",
    romaji: "takusan",
    meaning: "nhiều",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "少し",
    type: "Trạng từ",
    reading: "すこし",
    romaji: "sukoshi",
    meaning: "ít, một ít",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "全然",
    type: "Trạng từ",
    reading: "ぜんぜん",
    romaji: "zenzen",
    meaning: "hoàn toàn ~ không",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "早く",
    type: "Trạng từ",
    reading: "はやく",
    romaji: "hayaku",
    meaning: "sớm, nhanh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39",
    word: "～から",
    type: "Liên từ",
    reading: "～から",
    romaji: "~kara",
    meaning: "vì ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40",
    word: "他に",
    type: "Trạng từ",
    reading: "ほかに",
    romaji: "hokani",
    meaning: "ngoài ra, bên cạnh đó",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41",
    word: "ベトナムご",
    type: "Danh từ",
    reading: "ベトナムご",
    romaji: "Betonamugo",
    meaning: "tiếng Việt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "42",
    word: "コンサート",
    type: "Danh từ",
    reading: "コンサート",
    romaji: "konsaato",
    meaning: "buổi hòa nhạc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "43",
    word: "チケット",
    type: "Danh từ",
    reading: "チケット",
    romaji: "chiketto",
    meaning: "vé",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "44",
    word: "残念",
    type: "Tính từ-na",
    reading: "ざんねん",
    romaji: "zannen",
    meaning: "đáng tiếc",
    idChapter: 0,
    uniqueId: ""
  },
];
export const initialBai10: Flashcard[] = [
  {
    id: "1",
    word: "色々",
    type: "Tính từ-na",
    reading: "いろいろ",
    romaji: "iroiro",
    meaning: "nhiều, đa dạng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "男の人",
    type: "Danh từ",
    reading: "おとこのひと",
    romaji: "otoko no hito",
    meaning: "người đàn ông",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "女の人",
    type: "Danh từ",
    reading: "おんなのひと",
    romaji: "onna no hito",
    meaning: "người phụ nữ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "男の子",
    type: "Danh từ",
    reading: "おとこのこ",
    romaji: "otoko no ko",
    meaning: "cậu bé",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "女の子",
    type: "Danh từ",
    reading: "おんなのこ",
    romaji: "onna no ko",
    meaning: "cô bé",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "犬",
    type: "Danh từ",
    reading: "いぬ",
    romaji: "inu",
    meaning: "chó",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "猫",
    type: "Danh từ",
    reading: "ねこ",
    romaji: "neko",
    meaning: "mèo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "木",
    type: "Danh từ",
    reading: "き",
    romaji: "ki",
    meaning: "cây, gỗ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "物",
    type: "Danh từ",
    reading: "もの",
    romaji: "mono",
    meaning: "vật, đồ vật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "箱",
    type: "Danh từ",
    reading: "はこ",
    romaji: "hako",
    meaning: "hộp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "冷蔵庫",
    type: "Danh từ",
    reading: "れいぞうこ",
    romaji: "reizouko",
    meaning: "tủ lạnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "テーブル",
    type: "Danh từ",
    reading: "テーブル",
    romaji: "teeburu",
    meaning: "bàn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "ベッド",
    type: "Danh từ",
    reading: "ベッド",
    romaji: "beddo",
    meaning: "giường",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "公園",
    type: "Danh từ",
    reading: "こうえん",
    romaji: "kouen",
    meaning: "công viên",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "本屋",
    type: "Danh từ",
    reading: "ほんや",
    romaji: "honya",
    meaning: "hiệu sách",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "池",
    type: "Danh từ",
    reading: "いけ",
    romaji: "ike",
    meaning: "cái ao",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "～や",
    type: "Danh từ",
    reading: "～や",
    romaji: "~ya",
    meaning: "hiệu ~, cửa hàng ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "地下",
    type: "Danh từ",
    reading: "ちか",
    romaji: "chika",
    meaning: "tầng hầm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "上",
    type: "Danh từ",
    reading: "うえ",
    romaji: "ue",
    meaning: "trên",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "下",
    type: "Danh từ",
    reading: "した",
    romaji: "shita",
    meaning: "dưới",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "前",
    type: "Danh từ",
    reading: "まえ",
    romaji: "mae",
    meaning: "trước",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "後ろ",
    type: "Danh từ",
    reading: "うしろ",
    romaji: "ushiro",
    meaning: "sau",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "右",
    type: "Danh từ",
    reading: "みぎ",
    romaji: "migi",
    meaning: "phải",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "左",
    type: "Danh từ",
    reading: "ひだり",
    romaji: "hidari",
    meaning: "trái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "中",
    type: "Danh từ",
    reading: "なか",
    romaji: "naka",
    meaning: "trong, giữa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "外",
    type: "Danh từ",
    reading: "そと",
    romaji: "soto",
    meaning: "ngoài",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "隣",
    type: "Danh từ",
    reading: "となり",
    romaji: "tonari",
    meaning: "bên cạnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "近く",
    type: "Danh từ",
    reading: "ちかく",
    romaji: "chikaku",
    meaning: "gần",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "間",
    type: "Danh từ",
    reading: "あいだ",
    romaji: "aida",
    meaning: "giữa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "有る",
    type: "Động từ nhóm 1",
    reading: "ある",
    romaji: "aru",
    meaning: "có (tồn tại, dùng cho đồ vật)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "居る",
    type: "Động từ nhóm 2",
    reading: "いる",
    romaji: "iru",
    meaning: "có, ở (tồn tại, dùng cho người và động vật)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "～や～など",
    type: "Cụm từ",
    reading: "～や～など",
    romaji: "~ya~nado",
    meaning: "~ và ~, v.v.",
    idChapter: 0,
    uniqueId: ""
  },
];
export const initialBai11: Flashcard[] = [
  {
    id: "1",
    word: "恋人",
    type: "Danh từ",
    reading: "こいびと",
    romaji: "koibito",
    meaning: "người yêu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "兄",
    type: "Danh từ",
    reading: "あに",
    romaji: "ani",
    meaning: "anh trai (mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "お兄さん",
    type: "Danh từ",
    reading: "おにいさん",
    romaji: "oniisan",
    meaning: "anh trai (của người khác hoặc xưng hô với anh trai mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "姉",
    type: "Danh từ",
    reading: "あね",
    romaji: "ane",
    meaning: "chị gái (mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "お姉さん",
    type: "Danh từ",
    reading: "おねえさん",
    romaji: "oneesan",
    meaning: "chị gái (của người khác hoặc xưng hô với chị gái mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "弟",
    type: "Danh từ",
    reading: "おとうと",
    romaji: "otouto",
    meaning: "em trai (mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "妹",
    type: "Danh từ",
    reading: "いもうと",
    romaji: "imouto",
    meaning: "em gái (mình)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "兄弟",
    type: "Danh từ",
    reading: "きょうだい",
    romaji: "kyoudai",
    meaning: "anh em",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "子供",
    type: "Danh từ",
    reading: "こども",
    romaji: "kodomo",
    meaning: "trẻ con, trẻ em",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "アイスクリーム",
    type: "Danh từ",
    reading: "アイスクリーム",
    romaji: "aisukuriimu",
    meaning: "kem",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "葉書",
    type: "Danh từ",
    reading: "はがき",
    romaji: "hagaki",
    meaning: "bưu thiếp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "奥",
    type: "Danh từ",
    reading: "おく",
    romaji: "oku",
    meaning: "bên trong cùng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "本棚",
    type: "Danh từ",
    reading: "ほんだな",
    romaji: "hondana",
    meaning: "giá sách",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "寮",
    type: "Danh từ",
    reading: "りょう",
    romaji: "ryou",
    meaning: "kí túc xá",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "田舎",
    type: "Danh từ",
    reading: "いなか",
    romaji: "inaka",
    meaning: "quê, nông thôn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "外国",
    type: "Danh từ",
    reading: "がいこく",
    romaji: "gaikoku",
    meaning: "nước ngoài",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "動物",
    type: "Danh từ",
    reading: "どうぶつ",
    romaji: "doubutsu",
    meaning: "động vật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "昼寝",
    type: "Danh từ",
    reading: "ひるね",
    romaji: "hirune",
    meaning: "ngủ trưa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "一つ",
    type: "Danh từ",
    reading: "ひとつ",
    romaji: "hitotsu",
    meaning: "một cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "二つ",
    type: "Danh từ",
    reading: "ふたつ",
    romaji: "futatsu",
    meaning: "hai cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "三つ",
    type: "Danh từ",
    reading: "みっつ",
    romaji: "mittsu",
    meaning: "ba cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "四つ",
    type: "Danh từ",
    reading: "よっつ",
    romaji: "yottsu",
    meaning: "bốn cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "五つ",
    type: "Danh từ",
    reading: "いつつ",
    romaji: "itsutsu",
    meaning: "năm cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "六つ",
    type: "Danh từ",
    reading: "むっつ",
    romaji: "muttsu",
    meaning: "sáu cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "七つ",
    type: "Danh từ",
    reading: "ななつ",
    romaji: "nanatsu",
    meaning: "bảy cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "八つ",
    type: "Danh từ",
    reading: "やっつ",
    romaji: "yattsu",
    meaning: "tám cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "九つ",
    type: "Danh từ",
    reading: "ここのつ",
    romaji: "kokonotsu",
    meaning: "chín cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "十",
    type: "Danh từ",
    reading: "とお",
    romaji: "too",
    meaning: "mười cái",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "一人",
    type: "Danh từ",
    reading: "ひとり",
    romaji: "hitori",
    meaning: "một người",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "二人",
    type: "Danh từ",
    reading: "ふたり",
    romaji: "futari",
    meaning: "hai người",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "居る",
    type: "Động từ",
    reading: "いる",
    romaji: "iru",
    meaning: "có (dùng với người, con)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "居ます",
    type: "Động từ",
    reading: "います",
    romaji: "imasu",
    meaning: "có (dùng với người, con) - cách nói lịch sự",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "休む",
    type: "Động từ",
    reading: "やすむ",
    romaji: "yasumu",
    meaning: "nghỉ, nghỉ ngơi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "休みます",
    type: "Động từ",
    reading: "やすみます",
    romaji: "yasumimasu",
    meaning: "nghỉ, nghỉ ngơi - cách nói lịch sự",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "焼きます",
    type: "Động từ",
    reading: "やきます",
    romaji: "yakimasu",
    meaning: "nướng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "遠くに",
    type: "Trạng từ",
    reading: "とおくに",
    romaji: "tooku ni",
    meaning: "ở đằng xa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "必要",
    type: "Tính từ",
    reading: "ひつよう",
    romaji: "hitsuyou",
    meaning: "cần thiết",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "両親",
    type: "Danh từ",
    reading: "りょうしん",
    romaji: "ryoushin",
    meaning: "bố mẹ",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai12: Flashcard[] = [
  {
    id: "1",
    word: "簡単",
    type: "Tính từ-na",
    reading: "かんたん",
    romaji: "kantan",
    meaning: "đơn giản, dễ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2",
    word: "近い",
    type: "Tính từ-i",
    reading: "ちかい",
    romaji: "chikai",
    meaning: "gần",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3",
    word: "遠い",
    type: "Tính từ-i",
    reading: "とおい",
    romaji: "tooi",
    meaning: "xa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4",
    word: "早い、速い",
    type: "Tính từ-i",
    reading: "はやい",
    romaji: "hayai",
    meaning: "sớm, nhanh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5",
    word: "遅い",
    type: "Tính từ-i",
    reading: "おそい",
    romaji: "osoi",
    meaning: "muộn, chậm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6",
    word: "多い",
    type: "Tính từ-i",
    reading: "おおい",
    romaji: "ooi",
    meaning: "nhiều [người]",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7",
    word: "少ない",
    type: "Tính từ-i",
    reading: "すくない",
    romaji: "sukunai",
    meaning: "ít [người]",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8",
    word: "暖かい",
    type: "Tính từ-i",
    reading: "あたたかい",
    romaji: "atatakai",
    meaning: "ấm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9",
    word: "涼しい",
    type: "Tính từ-i",
    reading: "すずしい",
    romaji: "suzushii",
    meaning: "mát",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10",
    word: "甘い",
    type: "Tính từ-i",
    reading: "あまい",
    romaji: "amai",
    meaning: "ngọt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11",
    word: "辛い",
    type: "Tính từ-i",
    reading: "からい",
    romaji: "karai",
    meaning: "cay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12",
    word: "重い",
    type: "Tính từ-i",
    reading: "おもい",
    romaji: "omoi",
    meaning: "nặng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13",
    word: "軽い",
    type: "Tính từ-i",
    reading: "かるい",
    romaji: "karui",
    meaning: "nhẹ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14",
    word: "良い",
    type: "Tính từ-i",
    reading: "いい",
    romaji: "ii",
    meaning: "thích, chọn, dùng [ví dụ: chọn cafe, thích cafe]",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15",
    word: "背が高い",
    type: "Tính từ-i",
    reading: "せがたかい",
    romaji: "se ga takai",
    meaning: "cao (dùng cho người)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16",
    word: "季節",
    type: "Danh từ",
    reading: "きせつ",
    romaji: "kisetsu",
    meaning: "mùa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17",
    word: "春",
    type: "Danh từ",
    reading: "はる",
    romaji: "haru",
    meaning: "mùa xuân",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18",
    word: "夏",
    type: "Danh từ",
    reading: "なつ",
    romaji: "natsu",
    meaning: "mùa hè",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19",
    word: "秋",
    type: "Danh từ",
    reading: "あき",
    romaji: "aki",
    meaning: "mùa thu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20",
    word: "冬",
    type: "Danh từ",
    reading: "ふゆ",
    romaji: "fuyu",
    meaning: "mùa đông",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21",
    word: "天気",
    type: "Danh từ",
    reading: "てんき",
    romaji: "tenki",
    meaning: "thời tiết",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22",
    word: "雨",
    type: "Danh từ",
    reading: "あめ",
    romaji: "ame",
    meaning: "mưa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23",
    word: "雪",
    type: "Danh từ",
    reading: "ゆき",
    romaji: "yuki",
    meaning: "tuyết",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24",
    word: "曇り",
    type: "Danh từ",
    reading: "くもり",
    romaji: "kumori",
    meaning: "trời âm u",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25",
    word: "空港",
    type: "Danh từ",
    reading: "くうこう",
    romaji: "kuukou",
    meaning: "sân bay",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26",
    word: "海",
    type: "Danh từ",
    reading: "うみ",
    romaji: "umi",
    meaning: "biển, đại dương",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27",
    word: "世界",
    type: "Danh từ",
    reading: "せかい",
    romaji: "sekai",
    meaning: "thế giới",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28",
    word: "祭り",
    type: "Danh từ",
    reading: "まつり",
    romaji: "matsuri",
    meaning: "lễ hội",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29",
    word: "パーティー",
    type: "Danh từ",
    reading: "パーティー",
    romaji: "paatii",
    meaning: "tiệc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30",
    word: "スピーチ",
    type: "Danh từ",
    reading: "スピーチ",
    romaji: "supiichi",
    meaning: "bài diễn thuyết, bài phát biểu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31",
    word: "テスト",
    type: "Danh từ",
    reading: "テスト",
    romaji: "tesuto",
    meaning: "bài kiểm tra",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32",
    word: "試験",
    type: "Danh từ",
    reading: "しけん",
    romaji: "shiken",
    meaning: "kỳ thi, bài thi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33",
    word: "一番",
    type: "Trạng từ",
    reading: "いちばん",
    romaji: "ichiban",
    meaning: "nhất",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34",
    word: "どちら",
    type: "Danh từ",
    reading: "どちら",
    romaji: "dochira",
    meaning: "cái nào",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35",
    word: "どちらも",
    type: "Trạng từ",
    reading: "どちらも",
    romaji: "dochiramo",
    meaning: "cả hai, cái nào cũng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36",
    word: "ずっと",
    type: "Trạng từ",
    reading: "ずっと",
    romaji: "zutto",
    meaning: "(hơn) hẳn, dùng để nhấn mạnh sự khác biệt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37",
    word: "初めて",
    type: "Trạng từ",
    reading: "はじめて",
    romaji: "hajimete",
    meaning: "lần đầu tiên",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38",
    word: "日本酒",
    type: "Danh từ",
    reading: "にほんしゅ",
    romaji: "nihonshu",
    meaning: "Rượu Nhật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39",
    word: "一生懸命",
    type: "Tính từ-na / Trạng từ",
    reading: "いっしょうけんめい",
    romaji: "isshoukenmei",
    meaning: "sự cố gắng hết sức",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai13: Flashcard[] = [
  {
    id: "1", word: "遊びます", type: "(I)", reading: "あそびます", romaji: "asobimasu", meaning: "chơi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "泳ぎます", type: "(I)", reading: "およぎます", romaji: "oyogimasu", meaning: "bơi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "迎えます", type: "(II)", reading: "むかえます", romaji: "mukaemasu", meaning: "đón",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "疲れます", type: "(II)", reading: "つかれます", romaji: "tsukaremasu", meaning: "mệt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "出します", type: "(I)", reading: "だします", romaji: "dashimasu", meaning: "gửi (thư)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "入ります", type: "(I)", reading: "はいります", romaji: "hairimasu", meaning: "vào (quán)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "出ます", type: "(II)", reading: "でます", romaji: "demasu", meaning: "ra, rời khỏi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "結婚します", type: "(III)", reading: "けっこんします", romaji: "kekkon shimasu", meaning: "kết hôn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "買い物します", type: "(III)", reading: "かいものします", romaji: "kaimono shimasu", meaning: "mua sắm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "食事します", type: "(III)", reading: "しょくじします", romaji: "shokuji shimasu", meaning: "ăn cơm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11", word: "散歩します", type: "(III)", reading: "さんぽします", romaji: "sanpo shimasu", meaning: "đi dạo",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "12", word: "大変", type: "(Adj-na)", reading: "たいへん", romaji: "taihen", meaning: "vất vả, khó khăn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "欲しい", type: "(Adj-i)", reading: "ほしい", romaji: "hoshii", meaning: "muốn có",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "寂しい", type: "(Adj-i)", reading: "さびしい", romaji: "sabishii", meaning: "cô đơn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "広い", type: "(Adj-i)", reading: "ひろい", romaji: "hiroi", meaning: "rộng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "狭い", type: "(Adj-i)", reading: "せまい", romaji: "semai", meaning: "chật, hẹp",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "17", word: "市役所", type: "(N)", reading: "しやくしょ", romaji: "shiyakusho", meaning: "tòa thị chính",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "プール", type: "(N)", reading: "プール", romaji: "puuru", meaning: "hồ bơi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19", word: "川", type: "(N)", reading: "かわ", romaji: "kawa", meaning: "sông",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "経済", type: "(N)", reading: "けいざい", romaji: "keizai", meaning: "kinh tế",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "美術", type: "(N)", reading: "びじゅつ", romaji: "bijutsu", meaning: "mỹ thuật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22", word: "釣り", type: "(N)", reading: "つり", romaji: "tsuri", meaning: "câu cá",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23", word: "スキー", type: "(N)", reading: "スキー", romaji: "sukii", meaning: "trượt tuyết",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "会議", type: "(N)", reading: "かいぎ", romaji: "kaigi", meaning: "cuộc họp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25", word: "登録", type: "(N)", reading: "とうろく", romaji: "touroku", meaning: "đăng ký",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "週末", type: "(N)", reading: "しゅうまつ", romaji: "shuumatsu", meaning: "cuối tuần",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "27", word: "～ごろ", type: "(Adv)", reading: "～ごろ", romaji: "~goro", meaning: "khoảng (thời gian)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28", word: "何か", type: "(Pron)", reading: "なにか", romaji: "nanika", meaning: "cái gì đó",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29", word: "どこか", type: "(Pron)", reading: "どこか", romaji: "dokoka", meaning: "đâu đó",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "30", word: "おなかがすきました", type: "(Expr)", reading: "", romaji: "", meaning: "tôi đói rồi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31", word: "おなかがいっぱいです", type: "(Expr)", reading: "", romaji: "", meaning: "tôi no rồi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32", word: "のどがかわきました", type: "(Expr)", reading: "", romaji: "", meaning: "tôi khát",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "33", word: "そうですね", type: "(Expr)", reading: "", romaji: "", meaning: "đúng thế",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34", word: "そうしましょう", type: "(Expr)", reading: "", romaji: "", meaning: "chúng ta thống nhất vậy",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "35", word: "ご注文は？", type: "(Expr)", reading: "ごちゅうもんは？", romaji: "gochuumon wa?", meaning: "quý khách dùng gì?",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36", word: "定食", type: "(N)", reading: "ていしょく", romaji: "teishoku", meaning: "cơm suất",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37", word: "牛どん", type: "(N)", reading: "ぎゅうどん", romaji: "gyuudon", meaning: "cơm bò",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38", word: "少々お待ちください", type: "(Expr)", reading: "しょうしょうおまちください", romaji: "shoushou omachi kudasai", meaning: "vui lòng đợi một chút",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39", word: "別々に", type: "(Adv)", reading: "べつべつに", romaji: "betsubetsu ni", meaning: "riêng ra",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40", word: "ロシア", type: "(N)", reading: "ロシア", romaji: "roshia", meaning: "Nga",
    idChapter: 0,
    uniqueId: ""
  },
];


export const initialBai14: Flashcard[] = [
  {
    id: "1", word: "つけます", type: "(II)", reading: "つけます", romaji: "tsukemasu", meaning: "bật (điện, điều hòa)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "消します", type: "(I)", reading: "けします", romaji: "keshimasu", meaning: "tắt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "開けます", type: "(II)", reading: "あけます", romaji: "akemasu", meaning: "mở",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "閉めます", type: "(II)", reading: "しめます", romaji: "shimemasu", meaning: "đóng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "急ぎます", type: "(I)", reading: "いそぎます", romaji: "isogimasu", meaning: "vội",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "待ちます", type: "(I)", reading: "まちます", romaji: "machimasu", meaning: "đợi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "止めます", type: "(II)", reading: "とめます", romaji: "tomemasu", meaning: "dừng, đỗ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "曲がります", type: "(I)", reading: "まがります", romaji: "magarimasu", meaning: "rẽ (phải/trái)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "持ちます", type: "(I)", reading: "もちます", romaji: "mochimasu", meaning: "cầm, mang",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "取ります", type: "(I)", reading: "とります", romaji: "torimasu", meaning: "lấy",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11", word: "手伝います", type: "(I)", reading: "てつだいます", romaji: "tetsudaimasu", meaning: "giúp đỡ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12", word: "呼びます", type: "(I)", reading: "よびます", romaji: "yobimasu", meaning: "gọi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "話します", type: "(I)", reading: "はなします", romaji: "hanashimasu", meaning: "nói chuyện",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "見せます", type: "(II)", reading: "みせます", romaji: "misemasu", meaning: "cho xem",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "教えます", type: "(II)", reading: "おしえます", romaji: "oshiemasu", meaning: "chỉ, cho biết",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "始めます", type: "(II)", reading: "はじめます", romaji: "hajimemasu", meaning: "bắt đầu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "降ります", type: "(I)", reading: "ふります", romaji: "furimasu", meaning: "rơi (mưa, tuyết)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "コピーします", type: "(III)", reading: "コピーします", romaji: "kopii shimasu", meaning: "copy",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "19", word: "エアコン", type: "(N)", reading: "エアコン", romaji: "eakon", meaning: "máy điều hòa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "パスポート", type: "(N)", reading: "パスポート", romaji: "pasupooto", meaning: "hộ chiếu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "名前", type: "(N)", reading: "なまえ", romaji: "namae", meaning: "tên",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22", word: "住所", type: "(N)", reading: "じゅうしょ", romaji: "juusho", meaning: "địa chỉ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23", word: "地図", type: "(N)", reading: "ちず", romaji: "chizu", meaning: "bản đồ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "塩", type: "(N)", reading: "しお", romaji: "shio", meaning: "muối",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25", word: "砂糖", type: "(N)", reading: "さとう", romaji: "satou", meaning: "đường",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "読み方", type: "(N)", reading: "よみかた", romaji: "yomikata", meaning: "cách đọc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27", word: "～方", type: "(Suffix)", reading: "～かた", romaji: "~kata", meaning: "cách ~",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "28", word: "ゆっくり", type: "(Adv)", reading: "ゆっくり", romaji: "yukkuri", meaning: "chậm rãi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29", word: "すぐ", type: "(Adv)", reading: "すぐ", romaji: "sugu", meaning: "ngay lập tức",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30", word: "また", type: "(Adv)", reading: "また", romaji: "mata", meaning: "lại",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31", word: "あとで", type: "(Adv)", reading: "あとで", romaji: "ato de", meaning: "sau",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32", word: "もう少し", type: "(Adv)", reading: "もうすこし", romaji: "mou sukoshi", meaning: "thêm một chút",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33", word: "もう～", type: "(Adv)", reading: "もう～", romaji: "mou~", meaning: "thêm ~",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "34", word: "いいですよ", type: "(Expr)", reading: "", romaji: "", meaning: "được thôi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35", word: "さあ", type: "(Expr)", reading: "", romaji: "", meaning: "nào, thôi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36", word: "あれ？", type: "(Expr)", reading: "", romaji: "", meaning: "ơ?",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "37", word: "信号を右へ曲がってください", type: "(Expr)", reading: "しんごうをみぎへまがってください", romaji: "shingou o migi e magatte kudasai", meaning: "rẽ phải ở đèn giao thông",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38", word: "まっすぐ", type: "(Adv)", reading: "まっすぐ", romaji: "massugu", meaning: "đi thẳng",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "39", word: "これでお願いします", type: "(Expr)", reading: "", romaji: "", meaning: "gửi bạn số tiền này",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "40", word: "お釣り", type: "(N)", reading: "おつり", romaji: "otsuri", meaning: "tiền thừa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41", word: "梅田", type: "(N)", reading: "うめだ", romaji: "umeda", meaning: "Umeda (Osaka)",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai15: Flashcard[] = [
  {
    id: "1", word: "立ちます", type: "(I)", reading: "たちます", romaji: "tachimasu", meaning: "đứng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "座ります", type: "(I)", reading: "すわります", romaji: "suwarimasu", meaning: "ngồi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "使います", type: "(I)", reading: "つかいます", romaji: "tsukaimasu", meaning: "sử dụng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "置きます", type: "(II)", reading: "おきます", romaji: "okimasu", meaning: "đặt, để",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "作ります", type: "(I)", reading: "つくります", romaji: "tsukurimasu", meaning: "làm, chế tạo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "売ります", type: "(I)", reading: "うります", romaji: "urimasu", meaning: "bán",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "知ります", type: "(I)", reading: "しります", romaji: "shirimasu", meaning: "biết (lần đầu)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "住みます", type: "(II)", reading: "すみます", romaji: "sumimasu", meaning: "sống, ở",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "研究します", type: "(III)", reading: "けんきゅうします", romaji: "kenkyuu shimasu", meaning: "nghiên cứu",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "10", word: "知っています", type: "(Expr)", reading: "しっています", romaji: "shitteimasu", meaning: "đã biết",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11", word: "住んでいます", type: "(Expr)", reading: "すんでいます", romaji: "sundeimasu", meaning: "đang sống",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "12", word: "資料", type: "(N)", reading: "しりょう", romaji: "shiryou", meaning: "tài liệu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "カタログ", type: "(N)", reading: "カタログ", romaji: "katarogu", meaning: "catalog",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "時刻表", type: "(N)", reading: "じこくひょう", romaji: "jikokuhyou", meaning: "bảng giờ tàu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "服", type: "(N)", reading: "ふく", romaji: "fuku", meaning: "quần áo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "製品", type: "(N)", reading: "せいひん", romaji: "seihin", meaning: "sản phẩm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "ソフト", type: "(N)", reading: "ソフト", romaji: "sofuto", meaning: "phần mềm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "専門", type: "(N)", reading: "せんもん", romaji: "senmon", meaning: "chuyên môn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19", word: "歯医者", type: "(N)", reading: "はいしゃ", romaji: "haisha", meaning: "nha sĩ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "床屋", type: "(N)", reading: "とこや", romaji: "tokoya", meaning: "tiệm cắt tóc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "プレイガイド", type: "(N)", reading: "プレイガイド", romaji: "pureigaido", meaning: "quầy bán vé",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22", word: "独身", type: "(N)", reading: "どくしん", romaji: "dokushin", meaning: "độc thân",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "23", word: "特に", type: "(Adv)", reading: "とくに", romaji: "tokuni", meaning: "đặc biệt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "思い出します", type: "(I)", reading: "おもいだします", romaji: "omoidasimasu", meaning: "nhớ lại",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "25", word: "ご家族", type: "(N)", reading: "ごかぞく", romaji: "gokazoku", meaning: "gia đình (người khác)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "いらっしゃいます", type: "(Honorific)", reading: "", romaji: "irasshaimasu", meaning: "có (kính ngữ của います)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "27", word: "高校", type: "(N)", reading: "こうこう", romaji: "koukou", meaning: "trường THPT",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28", word: "日本橋", type: "(N)", reading: "にっぽんばし", romaji: "nipponbashi", meaning: "Nipponbashi (Osaka)",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai16: Flashcard[] = [
  {
    id: "1", word: "乗ります", type: "(I)", reading: "のります", romaji: "norimasu", meaning: "lên (tàu)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "降ります", type: "(II)", reading: "おります", romaji: "orimasu", meaning: "xuống (tàu)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "乗り換えます", type: "(II)", reading: "のりかえます", romaji: "norikaemasu", meaning: "chuyển tàu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "浴びます", type: "(II)", reading: "あびます", romaji: "abimasu", meaning: "tắm (vòi sen)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "入れます", type: "(II)", reading: "いれます", romaji: "iremasu", meaning: "cho vào",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "出します", type: "(I)", reading: "だします", romaji: "dashimasu", meaning: "lấy ra, rút (tiền)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "入ります", type: "(I)", reading: "はいります", romaji: "hairimasu", meaning: "vào (đại học)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "出ます", type: "(II)", reading: "でます", romaji: "demasu", meaning: "ra, tốt nghiệp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "やめます", type: "(II)", reading: "やめます", romaji: "yamemasu", meaning: "bỏ, nghỉ (việc)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "押します", type: "(I)", reading: "おします", romaji: "oshimasu", meaning: "ấn, bấm",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "11", word: "若い", type: "(Adj-i)", reading: "わかい", romaji: "wakai", meaning: "trẻ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12", word: "長い", type: "(Adj-i)", reading: "ながい", romaji: "nagai", meaning: "dài",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "短い", type: "(Adj-i)", reading: "みじかい", romaji: "mijikai", meaning: "ngắn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "明るい", type: "(Adj-i)", reading: "あかるい", romaji: "akarui", meaning: "sáng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "暗い", type: "(Adj-i)", reading: "くらい", romaji: "kurai", meaning: "tối",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "背が高い", type: "(Expr)", reading: "せがたかい", romaji: "segatakai", meaning: "cao (người)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "頭がいい", type: "(Expr)", reading: "あたまがいい", romaji: "atama ga ii", meaning: "thông minh",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "18", word: "体", type: "(N)", reading: "からだ", romaji: "karada", meaning: "cơ thể",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19", word: "頭", type: "(N)", reading: "あたま", romaji: "atama", meaning: "đầu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "髪", type: "(N)", reading: "かみ", romaji: "kami", meaning: "tóc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "顔", type: "(N)", reading: "かお", romaji: "kao", meaning: "mặt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22", word: "目", type: "(N)", reading: "め", romaji: "me", meaning: "mắt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23", word: "耳", type: "(N)", reading: "みみ", romaji: "mimi", meaning: "tai",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "口", type: "(N)", reading: "くち", romaji: "kuchi", meaning: "miệng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25", word: "歯", type: "(N)", reading: "は", romaji: "ha", meaning: "răng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "おなか", type: "(N)", reading: "おなか", romaji: "onaka", meaning: "bụng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27", word: "足", type: "(N)", reading: "あし", romaji: "ashi", meaning: "chân",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "28", word: "サービス", type: "(N)", reading: "サービス", romaji: "saabisu", meaning: "dịch vụ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29", word: "ジョギング", type: "(N)", reading: "ジョギング", romaji: "jogingu", meaning: "chạy bộ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30", word: "シャワー", type: "(N)", reading: "シャワー", romaji: "shawaa", meaning: "vòi sen",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31", word: "緑", type: "(N)", reading: "みどり", romaji: "midori", meaning: "màu xanh lá",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32", word: "お寺", type: "(N)", reading: "おてら", romaji: "otera", meaning: "chùa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33", word: "神社", type: "(N)", reading: "じんじゃ", romaji: "jinja", meaning: "đền (Thần đạo)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34", word: "留学生", type: "(N)", reading: "りゅうがくせい", romaji: "ryuugakusei", meaning: "du học sinh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35", word: "一番", type: "(N)", reading: "いちばん", romaji: "ichiban", meaning: "số 1, nhất",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "36", word: "どうやって", type: "(Adv)", reading: "どうやって", romaji: "douyatte", meaning: "làm thế nào",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37", word: "どの～", type: "(Pron)", reading: "どの～", romaji: "dono~", meaning: "cái nào (>=3)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "38", word: "まだまだです", type: "(Expr)", reading: "", romaji: "", meaning: "tôi còn kém",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "39", word: "お引出しですか", type: "(Expr)", reading: "おひきだしですか", romaji: "ohikidashi desu ka", meaning: "bạn rút tiền à?",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "40", word: "まず", type: "(Adv)", reading: "まず", romaji: "mazu", meaning: "trước hết",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "41", word: "キャッシュカード", type: "(N)", reading: "キャッシュカード", romaji: "kyasshu kaado", meaning: "thẻ ATM",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "42", word: "暗証番号", type: "(N)", reading: "あんしょうばんごう", romaji: "anshou bangou", meaning: "mật khẩu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "43", word: "次に", type: "(Adv)", reading: "つぎに", romaji: "tsugi ni", meaning: "tiếp theo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "44", word: "金額", type: "(N)", reading: "きんがく", romaji: "kingaku", meaning: "số tiền",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "45", word: "確認", type: "(N)", reading: "かくにん", romaji: "kakunin", meaning: "xác nhận",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "46", word: "ボタン", type: "(N)", reading: "ボタン", romaji: "botan", meaning: "nút",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "47", word: "JR", type: "(N)", reading: "ジェーアール", romaji: "jeearu", meaning: "đường sắt Nhật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "48", word: "アジア", type: "(N)", reading: "アジア", romaji: "ajia", meaning: "châu Á",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "49", word: "バンドン", type: "(N)", reading: "バンドン", romaji: "bandon", meaning: "Bandung",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "50", word: "ベラクルス", type: "(N)", reading: "ベラクルス", romaji: "berakurusu", meaning: "Veracruz",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "51", word: "フランケン", type: "(N)", reading: "フランケン", romaji: "furanken", meaning: "Franken",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "52", word: "ベトナム", type: "(N)", reading: "ベトナム", romaji: "betonamu", meaning: "Việt Nam",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "53", word: "フェ", type: "(N)", reading: "フェ", romaji: "fe", meaning: "Huế",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai17: Flashcard[] = [
  {
    id: "1", word: "覚えます", type: "(II)", reading: "おぼえます", romaji: "oboemasu", meaning: "nhớ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "忘れます", type: "(II)", reading: "わすれます", romaji: "wasuremasu", meaning: "quên",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "なくします", type: "(I)", reading: "なくします", romaji: "nakushimasu", meaning: "làm mất",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "出します", type: "(I)", reading: "だします", romaji: "dashimasu", meaning: "nộp (báo cáo)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "払います", type: "(I)", reading: "はらいます", romaji: "haraimasu", meaning: "trả tiền",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "返します", type: "(I)", reading: "かえします", romaji: "kaeshimasu", meaning: "trả lại",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "出かけます", type: "(II)", reading: "でかけます", romaji: "dekakemasu", meaning: "ra ngoài",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "脱ぎます", type: "(I)", reading: "ぬぎます", romaji: "nugimasu", meaning: "cởi (quần áo)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "持って行きます", type: "(I)", reading: "もっていきます", romaji: "motte ikimasu", meaning: "mang đi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "持って来ます", type: "(III)", reading: "もってきます", romaji: "motte kimasu", meaning: "mang đến",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11", word: "心配します", type: "(III)", reading: "しんぱいします", romaji: "shinpai shimasu", meaning: "lo lắng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12", word: "残業します", type: "(III)", reading: "ざんぎょうします", romaji: "zangyou shimasu", meaning: "làm thêm giờ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "出張します", type: "(III)", reading: "しゅっちょうします", romaji: "shucchou shimasu", meaning: "đi công tác",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "飲みます", type: "(I)", reading: "のみます", romaji: "nomimasu", meaning: "uống (thuốc)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "入ります", type: "(I)", reading: "はいります", romaji: "hairimasu", meaning: "vào (bồn tắm)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "16", word: "大切", type: "(Adj-na)", reading: "たいせつ", romaji: "taisetsu", meaning: "quan trọng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "大丈夫", type: "(Adj-na)", reading: "だいじょうぶ", romaji: "daijoubu", meaning: "không sao",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "危ない", type: "(Adj-i)", reading: "あぶない", romaji: "abunai", meaning: "nguy hiểm",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "19", word: "問題", type: "(N)", reading: "もんだい", romaji: "mondai", meaning: "vấn đề",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "答え", type: "(N)", reading: "こたえ", romaji: "kotae", meaning: "câu trả lời",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "禁煙", type: "(N)", reading: "きんえん", romaji: "kin'en", meaning: "cấm hút thuốc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22", word: "保険証", type: "(N)", reading: "ほけんしょう", romaji: "hokenshou", meaning: "thẻ bảo hiểm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23", word: "かぜ", type: "(N)", reading: "かぜ", romaji: "kaze", meaning: "cảm cúm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "熱", type: "(N)", reading: "ねつ", romaji: "netsu", meaning: "sốt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25", word: "病気", type: "(N)", reading: "びょうき", romaji: "byouki", meaning: "bệnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "薬", type: "(N)", reading: "くすり", romaji: "kusuri", meaning: "thuốc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27", word: "おふろ", type: "(N)", reading: "おふろ", romaji: "ofuro", meaning: "bồn tắm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28", word: "上着", type: "(N)", reading: "うわぎ", romaji: "uwagi", meaning: "áo khoác",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29", word: "下着", type: "(N)", reading: "したぎ", romaji: "shitagi", meaning: "đồ lót",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "30", word: "先生", type: "(N)", reading: "せんせい", romaji: "sensei", meaning: "bác sĩ",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "31", word: "２，３日", type: "(N)", reading: "にさんにち", romaji: "ni-san nichi", meaning: "vài ngày",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32", word: "２，３～", type: "(Prefix)", reading: "にさん～", romaji: "ni-san ~", meaning: "vài ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33", word: "～までに", type: "(Grammar)", reading: "～までに", romaji: "~made ni", meaning: "trước (deadline)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "34", word: "ですから", type: "(Conj)", reading: "ですから", romaji: "desukara", meaning: "vì thế",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35", word: "どうしましたか", type: "(Expr)", reading: "", romaji: "", meaning: "bạn bị sao vậy?",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "36", word: "～が痛いです", type: "(Expr)", reading: "～がいたいです", romaji: "~ ga itai desu", meaning: "bị đau ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37", word: "のど", type: "(N)", reading: "のど", romaji: "nodo", meaning: "họng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "38", word: "お大事に", type: "(Expr)", reading: "おだいじに", romaji: "odaiji ni", meaning: "mau khỏe nhé",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai18: Flashcard[] = [
  {
    id: "1", word: "できます", type: "(II)", reading: "できます", romaji: "dekimasu", meaning: "có thể",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "洗います", type: "(I)", reading: "あらいます", romaji: "araimasu", meaning: "rửa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "弾きます", type: "(I)", reading: "ひきます", romaji: "hikimasu", meaning: "chơi (nhạc cụ)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "歌います", type: "(I)", reading: "うたいます", romaji: "utaimasu", meaning: "hát",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "集めます", type: "(II)", reading: "あつめます", romaji: "atsumemasu", meaning: "sưu tầm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "捨てます", type: "(II)", reading: "すてます", romaji: "sutemasu", meaning: "vứt đi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "換えます", type: "(II)", reading: "かえます", romaji: "kaemasu", meaning: "đổi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "運転します", type: "(III)", reading: "うんてんします", romaji: "unten shimasu", meaning: "lái xe",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "予約します", type: "(III)", reading: "よやくします", romaji: "yoyaku shimasu", meaning: "đặt chỗ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "見学します", type: "(III)", reading: "けんがくします", romaji: "kengaku shimasu", meaning: "tham quan (học tập)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "11", word: "ピアノ", type: "(N)", reading: "ピアノ", romaji: "piano", meaning: "đàn piano",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12", word: "～メートル", type: "(Counter)", reading: "～メートル", romaji: "~ meetoru", meaning: "~ mét",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "国際～", type: "(Prefix)", reading: "こくさい～", romaji: "kokusai~", meaning: "~ quốc tế",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "現金", type: "(N)", reading: "げんきん", romaji: "genkin", meaning: "tiền mặt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "趣味", type: "(N)", reading: "しゅみ", romaji: "shumi", meaning: "sở thích",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "日記", type: "(N)", reading: "にっき", romaji: "nikki", meaning: "nhật ký",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "お祈り", type: "(N)", reading: "おいのり", romaji: "oinori", meaning: "cầu nguyện",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "課長", type: "(N)", reading: "かちょう", romaji: "kachou", meaning: "trưởng nhóm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19", word: "部長", type: "(N)", reading: "ぶちょう", romaji: "buchou", meaning: "trưởng phòng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "社長", type: "(N)", reading: "しゃちょう", romaji: "shachou", meaning: "giám đốc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "動物", type: "(N)", reading: "どうぶつ", romaji: "doubutsu", meaning: "động vật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22", word: "鳥", type: "(N)", reading: "とり", romaji: "tori", meaning: "chim",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "23", word: "へえ", type: "(Expr)", reading: "", romaji: "hee", meaning: "thế à!",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "それはおもしろいですね", type: "(Expr)", reading: "", romaji: "", meaning: "hay thật nhỉ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "25", word: "なかなか", type: "(Adv)", reading: "なかなか", romaji: "nakanaka", meaning: "khó mà (phủ định)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "牧場", type: "(N)", reading: "ぼくじょう", romaji: "bokujou", meaning: "trang trại",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27", word: "本当ですか", type: "(Expr)", reading: "ほんとうですか", romaji: "hontou desu ka", meaning: "thật không?",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28", word: "ぜひ", type: "(Adv)", reading: "ぜひ", romaji: "zehi", meaning: "nhất định",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "29", word: "ビートルズ", type: "(N)", reading: "ビートルズ", romaji: "biitoruzu", meaning: "The Beatles",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai19: Flashcard[] = [
  {
    id: "1", word: "登ります", type: "(I)", reading: "のぼります", romaji: "noborimasu", meaning: "leo (núi)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "泊まります", type: "(I)", reading: "とまります", romaji: "tomarimasu", meaning: "trọ (khách sạn)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "掃除します", type: "(III)", reading: "そうじします", romaji: "souji shimasu", meaning: "dọn vệ sinh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "洗濯します", type: "(III)", reading: "せんたくします", romaji: "sentaku shimasu", meaning: "giặt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "練習します", type: "(III)", reading: "れんしゅうします", romaji: "renshuu shimasu", meaning: "luyện tập",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "なります", type: "(I)", reading: "なります", romaji: "narimasu", meaning: "trở nên",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "7", word: "眠い", type: "(Adj-i)", reading: "ねむい", romaji: "nemui", meaning: "buồn ngủ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "強い", type: "(Adj-i)", reading: "つよい", romaji: "tsuyoi", meaning: "mạnh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "弱い", type: "(Adj-i)", reading: "よわい", romaji: "yowai", meaning: "yếu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "調子がいい", type: "(Expr)", reading: "ちょうしがいい", romaji: "choushi ga ii", meaning: "tình trạng tốt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11", word: "調子が悪い", type: "(Expr)", reading: "ちょうしがわるい", romaji: "choushi ga warui", meaning: "tình trạng xấu",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "12", word: "調子", type: "(N)", reading: "ちょうし", romaji: "choushi", meaning: "tình trạng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "ゴルフ", type: "(N)", reading: "ゴルフ", romaji: "gorufu", meaning: "golf",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "相撲", type: "(N)", reading: "すもう", romaji: "sumou", meaning: "sumo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "パチンコ", type: "(N)", reading: "パチンコ", romaji: "pachinko", meaning: "pachinko",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "お茶", type: "(N)", reading: "おちゃ", romaji: "ocha", meaning: "trà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "日", type: "(N)", reading: "ひ", romaji: "hi", meaning: "ngày",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "一度", type: "(Adv)", reading: "いちど", romaji: "ichido", meaning: "một lần",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19", word: "一度も", type: "(Adv)", reading: "いちども", romaji: "ichidomo", meaning: "chưa lần nào",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "20", word: "だんだん", type: "(Adv)", reading: "だんだん", romaji: "dandan", meaning: "dần dần",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "もうすぐ", type: "(Adv)", reading: "もうすぐ", romaji: "mousugu", meaning: "sắp",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "22", word: "おかげさまで", type: "(Expr)", reading: "", romaji: "okagesama de", meaning: "nhờ ơn (cảm ơn)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23", word: "乾杯", type: "(Expr)", reading: "かんぱい", romaji: "kanpai", meaning: "cạn ly",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "実は", type: "(Adv)", reading: "じつは", romaji: "jitsu wa", meaning: "thật ra",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "25", word: "ダイエット", type: "(N)", reading: "ダイエット", romaji: "daietto", meaning: "ăn kiêng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "何回も", type: "(Adv)", reading: "なんかいも", romaji: "nankai mo", meaning: "nhiều lần",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27", word: "しかし", type: "(Conj)", reading: "しかし", romaji: "shikashi", meaning: "tuy nhiên",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28", word: "無理", type: "(Adj-na)", reading: "むり", romaji: "muri", meaning: "quá sức",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29", word: "体にいい", type: "(Expr)", reading: "からだにいい", romaji: "karada ni ii", meaning: "tốt cho sức khỏe",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "30", word: "ケーキ", type: "(N)", reading: "ケーキ", romaji: "keeki", meaning: "bánh ngọt",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31", word: "葛飾北斎", type: "(N)", reading: "かつしかほくさい", romaji: "katsushika hokusai", meaning: "Hokusai (họa sĩ)",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai20: Flashcard[] = [
  {
    id: "1", word: "要ります", type: "(I)", reading: "いります", romaji: "irimasu", meaning: "cần (visa, tiền...)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "調べます", type: "(II)", reading: "しらべます", romaji: "shirabemasu", meaning: "tìm hiểu, tra cứu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "直します", type: "(I)", reading: "なおします", romaji: "naoshimasu", meaning: "sửa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "修理します", type: "(III)", reading: "しゅうりします", romaji: "shuuri shimasu", meaning: "sửa chữa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "電話します", type: "(III)", reading: "でんわします", romaji: "denwa shimasu", meaning: "gọi điện",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "6", word: "僕", type: "(Pron)", reading: "ぼく", romaji: "boku", meaning: "tôi (nam, thân mật)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "君", type: "(Pron)", reading: "きみ", romaji: "kimi", meaning: "bạn (thân mật)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "～君", type: "(Suffix)", reading: "～くん", romaji: "~kun", meaning: "cách gọi thân mật (nam)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "9", word: "うん", type: "(Expr)", reading: "", romaji: "un", meaning: "ừ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "ううん", type: "(Expr)", reading: "", romaji: "uun", meaning: "không",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "11", word: "サラリーマン", type: "(N)", reading: "サラリーマン", romaji: "sarariman", meaning: "nhân viên công ty",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12", word: "ことば", type: "(N)", reading: "ことば", romaji: "kotoba", meaning: "từ, ngôn ngữ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "物価", type: "(N)", reading: "ぶっか", romaji: "bukka", meaning: "giá cả",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "着物", type: "(N)", reading: "きもの", romaji: "kimono", meaning: "kimono",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "ビザ", type: "(N)", reading: "ビザ", romaji: "biza", meaning: "visa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "初め", type: "(N)", reading: "はじめ", romaji: "hajime", meaning: "ban đầu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "終わり", type: "(N)", reading: "おわり", romaji: "owari", meaning: "kết thúc",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "18", word: "こっち", type: "(Pron)", reading: "こっち", romaji: "kocchi", meaning: "phía này (casual)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19", word: "そっち", type: "(Pron)", reading: "そっち", romaji: "socchi", meaning: "phía đó (casual)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "あっち", type: "(Pron)", reading: "あっち", romaji: "acchi", meaning: "phía kia (casual)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "どっち", type: "(Pron)", reading: "どっち", romaji: "docchi", meaning: "đâu, cái nào (casual)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "22", word: "この間", type: "(Adv)", reading: "このあいだ", romaji: "kono aida", meaning: "hôm nọ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23", word: "みんなで", type: "(Adv)", reading: "みんなで", romaji: "minna de", meaning: "cùng nhau",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "～けど", type: "(Grammar)", reading: "～けど", romaji: "~kedo", meaning: "nhưng (casual)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "25", word: "国へ帰るの？", type: "(Expr)", reading: "くにへかえるの？", romaji: "kuni e kaeru no?", meaning: "về nước à?",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "どうするの？", type: "(Expr)", reading: "", romaji: "dou suru no?", meaning: "bạn định làm gì?",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27", word: "どうしようかな", type: "(Expr)", reading: "", romaji: "dou shiyou kana", meaning: "làm sao nhỉ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28", word: "よかったら", type: "(Expr)", reading: "", romaji: "yokattara", meaning: "nếu bạn muốn",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "29", word: "いろいろ", type: "(Adv)", reading: "いろいろ", romaji: "iroiro", meaning: "nhiều thứ",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai21: Flashcard[] = [
  {
    id: "1", word: "思います", type: "(I)", reading: "おもいます", romaji: "omoimasu", meaning: "nghĩ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "言います", type: "(I)", reading: "いいます", romaji: "iimasu", meaning: "nói",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "足ります", type: "(II)", reading: "たります", romaji: "tarimasu", meaning: "đủ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "勝ちます", type: "(I)", reading: "かちます", romaji: "kachimasu", meaning: "thắng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "負けます", type: "(II)", reading: "まけます", romaji: "makemasu", meaning: "thua",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "あります", type: "(I)", reading: "あります", romaji: "arimasu", meaning: "diễn ra, có (lễ hội...)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "役に立ちます", type: "(I)", reading: "やくにたちます", romaji: "yaku ni tachimasu", meaning: "có ích",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "8", word: "無駄", type: "(Adj-na)", reading: "むだ", romaji: "muda", meaning: "lãng phí, vô ích",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "不便", type: "(Adj-na)", reading: "ふべん", romaji: "fuben", meaning: "bất tiện",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "同じ", type: "(Adj-na)", reading: "おなじ", romaji: "onaji", meaning: "giống",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11", word: "すごい", type: "(Expr)", reading: "", romaji: "sugoi", meaning: "ghê, giỏi thật",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "12", word: "首相", type: "(N)", reading: "しゅしょう", romaji: "shushou", meaning: "thủ tướng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "大統領", type: "(N)", reading: "だいとうりょう", romaji: "daitouryou", meaning: "tổng thống",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "政治", type: "(N)", reading: "せいじ", romaji: "seiji", meaning: "chính trị",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "ニュース", type: "(N)", reading: "ニュース", romaji: "nyuusu", meaning: "tin tức",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "スピーチ", type: "(N)", reading: "スピーチ", romaji: "supiichi", meaning: "bài phát biểu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "試合", type: "(N)", reading: "しあい", romaji: "shiai", meaning: "trận đấu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "アルバイト", type: "(N)", reading: "アルバイト", romaji: "arubaito", meaning: "việc làm thêm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19", word: "意見", type: "(N)", reading: "いけん", romaji: "iken", meaning: "ý kiến",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "お話", type: "(N)", reading: "おはなし", romaji: "ohanashi", meaning: "câu chuyện, bài nói",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "ユーモア", type: "(N)", reading: "ユーモア", romaji: "yuumoa", meaning: "hài hước",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22", word: "デザイン", type: "(N)", reading: "デザイン", romaji: "dezain", meaning: "thiết kế",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23", word: "交通", type: "(N)", reading: "こうつう", romaji: "koutsuu", meaning: "giao thông",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "ラッシュ", type: "(N)", reading: "ラッシュ", romaji: "rasshu", meaning: "giờ cao điểm",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "25", word: "最近", type: "(Adv)", reading: "さいきん", romaji: "saikin", meaning: "gần đây",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "たぶん", type: "(Adv)", reading: "たぶん", romaji: "tabun", meaning: "có lẽ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "27", word: "きっと", type: "(Adv)", reading: "きっと", romaji: "kitto", meaning: "chắc chắn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "28", word: "本当に", type: "(Adv)", reading: "ほんとうに", romaji: "hontou ni", meaning: "thật sự",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29", word: "そんなに", type: "(Adv)", reading: "そんなに", romaji: "sonna ni", meaning: "(không) đến mức đó",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "30", word: "～について", type: "(Grammar)", reading: "～について", romaji: "~ ni tsuite", meaning: "về ~",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "31", word: "しかたがありません", type: "(Expr)", reading: "", romaji: "shikata ga arimasen", meaning: "đành chịu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "32", word: "しばらくですね", type: "(Expr)", reading: "", romaji: "shibaraku desu ne", meaning: "lâu không gặp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "33", word: "～でも飲みませんか", type: "(Expr)", reading: "", romaji: "~ demo nomimasen ka", meaning: "uống ~ nhé?",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "34", word: "見ないと", type: "(Grammar)", reading: "みないと", romaji: "minai to", meaning: "phải làm ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "35", word: "もちろん", type: "(Adv)", reading: "もちろん", romaji: "mochiron", meaning: "tất nhiên",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "36", word: "カンガルー", type: "(N)", reading: "カンガルー", romaji: "kangaruu", meaning: "kangaroo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "37", word: "キャプテン・クック", type: "(N)", reading: "", romaji: "Captain Cook", meaning: "thuyền trưởng Cook",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai22: Flashcard[] = [
  {
    id: "1", word: "着ます", type: "(II)", reading: "きます", romaji: "kimasu", meaning: "mặc (áo)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "履きます", type: "(I)", reading: "はきます", romaji: "hakimasu", meaning: "mặc/đi (giày, quần)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "かぶります", type: "(I)", reading: "かぶります", romaji: "kaburimasu", meaning: "đội (mũ)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "かけます", type: "(II)", reading: "かけます", romaji: "kakemasu", meaning: "đeo (kính)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "生まれます", type: "(II)", reading: "うまれます", romaji: "umaremasu", meaning: "sinh ra",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "6", word: "コート", type: "(N)", reading: "コート", romaji: "kooto", meaning: "áo khoác",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "スーツ", type: "(N)", reading: "スーツ", romaji: "suutsu", meaning: "com-lê",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "セーター", type: "(N)", reading: "セーター", romaji: "seetaa", meaning: "áo len",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "帽子", type: "(N)", reading: "ぼうし", romaji: "boushi", meaning: "mũ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "眼鏡", type: "(N)", reading: "めがね", romaji: "megane", meaning: "kính",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "11", word: "よく", type: "(Adv)", reading: "よく", romaji: "yoku", meaning: "thường xuyên",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12", word: "おめでとうございます", type: "(Expr)", reading: "", romaji: "omedetou gozaimasu", meaning: "chúc mừng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "こちら", type: "(Pron)", reading: "こちら", romaji: "kochira", meaning: "cái này (lịch sự)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "家賃", type: "(N)", reading: "やちん", romaji: "yachin", meaning: "tiền thuê nhà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "うーん", type: "(Expr)", reading: "", romaji: "uun", meaning: "ừm..., để xem",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "16", word: "ダイニングキッチン", type: "(N)", reading: "ダイニングキッチン", romaji: "dainingu kicchin", meaning: "bếp + phòng ăn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "和室", type: "(N)", reading: "わしつ", romaji: "washitsu", meaning: "phòng kiểu Nhật",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "押し入れ", type: "(N)", reading: "おしいれ", romaji: "oshiire", meaning: "tủ chăn futon",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "19", word: "布団", type: "(N)", reading: "ふとん", romaji: "futon", meaning: "chăn đệm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "アパート", type: "(N)", reading: "アパート", romaji: "apaato", meaning: "căn hộ",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "21", word: "パリ", type: "(N)", reading: "パリ", romaji: "pari", meaning: "Paris",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22", word: "万里の長城", type: "(N)", reading: "ばんりのちょうじょう", romaji: "banri no choujou", meaning: "Vạn Lý Trường Thành",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23", word: "余暇開発センター", type: "(N)", reading: "よかかいはつセンター", romaji: "yoka kaihatsu sentaa", meaning: "trung tâm phát triển giải trí",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "レジャー白書", type: "(N)", reading: "レジャーはくしょ", romaji: "rejaa hakusho", meaning: "sách trắng về giải trí",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai23: Flashcard[] = [
  {
    id: "1", word: "聞きます", type: "(I)", reading: "ききます", romaji: "kikimasu", meaning: "hỏi, nghe",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "回します", type: "(I)", reading: "まわします", romaji: "mawashimasu", meaning: "vặn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "引きます", type: "(I)", reading: "ひきます", romaji: "hikimasu", meaning: "kéo",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "変えます", type: "(II)", reading: "かえます", romaji: "kaemasu", meaning: "thay đổi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "5", word: "触ります", type: "(I)", reading: "さわります", romaji: "sawarimasu", meaning: "chạm vào",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "6", word: "出ます", type: "(II)", reading: "でます", romaji: "demasu", meaning: "ra (tiền thừa...)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "動きます", type: "(I)", reading: "うごきます", romaji: "ugokimasu", meaning: "chạy, hoạt động",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "歩きます", type: "(I)", reading: "あるきます", romaji: "arukimasu", meaning: "đi bộ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "渡ります", type: "(I)", reading: "わたります", romaji: "watarimasu", meaning: "băng qua",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "気をつけます", type: "(II)", reading: "きをつけます", romaji: "ki o tsukemasu", meaning: "cẩn thận",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "11", word: "引っ越します", type: "(III)", reading: "ひっこしします", romaji: "hikkoshi shimasu", meaning: "chuyển nhà",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "12", word: "電気屋", type: "(N)", reading: "でんきや", romaji: "denkiya", meaning: "cửa hàng điện",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "～屋", type: "(Suffix)", reading: "～や", romaji: "~ya", meaning: "cửa hàng ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "サイズ", type: "(N)", reading: "サイズ", romaji: "saizu", meaning: "kích thước",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "音", type: "(N)", reading: "おと", romaji: "oto", meaning: "âm thanh",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "機械", type: "(N)", reading: "きかい", romaji: "kikai", meaning: "máy móc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "つまみ", type: "(N)", reading: "つまみ", romaji: "tsumami", meaning: "núm vặn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "故障", type: "(N)", reading: "こしょう", romaji: "koshou", meaning: "hỏng",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "19", word: "道", type: "(N)", reading: "みち", romaji: "michi", meaning: "đường",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "交差点", type: "(N)", reading: "こうさてん", romaji: "kousaten", meaning: "ngã tư",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "信号", type: "(N)", reading: "しんごう", romaji: "shingou", meaning: "đèn giao thông",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "22", word: "角", type: "(N)", reading: "かど", romaji: "kado", meaning: "góc",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "23", word: "橋", type: "(N)", reading: "はし", romaji: "hashi", meaning: "cầu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "24", word: "駐車場", type: "(N)", reading: "ちゅうしゃじょう", romaji: "chuushajou", meaning: "bãi đỗ xe",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "25", word: "～目", type: "(Suffix)", reading: "～め", romaji: "~me", meaning: "thứ ~",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "26", word: "お正月", type: "(N)", reading: "おしょうがつ", romaji: "oshougatsu", meaning: "Tết",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "27", word: "ごちそうさまでした", type: "(Expr)", reading: "", romaji: "gochisousama deshita", meaning: "cảm ơn bữa ăn",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "28", word: "建物", type: "(N)", reading: "たてもの", romaji: "tatemono", meaning: "tòa nhà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "29", word: "外国人登録証", type: "(N)", reading: "がいこくじんとうろくしょう", romaji: "gaikokujin tourokushou", meaning: "thẻ ngoại kiều",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "30", word: "聖徳太子", type: "(N)", reading: "しょうとくたいし", romaji: "shoutoku taishi", meaning: "Thái tử Shotoku",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "31", word: "法隆寺", type: "(N)", reading: "ほうりゅうじ", romaji: "houryuuji", meaning: "chùa Horyuji",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai24: Flashcard[] = [
  {
    id: "1", word: "くれます", type: "(II)", reading: "くれます", romaji: "kuremasu", meaning: "cho, tặng (cho tôi)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "連れて行きます", type: "(I)", reading: "つれていきます", romaji: "tsurete ikimasu", meaning: "dẫn đi",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "連れて来ます", type: "(III)", reading: "つれてきます", romaji: "tsurete kimasu", meaning: "dẫn đến",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "送ります", type: "(I)", reading: "おくります", romaji: "okurimasu", meaning: "đưa, tiễn (người)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "5", word: "紹介します", type: "(III)", reading: "しょうかいします", romaji: "shoukai shimasu", meaning: "giới thiệu",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "案内します", type: "(III)", reading: "あんないします", romaji: "annai shimasu", meaning: "hướng dẫn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "説明します", type: "(III)", reading: "せつめいします", romaji: "setsumei shimasu", meaning: "giải thích",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "8", word: "入れます", type: "(II)", reading: "いれます", romaji: "iremasu", meaning: "pha, cho vào",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "9", word: "おじいさん", type: "(N)", reading: "おじいさん", romaji: "ojiisan", meaning: "ông",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "10", word: "おじいちゃん", type: "(N)", reading: "おじいちゃん", romaji: "ojiichan", meaning: "ông (thân mật)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11", word: "おばあさん", type: "(N)", reading: "おばあさん", romaji: "obaasan", meaning: "bà",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "12", word: "おばあちゃん", type: "(N)", reading: "おばあちゃん", romaji: "obaachan", meaning: "bà (thân mật)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "13", word: "準備", type: "(N)", reading: "じゅんび", romaji: "junbi", meaning: "chuẩn bị",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "14", word: "意味", type: "(N)", reading: "いみ", romaji: "imi", meaning: "ý nghĩa",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "お菓子", type: "(N)", reading: "おかし", romaji: "okashi", meaning: "bánh kẹo",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "16", word: "全部", type: "(Adv)", reading: "ぜんぶ", romaji: "zenbu", meaning: "tất cả",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "自分で", type: "(Adv)", reading: "じぶんで", romaji: "jibun de", meaning: "tự mình",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "18", word: "ほかに", type: "(Adv)", reading: "ほかに", romaji: "hoka ni", meaning: "ngoài ra",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "19", word: "ワゴン車", type: "(N)", reading: "ワゴンしゃ", romaji: "wagonsha", meaning: "xe wagon",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "20", word: "お弁当", type: "(N)", reading: "おべんとう", romaji: "obentou", meaning: "cơm hộp",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "21", word: "母の日", type: "(N)", reading: "ははのひ", romaji: "haha no hi", meaning: "ngày của mẹ",
    idChapter: 0,
    uniqueId: ""
  },
];

export const initialBai25: Flashcard[] = [
  {
    id: "1", word: "考えます", type: "(II)", reading: "かんがえます", romaji: "kangaemasu", meaning: "suy nghĩ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "2", word: "着きます", type: "(I)", reading: "つきます", romaji: "tsukimasu", meaning: "đến (ga...)",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "3", word: "留学します", type: "(III)", reading: "りゅうがくします", romaji: "ryuugaku shimasu", meaning: "du học",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "4", word: "取ります", type: "(I)", reading: "とります", romaji: "torimasu", meaning: "thêm (tuổi)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "5", word: "田舎", type: "(N)", reading: "いなか", romaji: "inaka", meaning: "nông thôn",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "6", word: "大使館", type: "(N)", reading: "たいしかん", romaji: "taishikan", meaning: "đại sứ quán",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "7", word: "グループ", type: "(N)", reading: "グループ", romaji: "guruupu", meaning: "nhóm",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "8", word: "チャンス", type: "(N)", reading: "チャンス", romaji: "chansu", meaning: "cơ hội",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "9", word: "億", type: "(Counter)", reading: "おく", romaji: "oku", meaning: "100 triệu",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "10", word: "もし～たら", type: "(Grammar)", reading: "もし～たら", romaji: "moshi ~tara", meaning: "nếu ~ thì",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "11", word: "いくら～ても", type: "(Grammar)", reading: "いくら～ても", romaji: "ikura ~temo", meaning: "dù ~ thế nào",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "12", word: "転勤", type: "(N)", reading: "てんきん", romaji: "tenkin", meaning: "chuyển công tác",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "13", word: "こと", type: "(Grammar)", reading: "こと", romaji: "koto", meaning: "việc (~)",
    idChapter: 0,
    uniqueId: ""
  },

  {
    id: "14", word: "一杯飲みましょう", type: "(Expr)", reading: "いっぱいのみましょう", romaji: "ippai nomimashou", meaning: "cùng uống nhé",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "15", word: "お世話になりました", type: "(Expr)", reading: "おせわになりました", romaji: "osewa ni narimashita", meaning: "cảm ơn vì đã giúp đỡ",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "16", word: "頑張ります", type: "(I)", reading: "がんばります", romaji: "ganbarimasu", meaning: "cố gắng",
    idChapter: 0,
    uniqueId: ""
  },
  {
    id: "17", word: "どうぞお元気で", type: "(Expr)", reading: "どうぞおげんきで", romaji: "douzo ogenki de", meaning: "chúc bạn khỏe",
    idChapter: 0,
    uniqueId: ""
  },
];