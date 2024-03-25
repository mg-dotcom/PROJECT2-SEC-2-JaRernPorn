// เอา Collection By ID เเละ เข้าไปเอา Card ทั้งหมดใน Collection นั้นๆ
async function getItem(url, id) {
  try {
    const data = await fetch(`${url}/${id}`); // Call API to fetch data
    const response = await data.json(); // Parse JSON data into an object

    // Check if response has a 'cards' property
    if (response.hasOwnProperty("cards")) {
      // If 'cards' is an array, return it
      if (Array.isArray(response.cards)) {
        return response.cards;
      } else {
        console.log("Error: The 'cards' property is not an array.");
        return [];
      }
    } else {
      // If 'cards' doesn't exist, assume 'collections' is an array of objects with 'cards' arrays
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
    const response = await fetch(`${url}`);
    const collections = await response.json();

    const collectionIndex = collections.findIndex(
      (collection) => collection.id === "2"
    );

    if (collectionIndex === -1) {
      throw new Error("Collection not found");
    }

    collections[collectionIndex].cards.push(newCard);

    const updateResponse = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(...collections),
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
    const response = await fetch(`${url}`);
    const collections = await response.json();

    const collectionIndex = collections.findIndex(
      (collection) => collection.id === id
    );

    if (collectionIndex === -1) {
      throw new Error("Collection not found");
    }

    collections[collectionIndex].cards.splice(index, 1);

    const updateResponse = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(...collections),
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
    const response = await fetch(`${url}`);
    const collections = await response.json();

    const collectionIndex = collections.findIndex(
      (collection) => collection.id === id
    );

    if (collectionIndex === -1) {
      throw new Error("Collection not found");
    }

    const nonEditCard = collections[collectionIndex].cards[cardIndex];

    const updatedCard = { ...nonEditCard, ...newFlashcard };

    collections[collectionIndex].cards[cardIndex] = updatedCard

    const updateResponse = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(...collections)
    });

    const updateCollections = await updateResponse.json();
    return updateCollections;
  } catch (error) {
    console.error(error);
  }
};

export { getItem, addItem, deleteItem, editItem };
