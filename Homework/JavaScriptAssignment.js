// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243
// Expected Output: 34223
function reverseNumber(num) {
    num = num + ""
    return num.split("").reverse().join("")
}
// console.log(reverseNumber(32243))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.
function isPalindrome(str) {
    return str == str.split("").reverse().join("")
}
// console.log(isPalindrome("orange"))
// console.log(isPalindrome("racecar"))

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g
function generateCombinations(str) {
    let result = []
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j))
        }
    }
    return result
}
// console.log(generateCombinations("dog"))

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortString(str) {
    return str.split("").sort().join("")
}
// console.log(sortString("webmaster"))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter
// of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
function capitalizeFirstLetter(str) {
    const words = str.split(" ")
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}
// console.log(capitalizeFirstLetter("the quick brown fox"))

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
function findLongestWord(str) {
    const words = str.split(" ")
    let longestWord = ""
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord
}
// console.log(findLongestWord("Web Development Tutorial"))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
function countVowels(str) {
    const vowels = "aeiou"
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++
        }
    }
    return count
}
// console.log(countVowels("The quick brown fox"))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function isPrime(num) {
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
// console.log(isPrime(7))
// console.log(isPrime(10))


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number,
// string, and undefined.
function getType(arg) {
    return typeof arg
}
// console.log(getType(5))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < n; j++) {
            matrix[i].push(i == j ? 1 : 0)
        }
    }
    return matrix
}
// console.log(identityMatrix(3))

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function secondLowestAndGreatest(arr) {
    arr.sort((a, b) => a - b)
    return [arr[1], arr[arr.length - 2]]
}
// console.log(secondLowestAndGreatest([1, 2, 3, 4, 5]))

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal
// to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and
// 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1
// + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by
// the perfect numbers 496 and 8128.

function isPerfectNumber(num) {
    let sum = 0
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i
        }
    }
    return sum == num
}
// console.log(isPerfectNumber(6))
// console.log(isPerfectNumber(28))
// console.log(isPerfectNumber(496))
// console.log(isPerfectNumber(8128))

// 13. Write a JavaScript function to compute the factors of a positive integer.
function factors(num) {
    let factors = []
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            factors.push(i)
        }
    }
    return factors
}
// console.log(factors(28))

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function amountToCoins(amount, coins) {
    let result = []
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i])
            amount -= coins[i]
        }
    }
    return result
}
// console.log(amountToCoins(46, [25, 10, 5, 2, 1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 
function computeExponent(b, n) {
    return Math.pow(b, n)
}
// console.log(computeExponent(2, 3))

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function extractUniqueCharacters(str) {
    let uniqueChars = ""
    for (let i = 0; i < str.length; i++) {
        if (!uniqueChars.includes(str[i])) {
            uniqueChars += str[i]
        }
    }
    return uniqueChars
}
// console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified
// string. 
function countOccurrences(str) {
    let occurrences = {}
    for (let i = 0; i < str.length; i++) {
        if (occurrences[str[i]]) {
            occurrences[str[i]]++
        } else {
            occurrences[str[i]] = 1
        }
    }
    return occurrences
}
// console.log(countOccurrences("thequickbrownfoxjumpsoverthelazydog"))

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it
// finds the desired value.
function binarySearch(arr, value) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == value) {
            return mid
        } else if (arr[mid] < value) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}
// console.log(binarySearch([1, 2, 3, 4, 5, 8, 9], 8))

// 19. Write a JavaScript function that returns array elements larger than a number.
function elementsLargerThan(arr, num) {
    return arr.filter(element => element > num)
}
// console.log(elementsLargerThan([1, 2, 3, 4, 5, 8, 9], 4))

// 20. Write a JavaScript function that generates a string id (specified length) of random
// characters. 
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateRandomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let id = ""
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return id
}
// console.log(generateRandomId(10))

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function getSubsets(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result.push([arr[j], arr[i]])
        }
    }
    return result
}
// console.log(getSubsets([1, 2, 3]))
// console.log(getSubsets([1, 2, 3, 4]))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the
// function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
function countOccurrencesOfLetter(str, letter) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count++
        }
    }
    return count
}
// console.log(countOccurrencesOfLetter("microsoft.com", "o"))

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e'
function firstNotRepeatedCharacter(str) {
    let occurrences = {}
    for (let i = 0; i < str.length; i++) {
        if (occurrences[str[i]]) {
            occurrences[str[i]]++
        } else {
            occurrences[str[i]] = 1
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (occurrences[str[i]] == 1) {
            return str[i]
        }
    }
    return null
}
// console.log(firstNotRepeatedCharacter("abacddbec"))

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestCountryName(countries) {
    let longestName = ""
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longestName.length) {
            longestName = countries[i]
        }
    }
    return longestName
}
// console.log(longestCountryName(["Australia", "Germany", "United States of America"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.
function longestSubstringWithoutRepeatingChars(str) {
    let longestSubstring = ""
    let currentSubstring = ""
    for (let i = 0; i < str.length; i++) {
        if (currentSubstring.includes(str[i])) {
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(str[i]) + 1)
        }
        currentSubstring += str[i]
        if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring
        }
    }
    return longestSubstring
}
// console.log(longestSubstringWithoutRepeatingChars("abcddnopd"))

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or
// longest symmetric factor problem is the problem of finding a maximum-length contiguous
// substring of a given string that is also a palindrome. For example, the longest palindromic
// substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be
// unique for example, in the string "abracadabra", there is no palindromic substring with length
// greater than three, but there are two palindromic substrings with length three, namely, "aca"
// and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is,
// all substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.

function longestPalindrome(str) {
    let longestPalindrome = ""
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.slice(i, j)
            if (isPalindrome(substring) && substring.length > longestPalindrome.length) {
                longestPalindrome = substring
            }
        }
    }
    return longestPalindrome
}
// console.log(longestPalindrome("bananas"))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function callFunction(func) {
    return func()
}
// console.log(callFunction(() => "JavaScript function passed as parameter"));

// 29. Write a JavaScript function to get the function name.
function getFunctionName(func) {
    return func.name
}
// console.log(getFunctionName(function test() { }))