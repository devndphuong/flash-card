import { hiraAlphabet, kataAlphabet, yoonFlashcards } from "./alphabet";
import { initialBai1, initialBai10, initialBai11, initialBai12, initialBai13, initialBai14, initialBai15, initialBai16, initialBai17, initialBai18, initialBai19, initialBai2, initialBai20, initialBai21, initialBai22, initialBai23, initialBai24, initialBai25, initialBai3, initialBai4, initialBai5, initialBai6, initialBai7, initialBai8, initialBai9 } from "./flashcard";

const dataFlashCards = [
    { id: 1, chapTer: "Bài 1", dataFlashCard: initialBai1 },
    { id: 2, chapTer: "Bài 2", dataFlashCard: initialBai2 },
    { id: 3, chapTer: "Bài 3", dataFlashCard: initialBai3 },
    { id: 4, chapTer: "Bài 4", dataFlashCard: initialBai4 },
    { id: 5, chapTer: "Bài 5", dataFlashCard: initialBai5 },
    { id: 6, chapTer: "Bài 6", dataFlashCard: initialBai6 },
    { id: 7, chapTer: "Bài 7", dataFlashCard:  initialBai7},
    { id: 8, chapTer: "Bài 8", dataFlashCard: initialBai8 },
    { id: 9, chapTer: "Bài 9", dataFlashCard: initialBai9 },
    { id: 10, chapTer: "Bài 10", dataFlashCard: initialBai10 },
    { id: 11, chapTer: "Bài 11", dataFlashCard: initialBai11 },
    { id: 12, chapTer: "Bài 12", dataFlashCard: initialBai12 },
    { id: 13, chapTer: "Bài 13", dataFlashCard: initialBai13 },
    { id: 14, chapTer: "Bài 14", dataFlashCard: initialBai14 },
    { id: 15, chapTer: "Bài 15", dataFlashCard: initialBai15 },
    { id: 16, chapTer: "Bài 16", dataFlashCard: initialBai16 },
    { id: 17, chapTer: "Bài 17", dataFlashCard: initialBai17 },
    { id: 18, chapTer: "Bài 18", dataFlashCard: initialBai18 },
    { id: 19, chapTer: "Bài 19", dataFlashCard: initialBai19 },
    { id: 20, chapTer: "Bài 20", dataFlashCard: initialBai20 },
    { id: 21, chapTer: "Bài 21", dataFlashCard: initialBai21 },
    { id: 22, chapTer: "Bài 22", dataFlashCard: initialBai22 },
    { id: 23, chapTer: "Bài 23", dataFlashCard: initialBai23 },
    { id: 24, chapTer: "Bài 24", dataFlashCard: initialBai24 },
    { id: 25, chapTer: "Bài 25", dataFlashCard: initialBai25 },
];

export const allDataFlashCards = dataFlashCards.map((chapter) => ({
  ...chapter,
  dataFlashCard: chapter.dataFlashCard.map((card) => ({
    ...card,
    idChapter: chapter.id,
    uniqueId: `${chapter.id}_${card.id}`,
  })),
}));

export const allAlphabetFlashCards = [
    { id: 1, chapTer: "Hiragana", dataFlashCard: hiraAlphabet },
    { id: 2, chapTer: "Katakana", dataFlashCard: kataAlphabet },
    { id: 3, chapTer: "Âm ghép", dataFlashCard: yoonFlashcards}
];