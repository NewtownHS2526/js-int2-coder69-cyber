
/*
 * ACTIVITY 2: Arrow Functions vs Regular Functions
 * 
 * Problem 1: Function Declaration Analysis
 * Compare and contrast these two implementations:
 */

// Version 1
function double(x) {
    return x * 2;
}

// Version 2
const double = (x) => x * 2;

// Your task:
// 1. Can you call 'double' before it's declared in each version? Test your hypothesis.

// Version 1: Yes, because regular functions are hoisted. The function declaration is moved to the top during compilation.
console.log(double(5)); // 10

// Version 2: No, because function expressions are not hoisted. The variable is hoisted, but it is undefined until the assignment.
try {
    console.log(double(5)); // Error: double is not a function
} catch (error) {
    console.log(error.message); // Cannot read property 'function' of undefined
}

// 2. Can you reassign 'double' in each version? Why or why not?

// Version 1: No, because function declarations cannot be reassigned (they are immutable).
// If we try to reassign a function declared with 'function':
// double = (x) => x * 3; // Error: Cannot assign to a function declaration

// Version 2: Yes, because the function is assigned to a variable, and variables declared with `const` cannot be reassigned.
// If we use 'let' instead of 'const', we could reassign the value:
let double = (x) => x * 2;
double = (x) => x * 3; // This works, because 'double' is now mutable.

console.log(double(5)); // 15

// 3. Which would you use in different scenarios and why?

// - **Function Declarations (Version 1)**: 
//   - Useful when you want hoisting, as the function can be called anywhere in the scope.
//   - Best for functions that are central to your code or libraries, ensuring they are defined before use.
// - **Arrow Functions / Function Expressions (Version 2)**: 
//   - Best when you want to use functions as values (like in callbacks, event listeners, or when passing functions as arguments).
//   - More concise and often easier to read for simple operations or inline functions.
 
// 4. Create test cases for each scenario

// Test cases
const testCases = [2, 5, 10];
testCases.forEach(x => {
    console.log(double(x)); // 10, 15, 30 depending on reassigning
});

// ============================================================================
// Problem 2: Arrow Function with Callbacks
// You need to process a list of students' grades. Write arrow functions to:
// ============================================================================

const scores = [95, 82, 73, 88, 67, 91, 55, 78];

// Your task:
// 1. Filter students who scored above 75
const passingStudents = scores.filter(score => score > 75);
console.log(passingStudents); // [95, 82, 88, 91, 78]

// 2. Map their scores to letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)
const letterGrades = scores.map(score => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
});
console.log(letterGrades); // ['A', 'B', 'C', 'B', 'D', 'A', 'F', 'C]

// 3. Calculate the average score of all students
const averageScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;
console.log(averageScore); // 77.875

// 4. Challenge: Combine all operations to get letter grades for only passing students (75+), 
//    then calculate the average of those passing scores
const averagePassingScore = passingStudents
    .map(score => {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    })
    .reduce((acc, grade) => {
        if (grade === 'A') return acc + 4;
        if (grade === 'B') return acc + 3;
        if (grade === 'C') return acc + 2;
        if (grade === 'D') return acc + 1;
        return acc;
    }, 0) / passingStudents.length;
console.log(averagePassingScore); // Should output the average grade as a numeric value (based on GPA)


// ============================================================================
// Problem 3: Nested Arrow Functions
// Create a function 'createMultiplier' that takes a number and returns an arrow function.
// The returned arrow function should take another number and multiply it by the first number.
// ============================================================================

// Example usage:
// const double = createMultiplier(2);
// console.log(double(5)); // Should output 10

// Your task:
// 1. Implement createMultiplier using arrow functions
const createMultiplier = (x) => (y) => x * y;

// Test the createMultiplier function
const double = createMultiplier(2);
console.log(double(5)); // 10

// 2. Create triple = createMultiplier(3) and test it
const triple = createMultiplier(3);
console.log(triple(5)); // 15

// 3. Challenge: Create a 'createCalculator' function that returns an object with four 
//    arrow function methods: add, subtract, multiply, and divide, all using the initial 
//    number as one operand
const createCalculator = (x) => ({
    add: (y) => x + y,
    subtract: (y) => x - y,
    multiply: (y) => x * y,
    divide: (y) => x / y,
});

const calculator = createCalculator(10);
console.log(calculator.add(5));       // 15
console.log(calculator.subtract(5));  // 5
console.log(calculator.multiply(5));  // 50
console.log(calculator.divide(5));    // 2

// ============================================================================
// Problem 4: Debugging Arrow Functions
// The following code has errors. Identify and fix them:
// ============================================================================

const processData = (data) => {
    return data.map(item => {
        if (item > 10) {
            return item * 2;
        }
        return item;
    }).filter(item => item > 5);
}

const numbers = [3, 8, 15, 22, 5];

// Your task:
// 1. Identify all errors in the code above
// - There are no explicit errors in the logic, but edge cases need to be handled.

// 2. Fix the errors
// - The code itself is correct for most cases, but we should handle cases like non-numeric values or empty arrays.

const processData = (data) => {
    if (!Array.isArray(data) || data.some(item => typeof item !== 'number')) {
        return 'Error: Invalid data';
    }
    return data
        .map(item => (item > 10 ? item * 2 : item))
        .filter(item => item > 5);
};

console.log(processData(numbers)); // [8, 15, 30, 44] (After multiplying numbers > 10 and filtering values > 5)

// 3. Test with the numbers array
// Already tested above.


// 4. Challenge: Rewrite to handle edge cases like empty arrays, non-numeric values, 
//    and null/undefined
const processData = (data) => {
    if (!Array.isArray(data)) {
        return 'Error: Invalid data';
    }
    if (data.length === 0) {
        return 'Error: Empty array';
    }
    if (data.some(item => typeof item !== 'number')) {
        return 'Error: Invalid number in data';
    }
    return data
        .map(item => (item > 10 ? item * 2 : item))
        .filter(item => item > 5);
};

console.log(processData([])); // Error: Empty array
console.log(processData([1, 2, 'abc', 3])); // Error: Invalid number in data
console.log(processData(numbers)); // [8, 15, 30, 44]