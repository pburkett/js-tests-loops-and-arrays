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
    return bubble(arr)
}

function bubble(arrB) {
    console.log('array: ', arrB);
    var n = 0
    var i = 0
    var element;
    var element2;
    for (let p = 0; p < 5; p++) {
        i = 0
        console.log('big loop');
        for (i; i < arrB.length; i++) {
            if (arrB[i] % 2 == 1) {
                element = arrB[i];
                for (var n = i + 1; n < arrB.length; n++) {
                    if (arrB[n] % 2 == 1) {
                        element2 = arrB[n];
                        break
                    }
                }
            }
            if (element > element2) {
                let swapper = arrB[i]
                arrB[i] = arrB[n]
                arrB[n] = swapper
                element = undefined
                element2 = undefined
            }
        }
        console.log('semifinal', arrB);
    }
    console.log('final final out: ', arrB)
    return arrB
}
