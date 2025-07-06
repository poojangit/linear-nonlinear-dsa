class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const lastItem = this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  toString() {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      result += this.data[i];
      if (i < this.length - 1) result += ",  ";
    }
    return `[${result}]`;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const firstItem = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.length--;
    return firstItem;
  }
  unshift(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }
}
const array = new MyArray();
array.push(9);
array.push(19);
array.push(5);
array.push(12);
console.log(array.pop());
console.log(array.shift())
array.unshift(78);
array.unshift(87);

console.log(array.toString());
// array.pop(9)
