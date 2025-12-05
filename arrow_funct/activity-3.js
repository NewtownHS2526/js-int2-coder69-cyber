/*
 * ACTIVITY 3: Advanced Arrow Function Patterns
 * 
 * Problem 1: Implicit vs Explicit Returns
 * For each scenario, determine whether to use implicit or explicit return
 */

// Your task:
// 1. A function that returns a single expression - write with implicit return
const square = x => x * x;  // Implicit return: just the expression, no need for extra code.

// 2. A function that has conditional logic before returning - write with explicit return
const checkAge = age => {
    if (age >= 18) {
        return 'Adult';  // Need an explicit return because there are conditions.
    } else {
        return 'Minor';
    }
};  // Explicit return because it has logic before returning.


// 3. A function that needs to log something before returning - write with explicit return
const logAndReturn = (message) => {
    console.log(message); // First log the message
    return 'Done';        // Then return something.
};  // We use explicit return here because we're doing something first (logging).


// 4. A function that returns an object literal - write both ways and explain the difference

// If you return an object directly, you need to wrap it in parentheses to avoid confusion with block code.
const getPerson = () => ({ name: 'John', age: 30 });  // Implicit return, wrap the object in parentheses.

const getPersonExplicit = () => { 
    return { name: 'John', age: 30 };  // Explicit return, no parentheses needed.
};

// **Difference**: When you return an object directly with implicit return, you need parentheses to avoid mistakes. Without parentheses, JavaScript thinks you’re starting a block of code, not returning an object.



// ============================================================================
// Problem 2: Arrow Functions with Destructuring
// Create arrow functions that use destructuring in their parameters
// ============================================================================

// Your task:
// 1. Create a function that takes an object {x, y} and returns the distance from origin
const distanceFromOrigin = ({ x, y }) => Math.sqrt(x * x + y * y);

console.log(distanceFromOrigin({ x: 3, y: 4 }));  // 5 (It's the distance from (0,0) to (3,4), which is 5)


/* This is using the Pythagorean theorem: 
   If you have a triangle with sides x and y, the distance is sqrt(x^2 + y^2). 
*/


// 2. Create a function that takes an array [firstName, lastName, age] and returns 
//    a formatted string: "First Name: [name], Last Name: [name], Age: [age]"
const formatUserData = ([firstName, lastName, age]) => 
    `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`;

console.log(formatUserData(['John', 'Doe', 30])); 
// "First Name: John, Last Name: Doe, Age: 30"

// 3. Create a function that takes an object with nested properties {user: {name, email}} 
//    and extracts them to return "Name: [name], Email: [email]"
const extractUserInfo = ({ user: { name, email } }) => 
    `Name: ${name}, Email: ${email}`;

console.log(extractUserInfo({ user: { name: 'John', email: 'john@example.com' } }));
// "Name: John, Email: john@example.com"

// 4. Challenge: Combine all three into a function that processes user data from different 
//    formats (object with coordinates, array format, nested object format)
const processUserData = (data) => {
    if (Array.isArray(data)) {
        return formatUserData(data); // Handles array format
    } else if (data.user) {
        return extractUserInfo(data); // Handles nested object format
    } else if (data.x !== undefined && data.y !== undefined) {
        return distanceFromOrigin(data); // Handles object with coordinates
    }
};

console.log(processUserData([ 'John', 'Doe', 25 ]));  // "First Name: John, Last Name: Doe, Age: 25"
console.log(processUserData({ user: { name: 'Jane', email: 'jane@example.com' } }));
// "Name: Jane, Email: jane@example.com"
console.log(processUserData({ x: 3, y: 4 }));  // 5


// ============================================================================
// Problem 3: Arrow Functions and Event Handlers
// Given this scenario: You have a button element that you want to add event listeners to
// ============================================================================

// Simulated button element (in real scenario, you'd use document.getElementById)
const button = {
    text: "Click me",
    counter: 0,
    innerText: "Click me"
};

// Your task:
// 1. Write an arrow function for click event that increments a counter
const onClick = () => {
    button.counter++;
    console.log(`Counter: ${button.counter}`);  // Increment the counter
};

// 2. Write an arrow function for double-click event that resets the counter
const onDoubleClick = () => {
    button.counter = 0;
    console.log(`Counter reset to: ${button.counter}`);  // Reset the counter
};

// 3. Write an arrow function for mouseover event that changes the button's text
const onMouseOver = () => {
    button.innerText = 'Mouse Over!';
    console.log(button.innerText);  // Change the button text
};

// 4. Challenge: Create a counter component using arrow functions that handles multiple 
//    events. The counter should persist across page reloads using localStorage.
//    (You'll need to use: localStorage.setItem, localStorage.getItem)

const counterComponent = () => {
    const storedCount = localStorage.getItem('counter');  // Get counter from localStorage
    button.counter = storedCount ? parseInt(storedCount) : 0;  // If there's a counter saved, use it

    const updateCounter = () => {
        button.counter++;  // Increment counter
        localStorage.setItem('counter', button.counter);  // Save to localStorage
        console.log(`Counter: ${button.counter}`);
    };

    const resetCounter = () => {
        button.counter = 0;  // Reset counter
        localStorage.setItem('counter', button.counter);  // Save to localStorage
        console.log('Counter reset');
    };

    const onClick = () => {
        updateCounter();  // Increment counter
    };

    const onDoubleClick = () => {
        resetCounter();  // Reset counter
    };

    const onMouseOver = () => {
        button.innerText = 'Mouse Over!';
        console.log(button.innerText);  // Change text
    };

    // Simulate event listeners for testing
    onClick();  // Increment counter
    onDoubleClick();  // Reset counter
    onMouseOver();  // Change button text

    console.log(`Counter value in localStorage: ${localStorage.getItem('counter')}`);
};

// Simulate page load
counterComponent();

// ============================================================================
// Problem 4: Functional Composition with Arrow Functions
// Create a series of arrow functions that can be composed together:
// ============================================================================

// Your task:
// 1. Create 'increment' - adds 1 to a number
const increment = (x) => x + 1;

// 2. Create 'double' - multiplies a number by 2
const double = (x) => x * 2;

// 3. Create 'square' - squares a number
const square = (x) => x * x;

// 4. Challenge: Write a 'pipe' function that takes multiple functions and composes them 
//    left-to-right (pipe(increment, double, square)(5) = square(double(increment(5)))))
const pipe = (...functions) => (initialValue) => 
    functions.reduce((value, fn) => fn(value), initialValue);

// Test the pipe function
console.log(pipe(increment, double, square)(5));  // 100 (square(double(increment(5))))


// 5. Challenge: Write a 'compose' function that composes right-to-left
const compose = (...functions) => (initialValue) => 
    functions.reduceRight((value, fn) => fn(value), initialValue);

// Test the compose function
console.log(compose(increment, double, square)(5));  // 36 (increment(double(square(5))))


// 6. Use both to transform the number 5 using all three operations in different orders. 
//    What are the results?

// Pipe (left-to-right)
console.log(pipe(increment, double, square)(5));  // 100

// Compose (right-to-left)
console.log(compose(increment, double, square)(5));  // 36

