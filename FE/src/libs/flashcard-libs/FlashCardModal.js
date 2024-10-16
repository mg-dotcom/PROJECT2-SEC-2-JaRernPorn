class FlashcardModal {
  constructor() {
    this.flashcards = [];
  }

  addAllFlashcards(flashcards) {
    flashcards.forEach((flashcard) => {
      this.addFlashcard(
        flashcard.id,
        flashcard.chineseWord,
        flashcard.pinyin,
        flashcard.meaning
      );
    });
  }

  addFlashcard(id, chineseWord, pinyin, meaning) {
    this.flashcards.push({
      id: id,
      chineseWord: chineseWord,
      pinyin: pinyin,
      meaning: meaning,
    });
  }

  removeFlashcard(index) {
    this.flashcards.splice(index, 1);
  }

  editFlashcard(chineseWord, pinyin, meaning, index) {
    this.flashcards[index].chineseWord = chineseWord;
    this.flashcards[index].pinyin = pinyin;
    this.flashcards[index].meaning = meaning;
  }

  getFlashcards() {
    return this.flashcards;
  }
}

export { FlashcardModal };
