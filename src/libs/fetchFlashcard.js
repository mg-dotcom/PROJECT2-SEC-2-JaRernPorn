// เอา Collection By ID เเละ เข้าไปเอา Card ทั้งหมดใน Collection นั้นๆ
async function getFlashcard(url, id) {
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

async function addFlashcard(url, newCard) {
  try {
    const data = await fetch(`${url}`); // Call API to fetch data
    const response = await data.json();

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...response.find((collection) => {
          if (collection.id === "2") {
            return {};
          }
        }),
      }),
    });
    const addedFlashcard = await res.json();
    return addedFlashcard;
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

export { getFlashcard, addFlashcard };
