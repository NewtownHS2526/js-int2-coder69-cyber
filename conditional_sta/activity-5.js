/*
 * ACTIVITY 5: Error Handling and Edge Cases
 * 
 * Problem 1: Guard Clauses
 * Use early returns to handle edge cases
 */

function processUser(user) {
    // Your task:
    // 1. Add guard clause: if user is null/undefined, return early
    if (!user) {
        return "Error: User is null or undefined.";
    }

    // 2. Add guard clause: if user.name is missing, return early
    if (!user.name) {
        return "Error: User name is missing.";
    }

    // 3. Add guard clause: if user.age < 0, return early
    if (user.age < 0) {
        return "Error: User age cannot be negative.";
    }

    // 4. Then process valid user data
    return "Processed: " + user.name;
}

// Challenge: Rewrite processUser with guard clauses at the beginning
// Return appropriate error messages for each invalid case
console.log(processUser(null)); // "Error: User is null or undefined."
console.log(processUser({})); // "Error: User name is missing."
console.log(processUser({ name: "John", age: -1 })); // "Error: User age cannot be negative."
console.log(processUser({ name: "John", age: 25 })); // "Processed: John"


// ============================================================================
// Problem 2: Null/Undefined Checks
// Handle null and undefined values in conditionals
// ============================================================================

const data = {
    user: {
        name: "Alice",
        address: {
            city: "New York"
        }
    }
};

// Your task:
// 1. Safely access data.user.name (handle if user is null)
const userName = data?.user?.name || "Unknown";
console.log(userName); // Should print "Alice"

// 2. Safely access data.user.address.city (handle nested nulls)
const userCity = data?.user?.address?.city || "Unknown";
console.log(userCity); // Should print "New York"

// 3. Create a function 'safeGet' that safely gets nested properties
function safeGet(obj, path) {
    return path.reduce((acc, key) => acc?.[key] ?? "Unknown", obj);
}

console.log(safeGet(data, ['user', 'address', 'city'])); // Should print "New York"
console.log(safeGet(data, ['user', 'address', 'country'])); // Should print "Unknown"

// 4. Challenge: Create a function 'getUserCity' that:
//    - Takes a data object
//    - Returns city name if available
//    - Returns "Unknown" if any part of the path is null/undefined
//    - Use multiple conditional checks
function getUserCity(data) {
    return data?.user?.address?.city ?? "Unknown";
}

console.log(getUserCity(data)); // Should return "New York"
console.log(getUserCity(null)); // Should return "Unknown"


// ============================================================================
// Problem 3: Input Validation
// Validate inputs before processing
// ============================================================================

function calculateDiscount(price, discountPercent) {
    // Your task:
    // 1. Add validation: price must be a number and > 0
    if (typeof price !== 'number' || price <= 0) {
        return { success: false, error: "Invalid price. It must be a positive number." };
    }

    // 2. Add validation: discountPercent must be between 0 and 100
    if (typeof discountPercent !== 'number' || discountPercent < 0 || discountPercent > 100) {
        return { success: false, error: "Invalid discount percentage. It must be between 0 and 100." };
    }

    // 3. Return early with error message if invalid
    // 4. Calculate and return discounted price
    const discountedPrice = price * (1 - discountPercent / 100);
    return { success: true, result: discountedPrice };
}

// Challenge: Enhance calculateDiscount with:
// - Type checking (both must be numbers)
// - Range validation
// - Clear error messages for each invalid case
console.log(calculateDiscount(100, 20)); // { success: true, result: 80 }
console.log(calculateDiscount(-100, 20)); // { success: false, error: "Invalid price. It must be a positive number." }
console.log(calculateDiscount(100, 150)); // { success: false, error: "Invalid discount percentage. It must be between 0 and 100." }


// ============================================================================
// Problem 4: Complex Error Handling
// Handle multiple error scenarios
// ============================================================================

function processOrder(order) {
    // Your task: Add comprehensive validation
    // 1. Check if order exists
    if (!order) {
        return { valid: false, errors: ["Order is missing."] };
    }

    // 2. Check if order.items exists and is array with length > 0
    if (!Array.isArray(order.items) || order.items.length === 0) {
        return { valid: false, errors: ["Order items are missing or empty."] };
    }

    // 3. Check if order.total is valid number >= 0
    if (typeof order.total !== 'number' || order.total < 0) {
        return { valid: false, errors: ["Order total is invalid. It must be a number greater than or equal to 0."] };
    }

    // 4. Check if order.customer exists with required fields
    if (!order.customer || !order.customer.name || !order.customer.email) {
        return { valid: false, errors: ["Order customer details are incomplete."] };
    }

    // 5. Return early with specific error for each case
    // 6. Process valid order
    return { valid: true, errors: [] };
}

// Challenge: Create a complete validation function that:
// - Takes an order object
// - Validates all required fields
// - Returns {valid: true/false, errors: []} with detailed error messages
const order = {
    items: [{ name: "item1", quantity: 2 }],
    total: 50,
    customer: { name: "John Doe", email: "john@example.com" }
};

console.log(processOrder(order)); // { valid: true, errors: [] }

const invalidOrder = {
    items: [],
    total: -10,
    customer: { name: "John Doe" } // Missing email
};

console.log(processOrder(invalidOrder)); 
// { valid: false, errors: ["Order items are missing or empty.", "Order total is invalid. It must be a number greater than or equal to 0.", "Order customer details are incomplete."] }


