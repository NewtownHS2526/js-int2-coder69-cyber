/*
 * ACTIVITY 6: Conditional Statements - Integration Challenge
 * 
 * Problem 1: Building a Decision Tree
 * Create a complex decision-making system
 */

const user = {
    age: 25,
    isMember: true,
    purchaseAmount: 150,
    hasCoupon: true
};

// Your task:
// Create a function 'calculateFinalPrice' that:
function calculateFinalPrice(user) {
    let basePrice = user.purchaseAmount;

    // 1. Age discount: 10% if age >= 65
    const ageDiscount = user.age >= 65 ? 0.10 : 0;
    
    // 2. Member discount: 5% if isMember
    const memberDiscount = user.isMember ? 0.05 : 0;
    
    // 3. Coupon discount: 15% if hasCoupon
    const couponDiscount = user.hasCoupon ? 0.15 : 0;
    
    // 4. Large purchase discount: 10% if purchaseAmount > 200
    const largePurchaseDiscount = user.purchaseAmount > 200 ? 0.10 : 0;

    // 5. Only one discount can apply (highest one)
    let discount = Math.max(ageDiscount, memberDiscount, couponDiscount, largePurchaseDiscount);

    // Exception: member discount stacks with one other discount
    if (user.isMember && (couponDiscount > 0 || largePurchaseDiscount > 0)) {
        discount = Math.max(memberDiscount + Math.max(couponDiscount, largePurchaseDiscount), discount);
    }

    // Calculate the final price with the highest applicable discount
    const finalPrice = basePrice * (1 - discount);

    // Ensure the minimum price is $10
    const finalAmount = Math.max(finalPrice, 10);

    // Return detailed breakdown
    const breakdown = {
        original: basePrice,
        discounts: discount * 100,  // in percentage
        final: finalAmount,
        savings: basePrice - finalAmount
    };

    return breakdown;
}

// Example Usage
console.log(calculateFinalPrice(user));
/* Example output:
{
    original: 150,
    discounts: 15,   // 15% discount
    final: 127.5,    // Final price after discount
    savings: 22.5    // Savings from the original price
}
*/


// ============================================================================
// Problem 2: State Machine
// Implement a simple state machine using conditionals
// ============================================================================

// Your task:
// Create a 'TrafficLight' state machine:

function changeState(currentState) {
    if (currentState === "red") return "green";
    if (currentState === "green") return "yellow";
    if (currentState === "yellow") return "red";
    return currentState;  // If invalid state, return the current state
}

function canGo(currentState) {
    return currentState === "green";
}

// Example usage
console.log(changeState("red"));    // "green"
console.log(changeState("green"));  // "yellow"
console.log(changeState("yellow")); // "red"
console.log(canGo("green"));       // true
console.log(canGo("red"));         // false


// ============================================================================
// Problem 3: Conditional-Based Routing
// Create a routing system using conditionals
// ============================================================================

const routes = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/products": "Products"
};

// Your task:
// 1. Create function 'getPage(path)' that:
function getPage(path) {
    if (routes[path]) {
        return routes[path];
    } else {
        return "404 - Not Found";
    }
}

// Example usage
console.log(getPage("/"));           // "Home"
console.log(getPage("/about"));      // "About"
console.log(getPage("/nonexistent"));// "404 - Not Found"

// 2. Enhance to handle query parameters:
function getPageWithQuery(path) {
    if (path.includes("?")) {
        const [route, query] = path.split("?");
        if (routes[route]) {
            const queryParams = new URLSearchParams(query);
            return `${routes[route]} - Query: ${queryParams}`;
        }
    }
    return getPage(path);
}

// Example usage
console.log(getPageWithQuery("/products?category=electronics")); // "Products - Query: category=electronics"

