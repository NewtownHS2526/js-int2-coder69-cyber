/*
 * ACTIVITY 2: Ternary Operator and Logical Operators
 * 
 * Problem 1: Ternary Operator
 * Use ternary operator for simple conditionals
 */

const age = 18;
const price = 100;
const score = 75;

// Your task:
// 1. Use ternary to assign status: age >= 18 ? "Adult" : "Minor"
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Should return "Adult"

// 2. Use ternary to calculate discount: price > 50 ? price * 0.9 : price
const finalPrice = price > 50 ? price * 0.9 : price;
console.log(finalPrice); // Should return 90 (after 10% discount)

// 3. Use ternary to set message: age >= 21 ? "Can drink" : "Cannot drink"
const canDrink = age >= 21 ? "Can drink" : "Cannot drink";
console.log(canDrink); // Should return "Cannot drink"

// 4. Challenge: Convert these if-else statements to ternary:
//    if (score >= 70) {
//        result = "Pass";
//    } else {
//        result = "Fail";
//    }
const result = score >= 70 ? "Pass" : "Fail";
console.log(result); // Should return "Pass"


// ============================================================================
// Problem 2: Logical Operators in Conditionals
// Use &&, ||, ! in conditional statements
// ============================================================================

const isLoggedIn = true;
const hasPermission = false;
const isAdmin = true;

// Your task:
// 1. Check if user can access: isLoggedIn && hasPermission
const canAccess = isLoggedIn && hasPermission;
console.log(canAccess); // Should return false because hasPermission is false

// 2. Check if user can delete: isLoggedIn && (hasPermission || isAdmin)
const canDelete = isLoggedIn && (hasPermission || isAdmin);
console.log(canDelete); // Should return true because isAdmin is true

// 3. Check if user is blocked: !isLoggedIn
const isBlocked = !isLoggedIn;
console.log(isBlocked); // Should return false because isLoggedIn is true

// 4. Challenge: Create a function 'checkAccess' that:
//    - Takes isLoggedIn, hasPermission, isAdmin, isBlocked
//    - Returns access level using logical operators:
//      - "Full access" if logged in AND (hasPermission OR isAdmin) AND not blocked
//      - "Limited access" if logged in AND not blocked
//      - "No access" otherwise
function checkAccess(isLoggedIn, hasPermission, isAdmin, isBlocked) {
  if (isLoggedIn && !isBlocked) {
    if (hasPermission || isAdmin) {
      return "Full access";
    } else {
      return "Limited access";
    }
  } else {
    return "No access";
  }
}

console.log(checkAccess(isLoggedIn, hasPermission, isAdmin, false)); // Should return "Full access"


// ============================================================================
// Problem 3: Short-Circuit Evaluation
// Understand how && and || work in conditionals
// ============================================================================

const user = {
    name: "Alice",
    email: "alice@example.com"
};

// Your task:
// 1. Use && to safely access: user && user.name
const userName = user && user.name;
console.log(userName); // Should return "Alice"

// 2. Use || to provide default: user.name || "Guest"
const displayName = user.name || "Guest";
console.log(displayName); // Should return "Alice"

// 3. Combine both: user && user.email || "No email"
const userEmail = user && user.email || "No email";
console.log(userEmail); // Should return "alice@example.com"

// 4. Challenge: Create a function 'getUserDisplayName' that:
//    - Takes a user object (may be null/undefined)
//    - Returns user.name if exists, or user.email if name doesn't exist, or "Anonymous"
//    - Use short-circuit evaluation
function getUserDisplayName(user) {
  return user && user.name || user && user.email || "Anonymous";
}

console.log(getUserDisplayName(user)); // Should return "Alice"
console.log(getUserDisplayName(null)); // Should return "Anonymous"


// ============================================================================
// Problem 4: Complex Conditional Logic
// Combine multiple conditional techniques
// ============================================================================

const score = 85;
const attendance = 92;
const hasSubmittedAll = true;
const hasExtraCredit = true;

// Your task:
// 1. Determine if student passes:
//    - Score >= 70 AND attendance >= 80 AND hasSubmittedAll
const passes = score >= 70 && attendance >= 80 && hasSubmittedAll;
console.log(passes); // Should return true

// 2. Determine grade with extra credit:
//    - If score >= 90 AND attendance >= 95, add 5 points
//    - If score >= 80 AND attendance >= 90, add 3 points
//    - Use nested conditionals with logical operators
let finalGrade = score;
if (score >= 90 && attendance >= 95) {
  finalGrade += 5; // Add 5 points for extra credit
} else if (score >= 80 && attendance >= 90) {
  finalGrade += 3; // Add 3 points for extra credit
}
console.log(finalGrade); // Should return 88 (3 points added)

// 3. Challenge: Create a function 'calculateFinalGrade' that:
//    - Takes score, attendance, hasSubmittedAll, hasExtraCredit
//    - Base grade: score
//    - Penalty: -10 if attendance < 80 OR !hasSubmittedAll
//    - Bonus: +5 if hasExtraCredit AND attendance >= 95
//    - Returns final grade (0-100)
//    - Use complex conditional logic
function calculateFinalGrade(score, attendance, hasSubmittedAll, hasExtraCredit) {
  let finalGrade = score;
  
  // Apply penalty
  if (attendance < 80 || !hasSubmittedAll) {
    finalGrade -= 10;
  }

  // Apply bonus
  if (hasExtraCredit && attendance >= 95) {
    finalGrade += 5;
  }
  
  // Ensure grade is between 0 and 100
  if (finalGrade > 100) {
    finalGrade = 100;
  } else if (finalGrade < 0) {
    finalGrade = 0;
  }

  return finalGrade;
}

console.log(calculateFinalGrade(score, attendance, hasSubmittedAll, hasExtraCredit)); // Should return 88
