/*
 * ACTIVITY 2: Logical Operators in Comparisons
 * 
 * Problem 1: Combining Comparisons with &&, ||, !
 */

const age = 25;
const hasLicense = true;
const hasInsurance = false;

// 1. Check if a person can drive: age >= 18 && hasLicense
console.log(age >= 18 && hasLicense);  // true (age >= 18 and has a license)

// 2. Check if a person needs insurance: hasLicense && !hasInsurance
console.log(hasLicense && !hasInsurance);  // true (has license but no insurance)

// 3. Check if a person can rent a car: age >= 21 && hasLicense && hasInsurance
console.log(age >= 21 && hasLicense && hasInsurance);  // false (not enough conditions met)

// 4. Challenge: Create a 'canDrive' function that checks all conditions
function canDrive(age, hasLicense, hasInsurance) {
    if (age >= 18 && hasLicense && hasInsurance) {
        return "You can drive!";
    } else {
        return "You cannot drive. Check your age, license, or insurance.";
    }
}

console.log(canDrive(age, hasLicense, hasInsurance));  // You cannot drive. Check your age, license, or insurance.


/*
 * Problem 2: Complex Logical Expressions
 * 
 * 1. Determine if it's a good day for picnic:
 *    temperature between 70-85 AND isSunny AND isWeekend
 */
const temperature = 75;
const isSunny = true;
const isWeekend = false;

console.log(temperature >= 70 && temperature <= 85 && isSunny && isWeekend);  // false (because it's not the weekend)

// 2. Determine if it's good for indoor activities:
console.log(temperature < 60 || temperature > 90 || !isSunny);  // false (it's not too cold or too hot, and it's sunny)

// 3. Challenge: Create a function 'recommendActivity' that gives recommendations
function recommendActivity(temperature, isSunny, isWeekend) {
    if (temperature >= 70 && temperature <= 85 && isSunny && isWeekend) {
        return "It's a great day for a picnic!";
    } else if (temperature < 60 || temperature > 90 || !isSunny) {
        return "It's better to stay indoors!";
    } else {
        return "It's a good day for other outdoor activities!";
    }
}

console.log(recommendActivity(temperature, isSunny, isWeekend));  // It's better to stay indoors!


/*
 * Problem 3: Comparison Operator Precedence
 * 
 * 1. Predict the result of: x < y && y < z
 */
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z);  // true (because both conditions are true)

// 2. Predict the result of: x < y || y > z
console.log(x < y || y > z);  // true (x < y is true, so || will return true)

// 3. Predict the result of: !(x > y) && z > x
console.log(!(x > y) && z > x);  // true (x > y is false, so ! makes it true, and z > x is also true)

// 4. Predict the result of: x === 5 && y !== 10 || z > 20
console.log(x === 5 && y !== 10 || z > 20);  // true (because x === 5 && y !== 10 is true)

// 5. Challenge: Add parentheses to make the logic explicit for question 4
console.log((x === 5 && y !== 10) || z > 20);  // true (with parentheses, it makes the order explicit)

// 6. Explain why operator precedence matters:
// The order of operations matters because operators like `&&` (AND) have higher precedence than `||` (OR). This means `&&` is evaluated first in expressions.


/*
 * Problem 4: Real-World Comparison Scenarios
 * 
 * 1. Check if product is affordable: price < 100
 */
const product = {
    price: 50,
    stock: 5,
    rating: 4.5,
    onSale: false
};

console.log(product.price < 100);  // true (price is less than 100)

// 2. Check if product is in stock: stock > 0
console.log(product.stock > 0);  // true (product is in stock)

// 3. Check if product is highly rated: rating >= 4.0
console.log(product.rating >= 4.0);  // true (rating is higher than 4.0)

// 4. Check if product is a good deal: (onSale === true || price < 75) && rating >= 4.0
console.log((product.onSale === true || product.price < 75) && product.rating >= 4.0);  // true (it's a good deal because the price is below 75 and it's highly rated)

// 5. Challenge: Create a 'evaluateProduct' function that gives a recommendation
function evaluateProduct(product) {
    if (product.price < 100 && product.stock > 0 && product.rating >= 4.0) {
        return "Buy";
    } else if (product.price >= 100 && product.stock > 0) {
        return "Consider";
    } else {
        return "Skip";
    }
}

console.log(evaluateProduct(product));  // Buy (good price, in stock, highly rated)