// 3. Challenge: Create a 'Router' that:
//    - Handles multiple routes with conditionals
//    - Supports route parameters: "/user/:id"
function Router(path, isAuthenticated) {
    const routeMatch = /\/user\/(\d+)/.exec(path);
    if (routeMatch) {
        return `User Profile: ID = ${routeMatch[1]}`;
    }

    if (!isAuthenticated && (path === "/products" || path === "/profile")) {
        return "403 - Forbidden: Authentication required";
    }

    return getPage(path);
}

// Example usage
console.log(Router("/user/123", false));  // "User Profile: ID = 123"
console.log(Router("/products", true));   // "Products"
console.log(Router("/profile", false));   // "403 - Forbidden: Authentication required"


// ============================================================================
// Problem 4: Complete Conditional System
// Build a comprehensive system using all conditional techniques
// ============================================================================

const library = {
    books: [
        { title: "Book A", available: true, genre: "Fiction", rating: 4.5 },
        { title: "Book B", available: false, genre: "Non-Fiction", rating: 4.0 },
        { title: "Book C", available: true, genre: "Fiction", rating: 4.8 },
        { title: "Book D", available: true, genre: "Science", rating: 3.5 }
    ],
    members: [
        { id: 1, name: "Alice", type: "student", booksBorrowed: 2 },
        { id: 2, name: "Bob", type: "faculty", booksBorrowed: 5 }
    ]
};

// Your task:
// Create a complete 'LibrarySystem' with functions using conditionals:

function findAvailableBooks(genre = null, minRating = 0) {
    return library.books.filter(book => {
        return book.available &&
            (!genre || book.genre === genre) &&
            book.rating >= minRating;
    });
}

console.log(findAvailableBooks("Fiction", 4));  // Should return "Book C"

// 2. 'canBorrowBook(memberId, bookTitle)'
function canBorrowBook(memberId, bookTitle) {
    const member = library.members.find(m => m.id === memberId);
    if (!member) return { canBorrow: false, reason: "Member not found." };

    const book = library.books.find(b => b.title === bookTitle);
    if (!book) return { canBorrow: false, reason: "Book not found." };
    if (!book.available) return { canBorrow: false, reason: "Book is not available." };

    const borrowingLimit = member.type === "student" ? 3 : 10;
    if (member.booksBorrowed >= borrowingLimit) {
        return { canBorrow: false, reason: `Borrowing limit reached. Max: ${borrowingLimit}` };
    }

    return { canBorrow: true, reason: "" };
}

console.log(canBorrowBook(1, "Book A"));  // { canBorrow: true, reason: "" }
console.log(canBorrowBook(1, "Book B"));  // { canBorrow: false, reason: "Book is not available." }

// 3. 'recommendBooks(memberId)'
function recommendBooks(memberId) {
    const member = library.members.find(m => m.id === memberId);
    if (!member) return [];

    const preferredGenre = member.type === "student" ? "Fiction" : "Non-Fiction";  // Simple preference logic
    const recommended = findAvailableBooks(preferredGenre, 4);  // Only recommend books with rating >= 4
    return recommended.slice(0, 3);  // Top 3 recommendations
}

console.log(recommendBooks(1));  // Recommend top 3 Fiction books with rating >= 4

// Challenge: Create a complete 'borrowBook' function:
function borrowBook(memberId, bookTitle) {
    const member = library.members.find(m => m.id === memberId);
    if (!member) return "Error: Member not found.";
    
    const book = library.books.find(b => b.title === bookTitle);
    if (!book) return "Error: Book not found.";
    if (!book.available) return "Error: Book is not available.";
    
    const { canBorrow, reason } = canBorrowBook(memberId, bookTitle);
    if (!canBorrow) return `Error: ${reason}`;
    
    // Borrow the book
    book.available = false;
    member.booksBorrowed += 1;

    return `Success: ${bookTitle} borrowed by ${member.name}.`;
}

console.log(borrowBook(1, "Book A"));  // "Success: Book A borrowed by Alice."
console.log(borrowBook(1, "Book B"));  // "Error: Book is not available."
console.log(borrowBook(1, "Book C"));  // "Success: Book C borrowed by Alice."


