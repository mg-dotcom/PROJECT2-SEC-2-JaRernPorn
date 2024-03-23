async function getCollections(url) {
  try {
    const data = await fetch(url)
    const collections = await data.json()
    return collections
  } catch (error) {
    console.log(error)
  }
}

async function getFlashcards(url) {
  try {
    const data = await fetch(url)
    const collections = await data.json()
    const cards = collections[0].cards
    return cards
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function addNewCollection(url, newCollection) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newCollection })
    })
  } catch (error) {
    console.error(error)
  }
}

export { getCollections, getFlashcards, addNewCollection }
