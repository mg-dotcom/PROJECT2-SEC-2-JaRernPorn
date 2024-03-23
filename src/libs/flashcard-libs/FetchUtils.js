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

async function deleteCollection(url, id) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    return res.status
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

async function editCollection(url, editCol, id) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...editCol
      })
    })
    const editedCol = await res.json()
    return editedCol
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

export {
  getCollections,
  getFlashcards,
  addNewCollection,
  deleteCollection,
  editCollection
}
