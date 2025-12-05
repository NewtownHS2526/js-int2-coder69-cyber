/*
 * ACTIVITY 3: Advanced Comparison Techniques
 * 
 * Problem 1: Comparing Arrays and Objects
 * Understand how objects and arrays are compared
 */

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Alice", age: 30 };
const obj3 = obj1;

// 1. Test: arr1 === arr2 (what does this return and why?)
console.log(arr1 === arr2);  // false, arrays are reference types, they are different references in memory

// 2. Test: arr1 === arr3 (what does this return and why?)
console.log(arr1 === arr3);  // true, arr3 is assigned to arr1, so both refer to the same array

// 3. Test: obj1 === obj2 (what does this return and why?)
console.log(obj1 === obj2);  // false, objects are compared by reference, not by value. They are different references

// 4. Test: obj1 === obj3 (what does this return and why?)
console.log(obj1 === obj3);  // true, obj3 is assigned to obj1, so they refer to the same object

// 5. Challenge: Write a function 'deepEqual' that compares two objects/arrays by their values, not references
function deepEqual(a, b) {
    if (a === b) return true;  // handles primitive and same reference cases
    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) return false;
    
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    
    return true;
}

console.log(deepEqual(arr1, arr2));  // true (same values)
console.log(deepEqual(obj1, obj2));  // true (same values, different objects)

// 6. Challenge: Write a function 'compareArrays' that checks if two arrays have the same elements in the same order
function compareArrays(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log(compareArrays(arr1, arr2));  // true (same elements in same order)


/*
 * Problem 2: Chaining Comparison Operators
 * Use comparison operator chaining effectively
 */

const score = 85;
const age = 25;

// 1. Check if score is between 80 and 90: 80 <= score && score <= 90
console.log(80 <= score && score <= 90);  // true

// 2. Check if age is between 18 and 65: Use chaining
console.log(age >= 18 && age <= 65);  // true

// 3. Check if score is NOT between 0 and 100 (invalid score)
console.log(!(score >= 0 && score <= 100));  // false (because score is between 0 and 100)

// 4. Challenge: Create a function 'isInRange' that:
//    - Takes a value, min, and max
//    - Returns true if value is between min and max (inclusive)
//    - Handles edge cases (what if min > max?)
function isInRange(value, min, max) {
    if (min > max) [min, max] = [max, min];  // Swap if min > max
    return value >= min && value <= max;
}

console.log(isInRange(85, 80, 90));  // true
console.log(isInRange(85, 90, 80));  // true (swapping min and max)

// 5. Challenge: Create a function 'validateInput' that checks:
//    - If a number is in valid range (0-100)
//    - If a string length is in valid range (1-50)
//    - Returns detailed validation result
function validateInput(input) {
    if (typeof input === 'number') {
        return input >= 0 && input <= 100 ? 'Valid number' : 'Invalid number';
    }
    if (typeof input === 'string') {
        return input.length >= 1 && input.length <= 50 ? 'Valid string length' : 'Invalid string length';
    }
    return 'Invalid input';
}

console.log(validateInput(50));  // Valid number
console.log(validateInput("Hello"));  // Valid string length


/*
 * Problem 3: Comparison with Null and Undefined
 * Handle edge cases in comparisons
 */

let value1;
let value2 = null;
let value3 = 0;
let value4 = "";

// 1. Compare each value with: null, undefined, 0, ""
console.log(value1 == null);  // true (value1 is undefined)
console.log(value1 === null);  // false (value1 is undefined, not null)
console.log(value2 == undefined);  // true (null == undefined)
console.log(value2 === undefined);  // false (null !== undefined)
console.log(value3 == 0);  // true (0 is equal to 0)
console.log(value4 == "");  // true (empty string is equal to empty string)

// 2. Predict: value1 == null, value1 === null, value2 == undefined
// Already covered in the above comparisons.

// 3. Create checks for:
//    - If a variable is defined (not undefined)
//    - If a variable has a value (not null or undefined)
//    - If a variable is "falsy" (0, "", null, undefined, false)
console.log(value1 !== undefined);  // false
console.log(value2 !== null && value2 !== undefined);  // false
console.log(!value3);  // false (0 is falsy)
console.log(!value4);  // true (empty string is falsy)
console.log(!value2);  // true (null is falsy)

// 4. Challenge: Write a 'safeCompare' function that handles null/undefined gracefully
function safeCompare(a, b) {
    if (a == null && b == null) return true;
    if (a == null || b == null) return false;
    return a === b;
}

console.log(safeCompare(value2, value1));  // true (both are null/undefined)
console.log(safeCompare(value3, value4));  // false (0 !== "")
console.log(safeCompare(5, 5));  // true (both are equal)


/*
 * Problem 4: Performance Considerations
 * Optimize comparison operations
 */

// 1. Compare: largeArray.length > 0 vs largeArray.length !== 0
console.log(largeArray.length > 0);  // true (more readable, checks if the length is greater than 0)
console.log(largeArray.length !== 0);  // true (valid, but less readable)

// 2. Compare: value == null vs value === null || value === undefined
console.log(value2 == null);  // true
console.log(value3 == null);  // false
console.log(value2 === null || value2 === undefined);  // true (preferred as it avoids type coercion)


// 3. Challenge: Create a 'findMax' function that:
//    - Takes an array of numbers
//    - Returns the maximum value
//    - Handles empty arrays, null/undefined
//    - Uses efficient comparisons
function findMax(arr) {
    if (!arr || arr.length === 0) return null;  // Handle null or empty array
    return Math.max(...arr);  // Return max value
}

console.log(findMax([1, 2, 3, 4, 5]));  // 5
console.log(findMax([]));  // null


// 4. Challenge: Create a 'binarySearch' function
function binarySearch(arr, target) {
    if (!arr || arr.length === 0) return -1;  // Handle empty or null array
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;  // Target not found
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));  // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6));  // -1
//    - Takes a sorted array and target value
//    - Uses comparisons efficiently (<, >, ===)
//    - Returns index if found, -1 otherwise

