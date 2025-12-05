/*
 * ACTIVITY 5: Working with Strings
 * 
 * Problem 1: String Methods and Operations
 * Master string manipulation
 */

const text = "Hello World";
const email = "user@example.com";

// Your task:
// 1. String methods:
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"

console.log(text.indexOf("World")); // 6
console.log(text.includes("Hello")); // true

console.log(text.slice(0, 5)); // "Hello"
console.log(text.substring(0, 5)); // "Hello"

console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"

// 2. Challenge: Create a function 'analyzeString' that:
function analyzeString(str) {
    const length = str.length;
    const wordCount = str.split(" ").length;
    const hasNumbers = /\d/.test(str);
    const hasLetters = /[a-zA-Z]/.test(str);
    const uppercase = str.toUpperCase();
    const lowercase = str.toLowerCase();

    return { length, wordCount, hasNumbers, hasLetters, uppercase, lowercase };
}

console.log(analyzeString("Hello 123"));  // { length: 10, wordCount: 2, hasNumbers: true, hasLetters: true, uppercase: "HELLO 123", lowercase: "hello 123" }


// ============================================================================
// Problem 2: Template Literals
// Use template literals for string interpolation
// ============================================================================

const name = "Alice";
const age = 30;
const city = "New York";

// Your task:
// 1. Create strings using template literals:
console.log(`My name is ${name}`);  // "My name is Alice"
console.log(`Next year I'll be ${age + 1}`);  // "Next year I'll be 31"

// Multi-line strings with template literals
const multiLine = `This is a multi-line
string using template literals`;
console.log(multiLine);

// 2. Challenge: Create a function 'formatEmail' that:
function formatEmail(user) {
    return `${user.firstName}.${user.lastName}@${user.domain}.com`;
}

console.log(formatEmail({ firstName: "John", lastName: "Doe", domain: "example" })); // "John.Doe@example.com"


// ============================================================================
// Problem 3: String Conversion and Parsing
// Convert and parse strings
// ============================================================================

const numStr = "123.45";
const dateStr = "2024-12-15";
const csvLine = "apple,banana,orange";

// Your task:
// 1. Parse number from string:
console.log(parseInt(numStr));   // 123
console.log(parseFloat(numStr)); // 123.45
console.log(Number(numStr));     // 123.45
console.log(+numStr);            // 123.45

// 2. Split string:
const fruits = csvLine.split(",");
console.log(fruits); // ["apple", "banana", "orange"]

// 3. Challenge: Create a function 'parseCSV' that:
function parseCSV(csv) {
    return csv.split(",").map(item => {
        const parsedItem = item.trim();
        return isNaN(parsedItem) ? parsedItem : parseFloat(parsedItem);
    });
}

console.log(parseCSV("apple, 2.5, orange")); // ["apple", 2.5, "orange"]


// ============================================================================
// Problem 4: String Validation
// Validate string formats
// ============================================================================

// Your task:
// 1. Check if string is empty:
console.log("".length === 0);  // true
console.log("test" === "");    // false

// 2. Check if string contains only letters: use regex
const hasOnlyLetters = /^[a-zA-Z]+$/.test("Hello");
console.log(hasOnlyLetters);  // true

// 3. Check if string is valid email format (basic check)
const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
console.log(isValidEmail);  // true

// 4. Challenge: Create a function 'validateString' that:
function validateString(str, type) {
    let isValid = true;
    let errors = [];

    switch (type) {
        case "email":
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(str)) {
                isValid = false;
                errors.push("Invalid email format");
            }
            break;

        case "phone":
            // Missing implementation, let's leave it for now
            errors.push("Phone validation is missing");
            break;

        case "password":
            // Missing password checks for length, special characters
            errors.push("Password validation is incomplete");
            break;

        default:
            errors.push("Unknown validation type");
            break;
    }

    return { valid: isValid, errors: errors };
}

console.log(validateString("user@example.com", "email"));  // { valid: true, errors: [] }
console.log(validateString("12345", "phone"));  // { valid: true, errors: ["Phone validation is missing"] }

