/*
 * ACTIVITY 4: Arrow Functions in Real-World Scenarios
 * 
 * Problem 1: Data Processing Pipeline
 * You're building a data processing system for an e-commerce site.
 */

const cart = [
    { name: "Book", price: 12.99, quantity: 2 },
    { name: "Pen", price: 1.50, quantity: 10 },
    { name: "Notebook", price: 5.99, quantity: 3 },
    { name: "Eraser", price: 0.99, quantity: 1 }
];

// Your task:
// 1. Create an arrow function to calculate total price (price * quantity) for each item
// 2. Create an arrow function to apply a discount of 15% if quantity is 5 or more
// 3. Create an arrow function to add tax of 8.5% to the final price
// 4. Create an arrow function to filter out items with total less than $10
// 5. Challenge: Chain all operations together to get the final processed cart array. 
//    Then calculate the grand total of all items after all transformations

// ============================================================================
// Problem 2: Arrow Functions in Object Methods
// Create a 'ShoppingCart' object using arrow functions for methods
// ============================================================================

// Your task:
// Create a ShoppingCart object with:
// 1. items array property: []
// 2. addItem(name, price) - adds an item to the cart
// 3. removeItem(name) - removes an item by name
// 4. getTotal() - calculates total price using arrow function
// 5. applyCoupon(percent) - applies discount percentage

// Challenge: Implement this using both arrow functions and regular functions. 
// Test how 'this' behaves differently. Which approach works better and why?

// ============================================================================
// Problem 3: Async Operations with Arrow Functions
// Convert Promise-based code to use arrow functions throughout
// ============================================================================

// Given code (commented out - you'll rewrite it):
// fetch('https://api.example.com/data')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         return data.filter(function(item) {
//             return item.status === 'active';
//         });
//     })
//     .then(function(activeItems) {
//         console.log(activeItems);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

// Your task:
// 1. Rewrite the above using arrow functions for all callbacks
// 2. Challenge: Rewrite it again using async/await with arrow functions
// 3. Compare all three approaches and explain their advantages
// Note: You can test with a mock data array if fetch is not available

// ============================================================================
// Problem 4: Arrow Functions in Higher-Order Functions
// Create a 'createValidator' function that returns an arrow function
// ============================================================================

// Your task:
// 1. Create a createValidator function that returns an arrow function
//    The validator should:
//    - Check if a value is a string
//    - Check minimum length
//    - Check if it matches a pattern (regex)
//
// 2. Example usage:
//    const validateLength = createValidator((value) => value.length >= 5);
//
// 3. Challenge: Create a validator factory that can combine multiple validation rules.
//    Use arrow functions to create validators like:
//    - isValidEmail (must contain @ and .)
//    - isValidPassword (at least 8 chars, one number, one letter)
//    - isValidPhoneNumber (format: XXX-XXX-XXXX)
//    These should be reusable and chainable

/*
 * ACTIVITY 4: Arrow Functions in Real-World Scenarios
 * 
 * Problem 1: Data Processing Pipeline
 * You're building a data processing system for an e-commerce site.
 */

const cart = [
    { name: "Book", price: 12.99, quantity: 2 },
    { name: "Pen", price: 1.50, quantity: 10 },
    { name: "Notebook", price: 5.99, quantity: 3 },
    { name: "Eraser", price: 0.99, quantity: 1 }
];

// Your task:
// 1. Create an arrow function to calculate total price (price * quantity) for each item
const calculateTotalPrice = item => item.price * item.quantity;

// Testing the function with the cart
cart.forEach(item => console.log(`${item.name}: $${calculateTotalPrice(item).toFixed(2)}`));


// 2. Create an arrow function to apply a discount of 15% if quantity is 5 or more
const applyDiscount = item => {
    if (item.quantity >= 5) {
        return item.price * 0.85;  // Apply 15% discount
    }
    return item.price;  // No discount
};

// 3. Create an arrow function to add tax of 8.5% to the final price
const addTax = price => price * 1.085;  // Adds 8.5% tax


// 4. Create an arrow function to filter out items with total less than $10
const filterLowCostItems = item => calculateTotalPrice(item) >= 10;

// 5. Challenge: Chain all operations together to get the final processed cart array. 
//    Then calculate the grand total of all items after all transformations
const processCart = cart => {
    return cart
        .map(item => ({
            ...item,
            total: calculateTotalPrice(item),
            priceAfterDiscount: applyDiscount(item),
            priceWithTax: addTax(applyDiscount(item))
        }))
        .filter(filterLowCostItems)
        .reduce((total, item) => total + item.priceWithTax, 0);  // Grand total after all operations
};

// Test the final processed cart and grand total
console.log("Processed Cart: ", processCart(cart));  // This will print the total price of all items after all changes

