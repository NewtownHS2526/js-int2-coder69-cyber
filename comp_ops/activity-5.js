// ACTIVITY 5: Edge Cases and Special Comparisons

// Problem 1: NaN Comparisons (Not a Number)
const result1 = 0 / 0; // NaN
const result2 = Math.sqrt(-1); // NaN
const result3 = parseInt("not a number"); // NaN

// 1. Test: result1 === NaN (What happens?)
console.log(result1 === NaN); // false, because NaN is not equal to anything, not even itself.

// 2. Test: result1 == NaN (What happens?)
console.log(result1 == NaN); // false for the same reason.

// 3. How to check if something is NaN
// Use the built-in `isNaN()` function:
console.log(isNaN(result1)); // true, because result1 is NaN

// 4. Create a function to check if a value is a valid number:
function isValidNumber(value) {
    return typeof value === "number" && !isNaN(value); // true if it's a number and not NaN
}

console.log(isValidNumber(result1)); // false (because result1 is NaN)
console.log(isValidNumber(100)); // true (100 is a valid number)

// 5. Create a function for safe calculations:
function safeCalculation(num1, num2, operation) {
    let result;
    if (operation === '+') result = num1 + num2;
    else if (operation === '-') result = num1 - num2;
    else if (operation === '*') result = num1 * num2;
    else if (operation === '/') result = num2 === 0 ? Infinity : num1 / num2; // Prevent divide by 0
    else return null;

    if (isNaN(result) || !isFinite(result)) return null; // Return null if result is not a valid number
    return result;
}

console.log(safeCalculation(5, 0, '/')); // null (because dividing by zero is Infinity)
console.log(safeCalculation(5, 2, '+')); // 7


// Problem 2: Infinity Comparisons
const positiveInf = Infinity;
const negativeInf = -Infinity;
const largeNum = 1e308 * 2; // This is too large and becomes Infinity

// 1. Compare: positiveInf > 100
console.log(positiveInf > 100); // true (Infinity is always greater than any number)

// 2. Compare: negativeInf < -1000
console.log(negativeInf < -1000); // true (Negative Infinity is smaller than any number)

// 3. Compare: positiveInf === Infinity
console.log(positiveInf === Infinity); // true

// 4. What happens with a large number?
console.log(largeNum); // Infinity, because it's too large to be a normal number
console.log(largeNum === Infinity); // true (it's the same as Infinity)

// 5. Check if a number is finite (not Infinity or NaN)
function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
}

console.log(isFiniteNumber(100)); // true (because 100 is a normal number)
console.log(isFiniteNumber(Infinity)); // false (Infinity is not a normal number)
console.log(isFiniteNumber(NaN)); // false (NaN is not a normal number)


// Problem 3: Date Comparisons
const date1 = new Date("2024-01-15");
const date2 = new Date("2024-02-15");
const date3 = new Date("2024-01-15");

// 1. Compare: date1 < date2 (Is date1 earlier than date2?)
console.log(date1 < date2); // true

// 2. Compare: date1 === date3 (What happens? Are the two dates the same?)
console.log(date1 === date3); // false, comparing objects like this doesn’t work

// 3. Proper way to compare dates:
console.log(date1.getTime() === date3.getTime()); // true

// 4. Create checks for:
//    - If date is in the past:
function isPast(date) {
    return date < new Date(); // Compares to the current date
}

console.log(isPast(date1)); // true (if date1 is before today)

//    - If date is in the future:
function isFuture(date) {
    return date > new Date(); // Compares to the current date
}

console.log(isFuture(date2)); // true (if date2 is after today)

//    - If date is today:
function isToday(date) {
    const today = new Date();
    return date.toDateString() === today.toDateString(); // Compares the date only (not the time)
}

console.log(isToday(new Date())); // true (if today's date is the same as the current date)


// Problem 4: Complex Real-World Comparison Problem
const event = {
    name: "Conference",
    date: new Date("2024-12-15"),
    price: 150,
    capacity: 100,
    registered: 85,
    isCancelled: false
};

// Function to check event status
function checkEventStatus(event) {
    const today = new Date();
    let status = "available";
    let urgency = "low";
    let recommendation = "You can still register.";

    // Check if the event is in the past:
    if (event.date < today) {
        status = "past";
        recommendation = "This event has passed.";
    }
    // Check if the event is full:
    else if (event.registered >= event.capacity) {
        status = "full";
        urgency = "high";
        recommendation = "The event is full, you cannot register.";
    }
    // Check if the event is almost full:
    else if (event.registered >= event.capacity * 0.9) {
        urgency = "medium";
        recommendation = "Hurry, the event is almost full!";
    }

    // If the event is expensive (price > 100):
    if (event.price > 100) {
        recommendation = "Consider if the price fits your budget.";
    }

    // If the event is cancelled:
    if (event.isCancelled) {
        status = "cancelled";
        urgency = "low";
        recommendation = "The event has been cancelled.";
    }

    return {
        status: status,
        canRegister: status !== "full" && !event.isCancelled,
        urgency: urgency,
        recommendation: recommendation
    };
}

console.log(checkEventStatus(event));



