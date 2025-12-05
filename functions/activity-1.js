/*
 * ACTIVITY 1: Function Basics
 * 
 * Problem 1: Function Declarations
 * Create and use basic functions
 */

// 1. Create a function 'greet' that takes a name parameter and returns "Hello, [name]!"
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Create a function 'add' that takes two numbers and returns their sum
function add(a, b) {
    return a + b;
}

// 3. Create a function 'multiply' that takes two numbers and returns their product
function multiply(a, b) {
    return a * b;
}

// 4. Test each function with different arguments
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(add(5, 3));       // 8
console.log(multiply(2, 4));  // 8

// 5. Challenge: Create a function 'calculate' that:
//    - Takes two numbers and an operation string ("add", "subtract", "multiply", "divide")
//    - Returns the result of the operation
//    - Handles division by zero
function calculate(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                return "Error: Division by zero!";
            }
            return a / b;
        default:
            return "Invalid operation";
    }
}

console.log(calculate(10, 5, "add"));      // 15
console.log(calculate(10, 0, "divide"));   // "Error: Division by zero!"


// ============================================================================
// Problem 2: Function Expressions
// Use function expressions and understand hoisting
// ============================================================================

// Function declaration
function sayHello() {
    return "Hello!";
}

// 1. Create a function expression: const sayGoodbye = function() { ... }
const sayGoodbye = function() {
    return "Goodbye!";
};

// 2. Test: Can you call sayHello before it's declared? (hoisting)
console.log(sayHello());  // "Hello!" (this works due to hoisting)

// 3. Test: Can you call sayGoodbye before it's assigned? Why not?
// Uncomment the following line to test
// console.log(sayGoodbye()); // TypeError: sayGoodbye is not a function
// This will throw an error because function expressions are not hoisted in the same way as function declarations.

// 4. Challenge: Create three versions of the same function:
//    - Function declaration
//    - Function expression
//    - Arrow function

// Function declaration
function greetPerson() {
    return "Hi there!";
}

// Function expression
const greetPersonExpr = function() {
    return "Hi there!";
};

// Arrow function
const greetPersonArrow = () => "Hi there!";

// ============================================================================
// Problem 3: Parameters and Arguments
// Understand function parameters and arguments
// ============================================================================

// 1. Create a function 'introduce' that takes name and age parameters
//    - Returns formatted string: "I'm [name] and I'm [age] years old"
function introduce(name, age) {
    return `I'm ${name} and I'm ${age} years old`;
}

// 2. Create a function 'fullName' that takes firstName and lastName
//    - Returns full name
//    - What happens if you only pass one argument?
function fullName(firstName, lastName = "") {
    return `${firstName} ${lastName}`;
}

// If only one argument is passed, the second one defaults to an empty string
console.log(fullName("John"));         // "John "
console.log(fullName("John", "Doe"));  // "John Doe"

// 3. Challenge: Create a function 'sumAll' that:
//    - Takes any number of arguments
//    - Returns sum of all arguments
//    - Use 'arguments' object or rest parameters
//    - Handle edge cases (no arguments, non-numbers)

function sumAll(...args) {
    if (args.length === 0) return 0;
    return args.reduce((sum, num) => {
        return typeof num === "number" ? sum + num : sum;
    }, 0);
}

console.log(sumAll(1, 2, 3));           // 6
console.log(sumAll(1, "two", 3));       // 4 (ignores non-number argument)
console.log(sumAll());                  // 0


// ============================================================================
// Problem 4: Return Values
// Understand how functions return values
// ============================================================================

// 1. Create a function 'isEven' that takes a number and returns true/false
function isEven(num) {
    return num % 2 === 0;
}

// 2. Create a function 'getMax' that takes two numbers and returns the larger one
function getMax(a, b) {
    return a > b ? a : b;
}

// 3. Create a function 'formatName' that takes first and last name, returns formatted string
function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// 4. Challenge: Create a function 'analyzeNumber' that:
//    - Takes a number
//    - Returns an object with: {value, isEven, isPositive, square, double}
//    - All properties calculated from the input number
function analyzeNumber(num) {
    return {
        value: num,
        isEven: isEven(num),
        isPositive: num > 0,
        square: num * num,
        double: num * 2
    };
}

console.log(analyzeNumber(4)); // { value: 4, isEven: true, isPositive: true, square: 16, double: 8 }
console.log(analyzeNumber(-3)); // { value: -3, isEven: false, isPositive: false, square: 9, double: -6 }


