// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
    let ref = 'abcdefghijklmnopqrstuvwxyz'
    if (!ref.includes(str)) {

        ref = ref.split(str[0])
        ref.shift()

        ref = ref.toString()

        ref = ref.split(str[str.length - 1])
        ref.pop()
        str = str.slice(1, str.length - 1)

        ref = ref.toString()

        for (let lettKey in ref) {
            let lett = ref[lettKey]
            if (!str.includes(lett))
                return lett
        }
    } else {
        return 'no missing letters'
    }
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
    for (numKey in arr) {
        num = arr[numKey]
        if (arr.includes(target - num)) {
            return true
        }
    }
    return false
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
    var n = 0
    var i = 0
    var element;
    var element2;
    performedSwap = true
    mainLoopCounter = 0
    while (performedSwap) {
        mainLoopCounter++
        performedSwap = false
        i = 0
        for (i; i < arr.length; i++) {
            if (arr[i] % 2 == 1) {
                element = arr[i];
                for (var n = i + 1; n < arr.length; n++) {
                    if (arr[n] % 2 == 1) {
                        element2 = arr[n];
                        break
                    }
                }
            }
            if (element > element2) {
                performedSwap = true
                let swapper = arr[i]
                arr[i] = arr[n]
                arr[n] = swapper
                element = undefined
                element2 = undefined
            }
        }
    }
    console.log(`passed thru main loop ${mainLoopCounter} times`);
    console.log(`Sort result: ${arr}`)
    return arr
}
