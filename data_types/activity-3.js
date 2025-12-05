/*
 * ACTIVITY 3: Objects and Arrays
 * 
 * Problem 1: Object Basics
 * Work with object data structure
 */

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Your task:
// 1. Access properties: person.name, person["age"]
console.log(person.name);  // Alice
console.log(person["age"]); // 30

// 2. Add new property: person.email = "alice@example.com"
person.email = "alice@example.com";

// 3. Modify property: person.age = 31
person.age = 31;

// 4. Check if property exists: "name" in person
console.log("name" in person);  // true

// 5. Challenge: Create a function 'objectInfo' that:
//    - Returns object with: {keys: [], values: [], size: number, isEmpty: boolean}
function objectInfo(obj) {
    return {
        keys: Object.keys(obj),
        values: Object.values(obj),
        size: Object.keys(obj).length
    };
}

console.log(objectInfo(person)); 


// ============================================================================
// Problem 2: Array Basics
// Work with array data structure
// ============================================================================

const fruits = ["apple", "banana", "orange"];

// Your task:
// 1. Access elements: fruits[0], fruits[fruits.length - 1]
console.log(fruits[0]);  // "apple"
console.log(fruits[fruits.length - 1]);  // "orange"

// 2. Add elements: fruits.push("grape"), fruits.unshift("mango")
fruits.push("grape");
fruits.unshift("mango");

// 3. Remove elements: fruits.pop(), fruits.shift()
fruits.pop();
fruits.shift();

// 4. Check if array: Array.isArray(fruits)
console.log(Array.isArray(fruits));  // true

// 5. Challenge: Create a function 'arrayInfo' that:
//    - Returns object with: {length, first, last, isEmpty, type: "array"}
function arrayInfo(arr) {
    return {
        length: arr.length,
        first: arr[0],
        last: arr[arr.length - 1],
        isEmpty: arr.length === 0,
        type: "array"
    };
}

console.log(arrayInfo(fruits));


// ============================================================================
// Problem 3: Nested Data Structures
// Work with objects and arrays inside other structures
// ============================================================================

const library = {
    books: [
        { title: "Book A", author: "Author 1", pages: 200 },
        { title: "Book B", author: "Author 2", pages: 150 }
    ],
    location: {
        city: "Boston",
        street: "Main St"
    }
};

// Your task:
// 1. Access nested properties: library.books[0].title
console.log(library.books[0].title);  // "Book A"

// 2. Add new book to array: library.books.push({...})
library.books.push({ title: "Book C", author: "Author 3", pages: 250 });

// 3. Access nested object: library.location.city
console.log(library.location.city);  // "Boston"

// 4. Challenge: Create a function 'deepAccess' that:
//    - Takes object and path string like "books.0.title"
//    - Returns value at that path
function deepAccess(obj, path) {
    const keys = path.split(".");
    let result = obj;
    
    for (let key of keys) {
        result = result && result[key];
        if (result === undefined) return null;
    }
    
    return result;
}

console.log(deepAccess(library, "books.0.title"));  // "Book A"


// ============================================================================
// Problem 4: Reference vs Value
// Understand how objects and arrays are passed
// ============================================================================

const arr1 = [1, 2, 3];
const arr2 = arr1;
const obj1 = { a: 1 };
const obj2 = obj1;

// Your task:
// 1. Modify arr1: arr1.push(4)
arr1.push(4);
console.log(arr2);  // [1, 2, 3, 4]

// 2. Modify obj1: obj1.b = 2
obj1.b = 2;
console.log(obj2);  // { a: 1, b: 2 }

// 3. Create copies:
//    - const arr3 = [...arr1] (spread operator)
//    - const obj3 = {...obj1} (spread operator)
const arr3 = [...arr1];
const obj3 = { ...obj1 };

arr3.push(5);
obj3.c = 3;

console.log(arr1);  // [1, 2, 3, 4]
console.log(arr3);  // [1, 2, 3, 4, 5]

console.log(obj1);  // { a: 1, b: 2 }
console.log(obj3);  // { a: 1, b: 2, c: 3 }

// 4. Challenge: Create a function 'deepCopy' that:
//    - Returns a complete independent copy
function deepCopy(obj) {
    if (Array.isArray(obj)) {
        return obj.map(item => (typeof item === "object" ? deepCopy(item) : item));
    } else if (typeof obj === "object" && obj !== null) {
        const newObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
            }
        }
        return newObj;
    }
    return obj;
}

const deepCopiedArray = deepCopy(arr1);
const deepCopiedObj = deepCopy(obj1);

deepCopiedArray.push(6);
deepCopiedObj.d = 4;

console.log(arr1);  // [1, 2, 3, 4]
console.log(deepCopiedArray);  // [1, 2, 3, 4, 6]

console.log(obj1);  // { a: 1, b: 2 }
console.log(deepCopiedObj);  // { a: 1, b: 2, d: 4 }


