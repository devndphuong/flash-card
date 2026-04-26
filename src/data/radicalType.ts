interface ExampleRadical {
  word: string; // Từ ví dụ
  readings: Array<string>; // Đọc của từ ví dụ
  implication: string; // Hàm ý của từ ví dụ
}

export interface RadicalType {
  id: number; // ID duy nhất cho mỗi bộ thủ
  word: string; // Từ chính của bộ thủ
  transcription: string; // Phiên âm của từ chính
  type: string; // Loại bộ thủ (N, V, A, etc.)
  typeRadical: number; // Số nét của bộ thủ
  reading: string; // Đọc của từ chính
  meaning: Array<string>; // Ý nghĩa của bộ thủ
  memory: string; // Mẹo ghi nhớ bộ thủ
  example: ExampleRadical; // Các ví dụ sử dụng bộ thủ
}


const radicalOneSingle: RadicalType[] = [
  {
    id: 1,
    word: "一",
    transcription: "NHẤT",
    type: "N",
    typeRadical: 1,
    reading: "いち",
    meaning: [
      "Số 1",
      "Thứ đầu tiên, đơn lẻ",
    ],
    memory: "Một đường ngang duy nhất → giống số 1 viết nằm",
    example: {
      word: "一人",
      readings: ["ひとり"],
      implication: "1 người → chỉ một cá nhân",
    },
  },
  {
    id: 2,
    word: "丨",
    transcription: "CỔN",
    type: "N",
    typeRadical: 1,
    reading: "ぼう",
    meaning: [
      "Nét thẳng đứng",
      "Dùng làm trục hoặc đường chia",
    ],
    memory: "Giống một cái cột thẳng đứng",
    example: {
      word: "中",
      readings: ["ちゅう", "なか"],
      implication: "Có một nét thẳng ở giữa → nghĩa là 'ở trong / ở giữa'",
    },
  },
  {
    id: 3,
    word: "丶",
    transcription: "CHỦ",
    type: "N",
    typeRadical: 1,
    reading: "てん",
    meaning: [
      "Dấu chấm nhỏ",
      "Điểm nhấn trong chữ",
    ],
    memory: "Chỉ là một dấu chấm → rất nhỏ nhưng dễ thấy",
    example: {
      word: "主",
      readings: ["しゅ", "ぬし"],
      implication: "Dấu chấm như điểm nhấn → người quan trọng nhất → chủ",
    },
  },
  {
      word: "丿",
      transcription: "PHIỆT",
      type: "N",
      typeRadical: 1,
      reading: "の",
      meaning: [
          "Nét xiên sang trái",
          "Thể hiện hướng hoặc chuyển động",
      ],
      memory: "Giống nét gạch chéo sang trái",
      example: {
          word: "人",
          readings: ["ひと"],
          implication: "Hai nét xiên giống hai chân → hình người",
      },
      id: 0
  },
  {
      word: "乙",
      transcription: "ẤT",
      type: "N",
      typeRadical: 1,
      reading: "おつ",
      meaning: [
          "Số thứ 2 (trong thiên can)",
          "Dạng cong, không thẳng",
      ],
      memory: "Nét cong như bị gập lại → không thẳng như 一",
      example: {
          word: "乙女",
          readings: ["おとめ"],
          implication: "Từ cổ chỉ thiếu nữ → mang sắc thái mềm mại, nhẹ nhàng",
      },
      id: 0
  },
  {
      word: "亅",
      transcription: "QUYẾT",
      type: "N",
      typeRadical: 1,
      reading: "はねぼう",
      meaning: [
          "Nét sổ có móc",
          "Dùng để kết thúc hoặc kéo xuống",
      ],
      memory: "Giống một cái móc câu ở cuối nét",
      example: {
          word: "了",
          readings: ["りょう"],
          implication: "Có nét móc → giống hành động 'kết lại' → hoàn thành",
      },
      id: 0
  },
];

