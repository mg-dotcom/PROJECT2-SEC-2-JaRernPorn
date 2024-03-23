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

async function deleteCollectionById(url,id){
  try{
    const res=await fetch(`${url}?id=${id}`,{
      method:'DELETE'
    })
    return res
  }catch (error) {
    console.log(`error: ${error}`)
  }
}


export { getCollection, addCollection,deleteCollectionById }
