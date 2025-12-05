/*
 * ACTIVITY 5: Recursion
 * 
 * Problem 1: Basic Recursion
 * Understand and implement recursive functions
 */

// 1. Create a recursive function 'factorial' that:
//    - Takes a number n
//    - Returns n! (n * (n-1) * ... * 1)
//    - Base case: factorial(0) = 1
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);  // The recursive call is correct, base case for factorial(0) is missing
}

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1


// 2. Create a recursive function 'fibonacci' that:
//    - Takes position n
//    - Returns nth Fibonacci number
//    - Base cases: fibonacci(0) = 0, fibonacci(1) = 1
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));  // 5 (Fibonacci sequence: 0, 1, 1, 2, 3, 5)
console.log(fibonacci(10)); // 55


// 3. Challenge: Create a recursive function 'power' that:
//    - Takes base and exponent
//    - Returns base^exponent
//    - Base case: power(x, 0) = 1
function power(base, exponent) {
    if (exponent === 0) {
        return 1; // Base case
    }
    return base * power(base, exponent - 1);  // Missing part: What if exponent is negative? (handled incorrectly)
}

console.log(power(2, 3));  // 8
console.log(power(2, 0));  // 1


// ============================================================================
// Problem 2: Recursion with Arrays
// Use recursion to process arrays
// ============================================================================

const numbers = [1, 2, 3, 4, 5];

// 1. Create recursive function 'sumArray' that:
//    - Takes an array of numbers
//    - Returns sum of all elements
//    - Base case: empty array returns 0
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));  // Problematic, slicing creates new arrays unnecessarily
}

console.log(sumArray(numbers));  // 15
console.log(sumArray([]));       // 0


// 2. Create recursive function 'findMax' that:
//    - Takes an array of numbers
//    - Returns maximum value
//    - Base case: single element returns that element
function findMax(arr) {
    if (arr.length === 1) {
        return arr[0]; // Base case
    }
    const maxRest = findMax(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest; // This is correct, but `arr.slice(1)` is inefficient
}

console.log(findMax(numbers));  // 5
console.log(findMax([10]));     // 10


// 3. Challenge: Create recursive function 'reverseArray' that:
//    - Takes an array
//    - Returns reversed array
//    - Base case: empty or single element array
function reverseArray(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    return reverseArray(arr.slice(1)).concat(arr[0]); // This works but creates a new array on each call (inefficient)
}

console.log(reverseArray(numbers));  // [5, 4, 3, 2, 1]


// ============================================================================
// Problem 3: Recursive Problem Solving
// Solve problems using recursion
// ============================================================================

// 1. Create recursive function 'countDown' that:
//    - Takes a number
//    - Logs countdown from that number to 0
function countDown(n) {
    if (n < 0) {
        return;  // Missing output for `n < 0` case, this should print "Done"
    }
    console.log(n);
    countDown(n - 1);  // Decrements n but doesn't handle non-integer inputs
}

countDown(5);  // 5, 4, 3, 2, 1


// 2. Create recursive function 'isPalindrome' that:
//    - Takes a string
//    - Returns true if palindrome, false otherwise
//    - Base case: empty or single character
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false; // Missing case for non-palindromic strings
    }
    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false


// 3. Challenge: Create recursive function 'flattenArray' that:
//    - Takes nested array
//    - Returns flattened array
//    - Example: flattenArray([1, [2, 3], [4, [5]]]) // [1, 2, 3, 4, 5]
function flattenArray(arr) {
    let result = [];
    for (const element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));  // Incorrect: result.concat returns new array, inefficient
        } else {
            result.push(element);
        }
    }
    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5]]])) // [1, 2, 3, 4, 5]


// ============================================================================
// Problem 4: Advanced Recursion
// Handle complex recursive problems
// ============================================================================

// 1. Create recursive function 'binarySearch' that:
//    - Takes sorted array, target, start index, end index
//    - Returns index of target or -1
//    - Base case: element found or search space exhausted
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Base case: target not found
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;  // Correct: target found
    }
    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end); // Search right half
    }
    return binarySearch(arr, target, start, mid - 1);  // Search left half
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));  // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6));  // -1


// 2. Create recursive function 'permutations' that:
//    - Takes a string
//    - Returns array of all permutations
//    - Base case: single character
function permutations(str) {
    if (str.length === 1) {
        return [str];  // Base case: single character
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const permRest = permutations(remainingChars);
        for (const perm of permRest) {
            result.push(char + perm);
        }
    }
    return result;
}

console.log(permutations("abc"));  // ["abc", "acb", "bac", "bca", "cab", "cba"]


// 3. Challenge: Create recursive function 'pathFinder' that:
//    - Takes a 2D array (maze) and start/end positions
//    - Returns true if path exists, false otherwise
//    - Use recursion to explore paths
function pathFinder(maze, start, end) {
    const [startX, startY] = start;
    const [endX, endY] = end;
    if (startX < 0 || startY < 0 || startX >= maze.length || startY >= maze[0].length || maze[startX][startY] === 1) {
        return false;  // Out of bounds or blocked cell
    }
    if (startX === endX && startY === endY) {
        return true;  // Found path to the end
    }
    maze[startX][startY] = 1;  // Mark as visited
    // Explore all 4 directions
    if (pathFinder(maze, [startX + 1, startY], end) ||
        pathFinder(maze, [startX - 1, startY], end) ||
        pathFinder(maze, [startX, startY + 1], end) ||
        pathFinder(maze, [startX, startY - 1], end)) {
        return true;
    }
    return false;  // No


