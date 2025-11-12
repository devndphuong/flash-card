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
  // const flashcards = useMemo(() => initialFlashcards, []);
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
    <div className="max-w-[700px] mx-auto p-6 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Kết thúc lượt học</h2>
      <p className="mb-2">
        Tổng số từ: <strong>{total}</strong>
      </p>
      <p className="mb-2 text-green-600">
        Đã thuộc: <strong>{knownList.length}</strong>
      </p>
      <p className="mb-4 text-red-600">
        Chưa thuộc: <strong>{unknownList.length}</strong>
      </p>

      <div className="flex gap-3 justify-center mb-4">
        <button
          onClick={() => restart(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Bắt đầu lại (Xóa trạng thái)
        </button>
        <button
          onClick={() => restart(true)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
        >
          Bắt đầu lại (Giữ đã thuộc)
        </button>
        <button
          onClick={() => shuffle(true)}
          className="px-4 py-2 bg-purple-500 text-white rounded-md"
        >
          Xáo trộn & giữ trạng thái
        </button>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowKnownList((s) => !s)}
          className="px-3 py-2 border rounded"
        >
          {showKnownList ? "Ẩn" : "Hiện"} danh sách đã thuộc ({knownList.length}
          )
        </button>
        <button
          onClick={() => setShowUnknownList((s) => !s)}
          className="px-3 py-2 border rounded"
        >
          {showUnknownList ? "Ẩn" : "Hiện"} danh sách chưa thuộc (
          {unknownList.length})
        </button>
      </div>

      {showKnownList && (
        <div className="mt-4 text-left max-h-48 overflow-auto p-3 bg-green-50 rounded">
          <h3 className="font-semibold mb-2">Từ đã thuộc</h3>
          <ul className="list-disc pl-5">
            {knownList.length === 0 ? (
              <li>Chưa có</li>
            ) : (
              knownList.map((f) => (
                <li key={f.id || f.word}>
                  {f.word} {f.type} — {f.reading} — {f.meaning}
                </li>
              ))
            )}
          </ul>
        </div>
      )}

      {showUnknownList && (
        <div className="mt-4 text-left max-h-48 overflow-auto p-3 bg-red-50 rounded">
          <h3 className="font-semibold mb-2">Từ chưa thuộc</h3>
          <ul className="list-disc pl-5">
            {unknownList.length === 0 ? (
              <li>Không có</li>
            ) : (
              unknownList.map((f) => (
                <li key={f.id || f.word}>
                  {f.word} {f.type} — {f.reading} — {f.meaning}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <>
      <section className="overflow-hidden p-[22px] min-h-[90vh] flex">
        <div className="w-[40%] mx-auto mb-6 text-left">
          <div className="w-full p-2">
            <label className="block mb-2 font-semibold">Chọn bài học:</label>
            <select
              value={selectedChapter.id}
              onChange={(e) => handleSelectChapter(Number(e.target.value))}
              className="border p-2 rounded w-full mb-4"
            >
              {allDataFlashCards.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.chapTer}
                </option>
              ))}
            </select>
          </div>
          <label className="block mb-2 font-semibold">
            Nhập flashcards (JSON):
          </label>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder={`Ví dụ:
            [
                {
                    "id": "1",
                    "word": "店",
                    "type": "(N)",
                    "reading": "みせ",
                    "romaji": "mise",
                    "meaning": "cửa hàng"
                }
            ]`}
            className="w-full h-[300px] p-3 border rounded resize-none"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleLoadJSON}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Load Flashcards
            </button>
            <button
              onClick={handleResetFlashcards}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Reset về dữ liệu gốc
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex w-[50%] flex-col gap-3 mt-2">
              <button
                onClick={() => setShowKnownList((s) => !s)}
                className="px-3 py-2 border rounded"
              >
                {showKnownList ? "Ẩn" : "Hiện"} đã thuộc ({knownList.length})
              </button>
              {showKnownList && (
                <div className="flex flex-col gap-2 overflow-y-auto max-h-[60vh] p-2 border rounded">
                  {knownList.map((card) => (
                    <div
                      key={card.id}
                      className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-800"
                    >
                      <div className="text-lg font-semibold">
                        {card.word}{" "}
                        <span className="opacity-70 text-sm ml-1">
                          {card.type}
                        </span>
                      </div>
                      <div className="opacity-80">{card.reading}</div>
                      <div className="text-sm italic opacity-70">
                        {card.romaji}
                      </div>
                      <div className="mt-1">{card.meaning}</div>
                    </div>
                  ))}
                  {knownList.length === 0 && (
                    <div className="text-sm opacity-70">
                      Chưa có thẻ đã thuộc.
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col w-[50%]  gap-3 mt-2">
              <button
                onClick={() => setShowUnknownList((s) => !s)}
                className="px-3 py-2 border rounded"
              >
                {showUnknownList ? "Ẩn" : "Hiện"} chưa thuộc (
                {unknownList.length})
              </button>
              {showUnknownList && (
                <div className="flex flex-col gap-2 overflow-y-auto max-h-[60vh] p-2 border rounded">
                  {unknownList.map((card) => (
                    <div
                      key={card.id}
                      className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-800"
                    >
                      <div className="text-lg font-semibold">
                        {card.word}{" "}
                        <span className="opacity-70 text-sm ml-1">
                          {card.type}
                        </span>
                      </div>
                      <div className="opacity-80">{card.reading}</div>
                      <div className="text-sm italic opacity-70">
                        {card.romaji}
                      </div>
                      <div className="mt-1">{card.meaning}</div>
                    </div>
                  ))}
                  {unknownList.length === 0 && (
                    <div className="text-sm opacity-70">
                      Chưa có thẻ chưa thuộc.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-[60%] mx-auto p-4 m-4">
          <div className="bg-white rounded-xl shadow-1 px-4 py-12 text-black">
            <div className="text-center">
              {/* Header / Progress */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-black">
                  📚 Flashcard Từ vựng Tiếng Nhật
                </h1>
                <p className="text-sm text-gray-600 mt-2">
                  Thẻ {Math.min(pos + 1, order.length)}/{order.length} • Đã
                  thuộc: {knownList.length} • Chưa thuộc: {unknownList.length}
                </p>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <button
                    onClick={() => shuffle(true)}
                    className="px-3 py-2 bg-purple-500 text-white rounded-md"
                  >
                    Xáo trộn
                  </button>
                  <button
                    onClick={() => setShowJapaneseFirst((s) => !s)}
                    className="px-3 py-2 bg-indigo-500 text-white rounded-md"
                  >
                    Hiển thị:{" "}
                    {showJapaneseFirst
                      ? "🇯🇵 Nhật → 🇻🇳 Việt"
                      : "🇻🇳 Việt → 🇯🇵 Nhật"}
                  </button>

                  <button
                    onClick={() => restart(false)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md"
                  >
                    Bắt đầu lại (xóa)
                  </button>
                  <button
                    onClick={() => restart(true)}
                    className="px-3 py-2 bg-yellow-500 text-white rounded-md"
                  >
                    Bắt đầu lại (giữ đã thuộc)
                  </button>
                </div>
              </div>

              {/* Card */}
              <div className="mx-auto mb-8 flex items-center justify-center">
                <div
                  className="ml-12 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded bg-red-200 flex items-center justify-center cursor-pointer"
                  onClick={() => setFlipped((f) => !f)}
                  style={{
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    backgroundColor: !flipped
                      ? !showJapaneseFirst
                        ? "rgb(198, 247, 3, 0.8)"
                        : "rgb(65, 217, 41, 0.8)"
                      : !showJapaneseFirst
                      ? "rgb(65, 217, 41, 0.8)"
                      : "rgb(198, 247, 3, 0.8)",
                  }}
                >
                  {!isFinished ? (
                    !flipped ? (
                      showJapaneseFirst ? (
                        // Hiển thị tiếng Nhật trước
                        <div className="px-6 text-center">
                          <div className="text-7xl font-extrabold py-2 text-black">
                            {flashcards[currentIndex].reading}
                          </div>
                          <div className="text-xl font-semibold mt-2 py-2 text-gray-700">
                            {flashcards[currentIndex].type}
                          </div>
                          <div className="text-3xl mt-2 py-2 font-medium text-blue-700">
                            {flashcards[currentIndex].word}
                          </div>
                          <div className="text-sm mt-4 py-2 text-gray-600">
                            {flashcards[currentIndex].romaji}
                          </div>
                          <div className="text-sm mt-4 py-2 text-gray-500">
                            (Bấm để xem nghĩa)
                          </div>
                        </div>
                      ) : (
                        // Hiển thị tiếng Việt trước
                        <div className="px-6 text-center">
                          <div className="text-5xl font-semibold py-6 text-black">
                            {flashcards[currentIndex].meaning}
                          </div>
                          <div className="text-sm mt-4 py-2 text-gray-500">
                            (Bấm để xem tiếng Nhật)
                          </div>
                        </div>
                      )
                    ) : showJapaneseFirst ? (
                      // Lật lại: hiển thị nghĩa (khi Nhật trước)
                      <div className="px-6 text-center">
                        <div className="text-4xl font-semibold text-black">
                          {flashcards[currentIndex].meaning}
                        </div>
                        <div className="text-sm text-gray-600 mt-3">
                          Bấm để quay lại
                        </div>
                      </div>
                    ) : (
                      // Lật lại: hiển thị tiếng Nhật (khi Việt trước)
                      <div className="px-6 text-center">
                        <div className="text-7xl font-extrabold py-2 text-black">
                          {flashcards[currentIndex].reading}
                        </div>
                        <div className="text-xl font-semibold mt-2 py-2 text-gray-700">
                          {flashcards[currentIndex].type}
                        </div>
                        <div className="text-3xl mt-2 py-2 font-medium text-blue-700">
                          {flashcards[currentIndex].word}
                        </div>
                        <div className="text-sm mt-4 py-2 text-gray-600">
                          {flashcards[currentIndex].romaji}
                        </div>
                        <div className="text-sm text-gray-500 mt-3">
                          Bấm để quay lại
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="px-6">
                      <div className="text-2xl font-bold">Hoàn tất!</div>
                      <div className="mt-2">
                        Bấm nút bên dưới để xem tổng kết.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Controls */}
              {!isFinished ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={prevCard}
                      className="inline-flex items-center gap-2 font-medium text-white bg-blue-500 py-3 px-6 rounded-md hover:bg-blue-700"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => handleMarkAndNext(currentIndex, false)}
                      className="inline-flex items-center gap-2 font-medium text-white bg-red-600 py-3 px-6 rounded-md hover:bg-red-700"
                    >
                      Chưa thuộc
                    </button>
                    <button
                      onClick={() => handleMarkAndNext(currentIndex, true)}
                      className="inline-flex items-center gap-2 font-medium text-white bg-green-600 py-3 px-6 rounded-md hover:bg-green-700"
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
