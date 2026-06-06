"use client";
import React, { useEffect, useState } from "react";
import {
  Flashcard,
} from "@/data/flashcard";
import Link from "next/link";
import LoadingPage from "../loading/LoadingPage";
import { allAlphabetFlashCards } from "@/data/comon";
import { fisherYatesShuffle } from "@/utils/handle";


const AlphabetPage: React.FC = () => {

  const fieldLabels: Record<keyof typeof visibleFields, string> = {
        word: "Kanji",
        reading: "Hiragana",
        romaji: "Romaji",
        type: "Loại từ",
    };

  // ===== STATE =====

  const [mounted, setMounted] = useState(false);
  // Bài học đang được chọn
  const [selectedChapter, setSelectedChapter] = useState(allAlphabetFlashCards[0]);

  const [selectedChapterIds, setSelectedChapterIds] = useState<number[]>([]);

  // Danh sách flashcard hiện tại (phụ thuộc vào chapter hoặc JSON load)
  const [flashcards, setFlashcards] = useState<Flashcard[]>(
    selectedChapter.dataFlashCard
  );
  

  // Quy định hiển thị mặt trước:
  // true = Nhật → Việt
  // false = Việt → Nhật
  const [showJapaneseFirst, setShowJapaneseFirst] = useState(true);

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
    reading: false,
    romaji: false,
    type: false,
  });

  type HistoryItem = {
    card: Flashcard;
    previousState:
      | "known"
      | "unknown"
      | null;
    newState:
      | "known"
      | "unknown";
  };

  const [history, setHistory] = useState<HistoryItem[]>([]);
  

  // toggle hiển thị danh sách đã thuộc
  const [showKnownList, setShowKnownList] = useState(true);

  // toggle hiển thị danh sách chưa thuộc
  const [showUnknownList, setShowUnknownList] = useState(false);

  // Hiển thị danh sách chapter để chọn
  const [showChapters, setShowChapters] = useState(false);

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

    const savedIds = localStorage.getItem(
      "selectedAlphabetIds"
    );

    const savedVisibleFields = localStorage.getItem(
      "visibleFields"
    );

    if (savedVisibleFields) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisibleFields(JSON.parse(savedVisibleFields));
    }

    let ids: number[];

    if (savedIds) {
      ids = JSON.parse(savedIds);
    } else {
      ids = [allAlphabetFlashCards[0].id];
    }

    // Trường hợp localStorage lưu []
    if (ids.length === 0) {
      ids = [allAlphabetFlashCards[0].id];
    }

    setSelectedChapterIds(ids);

    const cards = ids.flatMap((id) => {
      const chapter = allAlphabetFlashCards.find(
        (item) => item.id === id
      );

      if (!chapter) return [];

      return chapter.dataFlashCard.map((card) => ({
        ...card,
        idChapter: id,
      }));
    });

    setFlashcards(cards);
  }, [mounted]);


  const handleToggleChapter = (id: number) => {
    const chapter = allAlphabetFlashCards.find(
      (item) => item.id === id
    );

    if (!chapter) return;

    const isSelected = selectedChapterIds.includes(id);

    let newSelectedIds: number[];

    if (isSelected) {
      if (selectedChapterIds.length <= 1) {
        return;      
      }
      newSelectedIds = selectedChapterIds.filter(
        (item) => item !== id
      );

      setFlashcards((prev) =>
        prev.filter((card) => card.idChapter !== id)
      );
    } else {
      newSelectedIds = [...selectedChapterIds, id];

      setFlashcards((prev) => [
        ...prev,
        ...chapter.dataFlashCard.map((card) => ({
          ...card,
          idChapter: id,
        })),
      ]);
    }

    setSelectedChapterIds(newSelectedIds);

    localStorage.setItem(
      "selectedAlphabetIds",
      JSON.stringify(newSelectedIds)
    );

    setPos(0);
    setKnownSet([]);
    setunKnownSet([]);
    setFlipped(false);
  };
  
  const toggleField = (field: keyof typeof visibleFields) => {
    setVisibleFields((prev) => {
      const updated = {
        ...prev,
        [field]: !prev[field],
      };

      localStorage.setItem(
        "visibleFields",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  // Tổng số flashcards
  const total = flashcards.length;

  // index thực của card hiện tại (theo order)
  const currentIndex =
    pos < order.length
      ? order[pos]
      : -1;

  // kiểm tra đã học hết chưa
  const isFinished = pos >= order.length;

  // Reset phiên học (giữ nguyên các bài đang chọn)
  const handleResetFlashcards = () => {
    // Reset vị trí học
    setPos(0);

    // Reset trạng thái học
    setKnownSet([]);
    setunKnownSet([]);
    setHistory([]);
    setFlipped(false);

    // Reset order về toàn bộ flashcards hiện tại
    setOrder(flashcards.map((_, index) => index));

    // Reset hiển thị field
    setVisibleFields({
      word: true,
      reading: false,
      romaji: false,
      type: false,
    });
  };

  // ===== LOGIC HỌC =====

  // Đánh dấu card là đã thuộc
  const markKnown = (card: Flashcard) => {
    setKnownSet((prev) => {
      // nếu đã có rồi thì không thêm nữa
      if (
        prev.some(
          (c) => c.uniqueId === card.uniqueId
        )
      ) {
        return prev;
      }

      return [...prev, card];
    });

    // đồng thời remove khỏi unknown nếu có
    setunKnownSet((prev) =>
      prev.filter(
        (c) => c.uniqueId !== card.uniqueId
      )
    );
  };

// Đánh dấu card là chưa thuộc
  const markUnknown = (card: Flashcard) => {
    setunKnownSet((prev) => {
      if (
        prev.some(
          (c) => c.uniqueId === card.uniqueId
        )
      ) {
        return prev;
      }

      return [...prev, card];
    });

    // remove khỏi known nếu có
    setKnownSet((prev) =>
      prev.filter(
        (c) => c.uniqueId !== card.uniqueId
      )
    );
  };

  // Khi user bấm "Đã thuộc" hoặc "Chưa thuộc"
  const handleMarkAndNext = (
    card: Flashcard,
    known: boolean
  ) => {
    
    const wasKnown = knownSet.some(
      (c) => c.uniqueId === card.uniqueId
    );

    const wasUnknown = unKnownSet.some(
      (c) => c.uniqueId === card.uniqueId
    );

    let previousState:
      | "known"
      | "unknown"
      | null = null;

    if (wasKnown) {
      previousState = "known";
    } else if (wasUnknown) {
      previousState = "unknown";
    }

    if (known) {
      markKnown(card);
    } else {
      markUnknown(card);
    }

    setHistory((prev) => [
      ...prev,
      {
        card,
        previousState,
        newState: known
          ? "known"
          : "unknown",
      },
    ]);

    setFlipped(false);
    // Chuyển sang card tiếp theo
    setPos((prev) => prev + 1);
  };

  // Quay lại card trước
  const prevCard = () => {
    if (pos === 0) {
      setFlipped(false);
      return;
    }

    const last =
      history[history.length - 1];

    if (last) {
      // Xóa trạng thái hiện tại
      setKnownSet((prev) =>
        prev.filter(
          (c) =>
            c.uniqueId !==
            last.card.uniqueId
        )
      );

      setunKnownSet((prev) =>
        prev.filter(
          (c) =>
            c.uniqueId !==
            last.card.uniqueId
        )
      );

      // Khôi phục trạng thái trước đó
      if (
        last.previousState ===
        "known"
      ) {
        setKnownSet((prev) => {
          if (
            prev.some(
              (c) =>
                c.uniqueId ===
                last.card.uniqueId
            )
          ) {
            return prev;
          }

          return [...prev, last.card];
        });
      }

      if (
        last.previousState ===
        "unknown"
      ) {
        setunKnownSet((prev) => {
          if (
            prev.some(
              (c) =>
                c.uniqueId ===
                last.card.uniqueId
            )
          ) {
            return prev;
          }

          return [...prev, last.card];
        });
      }

      setHistory((prev) =>
        prev.slice(0, -1)
      );
    }

    setPos((prev) =>
      Math.max(0, prev - 1)
    );

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

  const indexes = Array.from(
    { length: flashcards.length },
    (_, i) => i
  );

  const newOrder = fisherYatesShuffle(indexes);

  // Tránh trường hợp kết quả giống hệt lần trước
  if (
    order.length === newOrder.length &&
    order.every((value, index) => value === newOrder[index])
  ) {
    const first = Math.floor(
      Math.random() * newOrder.length
    );

    let second = Math.floor(
      Math.random() * newOrder.length
    );

    while (first === second) {
      second = Math.floor(
        Math.random() * newOrder.length
      );
    }

    [newOrder[first], newOrder[second]] = [
      newOrder[second],
      newOrder[first],
    ];
  }

  setOrder(newOrder);

  // Quay về card đầu tiên
  setPos(0);

  // Đóng mặt sau của card
  setFlipped(false);

  // Reset trạng thái học
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
    const knownIds = new Set(
      knownSet.map((card) => card.uniqueId)
    );

    const knownIndexes = flashcards
      .map((card, index) =>
        knownIds.has(card.uniqueId)
          ? index
          : -1
      )
      .filter((index) => index !== -1);

    if (knownIndexes.length === 0) {
      alert("Chưa có từ nào được đánh dấu đã thuộc");
      return;
    }

    setOrder(knownIndexes);
    setPos(0);
    setFlipped(false);

    // reset lịch sử cho phiên học mới
    setHistory([]);
  };

  // Học lại chỉ những từ chưa thuộc
  const relearnUnknown = () => {
    const unknownIds = new Set(
      unKnownSet.map((card) => card.uniqueId)
    );

    const unknownIndexes = flashcards
      .map((card, index) =>
        unknownIds.has(card.uniqueId)
          ? index
          : -1
      )
      .filter((index) => index !== -1);

    if (unknownIndexes.length === 0) {
      alert("Chưa có từ nào được đánh dấu chưa thuộc");
      return;
    }

    setOrder(unknownIndexes);
    setPos(0);
    setFlipped(false);

    // reset lịch sử cho phiên học mới
    setHistory([]);
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

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // nếu đã học xong thì không xử lý
    if (isFinished) return;

    // tránh spam khi giữ phím
    if (e.repeat) return;

    const currentCard = flashcards[currentIndex];

    switch (e.key.toLowerCase()) {
      // Đã thuộc → next
      case "d":
        handleMarkAndNext(currentCard, true);
        break;
      // Không thuộc → next
      case "a":
        handleMarkAndNext(currentCard, false);
        break;
      // Xao trộn
      case "r":
        shuffle();
        break;
      // Lật thẻ
      case "s":
        setShowJapaneseFirst((s) => !s);
        break;
      // Quay lại card trước
      case "q":
        prevCard();
        break;
      // Hiển thị/ẩn reading
      case "f":
        setVisibleFields((prev) => {
          const updated = {
            ...prev,
            reading: !prev.reading,
          };

          localStorage.setItem(
            "visibleFields",
            JSON.stringify(updated)
          );

          return updated;
        });
        break;

      // Phím số bên phải để đánh dấu đã thuộc/chưa thuộc
      // Đã thuộc → next
      case "6":
        handleMarkAndNext(currentCard, true);
        break;
      // Không thuộc → next
      case "4":
        handleMarkAndNext(currentCard, false);
        break;
      // Xao trộn
      case "9":
        shuffle();
        break;
      // Lật thẻ
      case "5":
        setShowJapaneseFirst((s) => !s);
        break;
      // Quay lại card trước
      case "7":
        prevCard();
        break;
      // Hiển thị/ẩn reading
      case "+":
        setVisibleFields((prev) => {
          const updated = {
            ...prev,
            reading: !prev.reading,
          };

          localStorage.setItem(
            "visibleFields",
            JSON.stringify(updated)
          );

          return updated;
        });
        break;

      default:
        break;
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [
  isFinished,
  flashcards,
  currentIndex,
]);

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
              📚 Từ vựng
            </Link>

            <Link
              href="/review"
              className="px-3 py-2 bg-orange-500 text-white rounded-md text-sm text-center"
            >
              📝 Test tổng hợp
            </Link>

            <Link
              href="/kanji"
              className="hidden px-3 py-2 bg-green-500 text-white rounded-md text-sm text-center"
            >
              漢 Kanji
            </Link>

            <Link
              href="/radical"
              className="hidden px-3 py-2 bg-purple-500 text-white rounded-md text-sm text-center"
            >
              ⿰ Bộ thủ
            </Link>
            <Link
              href="/alphabet"
              className="px-3 py-2 bg-pink-500 text-white rounded-md text-sm text-center"
            >
              あア Bảng chữ cái
            </Link>
          </div>
          <div className="w-full my-2">
            <button
              type="button"
              onClick={() => setShowChapters((prev) => !prev)}
              className="flex items-center gap-2 font-semibold cursor-pointer text-black p-2 rounded bg-white"
            >
              <span>📝Danh sách</span>

              <span
                className={`transition-transform duration-300 ${
                  showChapters ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>

              <span className="text-xs bg-blue-100 px-2 py-0.5 rounded-full">
                {selectedChapterIds.length}
              </span>
            </button>
          </div>

          <div
            className={`
              overflow-hidden
              transition-all duration-300 ease-in-out
              ${
                showChapters
                  ? "max-h-[500px] opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="flex flex-wrap gap-3">
              {allAlphabetFlashCards.map((chapter) => {
                const isSelected = selectedChapterIds.includes(chapter.id);

                return (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => handleToggleChapter(chapter.id)}
                    className={`
                      px-2 py-1 rounded-md border transition-all duration-200
                      text-sm font-medium
                      ${
                        isSelected
                          ? "bg-blue-500 border-blue-500 text-white shadow-md scale-105"
                          : "bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-black"
                      }
                    `}
                  >
                    {isSelected && "✓ "}
                    {chapter.chapTer}
                  </button>
                );
              })}
            </div>
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
                              <div className="text-7xl sm:text-9xl font-medium py-2 text-black font-jp">
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
                              <div className="text-7xl sm:text-9xl font-medium py-2 text-black font-jp">
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

export default AlphabetPage;
