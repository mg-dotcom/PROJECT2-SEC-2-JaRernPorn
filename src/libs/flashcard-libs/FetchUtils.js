async function getCollections(url) {
  try {
    const data = await fetch(url)
    const collections = await data.json()
    return collections
  } catch (error) {
    console.log(error)
  }
}

export { getCollections }
