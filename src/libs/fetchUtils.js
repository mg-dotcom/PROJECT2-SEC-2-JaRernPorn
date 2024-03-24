async function getCollection(url) {
  try {
    const data = await fetch(url)
    const collections = await data.json()
    return collections
  } catch (error) {
    console.log(`error: ${error})`)
  }
}

async function addCollection(url, newCollection) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...newCollection
      })
    })
    const addedCollection = await res.json()
    return addedCollection
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

async function deleteCollectionById(url, id) {
  // console.log(`${url}?id=${id}`);
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    return res.status
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

async function editCollectionName(url, id, editCollection) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...editCollection
      })
    })
    const editedItem = await res.json()
    return editedItem
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

export {
  getCollection,
  addCollection,
  deleteCollectionById,
  editCollectionName
}
