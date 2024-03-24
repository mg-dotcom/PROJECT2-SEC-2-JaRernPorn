// เอา Collection By ID เเละ เข้าไปเอา Card ทั้งหมดใน Collection นั้นๆ
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

const addFlashcard = async (url, id, newCard) => {
  try {
    const response = await fetch(`${url}`)
    const collections = await response.json()

    const collectionIndex = collections.findIndex(
      (collection) => collection.id === '2'
    )

    if (collectionIndex === -1) {
      throw new Error('Collection not found')
    }

    collections[collectionIndex].cards.push(newCard)

    const updateResponse = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(...collections)
    })

    console.log(newCard)

    if (!updateResponse.ok) {
      throw new Error('Failed to update collection')
    }

    const updatedCollections = await updateResponse.json()
    return updatedCollections
  } catch (error) {
    console.error('Error adding new card:', error)
    return null
  }
}

const deleteFlashcard = async (url, id, cardIndex) => {
  try {
    const response = await fetch(url)
    const collections = await response.json()

    const collectionIndex = collections.findIndex(
      (collection) => collection.id === id
    )

    collections[collectionIndex].cards.splice(cardIndex, 1)

    const updateResponse = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(...collections)
    })

    return updateResponse
  } catch (error) {
    console.error(error)
  }
}

export { getFlashcard, addFlashcard, deleteFlashcard }
