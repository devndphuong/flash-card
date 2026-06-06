export interface Flashcard {
  word: string; // Kanji or kana
  type: string; // Loại từ (N, V, A...)
  reading: string; // Hiragana
  romaji: string;
  meaning: string; // Nghĩa tiếng Việt
  id: string; // optional unique id
  idChapter: number;
  uniqueId: string;
}

export const hiraAlphabet: Flashcard[] = [
  {
      word: 'あ', type: 'Hiragana', reading: 'あ', romaji: 'a', meaning: 'Âm a', idChapter: 1, uniqueId: 'hiragana-a',
      id: "1"
  },
  {
      word: 'い', type: 'Hiragana', reading: 'い', romaji: 'i', meaning: 'Âm i', idChapter: 1, uniqueId: 'hiragana-i',
      id: ""
  },
  {
      word: 'う', type: 'Hiragana', reading: 'う', romaji: 'u', meaning: 'Âm u', idChapter: 1, uniqueId: 'hiragana-u',
      id: "3"
  },
  {
      word: 'え', type: 'Hiragana', reading: 'え', romaji: 'e', meaning: 'Âm e', idChapter: 1, uniqueId: 'hiragana-e',
      id: "4"
  },
  {
      word: 'お', type: 'Hiragana', reading: 'お', romaji: 'o', meaning: 'Âm o', idChapter: 1, uniqueId: 'hiragana-o',
      id: "5"
  },
  {
      word: 'か', type: 'Hiragana', reading: 'か', romaji: 'ka', meaning: 'Âm ka', idChapter: 1, uniqueId: 'hiragana-ka',
      id: "6"
  },
  {
      word: 'き', type: 'Hiragana', reading: 'き', romaji: 'ki', meaning: 'Âm ki', idChapter: 1, uniqueId: 'hiragana-ki',
      id: "7"
  },
  {
      word: 'く', type: 'Hiragana', reading: 'く', romaji: 'ku', meaning: 'Âm ku', idChapter: 1, uniqueId: 'hiragana-ku',
      id: "8"
  },
  {
      word: 'け', type: 'Hiragana', reading: 'け', romaji: 'ke', meaning: 'Âm ke', idChapter: 1, uniqueId: 'hiragana-ke',
      id: "9"
  },
  {
      word: 'こ', type: 'Hiragana', reading: 'こ', romaji: 'ko', meaning: 'Âm ko', idChapter: 1, uniqueId: 'hiragana-ko',
      id: "10"
  },
  {
      word: 'さ', type: 'Hiragana', reading: 'さ', romaji: 'sa', meaning: 'Âm sa', idChapter: 1, uniqueId: 'hiragana-sa',
      id: "11"
  },
  {
      word: 'し', type: 'Hiragana', reading: 'し', romaji: 'shi', meaning: 'Âm shi', idChapter: 1, uniqueId: 'hiragana-shi',
      id: "12"
  },
  {
      word: 'す', type: 'Hiragana', reading: 'す', romaji: 'su', meaning: 'Âm su', idChapter: 1, uniqueId: 'hiragana-su',
      id: "13"
  },
  {
      word: 'せ', type: 'Hiragana', reading: 'せ', romaji: 'se', meaning: 'Âm se', idChapter: 1, uniqueId: 'hiragana-se',
      id: "14"
  },
  {
      word: 'そ', type: 'Hiragana', reading: 'そ', romaji: 'so', meaning: 'Âm so', idChapter: 1, uniqueId: 'hiragana-so',
      id: "15"
  },
  {
      word: 'た', type: 'Hiragana', reading: 'た', romaji: 'ta', meaning: 'Âm ta', idChapter: 1, uniqueId: 'hiragana-ta',
      id: "16"
  },
  {
      word: 'ち', type: 'Hiragana', reading: 'ち', romaji: 'chi', meaning: 'Âm chi', idChapter: 1, uniqueId: 'hiragana-chi',
      id: "17"
  },
  {
      word: 'つ', type: 'Hiragana', reading: 'つ', romaji: 'tsu', meaning: 'Âm tsu', idChapter: 1, uniqueId: 'hiragana-tsu',
      id: "18"
  },
  {
      word: 'て', type: 'Hiragana', reading: 'て', romaji: 'te', meaning: 'Âm te', idChapter: 1, uniqueId: 'hiragana-te',
      id: "19"
  },
  {
      word: 'と', type: 'Hiragana', reading: 'と', romaji: 'to', meaning: 'Âm to', idChapter: 1, uniqueId: 'hiragana-to',
      id: "20"
  },
  {
      word: 'な', type: 'Hiragana', reading: 'な', romaji: 'na', meaning: 'Âm na', idChapter: 1, uniqueId: 'hiragana-na',
      id: "21"
  },
  {
      word: 'に', type: 'Hiragana', reading: 'に', romaji: 'ni', meaning: 'Âm ni', idChapter: 1, uniqueId: 'hiragana-ni',
      id: "22"
  },
  {
      word: 'ぬ', type: 'Hiragana', reading: 'ぬ', romaji: 'nu', meaning: 'Âm nu', idChapter: 1, uniqueId: 'hiragana-nu',
      id: "23"
  },
  {
      word: 'ね', type: 'Hiragana', reading: 'ね', romaji: 'ne', meaning: 'Âm ne', idChapter: 1, uniqueId: 'hiragana-ne',
      id: "24"
  },
  {
      word: 'の', type: 'Hiragana', reading: 'の', romaji: 'no', meaning: 'Âm no', idChapter: 1, uniqueId: 'hiragana-no',
      id: "25"
  },
  {
      word: 'は', type: 'Hiragana', reading: 'は', romaji: 'ha', meaning: 'Âm ha', idChapter: 1, uniqueId: 'hiragana-ha',
      id: "26"
  },
  {
      word: 'ひ', type: 'Hiragana', reading: 'ひ', romaji: 'hi', meaning: 'Âm hi', idChapter: 1, uniqueId: 'hiragana-hi',
      id: "27"
  },
  {
      word: 'ふ', type: 'Hiragana', reading: 'ふ', romaji: 'fu', meaning: 'Âm fu', idChapter: 1, uniqueId: 'hiragana-fu',
      id: "28"
  },
  {
      word: 'へ', type: 'Hiragana', reading: 'へ', romaji: 'he', meaning: 'Âm he', idChapter: 1, uniqueId: 'hiragana-he',
      id: "29"
  },
  {
      word: 'ほ', type: 'Hiragana', reading: 'ほ', romaji: 'ho', meaning: 'Âm ho', idChapter: 1, uniqueId: 'hiragana-ho',
      id: "30"
  },
  {
      word: 'ま', type: 'Hiragana', reading: 'ま', romaji: 'ma', meaning: 'Âm ma', idChapter: 1, uniqueId: 'hiragana-ma',
      id: "31"
  },
  {
      word: 'み', type: 'Hiragana', reading: 'み', romaji: 'mi', meaning: 'Âm mi', idChapter: 1, uniqueId: 'hiragana-mi',
      id: "32"
  },
  {
      word: 'む', type: 'Hiragana', reading: 'む', romaji: 'mu', meaning: 'Âm mu', idChapter: 1, uniqueId: 'hiragana-mu',
      id: "33"
  },
  {
      word: 'め', type: 'Hiragana', reading: 'め', romaji: 'me', meaning: 'Âm me', idChapter: 1, uniqueId: 'hiragana-me',
      id: "34"
  },
  {
      word: 'も', type: 'Hiragana', reading: 'も', romaji: 'mo', meaning: 'Âm mo', idChapter: 1, uniqueId: 'hiragana-mo',
      id: "35"
  },
  {
      word: 'や', type: 'Hiragana', reading: 'や', romaji: 'ya', meaning: 'Âm ya', idChapter: 1, uniqueId: 'hiragana-ya',
      id: "36"
  },
  {
      word: 'ゆ', type: 'Hiragana', reading: 'ゆ', romaji: 'yu', meaning: 'Âm yu', idChapter: 1, uniqueId: 'hiragana-yu',
      id: "37"
  },
  {
      word: 'よ', type: 'Hiragana', reading: 'よ', romaji: 'yo', meaning: 'Âm yo', idChapter: 1, uniqueId: 'hiragana-yo',
      id: "38"
  },
  {
      word: 'ら', type: 'Hiragana', reading: 'ら', romaji: 'ra', meaning: 'Âm ra', idChapter: 1, uniqueId: 'hiragana-ra',
      id: "39"
  },
  {
      word: 'り', type: 'Hiragana', reading: 'り', romaji: 'ri', meaning: 'Âm ri', idChapter: 1, uniqueId: 'hiragana-ri',
      id: "40"
  },
  {
      word: 'る', type: 'Hiragana', reading: 'る', romaji: 'ru', meaning: 'Âm ru', idChapter: 1, uniqueId: 'hiragana-ru',
      id: "41"
  },
  {
      word: 'れ', type: 'Hiragana', reading: 'れ', romaji: 're', meaning: 'Âm re', idChapter: 1, uniqueId: 'hiragana-re',
      id: "42"
  },
  {
      word: 'ろ', type: 'Hiragana', reading: 'ろ', romaji: 'ro', meaning: 'Âm ro', idChapter: 1, uniqueId: 'hiragana-ro',
      id: "43"
  },
  {
      word: 'わ', type: 'Hiragana', reading: 'わ', romaji: 'wa', meaning: 'Âm wa', idChapter: 1, uniqueId: 'hiragana-wa',
      id: "44"
  },
  {
      word: 'を', type: 'Hiragana', reading: 'を', romaji: 'wo', meaning: 'Âm wo', idChapter: 1, uniqueId: 'hiragana-wo',
      id: "45"
  },
  {
      word: 'ん', type: 'Hiragana', reading: 'ん', romaji: 'n', meaning: 'Âm n', idChapter: 1, uniqueId: 'hiragana-n',
      id: "46"
  },
];