// ============================================================================
// Problem 2: Arrow Functions in Object Methods
// Create a 'ShoppingCart' object using arrow functions for methods
// ============================================================================

const ShoppingCart = {
    items: [],
    addItem: (name, price) => {
        ShoppingCart.items.push({ name, price });
    },
    removeItem: name => {
        ShoppingCart.items = ShoppingCart.items.filter(item => item.name !== name);
    },
    getTotal: () => {
        return ShoppingCart.items.reduce((total, item) => total + item.price, 0);
    },
    applyCoupon: percent => {
        ShoppingCart.items = ShoppingCart.items.map(item => ({
            ...item,
            price: item.price * (1 - percent / 100)
        }));
    }
};

// Testing the ShoppingCart object with arrow functions
ShoppingCart.addItem("Book", 12.99);
ShoppingCart.addItem("Pen", 1.50);
console.log("Cart total:", ShoppingCart.getTotal());  // Total before applying coupon

ShoppingCart.applyCoupon(15);  // Applying a 15% discount
console.log("Cart total after 15% coupon:", ShoppingCart.getTotal());  // Total after coupon

// Challenge: Implement this using both arrow functions and regular functions. 
// Test how 'this' behaves differently. Which approach works better and why?

const ShoppingCartRegular = {
    items: [],
    addItem: function(name, price) {
        this.items.push({ name, price });
    },
    removeItem: function(name) {
        this.items = this.items.filter(item => item.name !== name);
    },
    getTotal: function() {
        return this.items.reduce((total, item) => total + item.price, 0);
    },
    applyCoupon: function(percent) {
        this.items = this.items.map(item => ({
            ...item,
            price: item.price * (1 - percent / 100)
        }));
    }
};

// The main difference is that when you use arrow functions, `this` refers to the context where the function is defined. 
// In `ShoppingCart`, arrow functions don't have their own `this`, so they rely on the object they are used in. 
// Regular functions have their own `this` which behaves differently (like referring to the object itself when you use `.apply()` or `.bind()`).

// ============================================================================
// Problem 3: Async Operations with Arrow Functions
// Convert Promise-based code to use arrow functions throughout
// ============================================================================

// Given code (commented out - you'll rewrite it):

// fetch('https://api.example.com/data')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         return data.filter(function(item) {
//             return item.status === 'active';
//         });
//     })
//     .then(function(activeItems) {
//         console.log(activeItems);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

// Your task:
// 1. Rewrite the above using arrow functions for all callbacks
fetch('https://api.example.com/data')
    .then(response => response.json())  // Arrow function for handling the response
    .then(data => data.filter(item => item.status === 'active'))  // Arrow function to filter active items
    .then(activeItems => console.log(activeItems))  // Arrow function to log active items
    .catch(error => console.error(error));  // Arrow function for error handling

// 2. Challenge: Rewrite it again using async/await with arrow functions

const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        const activeItems = data.filter(item => item.status === 'active');
        console.log(activeItems);
    } catch (error) {
        console.error(error);
    }
};

// Call the async function to test it
fetchData();

// 3. Compare all three approaches and explain their advantages
// - **Promises with `.then()`**: Great for chaining multiple asynchronous actions. Clear flow but can become hard to read with multiple `.then()` blocks.
// - **Arrow functions in `.then()`**: Shortens the code by removing the need for `function` and `return` statements. Makes it concise and clean.
// - **Async/await**: Makes asynchronous code look more like synchronous code, which is easier to read and maintain. Error handling is also more intuitive with `try/catch`.



// ============================================================================
// Problem 4: Arrow Functions in Higher-Order Functions
// Create a 'createValidator' function that returns an arrow function
// ============================================================================

// Your task:
// 1. Create a createValidator function that returns an arrow function
//    The validator should:
//    - Check if a value is a string
//    - Check minimum length
//    - Check if it matches a pattern (regex)

const createValidator = (rule) => (value) => rule(value);

// Example usage for checking minimum length
const validateLength = createValidator(value => value.length >= 5);

// Testing the length validator
console.log(validateLength("Hello"));  // true
console.log(validateLength("Hi"));  // false

// 2. Challenge: Create a validator factory that can combine multiple validation rules.
//    Use arrow functions to create validators like:
//    - isValidEmail (must contain @ and .)
//    - isValidPassword (at least 8 chars, one number, one letter)
//    - isValidPhoneNumber (format: XXX-XXX-XXXX)

const isValidEmail = createValidator(value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
const isValidPassword = createValidator(value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value));
const isValidPhoneNumber = createValidator(value => /^\d{3}-\d{3}-\d{4}$/.test(value));

// Testing the validators
console.log(isValidE
