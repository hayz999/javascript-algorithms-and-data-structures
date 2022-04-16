class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size)
  }

  __hash(key) {
    let total = 0
    // use a prime number to decrease collisions
    let prime = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * prime + value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    let index = this.__hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
    return index
  }

  get(key) {
    const index = this.__hash(key)
    if(this.keyMap[index]) {
      // map through our nested arrays that can be at the same index
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          // return the value at the correct key
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }

  keys() {
    let keys = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keys
  }

  values() {
    let values = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return values
  }
}

const table = new HashTable()

table.set("test1", "foo")
table.set("test2", "bar")
table.set("test3", "fizz")
table.set("test4", "buzz")

console.log(table.values())
console.log(table.keys());