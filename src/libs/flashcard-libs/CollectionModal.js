class CollectionModal {
  constructor() {
    this.collections = [];
  }
 
  addAllCollection(collections) {
    collections.forEach((collection) => {
      this.addCollection(
        collection.id,
        collection.name,
        collection.cards,
      );
    });
  }
 
  addCollection(id, name,cards) {
    this.collections.push({
      id: id,
      name: name,
      cards: cards
    });
  }
 
  removeCollection(index) {
    this.collections.splice(index, 1);
  }
 
  editCollection(name, index) {
    this.collections[index].name = name;
  }
 
  getCollections() {
    return this.collections;
  }
}
 
export { CollectionModal };