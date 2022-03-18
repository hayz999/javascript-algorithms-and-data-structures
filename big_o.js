// write a function that sums all numbers from 1 up to some number n

// O(n) complexity
function sumNumbers(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

// O(1) complexity
function sumNumbers2(n) {
    return n * (n + 1) / 2
}

// Which implementation is better?

let t1 = performance.now()
sumNumbers(1000000000)
let t2 = performance.now()
console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)
// this returns around 1 second run time

let t1 = performance.now()
sumNumbers2(1000000000)
let t2 = performance.now()
console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)
// this returns 0 second run time


// Objects: Unordered, key value pairs
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}
