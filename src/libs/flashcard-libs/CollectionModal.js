function addNewCollection(newCollectionName, collections) {
  if (!newCollectionName.trim()) {
    return alert("Please enter a collection name");
  } else {
    collections.push({
      // collectionId:
      name: newCollectionName.trim(),
      //for testing
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    });
    localStorage.setItem("collections", JSON.stringify(collections));
  }
}

function deleteCollection(collectionId, collections) {
  const updatedCollections = collections.filter(
    (item, index) => index !== collectionId
  );

  localStorage.setItem("collections", JSON.stringify(updatedCollections));
  return updatedCollections;
}

function editCollection(collectionId, newName, collections) {
  if (!newName.trim()) {
    alert("Please enter a new collection name");
    return collections; // orginal collections
  }
  collections[collectionId].collectionName = newName.trim();
  localStorage.setItem("collections", JSON.stringify(collections));

  return collections;
}

export { addNewCollection, deleteCollection, editCollection };