export const kataAlphabet: Flashcard[] = [
  {
      word: 'ア', type: 'Katakana', reading: 'ア', romaji: 'a', meaning: 'Âm a', idChapter: 2, uniqueId: 'katakana-a',
      id: "1"
  },
  {
      word: 'イ', type: 'Katakana', reading: 'イ', romaji: 'i', meaning: 'Âm i', idChapter: 2, uniqueId: 'katakana-i',
      id: "2"
  },
  {
      word: 'ウ', type: 'Katakana', reading: 'ウ', romaji: 'u', meaning: 'Âm u', idChapter: 2, uniqueId: 'katakana-u',
      id: "3"
  },
  {
      word: 'エ', type: 'Katakana', reading: 'エ', romaji: 'e', meaning: 'Âm e', idChapter: 2, uniqueId: 'katakana-e',
      id: "4"
  },
  {
      word: 'オ', type: 'Katakana', reading: 'オ', romaji: 'o', meaning: 'Âm o', idChapter: 2, uniqueId: 'katakana-o',
      id: "5"
  },
  {
      word: 'カ', type: 'Katakana', reading: 'カ', romaji: 'ka', meaning: 'Âm ka', idChapter: 2, uniqueId: 'katakana-ka',
      id: "6"
  },
  {
      word: 'キ', type: 'Katakana', reading: 'キ', romaji: 'ki', meaning: 'Âm ki', idChapter: 2, uniqueId: 'katakana-ki',
      id: "7"
  },
  {
      word: 'ク', type: 'Katakana', reading: 'ク', romaji: 'ku', meaning: 'Âm ku', idChapter: 2, uniqueId: 'katakana-ku',
      id: "8"
  },
  {
      word: 'ケ', type: 'Katakana', reading: 'ケ', romaji: 'ke', meaning: 'Âm ke', idChapter: 2, uniqueId: 'katakana-ke',
      id: "9"
  },
  {
      word: 'コ', type: 'Katakana', reading: 'コ', romaji: 'ko', meaning: 'Âm ko', idChapter: 2, uniqueId: 'katakana-ko',
      id: "10"
  },
  {
      word: 'サ', type: 'Katakana', reading: 'サ', romaji: 'sa', meaning: 'Âm sa', idChapter: 2, uniqueId: 'katakana-sa',
      id: "11"
  },
  {
      word: 'シ', type: 'Katakana', reading: 'シ', romaji: 'shi', meaning: 'Âm shi', idChapter: 2, uniqueId: 'katakana-shi',
      id: "12"
  },
  {
      word: 'ス', type: 'Katakana', reading: 'ス', romaji: 'su', meaning: 'Âm su', idChapter: 2, uniqueId: 'katakana-su',
      id: "13"
  },
  {
      word: 'セ', type: 'Katakana', reading: 'セ', romaji: 'se', meaning: 'Âm se', idChapter: 2, uniqueId: 'katakana-se',
      id: "14"
  },
  {
      word: 'ソ', type: 'Katakana', reading: 'ソ', romaji: 'so', meaning: 'Âm so', idChapter: 2, uniqueId: 'katakana-so',
      id: "15"
  },
  {
      word: 'タ', type: 'Katakana', reading: 'タ', romaji: 'ta', meaning: 'Âm ta', idChapter: 2, uniqueId: 'katakana-ta',
      id: "16"
  },
  {
      word: 'チ', type: 'Katakana', reading: 'チ', romaji: 'chi', meaning: 'Âm chi', idChapter: 2, uniqueId: 'katakana-chi',
      id: "17"
  },
  {
      word: 'ツ', type: 'Katakana', reading: 'ツ', romaji: 'tsu', meaning: 'Âm tsu', idChapter: 2, uniqueId: 'katakana-tsu',
      id: "18"
  },
  {
      word: 'テ', type: 'Katakana', reading: 'テ', romaji: 'te', meaning: 'Âm te', idChapter: 2, uniqueId: 'katakana-te',
      id: "19"
  },
  {
      word: 'ト', type: 'Katakana', reading: 'ト', romaji: 'to', meaning: 'Âm to', idChapter: 2, uniqueId: 'katakana-to',
      id: "20"
  },
  {
      word: 'ナ', type: 'Katakana', reading: 'ナ', romaji: 'na', meaning: 'Âm na', idChapter: 2, uniqueId: 'katakana-na',
      id: "21"
  },
  {
      word: 'ニ', type: 'Katakana', reading: 'ニ', romaji: 'ni', meaning: 'Âm ni', idChapter: 2, uniqueId: 'katakana-ni',
      id: "22"
  },
  {
      word: 'ヌ', type: 'Katakana', reading: 'ヌ', romaji: 'nu', meaning: 'Âm nu', idChapter: 2, uniqueId: 'katakana-nu',
      id: "23"
  },
  {
      word: 'ネ', type: 'Katakana', reading: 'ネ', romaji: 'ne', meaning: 'Âm ne', idChapter: 2, uniqueId: 'katakana-ne',
      id: "24"
  },
  {
      word: 'ノ', type: 'Katakana', reading: 'ノ', romaji: 'no', meaning: 'Âm no', idChapter: 2, uniqueId: 'katakana-no',
      id: "25"
  },
  {
      word: 'ハ', type: 'Katakana', reading: 'ハ', romaji: 'ha', meaning: 'Âm ha', idChapter: 2, uniqueId: 'katakana-ha',
      id: "26"
  },
  {
      word: 'ヒ', type: 'Katakana', reading: 'ヒ', romaji: 'hi', meaning: 'Âm hi', idChapter: 2, uniqueId: 'katakana-hi',
      id: "27"
  },
  {
      word: 'フ', type: 'Katakana', reading: 'フ', romaji: 'fu', meaning: 'Âm fu', idChapter: 2, uniqueId: 'katakana-fu',
      id: "28"
  },
  {
      word: 'ヘ', type: 'Katakana', reading: 'ヘ', romaji: 'he', meaning: 'Âm he', idChapter: 2, uniqueId: 'katakana-he',
      id: "29"
  },
  {
      word: 'ホ', type: 'Katakana', reading: 'ホ', romaji: 'ho', meaning: 'Âm ho', idChapter: 2, uniqueId: 'katakana-ho',
      id: "30"
  },
  {
      word: 'マ', type: 'Katakana', reading: 'マ', romaji: 'ma', meaning: 'Âm ma', idChapter: 2, uniqueId: 'katakana-ma',
      id: "31"
  },
  {
      word: 'ミ', type: 'Katakana', reading: 'ミ', romaji: 'mi', meaning: 'Âm mi', idChapter: 2, uniqueId: 'katakana-mi',
      id: "32"
  },
  {
      word: 'ム', type: 'Katakana', reading: 'ム', romaji: 'mu', meaning: 'Âm mu', idChapter: 2, uniqueId: 'katakana-mu',
      id: "33"
  },
  {
      word: 'メ', type: 'Katakana', reading: 'メ', romaji: 'me', meaning: 'Âm me', idChapter: 2, uniqueId: 'katakana-me',
      id: "34"
  },
  {
      word: 'モ', type: 'Katakana', reading: 'モ', romaji: 'mo', meaning: 'Âm mo', idChapter: 2, uniqueId: 'katakana-mo',
      id: "35"
  },
  {
      word: 'ヤ', type: 'Katakana', reading: 'ヤ', romaji: 'ya', meaning: 'Âm ya', idChapter: 2, uniqueId: 'katakana-ya',
      id: "36"
  },
  {
      word: 'ユ', type: 'Katakana', reading: 'ユ', romaji: 'yu', meaning: 'Âm yu', idChapter: 2, uniqueId: 'katakana-yu',
      id: "37"
  },
  {
      word: 'ヨ', type: 'Katakana', reading: 'ヨ', romaji: 'yo', meaning: 'Âm yo', idChapter: 2, uniqueId: 'katakana-yo',
      id: "38"
  },
  {
      word: 'ラ', type: 'Katakana', reading: 'ラ', romaji: 'ra', meaning: 'Âm ra', idChapter: 2, uniqueId: 'katakana-ra',
      id: "39"
  },
  {
      word: 'リ', type: 'Katakana', reading: 'リ', romaji: 'ri', meaning: 'Âm ri', idChapter: 2, uniqueId: 'katakana-ri',
      id: "40"
  },
  {
      word: 'ル', type: 'Katakana', reading: 'ル', romaji: 'ru', meaning: 'Âm ru', idChapter: 2, uniqueId: 'katakana-ru',
      id: "41"
  },
  {
      word: 'レ', type: 'Katakana', reading: 'レ', romaji: 're', meaning: 'Âm re', idChapter: 2, uniqueId: 'katakana-re',
      id: "42"
  },
  {
      word: 'ロ', type: 'Katakana', reading: 'ロ', romaji: 'ro', meaning: 'Âm ro', idChapter: 2, uniqueId: 'katakana-ro',
      id: "43"
  },
  {
      word: 'ワ', type: 'Katakana', reading: 'ワ', romaji: 'wa', meaning: 'Âm wa', idChapter: 2, uniqueId: 'katakana-wa',
      id: "44"
  },
  {
      word: 'ヲ', type: 'Katakana', reading: 'ヲ', romaji: 'wo', meaning: 'Âm wo', idChapter: 2, uniqueId: 'katakana-wo',
      id: "45"
  },
  {
      word: 'ン', type: 'Katakana', reading: 'ン', romaji: 'n', meaning: 'Âm n', idChapter: 2, uniqueId: 'katakana-n',
      id: "46"
  },
];


