// Updated responsive version with mobile Tailwind adjustments
"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Flashcard,
  initialC3AFlashcards,
  initialC3BFlashcards,
  initialC3CFlashcards,
  initialC3DFlashcards,
  initialC4AFlashcards,
  initialC4BFlashcards,
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
} from "@/data/flashcard";
import "../css/app.css";

// Hàm xáo trộn mảng
const makeShuffle = (arr: number[]) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const AppDefault: React.FC = () => {
  const allDataFlashCards = [
    {
      id: 1,
      chapTer: "Chương 3A - Cái mày ảnh này đắt nhỉ!",
      dataFlashCard: initialC3AFlashcards,
    },
    {
      id: 2,
      chapTer: "Chương 3B - Quán này rẻ và ngon nhỉ!",
      dataFlashCard: initialC3BFlashcards,
    },
    {
      id: 3,
      chapTer: "Chương 3C - Thật là một thị trấn đẹp!",
      dataFlashCard: initialC3CFlashcards,
    },
    {
      id: 4,
      chapTer: "Chương 3D - Việt Nam thì nóng hơn Nhật Bản.",
      dataFlashCard: initialC3DFlashcards,
    },
    {
      id: 5,
      chapTer: "Chương 4A - Đây là cái gì?",
      dataFlashCard: initialC4AFlashcards,
    },
    {
      id: 6,
      chapTer: "Chương 4B - Học tiếng Nhật thì khó nhưng thú vị!",
      dataFlashCard: initialC4BFlashcards,
    },
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
  ];

  const [selectedChapter, setSelectedChapter] = useState(allDataFlashCards[0]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>(
    selectedChapter.dataFlashCard
  );
  const [showJapaneseFirst, setShowJapaneseFirst] = useState(true);
  const [jsonInput, setJsonInput] = useState("");
  const [order, setOrder] = useState<number[]>(flashcards.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knownSet, setKnownSet] = useState<number[]>([]);
  const [showKnownList, setShowKnownList] = useState(true);
  const [showUnknownList, setShowUnknownList] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrder(flashcards.map((_, i) => i));
    setPos(0);
    setKnownSet([]);
    setFlipped(false);
  }, [flashcards, selectedChapter]);

  const knownSetLookup = useMemo(() => new Set(knownSet), [knownSet]);

  const handleSelectChapter = (id: number) => {
    const found = allDataFlashCards.find((item) => item.id === id);
    if (!found) return;
    setSelectedChapter(found);
    setFlashcards(found.dataFlashCard);
    setPos(0);
    setKnownSet([]);
    setFlipped(false);
    setJsonInput("");
  };

  const total = flashcards.length;
  const currentIndex = order[pos];
  const isFinished = pos >= order.length;

  // Load JSON
  const handleLoadJSON = () => {
    try {
      const parsed = JSON.parse(jsonInput) as Flashcard[];
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

      setFlashcards(parsed);
      setOrder(parsed.map((_, i) => i));
      setPos(0);
      setKnownSet([]);
      alert("Đã load flashcards thành công!");
    } catch (err) {
      alert("Lỗi JSON: " + (err as Error).message);
    }
  };

  // Reset về initialFlashcards
  const handleResetFlashcards = () => {
    setFlashcards(initialC3AFlashcards);
    setOrder(initialC3AFlashcards.map((_, i) => i));
    setPos(0);
    setKnownSet([]);
    setJsonInput("");
  };

  const markKnown = (idx: number) => {
    if (!knownSetLookup.has(idx)) setKnownSet((prev) => [...prev, idx]);
  };

  const markUnknown = (idx: number) => {
    if (knownSetLookup.has(idx))
      setKnownSet((prev) => prev.filter((x) => x !== idx));
  };

  const handleMarkAndNext = (idx: number, known: boolean) => {
    if (known) markKnown(idx);
    else markUnknown(idx);
    setFlipped(false);
    setPos((p) => p + 1);
  };

  const prevCard = () => {
    setFlipped(false);
    setPos((p) => Math.max(p - 1, 0));
  };

  const restart = (keepKnown = false) => {
    setFlipped(false);
    setPos(0);
    if (!keepKnown) setKnownSet([]);
  };

  const shuffle = (preserveKnown = true) => {
    const idxs = flashcards.map((_, i) => i);
    const newOrder = makeShuffle(idxs);
    setOrder(newOrder);
    setPos(0);
    if (!preserveKnown) setKnownSet([]);
  };

  const knownList = flashcards.filter((_, i) => knownSetLookup.has(i));
  const unknownList = flashcards.filter((_, i) => !knownSetLookup.has(i));

  const summaryView = (
    <div className="max-w-[700px] mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Kết thúc lượt học</h2>
      <p className="mb-2">
        Tổng số từ: <strong>{total}</strong>
      </p>
      <p className="mb-2 text-green-600">
        Đã thuộc: <strong>{knownList.length}</strong>
      </p>
      <p className="mb-4 text-red-600">
        Chưa thuộc: <strong>{unknownList.length}</strong>
      </p>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        <button
          onClick={() => restart(false)}
          className="px-3 py-2 bg-blue-500 text-white rounded-md text-sm sm:text-base"
        >
          Bắt đầu lại (Xóa)
        </button>
        <button
          onClick={() => restart(true)}
          className="px-3 py-2 bg-yellow-500 text-white rounded-md text-sm sm:text-base"
        >
          Bắt đầu lại (Giữ)
        </button>
        <button
          onClick={() => shuffle(true)}
          className="px-3 py-2 bg-purple-500 text-white rounded-md text-sm sm:text-base"
        >
          Xáo trộn
        </button>
      </div>

      <div className="flex justify-center gap-2 sm:gap-4">
        <button
          onClick={() => setShowKnownList((s) => !s)}
          className="px-3 py-2 border rounded text-sm"
        >
          {showKnownList ? "Ẩn" : "Hiện"} đã thuộc ({knownList.length})
        </button>
        <button
          onClick={() => setShowUnknownList((s) => !s)}
          className="px-3 py-2 border rounded text-sm"
        >
          {showUnknownList ? "Ẩn" : "Hiện"} chưa thuộc ({unknownList.length})
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="overflow-hidden p-3 sm:p-[22px] min-h-[90vh] flex flex-col sm:flex-row">
        {/* LEFT PANEL */}
        <div className="w-full sm:w-[40%] mx-auto mb-6 text-left order-1 sm:order-1">
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

          <label className="mb-2 font-semibold text-sm sm:text-base hidden sm:block">
            Nhập flashcards (JSON):
          </label>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Nhập JSON tại đây"
            className="w-full h-[180px] sm:h-[300px] p-3 border rounded resize-none text-sm hidden sm:block"
          />

          <div className="flex-wrap gap-2 mt-2 hidden sm:flex">
            <button
              onClick={handleLoadJSON}
              className="px-3 py-2 bg-blue-500 text-white rounded-md text-sm sm:text-base"
            >
              Load
            </button>
            <button
              onClick={handleResetFlashcards}
              className="px-3 py-2 bg-gray-500 text-white rounded-md text-sm sm:text-base"
            >
              Reset
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full sm:w-[60%] mx-auto p-2 sm:p-4 m-0 sm:m-4 order-1 sm:order-2">
          <div className="bg-white rounded-xl shadow-1 px-3 sm:px-4 py-6 sm:py-12 text-black">
            <div className="text-center">
              <div className="mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-black">
                  📚 Flashcard Từ vựng Tiếng Nhật
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Thẻ {Math.min(pos + 1, order.length)}/{order.length} • Đã
                  thuộc: {knownList.length} • Chưa thuộc: {unknownList.length}
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => shuffle(true)}
                    className="px-3 py-2 bg-purple-500 text-white rounded-md text-sm sm:text-base"
                  >
                    Xáo trộn
                  </button>
                  <button
                    onClick={() => setShowJapaneseFirst((s) => !s)}
                    className="px-3 py-2 bg-indigo-500 text-white rounded-md text-sm sm:text-base"
                  >
                    Hiển thị: {showJapaneseFirst ? "🇯🇵 → 🇻🇳" : "🇻🇳 → 🇯🇵"}
                  </button>
                  <button
                    onClick={() => restart(false)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md text-sm sm:text-base"
                  >
                    Bắt đầu lại
                  </button>
                  <button
                    onClick={() => restart(true)}
                    className="px-3 py-2 bg-yellow-500 text-white rounded-md text-sm sm:text-base"
                  >
                    Giữ đã thuộc
                  </button>
                </div>
              </div>

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
                  {!isFinished ? (
                    !flipped ? (
                      showJapaneseFirst ? (
                        <div className="px-4 text-center">
                          <div className="text-4xl sm:text-6xl font-extrabold py-2 text-black">
                            {flashcards[currentIndex].reading}
                          </div>
                          <div className="text-base sm:text-xl font-semibold mt-2 py-2 text-gray-700">
                            {flashcards[currentIndex].type}
                          </div>
                          <div className="text-2xl sm:text-3xl mt-2 py-2 font-medium text-blue-700">
                            {flashcards[currentIndex].word}
                          </div>
                          <div className="text-xs sm:text-sm mt-4 py-2 text-gray-600">
                            {flashcards[currentIndex].romaji}
                          </div>
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
                        <div className="text-4xl sm:text-7xl font-extrabold py-2 text-black">
                          {flashcards[currentIndex].reading}
                        </div>
                        <div className="text-lg sm:text-xl font-semibold mt-2 py-2 text-gray-700">
                          {flashcards[currentIndex].type}
                        </div>
                        <div className="text-2xl sm:text-3xl mt-2 py-2 font-medium text-blue-700">
                          {flashcards[currentIndex].word}
                        </div>
                        <div className="text-xs sm:text-sm mt-4 py-2 text-gray-600">
                          {flashcards[currentIndex].romaji}
                        </div>
                        <div className="text-xs text-gray-500 mt-3">
                          Bấm để quay lại
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="px-4 text-center">
                      <div className="text-lg sm:text-2xl font-bold">
                        Hoàn tất!
                      </div>
                      <div className="mt-2 text-sm sm:text-base">
                        Bấm nút bên dưới để xem tổng kết.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {!isFinished ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                    <button
                      onClick={prevCard}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm sm:text-base"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => handleMarkAndNext(currentIndex, false)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md text-sm sm:text-base"
                    >
                      Chưa thuộc
                    </button>
                    <button
                      onClick={() => handleMarkAndNext(currentIndex, true)}
                      className="px-4 py-2 bg-green-600 text-white rounded-md text-sm sm:text-base"
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
