/*
 * ACTIVITY 1: Basic Conditional Statements
 * 
 * Problem 1: Simple if Statements
 * Practice basic conditional logic
 */

const age = 18;
const temperature = 25;

// Your task:
// 1. Write an if statement to check if age is 18 or older, log "Adult"
if (age >= 18) {
  console.log("Adult");
}

// 2. Write an if statement to check if temperature is above 30, log "Hot day"
if (temperature > 30) {
  console.log("Hot day");
}

// 3. Write an if statement to check if temperature is below 0, log "Freezing"
if (temperature < 0) {
  console.log("Freezing");
}

// 4. Challenge: Create a function 'checkAgeStatus' that categorizes age:
//    - "Child" if age < 13
//    - "Teen" if age >= 13 and age < 18
//    - "Adult" if age >= 18
function checkAgeStatus(age) {
  if (age < 13) {
    return "Child";
  } else if (age >= 13 && age < 18) {
    return "Teen";
  } else {
    return "Adult";
  }
}

console.log(checkAgeStatus(age)); // Should return "Adult"


// ============================================================================
// Problem 2: if-else Statements
// Practice decision-making with two outcomes
// ============================================================================

const score = 85;
const isMember = true;

// Your task:
// 1. Write if-else to check if score >= 70, log "Pass" or "Fail"
if (score >= 70) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 2. Write if-else to check if isMember, log "Welcome back!" or "Join now!"
if (isMember) {
  console.log("Welcome back!");
} else {
  console.log("Join now!");
}

// 3. Create a function 'checkDiscount' that:
//    - Takes price and isMember
//    - Returns price with 10% discount if member, otherwise full price
function checkDiscount(price, isMember) {
  if (isMember) {
    return price * 0.9; // Apply 10% discount
  } else {
    return price; // No discount
  }
}

console.log(checkDiscount(100, isMember)); // Should return 90

// 4. Challenge: Write a function 'gradeAssignment' that:
//    - Takes a score (0-100)
//    - Returns letter grade: A (90+), B (80-89), C (70-79), D (60-69), F (<60)
function gradeAssignment(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(gradeAssignment(score)); // Should return "B"


// ============================================================================
// Problem 3: if-else if-else Chains
// Handle multiple conditions
// ============================================================================

const time = 14; // hours in 24-hour format

// Your task:
// 1. Write if-else if-else to categorize time:
//    - "Morning" if 5 <= time < 12
//    - "Afternoon" if 12 <= time < 17
//    - "Evening" if 17 <= time < 21
//    - "Night" otherwise
if (time >= 5 && time < 12) {
  console.log("Morning");
} else if (time >= 12 && time < 17) {
  console.log("Afternoon");
} else if (time >= 17 && time < 21) {
  console.log("Evening");
} else {
  console.log("Night");
}

// 2. Create a function 'getWeatherAdvice' that:
//    - Takes temperature
//    - Returns advice: "Too cold" (< 10), "Cold" (10-15), "Cool" (16-20), 
//      "Warm" (21-25), "Hot" (26-30), "Too hot" (> 30)
function getWeatherAdvice(temperature) {
  if (temperature < 10) {
    return "Too cold";
  } else if (temperature >= 10 && temperature <= 15) {
    return "Cold";
  } else if (temperature >= 16 && temperature <= 20) {
    return "Cool";
  } else if (temperature >= 21 && temperature <= 25) {
    return "Warm";
  } else if (temperature >= 26 && temperature <= 30) {
    return "Hot";
  } else {
    return "Too hot";
  }
}

console.log(getWeatherAdvice(temperature)); // Should return "Warm"

// 3. Challenge: Write a function 'calculateShipping' that:
//    - Takes weight (in kg)
//    - Returns shipping cost: $5 (< 1kg), $10 (1-5kg), $20 (5-10kg), $50 (> 10kg)
function calculateShipping(weight) {
  if (weight < 1) {
    return 5;
  } else if (weight >= 1 && weight <= 5) {
    return 10;
  } else if (weight >= 5 && weight <= 10) {
    return 20;
  } else {
    return 50;
  }
}

console.log(calculateShipping(3)); // Should return 10


// ============================================================================
// Problem 4: Nested Conditionals
// Use conditionals inside other conditionals
// ============================================================================

const age2 = 20;
const hasLicense = true;
const hasInsurance = true;

// Your task:
// 1. Write nested if statements to check:
//    - If age >= 18, check if hasLicense
//    - If hasLicense, check if hasInsurance
//    - Log appropriate messages at each level
if (age2 >= 18) {
  if (hasLicense) {
    if (hasInsurance) {
      console.log("You can rent a car!");
    } else {
      console.log("You need insurance to rent a car.");
    }
  } else {
    console.log("You need a license to rent a car.");
  }
} else {
  console.log("You must be 18 or older to rent a car.");
}

// 2. Create a function 'canRentCar' that:
//    - Takes age, hasLicense, hasInsurance
//    - Returns true only if age >= 21 AND hasLicense AND hasInsurance
function canRentCar(age, hasLicense, hasInsurance) {
  if (age >= 21 && hasLicense && hasInsurance) {
    return true;
  } else {
    return false;
  }
}

console.log(canRentCar(age2, hasLicense, hasInsurance)); // Should return true

// 3. Challenge: Write a function 'evaluateStudent' that:
//    - Takes grade and attendance percentage
//    - If grade >= 70, check attendance:
//      - If attendance >= 90, return "Excellent"
//      - If attendance >= 80, return "Good"
//      - Else return "Needs improvement"
//    - If grade < 70, return "Failed"
function evaluateStudent(grade, attendance) {
  if (grade >= 70) {
    if (attendance >= 90) {
      return "Excellent";
    } else if (attendance >= 80) {
      return "Good";
    } else {
      return "Needs improvement";
    }
  } else {
    return "Failed";
  }
}

console.log(evaluateStudent(85, 95)); // Should return "Excellent"
