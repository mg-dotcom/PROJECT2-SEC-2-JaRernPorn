async function getCollectionItem(url) {
  try {
    const data = await fetch(url)
    const collections = await data.json()
    return collections
  } catch (error) {
    console.log(`error: ${error})`)
  }
}

async function addCollectionItem(url, newCollection) {
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

async function deleteCollectionItem(url, id) {
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

async function editCollectionItem(url, id, editCollection) {
  try {
    const response = await fetch(`${url}/${id}`)
    const selectedCollection = await response.json()
    console.log(selectedCollection)
    const updatedCollection = { ...selectedCollection, ...editCollection }
    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...updatedCollection
      })
    })
    const editedItem = await res.json()
    return editedItem
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

export {
  getCollectionItem,
  addCollectionItem,
  deleteCollectionItem,
  editCollectionItem
}
