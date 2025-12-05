/*
 * ACTIVITY 2: Function Parameters and Defaults
 * 
 * Problem 1: Default Parameters
 * Use default parameter values
 */

// 1. Create a function 'greet' with default name parameter:
//    function greet(name = "Guest") { ... }
//    Test with and without arguments
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());        // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"

// 2. Create a function 'calculateArea' with default dimensions:
//    - length default 10, width default 5
//    - Returns area
function calculateArea(length = 10, width = 5) {
    return length * width;
}

console.log(calculateArea());          // 50 (default values)
console.log(calculateArea(15, 20));    // 300 (custom values)

// 3. Challenge: Create a function 'createUser' with defaults:
//    - Takes: name, age (default 18), active (default true), role (default "user")
//    - Returns user object
//    - Test with different combinations of arguments
function createUser(name, age = 18, active = true, role = "user") {
    return {
        name,
        age,
        active,
        role
    };
}

console.log(createUser("Alice"));                   // { name: "Alice", age: 18, active: true, role: "user" }
console.log(createUser("Bob", 30, false, "admin"));  // { name: "Bob", age: 30, active: false, role: "admin" }


// ============================================================================
// Problem 2: Rest Parameters
// Use rest parameters for variable arguments
// ============================================================================

// 1. Create a function 'sum' using rest parameters:
//    function sum(...numbers) { ... }
//    - Takes any number of arguments
//    - Returns their sum
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4));  // 10
console.log(sum(5, 10));       // 15

// 2. Create a function 'findMax' using rest parameters:
//    - Takes any number of numbers
//    - Returns the maximum value
function findMax(...numbers) {
    return Math.max(...numbers);
}

console.log(findMax(1, 5, 3));  // 5
console.log(findMax(-1, -5));    // -1

// 3. Create a function 'joinStrings' using rest parameters:
//    - Takes separator and any number of strings
//    - Returns joined string
function joinStrings(separator, ...strings) {
    return strings.join(separator);
}

console.log(joinStrings("-", "apple", "banana", "orange")); // "apple-banana-orange"

// 4. Challenge: Create a function 'calculate' that:
//    - Takes operation string ("add", "multiply", etc.) and rest of numbers
//    - Performs operation on all numbers
//    - Returns result
function calculate(operation, ...numbers) {
    if (operation === "add") {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    } else if (operation === "multiply") {
        return numbers.reduce((acc, curr) => acc * curr, 1);
    } else {
        return "Invalid operation"; // This is a mess - only handling two operations
    }
}

console.log(calculate("add", 1, 2, 3));        // 6
console.log(calculate("multiply", 2, 3, 4));   // 24
console.log(calculate("subtract", 5, 3));      // "Invalid operation"

// ============================================================================
// Problem 3: Destructuring Parameters
// Use destructuring in function parameters
// ============================================================================

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// 1. Create a function 'displayPerson' that:
//    - Takes object with {name, age, city}
//    - Uses destructuring in parameters
//    - Returns formatted string
function displayPerson({ name, age, city }) {
    return `${name} is ${age} years old and lives in ${city}`;
}

console.log(displayPerson(person));  // "Alice is 30 years old and lives in New York"

// 2. Create a function 'processCoordinates' that:
//    - Takes object with {x, y}
//    - Uses destructuring
//    - Returns distance from origin
function processCoordinates({ x, y }) {
    return Math.sqrt(x * x + y * y);
}

console.log(processCoordinates({ x: 3, y: 4 })); // 5

// 3. Challenge: Create a function 'createEmail' that:
//    - Takes object with {firstName, lastName, domain}
//    - Uses destructuring with default values
//    - Returns email string: firstName.lastName@domain.com
function createEmail({ firstName, lastName, domain = "example.com" }) {
    return `${firstName}.${lastName}@${domain}`;
}

console.log(createEmail({ firstName: "John", lastName: "Doe" }));      // "John.Doe@example.com"
console.log(createEmail({ firstName: "Alice", lastName: "Smith", domain: "company.com" })); // "Alice.Smith@company.com"


// ============================================================================
// Problem 4: Arguments Object
// Understand and use the arguments object
// ============================================================================

// 1. Create a function 'logArguments' that:
//    - Uses 'arguments' object
//    - Logs all arguments passed
//    - Converts arguments to array using Array.from()
function logArguments() {
    const args = Array.from(arguments);
    console.log(args);
}

logArguments(1, 2, 3);  // [1, 2, 3]
logArguments("a", "b"); // ["a", "b"]

// 2. Create a function 'findLongest' that:
//    - Uses arguments object
//    - Returns the longest string argument
function findLongest() {
    return Array.from(arguments).reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

console.log(findLongest("short", "longest", "medium"));  // "longest"

// 3. Compare arguments object vs rest parameters:
//    - Create same function using both approaches
//    - Explain differences

// Using arguments object
function findLongestArguments() {
    return Array.from(arguments).reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

// Using rest parameters
function findLongestRest(...strings) {
    return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

console.log(findLongestArguments("apple", "banana", "kiwi"));  // "banana"
console.log(findLongestRest("apple", "banana", "kiwi"));      // "banana"

// Difference: arguments object is an array-like object that can be accessed by index but doesn't have array methods like `map` or `reduce` directly, while rest parameters allow direct access to an array-like structure with array methods.

// 4. Challenge: Create a function 'callWithDelay' that:
//    - Takes a function and delay time
//    - Takes additional arguments using arguments or rest
//    - Calls the function after delay with those arguments
function callWithDelay(fn, delay, ...args) {
    setTimeout(() => {
        fn(...args); // This is partially messed up because `arguments` is not used here, it's rest params
    }, delay);
}

callWithDelay(console.log, 1000, "Hello, world!"); // "Hello, world!" after 1 second
Key Parts Left Incomplete/Incorrect:
