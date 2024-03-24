async function getFlashcard(url, id) {
  try {
    const data = await fetch(`${url}/${id}`) // Call API to fetch data
    const response = await data.json() // Parse JSON data into an object

    // Check if response has a 'cards' property
    if (response.hasOwnProperty('cards')) {
      // If 'cards' is an array, return it
      if (Array.isArray(response.cards)) {
        return response.cards
      } else {
        console.log("Error: The 'cards' property is not an array.")
        return []
      }
    } else {
      // If 'cards' doesn't exist, assume 'collections' is an array of objects with 'cards' arrays
      const allCards = response.collections.flatMap(
        (collection) => collection.cards
      )
      return allCards
    }
  } catch (error) {
    console.log(`Error: ${error}`)
    return []
  }
}

async function addFlashcard(url, id, newFlashcard) {
  try {
    // Fetch the collection data first to check if 'cards' property exists
    const data = await fetch(`${url}/${id}`)
    const response = await data.json()

    // Check if response has a 'cards' property
    if (response.hasOwnProperty('cards')) {
      // If 'cards' is an array, proceed to add a new flashcard
      if (Array.isArray(response.cards)) {
        // Prepare the request to add a new flashcard
        const res = await fetch(`${url}/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newFlashcard)
        })

        // Parse the response to get the added flashcard
        const addedFlashcard = await res.json()
        return addedFlashcard
      } else {
        console.log("Error: The 'cards' property is not an array.")
        return null
      }
  }
}
}

async function deleteFlashcardById(url, id) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    return res.status
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

async function editFlashcard(url, newFlashcard, collectionId, cardId) {
  try {
    const res = await fetch(`${url}/${collectionId}/${cardId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...newFlashcard
      })
    })
    const editedFlashcard = await res.json()
    return editedFlashcard
  } catch (error) {
    console.log(`error: ${error}`)
  }
}
export { getFlashcard, addFlashcard, deleteFlashcardById, editFlashcard }
