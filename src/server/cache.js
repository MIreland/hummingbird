export default class Cache {
  constructor(size) {
    this.cache = {};
    this.keyList = [];
    this.size = size;

  }
  /**
   * @param {string} key - the key in the cache that we want to retrieve
   */
  getKey(key) {
    this.updateKeyList(key, false);
    return this.cache[key];
  }
  /**
   * @param {string} key - the key in the cache that we want to update
   * @param {string} value - the value we want to update
   */
  setKey(key, value) {
    this.updateKeyList(key, true)
    this.cache[key] = value;
  }
  /**
   * @param {string} key - the key in the cache that we want to delete
   */
  deleteKey(key) {
    delete this.cache[key];
  }

  /**
   * @param {string} key - the key in the cache that we want to update
   * @param {string} modifyItems - whether we want to modify items (is this an 'update' operation)
   */
  updateKeyList(key, modifyItems = false) {
    if (this.cache[key]) {
      const keyIndex = this.keyList.findIndex(b => key === b);
      this.keyList.push(this.keyList.splice(keyIndex, 1)[0]);
      this.keyList = [...this.keyList];
    } else if (modifyItems && this.keyList.length >= this.size) {
      const prevKey = this.keyList[0];
      delete this.cache[prevKey];
      this.keyList = [...this.keyList.slice(1), key];
    } else if (modifyItems) {
      this.keyList = [...this.keyList, key];
    }
  }

}
