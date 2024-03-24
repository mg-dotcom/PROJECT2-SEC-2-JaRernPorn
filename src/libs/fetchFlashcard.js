async function getFlashcard(url, id) {
  try {
    const data = await fetch(`${url}/collections/${id}`)
    const collection = await data.json()
    const cards = collection.cards
    return cards
  } catch (error) {
    console.error(error)
  }
}

// async function addFlashcard(url, id, nchineseWord, npinyin, nmeaning) {
//   try {
//     const res = await fetch(`${url}/collections/${id}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         chineseWord: nchineseWord,
//         pinyin: npinyin,
//         meaning: nmeaning
//       })
//     })
//     return await res.json()
//   } catch (error) {
//     console.error(`Error: ${error}`)
//   }
// }

async function addFlashcard(url, id, newData) {
  try {
    const response = await fetch(`${url}/collections/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    const data = await response.json()
    console.log('Data added to collection:', data)
    return data
  } catch (error) {
    console.error('Error adding data to collection:', error)
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
      method: 'POST',
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
