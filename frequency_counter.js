// write a function called same, which accepts two arrays.
// the function should return true if every value in the array has it's corresponding value SQUARED in the second array.
// the frequency of values must be the same

// time complexity is O(n)
function same(arr1, arr2) {
    // if the arrays are a different length we know this will resolve to false
    if(arr1.length !== arr2.length) {
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // object will tell us the number of times a certain value is in the array
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    console.log("counter1: ", frequencyCounter1)
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log("counter2: ", frequencyCounter2)
    for (let key in frequencyCounter1) {
        // check to see if there is a matching square key in the other frequency counter
        if(!(key ** 2 in frequencyCounter2)) {
            console.log(false)
            return false
        }
        // check that number of occurrences matches
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
}

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
// can assume no spaces, numbers, or special characters, and all lowercase

function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false
    }

    let counter1 = {}
    let counter2 = {}

    for (let val of str1.split('')) {
        counter1[val] = (counter1[val] || 0) + 1
    }
    console.log(counter1)
    for (let val of str2.split('')) {
        counter2[val] = (counter2[val] || 0) + 1
    }
    console.log(counter2)
    for (let key in counter1) {
        if(!key in counter2) {
            console.log(false)
            return false
        }
        if(counter2[key] !== counter1[key]) {
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
}

validAnagram('rat', 'car')
validAnagram('', '')
validAnagram('dog', 'god')
