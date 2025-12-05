/*
 * ACTIVITY 4: Comparison Operators in Conditional Logic
 * 
 * Problem 1: Using Comparisons in if Statements
 */

const userAge = 20;
const userScore = 85;
const hasMembership = true;

// 1. Write an if statement to check if user is adult (age >= 18)
if (userAge >= 18) {
    console.log("User is an adult.");
}

// 2. Write an if-else to check if score is passing (>= 70)
if (userScore >= 70) {
    console.log("User is passing.");
} else {
    console.log("User is not passing.");
}

// 3. Write nested if statements to check:
//    - If user is adult AND has membership, give discount
//    - If user is adult but no membership, show membership offer
//    - If user is not adult, show age restriction message
if (userAge >= 18) {
    if (hasMembership) {
        console.log("User gets a discount.");
    } else {
        console.log("User is an adult but no membership. Show membership offer.");
    }
} else {
    console.log("User is not an adult. Age restriction applies.");
}

// 4. Challenge: Create a 'calculateDiscount' function that:
//    - Takes age, score, hasMembership
//    - Returns discount percentage based on multiple comparisons
//    - Uses clear comparison logic
function calculateDiscount(age, score, hasMembership) {
    let discount = 0;

    if (age >= 18 && hasMembership) {
        discount = 20;  // 20% discount if adult and has membership
    } else if (age >= 18 && score >= 70) {
        discount = 10;  // 10% discount if adult and passing score
    } else if (score >= 90) {
        discount = 15;  // 15% discount for high score
    }

    return discount;
}

console.log(calculateDiscount(userAge, userScore, hasMembership));  // Should return a discount percentage


// ============================================================================
// Problem 2: Ternary Operator with Comparisons
// Use ternary operator for simple comparisons
const price = 100;
const isMember = true;

// 1. Use ternary to set discount: isMember ? 0.1 : 0
const discount = isMember ? 0.1 : 0;
console.log("Discount:", discount);

// 2. Use ternary to set status: price > 50 ? "expensive" : "affordable"
const status = price > 50 ? "expensive" : "affordable";
console.log("Price status:", status);

// 3. Create nested ternary for:
//    - If member: 20% discount
//    - Else if price > 100: 10% discount
//    - Else: 0% discount
const finalDiscount = isMember ? 0.2 : price > 100 ? 0.1 : 0;
console.log("Final discount:", finalDiscount);

// 4. Challenge: Convert a multi-condition if-else to a readable ternary chain
const discountMessage = userAge >= 18 ? 
    (hasMembership ? "Adult with membership - 20% discount" : "Adult without membership - 10% discount") : 
    "Not an adult - No discount";

console.log(discountMessage);

// 5. Explain when to use ternary vs if-else
// Ternary is great for simple, one-line conditions. Use if-else for complex conditions or multiple logic branches.


/*
 * Problem 3: Comparison in Loops
 * Use comparisons to control loop execution
 */

const numbers = [5, 10, 15, 20, 25, 30];

// 1. Use for loop to find all numbers greater than 15
let greaterThan15 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 15) {
        greaterThan15.push(numbers[i]);
    }
}
console.log("Numbers greater than 15:", greaterThan15);

// 2. Use while loop to find first number greater than 20
let i = 0;
let firstGreaterThan20;
while (i < numbers.length) {
    if (numbers[i] > 20) {
        firstGreaterThan20 = numbers[i];
        break;
    }
    i++;
}
console.log("First number greater than 20:", firstGreaterThan20);

// 3. Use forEach with comparison to count numbers between 10 and 25
let count = 0;
numbers.forEach(num => {
    if (num >= 10 && num <= 25) {
        count++;
    }
});
console.log("Numbers between 10 and 25:", count);

// 4. Challenge: Create a 'filterByRange' function that:
//    - Takes an array, min, and max
//    - Returns filtered array using comparisons
//    - Handles edge cases (min > max, empty array, etc.)
function filterByRange(arr, min, max) {
    if (!arr || arr.length === 0) return [];
    if (min > max) [min, max] = [max, min]; // Swap min and max if min is greater
    return arr.filter(num => num >= min && num <= max);
}

console.log("Filtered numbers:", filterByRange(numbers, 10, 25));


// ============================================================================
// Problem 4: Comparison-Based Sorting
// Use comparisons to sort data
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 95 }
];

// 1. Sort students by grade (ascending) using comparison in sort()
students.sort((a, b) => a.grade - b.grade);
console.log("Students sorted by grade (ascending):", students);

// 2. Sort students by grade (descending) using comparison
students.sort((a, b) => b.grade - a.grade);
console.log("Students sorted by grade (descending):", students);

// 3. Sort students by name alphabetically
students.sort((a, b) => a.name.localeCompare(b.name));
console.log("Students sorted by name:", students);

// 4. Challenge: Create a 'multiSort' function that:
//    - Takes an array and sort criteria
//    - Can sort by multiple fields (e.g., grade then name)
//    - Uses comparison operators effectively
function multiSort(arr, ...criteria) {
    return arr.sort((a, b) => {
        for (let [field, order] of criteria) {
            let compareResult = (a[field] > b[field]) ? 1 : (a[field] < b[field]) ? -1 : 0;
            if (compareResult !== 0) return order === 'asc' ? compareResult : -compareResult;
        }
        return 0;
    });
}

console.log("Students sorted by grade (ascending), then name (alphabetical):", multiSort(students, ["grade", "asc"], ["name", "asc"]));