const radicalTwoSingle: RadicalType[] = [
  {
      word: "二",
      transcription: "NHỊ",
      type: "N",
      typeRadical: 2,
      reading: "に",
      meaning: [
          "Số 2",
          "Hai đường song song → biểu thị số lượng hai",
      ],
      memory: "Hai nét ngang = số 2",
      example: {
          word: "二人",
          readings: ["ふたり"],
          implication: "Hai người",
      },
      id: 0
  },
  {
      word: "亠",
      transcription: "ĐẦU",
      type: "N",
      typeRadical: 2,
      reading: "なべぶた",
      meaning: [
          "Phần đầu hoặc mái che",
          "Thường nằm trên cùng của chữ, giống cái nắp",
      ],
      memory: "Giống cái nắp đậy ở trên",
      example: {
          word: "京",
          readings: ["きょう"],
          implication: "Phần trên như mái → liên quan cấu trúc phía trên",
      },
      id: 0
  },
  {
      word: "人",
      transcription: "NHÂN",
      type: "N",
      typeRadical: 2,
      reading: "ひと",
      meaning: [
          "Con người",
          "Liên quan đến hành động, tư thế của người",
      ],
      memory: "Hai nét như hai chân đang đứng",
      example: {
          word: "休",
          readings: ["きゅう"],
          implication: "Người tựa vào cây → nghỉ ngơi",
      },
      id: 0
  },
  {
      word: "儿",
      transcription: "NHI",
      type: "N",
      typeRadical: 2,
      reading: "にんにょう",
      meaning: [
          "Chân người",
          "Thường dùng ở dưới, liên quan đến di chuyển",
      ],
      memory: "Giống hai chân đang bước đi",
      example: {
          word: "元",
          readings: ["げん"],
          implication: "Phần dưới là chân → nền tảng, gốc",
      },
      id: 0
  },
  {
      word: "入",
      transcription: "NHẬP",
      type: "N",
      typeRadical: 2,
      reading: "いり",
      meaning: [
          "Đi vào",
          "Hướng vào bên trong",
      ],
      memory: "Hai nét chụm vào → đi vào",
      example: {
          word: "入口",
          readings: ["いりぐち"],
          implication: "Cửa đi vào",
      },
      id: 0
  },
  {
      word: "八",
      transcription: "BÁT",
      type: "N",
      typeRadical: 2,
      reading: "はち",
      meaning: [
          "Số 8",
          "Cũng mang ý nghĩa mở ra, tách ra",
      ],
      memory: "Hai nét tách ra → mở rộng",
      example: {
          word: "八百",
          readings: ["はっぴゃく"],
          implication: "800",
      },
      id: 0
  },
  {
      word: "冂",
      transcription: "QUYNH",
      type: "N",
      typeRadical: 2,
      reading: "けいがまえ",
      meaning: [
          "Vùng bao quanh",
          "Khu vực rỗng hoặc không gian",
      ],
      memory: "Giống khung bao quanh",
      example: {
          word: "同",
          readings: ["どう"],
          implication: "Bên trong khung → cùng một chỗ",
      },
      id: 0
  },
  {
      word: "冖",
      transcription: "MỊCH",
      type: "N",
      typeRadical: 2,
      reading: "わかんむり",
      meaning: [
          "Che phủ",
          "Phủ lên сверху",
      ],
      memory: "Giống tấm khăn phủ lên",
      example: {
          word: "写",
          readings: ["しゃ"],
          implication: "Có mái che → hành động bên dưới",
      },
      id: 0
  },
  {
      word: "冫",
      transcription: "BĂNG",
      type: "N",
      typeRadical: 2,
      reading: "にすい",
      meaning: [
          "Nước đá",
          "Liên quan đến lạnh, đông",
      ],
      memory: "Hai giọt nước bị đông lại",
      example: {
          word: "冷",
          readings: ["れい"],
          implication: "Liên quan đến lạnh",
      },
      id: 0
  },
  {
      word: "几",
      transcription: "KỶ",
      type: "N",
      typeRadical: 2,
      reading: "つくえ",
      meaning: [
          "Cái bàn nhỏ / ghế",
          "Đồ vật có chân",
      ],
      memory: "Giống cái bàn thấp",
      example: {
          word: "机",
          readings: ["つくえ"],
          implication: "Cái bàn",
      },
      id: 0
  },
  {
      word: "凵",
      transcription: "KHẢM",
      type: "N",
      typeRadical: 2,
      reading: "うけばこ",
      meaning: [
          "Cái hố, vật chứa",
          "Dạng mở lên trên",
      ],
      memory: "Giống cái miệng đang mở lên",
      example: {
          word: "出",
          readings: ["でる"],
          implication: "Từ trong đi ra",
      },
      id: 0
  },
  {
      word: "刀",
      transcription: "ĐAO",
      type: "N",
      typeRadical: 2,
      reading: "かたな",
      meaning: [
          "Con dao",
          "Liên quan đến cắt, chia",
      ],
      memory: "Hình lưỡi dao",
      example: {
          word: "切",
          readings: ["きる"],
          implication: "Cắt",
      },
      id: 0
  },
  {
      word: "力",
      transcription: "LỰC",
      type: "N",
      typeRadical: 2,
      reading: "ちから",
      meaning: [
          "Sức mạnh",
          "Nỗ lực, lực tác động",
      ],
      memory: "Giống cánh tay đang gồng",
      example: {
          word: "男",
          readings: ["おとこ"],
          implication: "Ruộng + sức → người đàn ông lao động",
      },
      id: 0
  },
  {
      word: "勹",
      transcription: "BAO",
      type: "N",
      typeRadical: 2,
      reading: "つつみがまえ",
      meaning: [
          "Bao bọc",
          "Ôm, gói lại",
      ],
      memory: "Giống cánh tay ôm vào",
      example: {
          word: "包",
          readings: ["つつむ"],
          implication: "Gói lại",
      },
      id: 0
  },
  {
      word: "匕",
      transcription: "CHỦY",
      type: "N",
      typeRadical: 2,
      reading: "さじ",
      meaning: [
          "Cái thìa",
          "Hình cong nhỏ",
      ],
      memory: "Giống cái muỗng",
      example: {
          word: "北",
          readings: ["きた"],
          implication: "Hai người quay lưng → hướng Bắc",
      },
      id: 0
  },
  {
      word: "匚",
      transcription: "PHƯƠNG",
      type: "N",
      typeRadical: 2,
      reading: "はこがまえ",
      meaning: [
          "Hộp, tủ",
          "Vật chứa hình vuông",
      ],
      memory: "Giống cái hộp mở một bên",
      example: {
          word: "医",
          readings: ["い"],
          implication: "Chứa thuốc → y tế",
      },
      id: 0
  },
  {
      word: "匸",
      transcription: "HỆ",
      type: "N",
      typeRadical: 2,
      reading: "かくしがまえ",
      meaning: [
          "Che giấu",
          "Ẩn đi",
      ],
      memory: "Giống che kín một phía",
      example: {
          word: "区",
          readings: ["く"],
          implication: "Vùng được bao lại",
      },
      id: 0
  },
  {
      word: "十",
      transcription: "THẬP",
      type: "N",
      typeRadical: 2,
      reading: "じゅう",
      meaning: [
          "Số 10",
          "Dấu cộng → đầy đủ",
      ],
      memory: "Giống dấu cộng",
      example: {
          word: "十日",
          readings: ["とおか"],
          implication: "Ngày 10",
      },
      id: 0
  },
  {
      word: "卜",
      transcription: "BỐC",
      type: "N",
      typeRadical: 2,
      reading: "ぼく",
      meaning: [
          "Xem bói",
          "Dự đoán",
      ],
      memory: "Giống vết nứt khi bói",
      example: {
          word: "占",
          readings: ["うらなう"],
          implication: "Xem bói",
      },
      id: 0
  },
  {
      word: "卩",
      transcription: "TIẾT",
      type: "N",
      typeRadical: 2,
      reading: "ふしづくり",
      meaning: [
          "Đốt tre",
          "Phần chia đoạn",
      ],
      memory: "Giống khớp nối",
      example: {
          word: "印",
          readings: ["いん"],
          implication: "Dấu ấn (liên quan cấu trúc)",
      },
      id: 0
  },
  {
      word: "厂",
      transcription: "HÁN / XƯỞNG",
      type: "N",
      typeRadical: 2,
      reading: "がんだれ",
      meaning: [
          "Vách đá",
          "Sườn núi",
      ],
      memory: "Giống mái đá che xuống",
      example: {
          word: "原",
          readings: ["げん"],
          implication: "Vùng đất dưới vách đá → đồng bằng",
      },
      id: 0
  },
  {
      word: "厶",
      transcription: "KHƯ / TƯ",
      type: "N",
      typeRadical: 2,
      reading: "む",
      meaning: [
          "Riêng tư",
          "Cá nhân",
      ],
      memory: "Hình nhỏ, khép kín → riêng",
      example: {
          word: "私",
          readings: ["わたし"],
          implication: "Cái riêng → bản thân",
      },
      id: 0
  },
  {
      word: "又",
      transcription: "HỰU",
      type: "N",
      typeRadical: 2,
      reading: "また",
      meaning: [
          "Lại, thêm lần nữa",
          "Hành động lặp lại",
      ],
      memory: "Giống bàn tay làm lại",
      example: {
          word: "友",
          readings: ["とも"],
          implication: "Hai bàn tay → bạn bè",
      },
      id: 0
  },
];