/*
 * ACTIVITY 1: Understanding Comparison Operators
 * 
 * Problem 1: Equality Operators (== vs ===)
 * 
 * 1. Predict the output of each comparison, then test:
 */

// 1. Testing equality operators
console.log(5 == "5");        // true (== does type coercion, so "5" becomes a number)
console.log(5 === "5");       // false (=== checks both value and type, so different types)
console.log(0 == false);      // true (0 is loosely equal to false)
console.log(0 === false);     // false (0 is a number, false is a boolean)
console.log(null == undefined); // true (they are loosely equal)
console.log(null === undefined); // false (they are different types)


// 2. Create 5 examples where == returns true but === returns false
console.log(1 == "1");         // true, but === is false because one is number and the other is string
console.log(true == 1);        // true, but === is false (true becomes 1)
console.log(false == 0);       // true, but === is false (false becomes 0)
console.log("0" == 0);         // true, but === is false (one is a string and the other is a number)
console.log([] == "");         // true, but === is false (empty array is loosely equal to empty string)


// 3. Explain when you would use == vs === in real code:
// You should **always** use `===` (strict equality) because it avoids unexpected type coercion. 
// `==` can cause bugs in your code by automatically converting types in unexpected ways.


/*
 * Problem 2: Relational Operators
 * 
 * 1. Compare ages: Is age1 less than age2? Is age1 at least 18?
 */

const age1 = 18;
const age2 = 21;

console.log(age1 < age2);   // true (18 is less than 21)
console.log(age1 >= 18);     // true (18 is at least 18)


/*
 * Problem 3: String Comparisons
 * 
 * 1. Compare: name1 < name2 (what does this mean for strings?)
 */

const name1 = "Alice";
const name2 = "Bob";

console.log(name1 < name2);  // false (alphabetically, "Alice" comes after "Bob")


/*
 * Problem 4: Comparison with Different Data Types
 * 
 * 1. Predict and test these comparisons:
 */

// Test comparison examples
console.log("10" > 9);        // true ("10" is a string, but is treated as a number when compared)
console.log("10" < 20);       // true (same reason as above)
console.log("apple" > "banana"); // false (alphabetical comparison: "a" < "b")
console.log(true > false);    // true (true is 1, false is 0)
console.log(null < 1);        // true (null is treated as 0 in comparisons)
console.log(undefined == null); // true (they are loosely equal)


/*
 * 2. Create 3 examples where type coercion leads to unexpected results
 */
console.log("5" == 5);         // true (because of type coercion: "5" becomes a number)
console.log(false == 0);       // true (false is treated as 0)
console.log([] == false);      // true (empty array is treated as false)


// 3. Explain how to avoid these issues:
// Always use `===` to avoid type coercion. This ensures both value and type must match.


/*
 * 4. Challenge: Write a 'safeCompare' function that compares two values strictly without type coercion,
 * but handles edge cases gracefully.
 */

const safeCompare = (a, b) => {
    if (a === null || b === null || a === undefined || b === undefined) {
        return false;  // return false for null or undefined values
    }
    return a === b;
};

console.log(safeCompare(5, "5"));   // false (different types)
console.log(safeCompare(null, null)); // true (both are null)
console.log(safeCompare(0, false));  // false (different types)
console.log(safeCompare(undefined, undefined)); // true (both are undefined)



