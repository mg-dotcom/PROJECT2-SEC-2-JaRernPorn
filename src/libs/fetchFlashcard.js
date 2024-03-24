async function getFlashcard(url) {
  try {
    const data = await fetch(url) // เรียก API เพื่อดึงข้อมูล
    const collections = await data.json() // แปลงข้อมูล JSON เป็น object
    const allCards = collections.flatMap((collection) => collection.cards) // ดึงข้อมูล cards ในทุก collection แล้วแมพเข้าด้วยกัน
    return allCards // คืนค่าข้อมูล cards
  } catch (error) {
    console.log(`error: ${error})`)
  }
}

async function addFlashcard(url, collectionId, newFlashcard) {
  try {
    const res = await fetch(`${url}/${collectionId}/cards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...newFlashcard
      })
    })
    const addedFlashcard = await res.json()
    return addedFlashcard
  } catch (error) {
    console.log(`error: ${error}`)
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

async function editFlashcard(url, newChineseWord, newPinyin, newMeaning, id) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...newChineseWord,
        ...newPinyin,
        ...newMeaning
      })
    })
    const editedFlashcard = await res.json()
    return editedFlashcard
  } catch (error) {
    console.log(`error: ${error}`)
  }
}
export { getFlashcard, addFlashcard, deleteFlashcardById, editFlashcard }
