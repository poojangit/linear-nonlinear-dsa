class HashMap {
  constructor(size = 53) {
    this.buckets = new Array(size);
    this.size = size;
  }

  // Hashing function
  _hash(key) {
    let hash = 0;
    const PRIME = 31;

    const strKey = String(key); // Convert any primitive to string
    for (let i = 0; i < Math.min(strKey.length, 100); i++) {
      let char = strKey[i];
      let value = char.charCodeAt(0);
      hash = (hash * PRIME + value) % this.size;
    }

    return hash;
  }

  // Set key-value pair
  set(key, value) {
    const index = this._hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.buckets[index].push([key, value]);
  }

  // Get value by key
  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }

    return undefined;
  }

  // Check if key exists
  has(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      for (let [k] of bucket) {
        if (k === key) return true;
      }
    }

    return false;
  }

  // Delete a key
  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  // Return all keys
  keys() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [key] of bucket) {
          result.push(key);
        }
      }
    }
    return result;
  }

  // Return all values
  values() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [, value] of bucket) {
          result.push(value);
        }
      }
    }
    return result;
  }
}
const map = new HashMap();

map.set("name", "Pooja");
map.set("age", 24);
map.set("role", "Engineer");

console.log(map.get("name"));     // "Pooja"
console.log(map.has("age"));      // true
console.log(map.get("email"));    // undefined

map.delete("age");
console.log(map.has("age"));      // false

console.log(map.keys());          // ["name", "role"]
console.log(map.values());        // ["Pooja", "Engineer"]