export const yoonFlashcards: Flashcard[] = [
  // =========================
  // KYA KYU KYO
  // =========================
  { id: "1", idChapter: 2, uniqueId: "h_kya", word: "きゃ", type: "Yoon", reading: "きゃ", romaji: "kya", meaning: "kya" },
  { id: "2", idChapter: 2, uniqueId: "h_kyu", word: "きゅ", type: "Yoon", reading: "きゅ", romaji: "kyu", meaning: "kyu" },
  { id: "3", idChapter: 2, uniqueId: "h_kyo", word: "きょ", type: "Yoon", reading: "きょ", romaji: "kyo", meaning: "kyo" },

  { id: "4", idChapter: 2, uniqueId: "k_kya", word: "キャ", type: "Yoon", reading: "キャ", romaji: "kya", meaning: "kya" },
  { id: "5", idChapter: 2, uniqueId: "k_kyu", word: "キュ", type: "Yoon", reading: "キュ", romaji: "kyu", meaning: "kyu" },
  { id: "6", idChapter: 2, uniqueId: "k_kyo", word: "キョ", type: "Yoon", reading: "キョ", romaji: "kyo", meaning: "kyo" },

  // =========================
  // SHA SHU SHO
  // =========================
  { id: "7", idChapter: 2, uniqueId: "h_sha", word: "しゃ", type: "Yoon", reading: "しゃ", romaji: "sha", meaning: "sha" },
  { id: "8", idChapter: 2, uniqueId: "h_shu", word: "しゅ", type: "Yoon", reading: "しゅ", romaji: "shu", meaning: "shu" },
  { id: "9", idChapter: 2, uniqueId: "h_sho", word: "しょ", type: "Yoon", reading: "しょ", romaji: "sho", meaning: "sho" },

  { id: "10", idChapter: 2, uniqueId: "k_sha", word: "シャ", type: "Yoon", reading: "シャ", romaji: "sha", meaning: "sha" },
  { id: "11", idChapter: 2, uniqueId: "k_shu", word: "シュ", type: "Yoon", reading: "シュ", romaji: "shu", meaning: "shu" },
  { id: "12", idChapter: 2, uniqueId: "k_sho", word: "ショ", type: "Yoon", reading: "ショ", romaji: "sho", meaning: "sho" },

  // =========================
  // CHA CHU CHO
  // =========================
  { id: "13", idChapter: 2, uniqueId: "h_cha", word: "ちゃ", type: "Yoon", reading: "ちゃ", romaji: "cha", meaning: "cha" },
  { id: "14", idChapter: 2, uniqueId: "h_chu", word: "ちゅ", type: "Yoon", reading: "ちゅ", romaji: "chu", meaning: "chu" },
  { id: "15", idChapter: 2, uniqueId: "h_cho", word: "ちょ", type: "Yoon", reading: "ちょ", romaji: "cho", meaning: "cho" },

  { id: "16", idChapter: 2, uniqueId: "k_cha", word: "チャ", type: "Yoon", reading: "チャ", romaji: "cha", meaning: "cha" },
  { id: "17", idChapter: 2, uniqueId: "k_chu", word: "チュ", type: "Yoon", reading: "チュ", romaji: "chu", meaning: "chu" },
  { id: "18", idChapter: 2, uniqueId: "k_cho", word: "チョ", type: "Yoon", reading: "チョ", romaji: "cho", meaning: "cho" },

  // =========================
  // NYA NYU NYO
  // =========================
  { id: "19", idChapter: 2, uniqueId: "h_nya", word: "にゃ", type: "Yoon", reading: "にゃ", romaji: "nya", meaning: "nya" },
  { id: "20", idChapter: 2, uniqueId: "h_nyu", word: "にゅ", type: "Yoon", reading: "にゅ", romaji: "nyu", meaning: "nyu" },
  { id: "21", idChapter: 2, uniqueId: "h_nyo", word: "にょ", type: "Yoon", reading: "にょ", romaji: "nyo", meaning: "nyo" },

  { id: "22", idChapter: 2, uniqueId: "k_nya", word: "ニャ", type: "Yoon", reading: "ニャ", romaji: "nya", meaning: "nya" },
  { id: "23", idChapter: 2, uniqueId: "k_nyu", word: "ニュ", type: "Yoon", reading: "ニュ", romaji: "nyu", meaning: "nyu" },
  { id: "24", idChapter: 2, uniqueId: "k_nyo", word: "ニョ", type: "Yoon", reading: "ニョ", romaji: "nyo", meaning: "nyo" },

  // =========================
  // HYA HYU HYO
  // =========================
  { id: "25", idChapter: 2, uniqueId: "h_hya", word: "ひゃ", type: "Yoon", reading: "ひゃ", romaji: "hya", meaning: "hya" },
  { id: "26", idChapter: 2, uniqueId: "h_hyu", word: "ひゅ", type: "Yoon", reading: "ひゅ", romaji: "hyu", meaning: "hyu" },
  { id: "27", idChapter: 2, uniqueId: "h_hyo", word: "ひょ", type: "Yoon", reading: "ひょ", romaji: "hyo", meaning: "hyo" },

  { id: "28", idChapter: 2, uniqueId: "k_hya", word: "ヒャ", type: "Yoon", reading: "ヒャ", romaji: "hya", meaning: "hya" },
  { id: "29", idChapter: 2, uniqueId: "k_hyu", word: "ヒュ", type: "Yoon", reading: "ヒュ", romaji: "hyu", meaning: "hyu" },
  { id: "30", idChapter: 2, uniqueId: "k_hyo", word: "ヒョ", type: "Yoon", reading: "ヒョ", romaji: "hyo", meaning: "hyo" },

  // =========================
  // MYA MYU MYO
  // =========================
  { id: "31", idChapter: 2, uniqueId: "h_mya", word: "みゃ", type: "Yoon", reading: "みゃ", romaji: "mya", meaning: "mya" },
  { id: "32", idChapter: 2, uniqueId: "h_myu", word: "みゅ", type: "Yoon", reading: "みゅ", romaji: "myu", meaning: "myu" },
  { id: "33", idChapter: 2, uniqueId: "h_myo", word: "みょ", type: "Yoon", reading: "みょ", romaji: "myo", meaning: "myo" },

  { id: "34", idChapter: 2, uniqueId: "k_mya", word: "ミャ", type: "Yoon", reading: "ミャ", romaji: "mya", meaning: "mya" },
  { id: "35", idChapter: 2, uniqueId: "k_myu", word: "ミュ", type: "Yoon", reading: "ミュ", romaji: "myu", meaning: "myu" },
  { id: "36", idChapter: 2, uniqueId: "k_myo", word: "ミョ", type: "Yoon", reading: "ミョ", romaji: "myo", meaning: "myo" },

  // =========================
  // RYA RYU RYO
  // =========================
  { id: "37", idChapter: 2, uniqueId: "h_rya", word: "りゃ", type: "Yoon", reading: "りゃ", romaji: "rya", meaning: "rya" },
  { id: "38", idChapter: 2, uniqueId: "h_ryu", word: "りゅ", type: "Yoon", reading: "りゅ", romaji: "ryu", meaning: "ryu" },
  { id: "39", idChapter: 2, uniqueId: "h_ryo", word: "りょ", type: "Yoon", reading: "りょ", romaji: "ryo", meaning: "ryo" },

  { id: "40", idChapter: 2, uniqueId: "k_rya", word: "リャ", type: "Yoon", reading: "リャ", romaji: "rya", meaning: "rya" },
  { id: "41", idChapter: 2, uniqueId: "k_ryu", word: "リュ", type: "Yoon", reading: "リュ", romaji: "ryu", meaning: "ryu" },
  { id: "42", idChapter: 2, uniqueId: "k_ryo", word: "リョ", type: "Yoon", reading: "リョ", romaji: "ryo", meaning: "ryo" }
];

