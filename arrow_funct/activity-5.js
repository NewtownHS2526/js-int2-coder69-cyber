/*
 * ACTIVITY 5: Complex Arrow Function Patterns
 * 
 * Problem 1: Arrow Functions with Default Parameters
 * Create arrow functions with default parameter values
 */

// Your task:
// 1. Create an arrow function 'greet' with default name parameter ("Guest")
const greet = (name = "Guest") => `Hello, ${name}!`;

console.log(greet());  // Output: "Hello, Guest!" (because no name was passed)
console.log(greet("Alice"));  // Output: "Hello, Alice!"

// 2. Create an arrow function 'calculatePrice' with default tax (0.1) and discount (0) parameters
const calculatePrice = (price, tax = 0.1, discount = 0) => {
    const total = price + (price * tax) - discount;
    return total;
};

console.log(calculatePrice(100));  // Output: 110 (tax = 0.1, discount = 0 by default)
console.log(calculatePrice(100, 0.2, 10));  // Output: 110 (custom tax and discount)

// 3. Create an arrow function 'formatDate' with default format parameter ("YYYY-MM-DD")
const formatDate = (date = new Date(), format = "YYYY-MM-DD") => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

console.log(formatDate());  // Output: Today's date in "MM/DD/YYYY" format
console.log(formatDate(new Date(), "DD-MM-YYYY"));  // Output: Custom formatted date


// ============================================================================
// Problem 2: Arrow Functions with Rest Parameters
// Use arrow functions with rest parameters to handle variable arguments

// Your task:
// 1. Create an arrow function 'sumAll' that takes any number of arguments and returns their sum
const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);

console.log(sumAll(1, 2, 3, 4, 5));  // Output: 15
console.log(sumAll(10, 20));  // Output: 30

// 2. Create an arrow function 'findMax' that finds the maximum value from any number of arguments
const findMax = (...numbers) => Math.max(...numbers);

console.log(findMax(1, 2, 3, 10, 5));  // Output: 10
console.log(findMax(-1, -5, 3, 2));  // Output: 3

// 3. Create an arrow function 'combineStrings' that combines any number of strings with a separator
const combineStrings = (separator, ...strings) => strings.join(separator);

console.log(combineStrings("-", "a", "b", "c"));  // Output: "a-b-c"
console.log(combineStrings(", ", "apple", "banana", "cherry"));  // Output: "apple, banana, cherry"

// 4. Challenge: Create a function 'createLogger' that logs any number of arguments with a timestamp prefix
const createLogger = (...args) => {
    const timestamp = new Date().toLocaleString();
    console.log(`${timestamp}:`, ...args);
};

createLogger("Error occurred", "at", "3:00 PM");  // Output: Timestamp: Error occurred at 3:00 PM


// ============================================================================
// Problem 3: Currying with Arrow Functions
// Implement function currying using arrow functions

// Your task:
// 1. Create a curried arrow function 'add' where add(5)(10) returns 15
const add = x => y => x + y;

console.log(add(5)(10));  // Output: 15

// 2. Create a curried arrow function 'multiply' where multiply(2)(3)(4) returns 24
const multiply = x => y => z => x * y * z;

console.log(multiply(2)(3)(4));  // Output: 24

// 3. Challenge: Create a generic 'curry' function that curries any function
const curry = fn => (...args) => 
    args.length >= fn.length ? fn(...args) : (...more) => curry(fn)(...args, ...more);

const curriedAdd = curry((a, b, c) => a + b + c);
console.log(curriedAdd(1)(2)(3));  // Output: 6


// ============================================================================
// Problem 4: Arrow Functions with Closures
// Use arrow functions to create closures that maintain state

// Your task:
// 1. Create a function 'createCounter' that returns an object with arrow function methods:
const createCounter = () => {
    let count = 0;
    
    return {
        increment: () => count++,
        decrement: () => count--,
        getValue: () => count,
        reset: () => count = 0
    };
};

const counter = createCounter();
counter.increment();
console.log(counter.getValue());  // Output: 1
counter.decrement();
console.log(counter.getValue());  // Output: 0
counter.reset();
console.log(counter.getValue());  // Output: 0

// 2. Create a function 'createBankAccount' with arrow function methods:
const createBankAccount = () => {
    let balance = 0;
    
    return {
        deposit: amount => { balance += amount; },
        withdraw: amount => { if (balance >= amount) balance -= amount; },
        getBalance: () => balance
    };
};

const account = createBankAccount();
account.deposit(100);
console.log(account.getBalance());  // Output: 100
account.withdraw(50);
console.log(account.getBalance());  // Output: 50

// 3. Challenge: Create a 'createGameScore' that tracks multiple players' scores
const createGameScore = () => {
    let scores = {};
    
    return {
        addScore: (player, points) => {
            scores[player] = (scores[player] || 0) + points;
        },
        getScore: player => scores[player] || 0,
        getLeader: () => {
            let leader = null;
            let maxScore = 0;
            for (const player in scores) {
                if (scores[player] > maxScore) {
                    maxScore = scores[player];
                    leader = player;
                }
            }
            return leader;
        }
    };
};

const game = createGameScore();
game.addScore("Alice", 10);
game.addScore("Bob", 15);
console.log(game.getScore("Alice"));  // Output: 10
console.log(game.getLeader());  // Output: "Bob"
