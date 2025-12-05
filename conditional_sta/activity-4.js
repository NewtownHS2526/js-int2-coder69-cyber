/*
 * ACTIVITY 4: Conditional Statements in Loops
 * 
 * Problem 1: Conditionals Inside Loops
 * Use conditionals to control loop behavior
 */

const numbers = [5, 12, 8, 20, 3, 15, 7];

// Your task:
// 1. Loop through numbers and log only even numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

// 2. Loop through numbers and log only numbers greater than 10
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }
}

// 3. Loop through numbers and calculate sum of positive numbers only
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sum += numbers[i];
    }
}
console.log(sum); // Should print the sum of positive numbers

// 4. Challenge: Create a function 'filterAndTransform' that:
//    - Takes an array of numbers
//    - Returns new array with only numbers > 10, each multiplied by 2
//    - Use loop with conditionals
function filterAndTransform(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            result.push(arr[i] * 2);
        }
    }
    return result;
}
console.log(filterAndTransform(numbers)); // Should return an array with numbers > 10, each multiplied by 2

// ============================================================================
// Problem 2: Break and Continue
// Control loop flow with conditionals
// ============================================================================

const scores = [85, 92, 78, 95, 88, 65, 90];

// Your task:
// 1. Loop through scores and stop when you find a score < 70 (use break)
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 70) {
        break;
    }
    console.log(scores[i]);
}

// 2. Loop through scores and skip scores < 80 (use continue)
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 80) {
        continue;
    }
    console.log(scores[i]);
}

// 3. Find the first score >= 90 and log its index
let firstPassingScoreIndex = -1;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        firstPassingScoreIndex = i;
        break;
    }
}
console.log(firstPassingScoreIndex); // Should print index of the first score >= 90

// 4. Challenge: Create a function 'findFirstPassingScore' that:
//    - Takes an array of scores and passing threshold
//    - Returns index of first passing score
//    - Returns -1 if no passing score found
//    - Use break appropriately
function findFirstPassingScore(scores, threshold) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= threshold) {
            return i;
        }
    }
    return -1;
}

console.log(findFirstPassingScore(scores, 80)); // Should return the index of the first passing score (>= 80)
console.log(findFirstPassingScore(scores, 95)); // Should return the index of the first passing score (>= 95)

// ============================================================================
// Problem 3: Nested Loops with Conditionals
// Use conditionals in nested loop structures
// ============================================================================

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Your task:
// 1. Loop through matrix and log all even numbers
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] % 2 === 0) {
            console.log(matrix[i][j]);
        }
    }
}

// 2. Loop through matrix and calculate sum of all numbers
let matrixSum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrixSum += matrix[i][j];
    }
}
console.log(matrixSum); // Should print the sum of all numbers in the matrix

// 3. Loop through matrix and find the maximum value
let max = matrix[0][0];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > max) {
            max = matrix[i][j];
        }
    }
}
console.log(max); // Should print the maximum value in the matrix

// 4. Challenge: Create a function 'findInMatrix' that:
//    - Takes a 2D array and a target value
//    - Returns {row, col} if found, null if not found
//    - Use nested loops with conditional checks
function findInMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return { row: i, col: j };
            }
        }
    }
    return null;
}

console.log(findInMatrix(matrix, 5)); // Should return { row: 1, col: 1 }
console.log(findInMatrix(matrix, 10)); // Should return null

// ============================================================================
// Problem 4: Conditional Loop Control
// Complex loop scenarios with conditionals
// ============================================================================

const students = [
    { name: "Alice", grade: 85, attendance: 95 },
    { name: "Bob", grade: 92, attendance: 88 },
    { name: "Charlie", grade: 65, attendance: 75 },
    { name: "Diana", grade: 78, attendance: 90 }
];

// Your task:
// 1. Loop through students and log names of those who passed (grade >= 70)
for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 70) {
        console.log(students[i].name);
    }
}

// 2. Loop through students and count how many have perfect attendance (100)
let perfectAttendanceCount = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].attendance === 100) {
        perfectAttendanceCount++;
    }
}
console.log(perfectAttendanceCount); // Should print the number of students with perfect attendance

// 3. Loop through students and find first student with grade < 70
let failingStudent = null;
for (let i = 0; i < students.length; i++) {
    if (students[i].grade < 70) {
        failingStudent = students[i];
        break;
    }
}
console.log(failingStudent ? failingStudent.name : "No failing student"); // Should print the name of the first student who failed

// 4. Challenge: Create a function 'analyzeStudents' that:
//    - Takes array of student objects
//    - Returns object with:
//      - passed: array of passing students (grade >= 70)
//      - failed: array of failing students
//      - excellent: array of students with grade >= 90 AND attendance >= 95
//    - Use loops with multiple conditionals
function analyzeStudents(students) {
    const result = {
        passed: [],
        failed: [],
        excellent: []
    };

    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 70) {
            result.passed.push(students[i]);
        } else {
            result.failed.push(students[i]);
        }

        if (students[i].grade >= 90 && students[i].attendance >= 95) {
            result.excellent.push(students[i]);
        }
    }

    return result;
}

console.log(analyzeStudents(students));
// Should return an object with passed, failed, and excellent arrays


