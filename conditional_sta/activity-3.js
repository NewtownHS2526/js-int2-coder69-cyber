/*
 * ACTIVITY 3: Switch Statements
 * 
 * Problem 1: Basic Switch Statement
 * Use switch for multiple value comparisons
 */

const dayOfWeek = 3; // 1 = Monday, 7 = Sunday

// Your task:
// 1. Write a switch statement to log the day name based on dayOfWeek
//    - 1: "Monday", 2: "Tuesday", etc., default: "Invalid day"

switch(dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// 2. Convert this if-else chain to switch:
//    if (status === "pending") {
//        message = "Please wait";
//    } else if (status === "approved") {
//        message = "Success!";
//    } else if (status === "rejected") {
//        message = "Sorry";
//    }

const status = "approved";
let message;

switch(status) {
    case "pending":
        message = "Please wait";
        break;
    case "approved":
        message = "Success!";
        break;
    case "rejected":
        message = "Sorry";
        break;
    default:
        message = "Invalid status";
}
console.log(message);

// 3. Challenge: Create a function 'getDayType' that:
//    - Takes dayOfWeek (1-7)
//    - Returns "Weekday" (1-5) or "Weekend" (6-7) or "Invalid"
//    - Use switch with fall-through cases

function getDayType(dayOfWeek) {
    let type;

    switch(dayOfWeek) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            type = "Weekday";
            break;
        case 6:
        case 7:
            type = "Weekend";
            break;
        default:
            type = "Invalid";
    }

    return type;
}

console.log(getDayType(3)); // Should return "Weekday"
console.log(getDayType(7)); // Should return "Weekend"
console.log(getDayType(8)); // Should return "Invalid"

// ============================================================================
// Problem 2: Switch with Multiple Cases
// Use fall-through and multiple case values
// ============================================================================

const month = 2;

// Your task:
// 1. Write a switch to determine season:
//    - Dec, Jan, Feb: "Winter"
//    - Mar, Apr, May: "Spring"
//    - Jun, Jul, Aug: "Summer"
//    - Sep, Oct, Nov: "Fall"
//    - Use fall-through cases

switch(month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Fall");
        break;
    default:
        console.log("Invalid month");
}

// 2. Create a function 'getDaysInMonth' that:
//    - Takes month number (1-12)
//    - Returns number of days
//    - Handle February (28 days for simplicity)
//    - Use switch statement

function getDaysInMonth(month) {
    let days;

    switch(month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = 28; // Simplified, no leap years considered
            break;
        default:
            days = "Invalid month";
    }

    return days;
}

console.log(getDaysInMonth(2)); // Should return 28
console.log(getDaysInMonth(4)); // Should return 30
console.log(getDaysInMonth(13)); // Should return "Invalid month"

// 3. Challenge: Create a function 'getGradeRange' that:
//    - Takes letter grade (A, B, C, D, F)
//    - Returns numeric range: A (90-100), B (80-89), etc.
//    - Use switch statement
//    - Handle lowercase letters too

function getGradeRange(grade) {
    let range;

    switch(grade.toLowerCase()) {
        case 'a':
            range = "90-100";
            break;
        case 'b':
            range = "80-89";
            break;
        case 'c':
            range = "70-79";
            break;
        case 'd':
            range = "60-69";
            break;
        case 'f':
            range = "0-59";
            break;
        default:
            range = "Invalid grade";
    }

    return range;
}

console.log(getGradeRange("A")); // Should return "90-100"
console.log(getGradeRange("b")); // Should return "80-89"
console.log(getGradeRange("E")); // Should return "Invalid grade"

// ============================================================================
// Problem 3: Switch vs if-else
// Understand when to use switch vs if-else
// ============================================================================

const score = 85;
const status = "active";
const temperature = 25;

// Your task:
// 1. Rewrite this using switch:
//    if (score >= 90) {
//        grade = "A";
//    } else if (score >= 80) {
//        grade = "B";
//    } else if (score >= 70) {
//        grade = "C";
//    }

let grade;
switch(true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    default:
        grade = "F";
}

console.log(grade);

// 2. Explain: When should you use switch? When should you use if-else?

// Switch is great when you have multiple conditions based on the same variable, especially if there are many possible outcomes. 
// It's easier to read and maintain in such cases. If-else should be used for more complex conditions or if you're working with 
// comparisons that aren't directly related to a single variable, like ranges or non-equality checks.


// 3. Challenge: Create a function that takes a comparison type and two values:
//    - "equals": a === b
//    - "greater": a > b
//    - "less": a < b
//    - Use switch statement
//    - Return boolean result

function compareValues(a, b, comparisonType) {
    switch(comparisonType) {
        case "equals":
            return a === b;
        case "greater":
            return a > b;
        case "less":
            return a < b;
        default:
            return false;
    }
}

console.log(compareValues(5, 3, "greater")); // Should return true
console.log(compareValues(5, 5, "equals"));  // Should return true
console.log(compareValues(5, 8, "less"));    // Should return true
console.log(compareValues(5, 3, "less"));    // Should return false

// ============================================================================
// Problem 4: Advanced Switch Patterns
// Use switch in complex scenarios
// ============================================================================

const userRole = "editor";
const action = "delete";

// Your task:
// 1. Create a permission checker using switch:
//    - "admin" can do: "read", "write", "delete", "manage"
//    - "editor" can do: "read", "write"
//    - "viewer" can do: "read"
//    - Use nested switch statements or switch with logical operators

switch(userRole) {
    case "admin":
        if (["read", "write", "delete", "manage"].includes(action)) {
            console.log("Permission granted");
        } else {
            console.log("Invalid action");
        }
        break;
    case "editor":
        if (["read", "write"].includes(action)) {
            console.log("Permission granted");
        } else {
            console.log("Invalid action");
        }
        break;
    case "viewer":
        if (action === "read") {
            console.log("Permission granted");
        } else {
            console.log("Invalid action");
        }
        break;
    default:
        console.log("Invalid role");
}

// 2. Challenge: Create a function 'checkPermission' that:
//    - Takes userRole and action
//    - Returns true/false using switch statements
//    - Handle invalid roles/actions

function checkPermission(userRole, action) {
    switch(userRole) {
        case "admin":
            return ["read", "write", "delete", "manage"].includes(action);
        case "editor":
            return ["read", "write"].includes(action);
        case "viewer":
            return action === "read";
        default:
            return false;
    }
}

console.log(checkPermission

