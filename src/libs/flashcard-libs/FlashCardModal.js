const addNewFlashcard = (chineseWord, pinyin, meaning, flashcards) => {
  flashcards.push({
    id: flashcards.length + 1,
    chineseWord: chineseWord,
    pinyin: pinyin,
    meaning: meaning,
  });

  return flashcards;
};

const deleteFlashcard = (index, flashcards) => {
  flashcards.splice(index, 1);
  return flashcards;
};

const editFlashcard = (chineseWord, pinyin, meaning, index, flashcards) => {
  flashcards[index].chineseWord = chineseWord;
  flashcards[index].pinyin = pinyin;
  flashcards[index].meaning = meaning;
  return flashcards;
};

export { addNewFlashcard, deleteFlashcard, editFlashcard };
