class LRUCache {
  constructor (length) {
    this.length = length;
    this.data = [];
  }

  set (key, value) {
    const index = this.data.findIndex(item => item?.key === key);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    if (this.data.length === this.length) {
      this.data.shift();
    }
    this.data.push({ key, value });
  }

  get (key) {
    const index = this.data.findIndex(item => item?.key === key);
    if (index < 0) {
      return null;
    }
    const data = this.data[index];
    this.data.splice(index, 1);
    this.data.push(data);
    return data;
  }
}
