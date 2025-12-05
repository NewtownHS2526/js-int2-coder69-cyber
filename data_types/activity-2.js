/*
 * ACTIVITY 2: Type Conversion and Coercion
 * 
 * Problem 1: Explicit Type Conversion
 * Convert between data types intentionally
 */

const numStr = "123";
const strNum = 456;
const boolStr = "true";

// Your task:
// 1. Convert string to number:
console.log(Number(numStr));    // 123
console.log(parseInt(numStr));  // 123
console.log(parseFloat("123.45")); // 123.45
console.log(+"123");            // 123

// 2. Convert number to string:
console.log(String(123));       // "123"
console.log((123).toString());  // "123"
console.log(123 + "");          // "123"

// 3. Convert to boolean:
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("text"));   // true

// 4. Challenge: Create a function 'smartConvert' that:
function smartConvert(value, targetType) {
    switch (targetType) {
        case "number":
            return Number(value);
        case "string":
            return String(value);
        case "boolean":
            return Boolean(value);
        default:
            return "Invalid type";
    }
}
console.log(smartConvert("123", "number")); // 123
console.log(smartConvert(456, "string"));   // "456"


// ============================================================================
// Problem 2: Type Coercion
// Understand implicit type conversion
// ============================================================================

// 1. Predict and test these expressions:
console.log("5" + 3); // "53"
console.log(5 + "3"); // "53"
console.log("5" - 3); // 2
console.log("5" * 3); // 15
console.log("5" / 3); // 1.666...

// 2. Test comparisons:
console.log("5" == 5);  // true (loose equality, converts types)
console.log("5" === 5); // false (strict equality, no type conversion)
console.log(0 == false); // true (loose equality)
console.log(0 === false); // false (strict equality)

// 3. Challenge: Create examples showing:
console.log(5 + 3 == "8");   // Helpful coercion: adds numbers, coerces result to string
console.log(5 == "5" && 5 === "5"); // Problem: "5" and 5 are equal in loose equality, but not strict
console.log(Number("123") + 5); // Avoiding coercion by explicitly converting string to number

// ============================================================================
// Problem 3: Type Checking
// Check data types accurately
// ============================================================================

const value1 = 42;
const value2 = "42";
const value3 = null;
const value4 = undefined;
const value5 = [];
const value6 = {};

// 1. Use typeof operator on each value
console.log(typeof value1);  // "number"
console.log(typeof value2);  // "string"
console.log(typeof value3);  // "object" (bug in JavaScript, null is not an object)
console.log(typeof value4);  // "undefined"
console.log(typeof value5);  // "object" (array is technically an object)
console.log(typeof value6);  // "object"

// 3. Better type checking:
console.log(Array.isArray(value5)); // true
console.log(value3 === null); // true
console.log(value4 === undefined); // true

// 4. Challenge: Create a function 'getType' that:
function getType(value) {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
    return typeof value;
}

console.log(getType(value5));  // "array"
console.log(getType(value3));  // "null"

// ============================================================================
// Problem 4: Type Safety Practices
// Write type-safe code
// ============================================================================

function addNumbers(a, b) {
    // 1. Add type checking to ensure a and b are numbers
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: Both inputs must be numbers";
    }
    
    // 2. Return error message if types are invalid
    // 3. Handle edge cases (null, undefined, string numbers)
    return a + b;
}

// Challenge: Create a function 'safeAdd' that:
function safeAdd(a, b) {
    if (typeof a === "string") a = Number(a);
    if (typeof b === "string") b = Number(b);
    
    if (typeof a !== "number" || typeof b !== "number") {
        return { success: false, error: "Both parameters must be numbers" };
    }

    return { success: true, result: a + b };
}

console.log(safeAdd(10, "5"));  // { success: true, result: 15 }
console.log(safeAdd("10", "five"));  // { success: false, error: "Both parameters must be numbers" }


