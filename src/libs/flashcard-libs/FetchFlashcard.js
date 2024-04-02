async function getItem(url, id) {
  try {
    const data = await fetch(`${url}/${id}`);
    const response = await data.json();

    if (response.hasOwnProperty("cards")) {
      if (Array.isArray(response.cards)) {
        return response.cards;
      } else {
        console.log("Error: The 'cards' property is not an array.");
        return [];
      }
    } else {
      const allCards = response.collections.flatMap(
        (collection) => collection.cards
      );
      return allCards;
    }
  } catch (error) {
    console.log(`Error: ${error}`);
    return [];
  }
}

const addItem = async (url, id, newCard) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const collections = await response.json();

    const checkExistId = collections.cards.findIndex(
      (card) => card.id === newCard.id
    );

    if (checkExistId === -1) {
      collections.cards.push(newCard);
    } else {
      // newCard.id = newCard.id + 2;
      // const updatedCardId = { ...newCard, id: newCard.id };
      // collections.cards.push(updatedCardId);
      newCard.id = Math.floor(Math.random() * 1000) + 1;
      const updatedCardId = { ...newCard, id: newCard.id };
      collections.cards.push(updatedCardId);
    }

    const updateResponse = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collections),
    });

    if (!updateResponse.ok) {
      throw new Error("Failed to update collection");
    }

    const updatedCollections = await updateResponse.json();
    return updatedCollections;
  } catch (error) {
    console.error("Error adding new card:", error);
    return null;
  }
};

const deleteItem = async (url, id, index) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const collections = await response.json();

    collections.cards.splice(index, 1);

    const updateResponse = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collections),
    });

    console.log(updateResponse.status);

    if (!updateResponse.ok) {
      throw new Error("Failed to update collection");
    }

    return updateResponse.status;
  } catch (error) {
    console.error("Error deleting card:", error);
    return null;
  }
};

const editItem = async (url, id, newFlashcard, cardIndex) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const collections = await response.json();

    const nonEditCard = collections.cards[cardIndex];

    const updatedCard = { ...nonEditCard, ...newFlashcard };

    collections.cards[cardIndex] = updatedCard;

    const updateResponse = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collections),
    });

    const updateCollections = await updateResponse.json();
    return updateCollections;
  } catch (error) {
    console.error(error);
  }
};

export { getItem, addItem, deleteItem, editItem };
