function addNewCollection() {
  popup.newCollection = false;

  if (newCollectionName.value === "") {
    return alert("Please enter a collection name");
  } else {
    collections.value.push({
      // collectionId:
      collectionName: newCollectionName.value,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    });
    localStorage.setItem("collections", JSON.stringify(collections.value));
    newCollectionName.value = "";
  }
}

// Add the deleteCollection method
function deleteCollection(collectionId) {
  const updatedCollections = collections.value.filter(
    (item, index) => index !== collectionId
  );

  localStorage.setItem("collections", JSON.stringify(updatedCollections));

  collections.value = updatedCollections;

  closeOption();
}

function editCollection(collectionId) {
  const editName = { collectionName: renameCollectionName.value };

  const indexCollection = collections.value.findIndex(
    (item, index) => index === collectionId
  );

  const updateCollectionName = {
    ...collections.value[indexCollection],
    ...editName,
  };

  if (renameCollectionName.value === "") {
    console.log(collections.value[indexCollection]);
    console.log(localCollections[indexCollection]);
  } else {
    collections.value[indexCollection] = updateCollectionName;
    localStorage.setItem("collections", JSON.stringify(collections.value));
    popup.renameCollection = false;
    renameCollectionName.value = "";
  }
}

export { addNewCollection, deleteCollection, editCollection };
