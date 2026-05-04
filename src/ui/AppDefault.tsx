"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Flashcard,
  initialBai1,
  initialBai2,
  initialBai3,
  initialBai4,
  initialBai5,
  initialBai6,
  initialBai7,
  initialBai8,
  initialBai9,
  initialBai10,
  initialBai11,
  initialBai12,
  initialBai13,
  initialBai14,
  initialBai15,
  initialBai16,
  initialBai17,
  initialBai18,
  initialBai19,
  initialBai20,
  initialBai21,
  initialBai22,
  initialBai23,
  initialBai24,
  initialBai25,
} from "@/data/flashcard";
import Link from "next/link";
import LoadingPage from "./loading/LoadingPage";

// Hàm xáo trộn mảng index (Fisher-Yates shuffle)
// → dùng để random thứ tự hiển thị flashcard
const makeShuffle = (arr: number[]) => {
  const a = arr.slice(); // clone mảng để không mutate mảng gốc
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]; // swap
  }
  return a;
};

const AppDefault: React.FC = () => {
  // Danh sách tất cả các bài học (chapter)
  // mỗi bài chứa 1 mảng flashcards riêng
const allDataFlashCards = [
    { id: 7, chapTer: "Bài 1", dataFlashCard: initialBai1 },
    { id: 8, chapTer: "Bài 2", dataFlashCard: initialBai2 },
    { id: 9, chapTer: "Bài 3", dataFlashCard: initialBai3 },
    { id: 10, chapTer: "Bài 4", dataFlashCard: initialBai4 },
    { id: 11, chapTer: "Bài 5", dataFlashCard: initialBai5 },
    { id: 12, chapTer: "Bài 6", dataFlashCard: initialBai6 },
    { id: 13, chapTer: "Bài 7", dataFlashCard: initialBai7 },
    { id: 14, chapTer: "Bài 8", dataFlashCard: initialBai8 },
    { id: 15, chapTer: "Bài 9", dataFlashCard: initialBai9 },
    { id: 16, chapTer: "Bài 10", dataFlashCard: initialBai10 },
    { id: 17, chapTer: "Bài 11", dataFlashCard: initialBai11 },
    { id: 18, chapTer: "Bài 12", dataFlashCard: initialBai12 },
    { id: 19, chapTer: "Bài 13", dataFlashCard: initialBai13 },
    { id: 20, chapTer: "Bài 14", dataFlashCard: initialBai14 },
    { id: 21, chapTer: "Bài 15", dataFlashCard: initialBai15 },
    { id: 22, chapTer: "Bài 16", dataFlashCard: initialBai16 },
    { id: 23, chapTer: "Bài 17", dataFlashCard: initialBai17 },
    { id: 24, chapTer: "Bài 18", dataFlashCard: initialBai18 },
    { id: 25, chapTer: "Bài 19", dataFlashCard: initialBai19 },
    { id: 26, chapTer: "Bài 20", dataFlashCard: initialBai20 },
    { id: 27, chapTer: "Bài 21", dataFlashCard: initialBai21 },
    { id: 28, chapTer: "Bài 22", dataFlashCard: initialBai22 },
    { id: 29, chapTer: "Bài 23", dataFlashCard: initialBai23 },
    { id: 30, chapTer: "Bài 24", dataFlashCard: initialBai24 },
    { id: 31, chapTer: "Bài 25", dataFlashCard: initialBai25 },
];
  const fieldLabels: Record<keyof typeof visibleFields, string> = {
        word: "Kanji",
        reading: "Hiragana",
        romaji: "Romaji",
        type: "Loại từ",
    };

  // ===== STATE =====

  const [mounted, setMounted] = useState(false);
  // Bài học đang được chọn
  const [selectedChapter, setSelectedChapter] = useState(allDataFlashCards[0]);

  // Danh sách flashcard hiện tại (phụ thuộc vào chapter hoặc JSON load)
  const [flashcards, setFlashcards] = useState<Flashcard[]>(
    selectedChapter.dataFlashCard
  );

  // Quy định hiển thị mặt trước:
  // true = Nhật → Việt
  // false = Việt → Nhật
  const [showJapaneseFirst, setShowJapaneseFirst] = useState(true);

  // Input JSON để user nhập flashcard custom
  const [jsonInput, setJsonInput] = useState("");

  // order: thứ tự index của flashcard (dùng để shuffle)
  const [order, setOrder] = useState<number[]>(flashcards.map((_, i) => i));

  // pos: vị trí hiện tại trong order
  const [pos, setPos] = useState(0);

  // flipped: trạng thái lật thẻ (false = mặt trước, true = mặt sau)
  const [flipped, setFlipped] = useState(false);

  // knownSet: danh sách index các card đã thuộc
  const [knownSet, setKnownSet] = useState<Flashcard[]>([]);
  const [unKnownSet, setunKnownSet] = useState<Flashcard[]>([]);

  const [visibleFields, setVisibleFields] = useState({
    word: true,
    reading: true,
    romaji: false,
    type: true
  });

  type HistoryItem = {
    cardId: string;
    action: "known" | "unknown";
  };

  const [history, setHistory] = useState<HistoryItem[]>([]);
  

  // toggle hiển thị danh sách đã thuộc
  const [showKnownList, setShowKnownList] = useState(true);

  // toggle hiển thị danh sách chưa thuộc
  const [showUnknownList, setShowUnknownList] = useState(false);

  // Reset trạng thái khi đổi flashcards hoặc đổi chapter
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrder(flashcards.map((_, i) => i)); // reset order
    setPos(0); // về card đầu
    setKnownSet([]); // xoá tiến độ
    setFlipped(false); // reset flip
  }, [flashcards, selectedChapter]);

  useEffect(() => {
    if (!mounted) return;
    const savedId = localStorage.getItem("selectedChapterId");

    if (!savedId) return;

    const id = Number(savedId);
    const found = allDataFlashCards.find((item) => item.id === id);

    if (found) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedChapter(found);
      setFlashcards(found.dataFlashCard);
    }
  }, [mounted]);

  // Tạo Set để lookup nhanh O(1) thay vì includes O(n)
  const knownSetLookup = useMemo(() => new Set(knownSet), [knownSet]);

  // ===== HANDLE CHỌN BÀI =====
  const handleSelectChapter = (id: number) => {
    const found = allDataFlashCards.find((item) => item.id === id);
    if (!found) return;

    // lưu vào localStorage
    localStorage.setItem("selectedChapterId", String(id));

    setSelectedChapter(found); // set chapter
    setFlashcards(found.dataFlashCard); // load flashcards
    setPos(0);
    setKnownSet([]);
    setunKnownSet([]);
    setFlipped(false);
    setJsonInput("");
  };

  const toggleField = (field: keyof typeof visibleFields) => {
    setVisibleFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Tổng số flashcards
  const total = flashcards.length;

  // index thực của card hiện tại (theo order)
  const currentIndex = order[pos];

  // kiểm tra đã học hết chưa
  const isFinished = pos >= order.length;

  // ===== LOAD JSON =====
  const handleLoadJSON = () => {
    try {
      const parsed = JSON.parse(jsonInput) as Flashcard[];

      // validate JSON
      if (!Array.isArray(parsed) || parsed.length === 0) {
        alert("JSON không hợp lệ hoặc rỗng");
        return;
      }

      const isValid = parsed.every(
        (f) =>
          typeof f.word === "string" &&
          typeof f.type === "string" &&
          typeof f.reading === "string" &&
          typeof f.romaji === "string" &&
          typeof f.meaning === "string"
      );

      if (!isValid) {
        alert("Một hoặc nhiều flashcards không đúng định dạng");
        return;
      }

      // set dữ liệu mới
      setFlashcards(parsed);
      setOrder(parsed.map((_, i) => i));
      setPos(0);
      setKnownSet([]);

      alert("Đã load flashcards thành công!");
    } catch (err) {
      alert("Lỗi JSON: " + (err as Error).message);
    }
  };

  // Reset về dữ liệu mặc định
  const handleResetFlashcards = () => {
    setFlashcards(initialBai1);
    setOrder(initialBai1.map((_, i) => i));
    setPos(0);
    setKnownSet([]);
    setunKnownSet([]);
    setVisibleFields({
    word: true,
    reading: true,
    romaji: false,
    type: true
  });
    setJsonInput("");
  };

  // ===== LOGIC HỌC =====

  // Đánh dấu card là đã thuộc
  const markKnown = (card: Flashcard) => {
    setKnownSet((prev) => {
      // nếu đã có rồi thì không thêm nữa
      if (prev.some((c) => c.id === card.id)) return prev;

      return [...prev, card];
    });

    // đồng thời remove khỏi unknown nếu có
    setunKnownSet((prev) => prev.filter((c) => c.id !== card.id));
  };

  // Đánh dấu card là chưa thuộc
  const markUnknown = (card: Flashcard) => {
    setunKnownSet((prev) => {
      if (prev.some((c) => c.id === card.id)) return prev;

      return [...prev, card];
    });

    // remove khỏi known nếu có
    setKnownSet((prev) => prev.filter((c) => c.id !== card.id));
  };

  // Khi user bấm "Đã thuộc" hoặc "Chưa thuộc"
  const handleMarkAndNext = (card: Flashcard, known: boolean) => {
    if (known) markKnown(card);
    else markUnknown(card);
    // lưu lịch sử
    setHistory((prev) => [
      ...prev,
      {
        cardId: card.id!,
        action: known ? "known" : "unknown",
      },
    ]);

    setFlipped(false);
    setPos((p) => {
      const next = p + 1;
      return next >= order.length ? order.length : next;
    });
  };

  // Quay lại card trước
  const prevCard = () => {
    setPos((p) => {
      if (p === 0) return 0;

      const prevIndex = p - 1;
      const card = flashcards[order[prevIndex]];

      // lấy hành động gần nhất
      const last = history[history.length - 1];

      if (last && last.cardId === card.id) {
        // undo action
        if (last.action === "known") {
          setKnownSet((prev) =>
            prev.filter((c) => c.id !== card.id)
          );
        } else {
          setunKnownSet((prev) =>
            prev.filter((c) => c.id !== card.id)
          );
        }

        // remove history
        setHistory((prev) => prev.slice(0, -1));
      }

      return prevIndex;
    });

    setFlipped(false);
  };

  // Restart:
  // keepKnown = true → giữ lại tiến độ
  // false → reset toàn bộ
  const restart = (keepKnown = false) => {
    setFlipped(false);
    setPos(0);
    if (!keepKnown) {
      setKnownSet([]);
      setunKnownSet([]);
    };
  };

  // Xáo trộn thứ tự card (TypeScript version)
  const shuffle = (): void => {
    if (flashcards.length <= 1) return;

    const idxs: number[] = flashcards.map((_, i) => i);

    let newOrder: number[] = [];
    let isSame = true;

    while (isSame) {
      newOrder = makeShuffle(idxs);

      isSame =
        newOrder.length === order.length &&
        newOrder.every((v, i) => v === order[i]);
    }

    setOrder(newOrder);
    setPos(0);
    setFlipped(false);

    // reset progress
    setKnownSet([]);
    setunKnownSet([]);
  };


  // Học lại tất cả
const relearnAll = () => {
  setOrder(flashcards.map((_, i) => i));
  setPos(0);
  setFlipped(false);
  setKnownSet([]);
  setunKnownSet([]);
};

// Học lại chỉ những từ đã thuộc
const relearnKnown = () => {
  const knownIndexes = flashcards
    .map((card, i) => (knownSet.some((k) => k.id === card.id) ? i : -1))
    .filter((i) => i !== -1);

  setOrder(knownIndexes);
  setPos(0);
  setFlipped(false);
};

// Học lại chỉ những từ chưa thuộc
const relearnUnknown = () => {
  const unknownIndexes = flashcards
    .map((card, i) => (!knownSet.some((k) => k.id === card.id) ? i : -1))
    .filter((i) => i !== -1);

  setOrder(unknownIndexes);
  setPos(0);
  setFlipped(false);
};

  // ===== VIEW TỔNG KẾT =====
  const summaryView = (
    <div className="max-w-[720px] mx-auto p-5 sm:p-6 bg-white rounded-2xl shadow-lg text-center">
      
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">🎉 Hoàn tất lượt học</h2>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6 text-sm sm:text-base">
        <div className="bg-gray-100 rounded-lg p-3">
          <p className="text-gray-500">Tổng</p>
          <p className="font-bold text-lg">{total}</p>
        </div>

        <div className="bg-green-100 rounded-lg p-3">
          <p className="text-green-600">Đã thuộc</p>
          <p className="font-bold text-lg">{knownSet.length}</p>
        </div>

        <div className="bg-red-100 rounded-lg p-3">
          <p className="text-red-600">Chưa thuộc</p>
          <p className="font-bold text-lg">{unKnownSet.length}</p>
        </div>
      </div>

      {/* Relearn buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={relearnAll}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
        >
          🔁 Học lại tất cả ({total})
        </button>

        <button
          onClick={relearnKnown}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
        >
          ✅ Đã thuộc ({knownSet.length})
        </button>

        <button
          onClick={relearnUnknown}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
        >
          ❌ Chưa thuộc ({unKnownSet.length})
        </button>
      </div>

      {/* Action */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={() => restart(false)}
          className="px-3 py-2 bg-gray-500 text-white rounded-md text-sm"
        >
          Reset (Xóa tiến độ)
        </button>

        <button
          onClick={() => restart(true)}
          className="px-3 py-2 bg-yellow-500 text-white rounded-md text-sm"
        >
          Giữ tiến độ
        </button>

        <button
          onClick={() => shuffle()}
          className="px-3 py-2 bg-purple-500 text-white rounded-md text-sm"
        >
          Xáo trộn
        </button>
      </div>

      <div className="flex justify-center gap-3 text-sm">
        <button
          onClick={() => setShowKnownList((s) => !s)}
          className="px-3 py-1 border rounded-md"
        >
          {showKnownList ? "Ẩn" : "Hiện"} đã thuộc
        </button>

        <button
          onClick={() => setShowUnknownList((s) => !s)}
          className="px-3 py-1 border rounded-md"
        >
          {showUnknownList ? "Ẩn" : "Hiện"} chưa thuộc
        </button>
      </div>
    </div>
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // ===== MAIN RENDER =====
  if (!mounted) {
    return <LoadingPage />;
  }
  return (
    <>
      <section className="overflow-hidden p-3 sm:p-[22px] min-h-[90vh] flex flex-col sm:flex-row">
        {/* LEFT PANEL */}
        
        <div className="w-full sm:w-[30%] mx-auto mb-6 text-left order-1 sm:order-1">
          <div className="flex gap-2 justify-center">
            <Link
              href="/"
              className="px-3 py-2 bg-blue-500 text-white rounded-md text-sm text-center"
            >
              📘 Từ vựng
            </Link>

            <Link
              href="/kanji"
              className="px-3 py-2 bg-green-500 text-white rounded-md text-sm text-center"
            >
              🔤 Kanji
            </Link>

            <Link
              href="/radical"
              className="px-3 py-2 bg-purple-500 text-white rounded-md text-sm text-center"
            >
              🧩 Bộ thủ
            </Link>
          </div>
          <div className="w-full p-2">
            <label className="block mb-2 font-semibold">Chọn bài học:</label>
            <select
              value={selectedChapter.id}
              onChange={(e) => handleSelectChapter(Number(e.target.value))}
              className="border p-2 rounded w-full mb-4 text-sm sm:text-base"
            >
              {allDataFlashCards.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.chapTer}
                </option>
              ))}
            </select>
          </div>
            {
                !isFinished &&
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">Hiển thị:</label>

                        <div className="flex flex-wrap gap-2 text-sm">
                            {Object.keys(visibleFields).map((key) => {
                                const typedKey = key as keyof typeof visibleFields;

                                return (
                                <label key={key} className="flex items-center gap-1">
                                    <input
                                    type="checkbox"
                                    checked={visibleFields[typedKey]}
                                    onChange={() => toggleField(typedKey)}
                                    />
                                    {fieldLabels[typedKey]}
                                </label>
                                );
                            })}
                            </div>
                    </div>

            }
          <div className="flex-wrap gap-2 mt-2 hidden sm:flex">
            <button
              onClick={handleResetFlashcards}
              className="cursor-pointer px-3 py-2 bg-red-500 text-white rounded-md text-xl font-bold sm:text-base"
            >
              Reset
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full sm:w-[70%] mx-auto p-2 sm:p-4 m-0 sm:m-4 order-1 sm:order-2">
          <div className="bg-white rounded-xl shadow-1 px-3 sm:px-4 py-6 sm:py-12 text-black">
            <div className="text-center">
              <div className="mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-black">
                  📚 Flashcard Từ vựng Tiếng Nhật
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Thẻ {Math.min(pos + 1, order.length)}/{order.length} • Đã
                  thuộc: {knownSet.length} • Chưa thuộc: {unKnownSet.length}
                </p>

                {!isFinished &&
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => shuffle()}
                    className="cursor-pointer px-3 py-2 bg-purple-500 text-white rounded-md text-sm sm:text-base"
                  >
                    Xáo trộn
                  </button>
                  <button
                    onClick={() => setShowJapaneseFirst((s) => !s)}
                    className="cursor-pointer px-3 py-2 bg-indigo-500 text-white rounded-md text-sm sm:text-base"
                  >
                    Hiển thị: {showJapaneseFirst ? "🇯🇵 → 🇻🇳" : "🇻🇳 → 🇯🇵"}
                  </button>
                  <button
                    onClick={() => restart(false)}
                    className={"px-3 py-2 bg-red-500 text-white rounded-md text-sm sm:text-base" + (pos === 0 ? " opacity-50 cursor-not-allowed" : "cursor-pointer")}
                  >
                    Bắt đầu lại
                  </button>
                </div>
                }
              </div>


              {
                !isFinished && 
              <div className="mx-auto mb-8 flex items-center justify-center">
                <div
                  className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded flex items-center justify-center cursor-pointer"
                  onClick={() => setFlipped((f) => !f)}
                  style={{
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    backgroundColor: !flipped
                      ? !showJapaneseFirst
                        ? "rgba(198,247,3,0.8)"
                        : "rgba(65,217,41,0.8)"
                      : !showJapaneseFirst
                      ? "rgba(65,217,41,0.8)"
                      : "rgba(198,247,3,0.8)",
                  }}
                >
                  {!flipped ? (
                      showJapaneseFirst ? (
                        <div className="px-4 text-center">
                          {
                            visibleFields.word &&
                              <div className="text-4xl sm:text-7xl font-medium py-2 text-black font-jp">
                                {flashcards[currentIndex].word}
                              </div>
                          }
                          {
                            visibleFields.type &&
                              <div className="text-base sm:text-xl font-semibold mt-2 py-2 text-gray-700">
                                {flashcards[currentIndex].type}
                              </div>
                          }
                          {
                            visibleFields.reading &&
                            <div className="text-2xl sm:text-3xl mt-2 py-2 font-medium text-blue-700">
                              {flashcards[currentIndex].reading}
                            </div>
                          }
                          {
                            visibleFields.romaji &&
                            <div className="text-xs sm:text-sm mt-4 py-2 text-gray-600">
                              {flashcards[currentIndex].romaji}
                            </div>
                          }
                          <div className="text-xs mt-4 py-2 text-gray-500">
                            (Bấm để xem nghĩa)
                          </div>
                        </div>
                      ) : (
                        <div className="px-4 text-center">
                          <div className="text-3xl sm:text-5xl font-semibold py-6 text-black">
                            {flashcards[currentIndex].meaning}
                          </div>
                          <div className="text-xs mt-4 py-2 text-gray-500">
                            (Bấm để xem tiếng Nhật)
                          </div>
                        </div>
                      )
                    ) : showJapaneseFirst ? (
                      <div className="px-4 text-center">
                        <div className="text-2xl sm:text-4xl font-semibold text-black">
                          {flashcards[currentIndex].meaning}
                        </div>
                        <div className="text-xs text-gray-600 mt-3">
                          Bấm để quay lại
                        </div>
                      </div>
                    ) : (
                      <div className="px-4 text-center">
                          {
                            visibleFields.word &&
                              <div className="text-4xl sm:text-7xl font-medium py-2 text-black font-jp">
                                {flashcards[currentIndex].word}
                              </div>
                          }
                          {
                            visibleFields.type &&
                              <div className="text-base sm:text-xl font-semibold mt-2 py-2 text-gray-700">
                                {flashcards[currentIndex].type}
                              </div>
                          }
                          {
                            visibleFields.reading &&
                            <div className="text-2xl sm:text-3xl mt-2 py-2 font-medium text-blue-700">
                              {flashcards[currentIndex].reading}
                            </div>
                          }
                          {
                            visibleFields.romaji &&
                            <div className="text-xs sm:text-sm mt-4 py-2 text-gray-600">
                              {flashcards[currentIndex].romaji}
                            </div>
                          }
                        <div className="text-xs text-gray-500 mt-3">
                          Bấm để quay lại
                        </div>
                      </div>
                    )}
                </div>
              </div>
              }

              {!isFinished ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                    <button
                      onClick={prevCard}
                      className={"px-4 py-2 bg-gray-500 text-white rounded-md text-sm sm:text-base" + (pos === 0 ? " opacity-50 cursor-not-allowed" : "cursor-pointer")}
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => handleMarkAndNext(flashcards[currentIndex], false)}
                      className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-md text-sm sm:text-base"
                    >
                      Chưa thuộc
                    </button>
                    <button
                      onClick={() => handleMarkAndNext(flashcards[currentIndex], true)}
                      className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded-md text-sm sm:text-base"
                    >
                      Đã thuộc
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4">{summaryView}</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDefault;
