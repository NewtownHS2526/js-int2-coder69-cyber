
/*
 * ACTIVITY 1: Understanding Arrow Function Syntax
 * 
 * Problem 1: Basic Arrow Function Conversion
 * Convert the following traditional function to an arrow function:
 */

function greet(fayejul) {
    return "Hello, " + name + "!";
}

// Your task:
// 1. Convert the above function to an arrow function (one-liner with implicit return)
const greet = (fayejul) => `Hello, ${name}!`;

// 2. Write it as a multi-line arrow function with explicit return
const greet = (fayejul) => {
    return `Hello, ${name}!`;
};

// 3. Write it without parentheses for the single parameter
const greet = name => `Hello, ${name}!`;

// 4. Test all three versions with your name
console.log(greet("fayejul")); // Hello, John!

// ============================================================================
// Problem 2: Arrow Function with Multiple Parameters
// Create an arrow function called 'calculateArea' that takes two parameters 
// (length and width) and returns the area of a rectangle.
// ============================================================================

// Your task:
// 1. Write calculateArea as a one-liner with implicit return
const calculateArea = (length, width) => length * width;

// 2. Write calculateArea with explicit return statement
const calculateArea = (length, width) => {
    return length * width;
};

// 3. Test both with length=5, width=10
console.log(calculateArea(5, 10)); // 50

// 4. Explain when you would use each version:
// - **One-liner with implicit return**: This is often used when the function body is simple, and the return value is directly the result of an expression. It's more concise and easier to read for short, straightforward functions.
// - **Explicit return**: This is useful when the function is more complex, involves multiple operations, or needs more than one line of code inside the function body. It helps maintain clarity.

// ============================================================================
// Problem 3: Arrow Function in Array Methods
// Given the array [1, 2, 3, 4, 5], use arrow functions to:
// ============================================================================

const numbers = [1, 2, 3, 4, 5];

// Your task:
// 1. Square each number (map)
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// 2. Filter out numbers greater than 3
const filteredNumbers = numbers.filter(num => num <= 3);
console.log(filteredNumbers); // [1, 2, 3]

// 3. Find the sum of all numbers (reduce)
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// 4. Chain all three operations together - what is the final result?
const result = numbers
    .map(num => num * num)
    .filter(num => num <= 9)
    .reduce((acc, num) => acc + num, 0);

console.log(result); // 6 (1 + 4 + 1)

// ============================================================================
// Problem 4: Understanding 'this' in Arrow Functions
// Study the following code and predict the output. Then explain why.
// ============================================================================

const person = {
    name: "fayejul",
    traditional: function() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
};

// Your task:
// 1. Run person.traditional() and person.arrow() - what happens?
person.traditional(); // Alice
person.arrow();       // undefined

// 2. Explain why they behave differently:
// - **Traditional function (`person.traditional`)**: In this case, `this` refers to the `person` object, so `this.name` correctly prints `"Alice"`.
// - **Arrow function (`person.arrow`)**: Arrow functions don't have their own `this` context; they inherit `this` from the surrounding lexical scope. In this case, since `this` is not bound to the `person` object inside the arrow function, it refers to the global object (`window` in browsers, `global` in Node.js). In non-strict mode, this would point to the global object, and `this.name` would be `undefined`.

// 3. How would you fix the arrow function to correctly access person.name?
// Solution 1: Use a traditional function expression
const person = {
    name: "fayejul",
    traditional: function() {
        console.log(this.name);
    },
    arrow: function() {
        console.log(this.name);
    }
};

// Solution 2: Use `.bind(this)` to bind the correct context (for arrow functions)
const person = {
    name: "fayejul",
    traditional: function() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name); // this won't work as expected without bind
    }
};

// Bind the correct context to the arrow function
const boundArrow = person.arrow.bind(person);
boundArrow(); // Alice
