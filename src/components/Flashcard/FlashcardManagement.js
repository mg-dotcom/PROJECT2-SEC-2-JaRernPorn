class FlashcardManagement {
  constructor() {
    this.flashcards = [];
  }

  addAllFlashcards(flashcards) {
    flashcards.forEach((flashcard) => {
      this.addFlashcard(
        flashcard.id,
        flashcard.chineseWord,
        flashcard.meaning,
        flashcard.pinyin
      );
    });
  }

  addFlashcard(id, chineseWord, meaning, pinyin) {
    this.flashcards.push({
      id: id,
      chineseWord: chineseWord,
      meaning: meaning,
      pinyin: pinyin,
    });
  }

  getFlashcards() {
    return this.flashcards;
  }
}

export { FlashcardManagement };
