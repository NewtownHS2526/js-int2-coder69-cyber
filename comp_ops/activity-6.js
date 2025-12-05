
/*
 * ACTIVITY 6: Comparison Operators - Integration Challenge
 */

/*
 * Problem 1: Building a Validation System
 * Create a comprehensive validation system using comparisons
 */

// Validator class to validate different inputs
class Validator {
    // Method to check if email is valid (contains '@' and '.')
    isEmail(email) {
        return email.includes('@') && email.includes('.'); // Basic email check
    }

    // Method to check if age is between 0 and 150
    isAge(age) {
        return age >= 0 && age <= 150; // Age must be within this range
    }

    // Method to check if score is between 0 and 100
    isScore(score) {
        return score >= 0 && score <= 100; // Score must be within this range
    }

    // Method to check if string length is between min and max
    isStringLength(str, min, max) {
        return str.length >= min && str.length <= max; // String length check
    }

    // Method to check if number is positive
    isPositive(num) {
        return num > 0; // Number must be positive
    }

    // Method to check if a number is within a specific range
    isInRange(num, min, max) {
        return num >= min && num <= max; // Checks if number is between min and max
    }
}

// Example usage:
const validator = new Validator();
console.log(validator.isEmail("test@example.com")); // true (valid email)
console.log(validator.isAge(25)); // true (valid age)
console.log(validator.isScore(85)); // true (valid score)

/*
 * Problem 2: Building a Search/Filter System
 * Create a flexible filtering system
 */

const products = [
    { name: "Laptop", price: 999, rating: 4.5, stock: 10, category: "Electronics" },
    { name: "Phone", price: 699, rating: 4.8, stock: 5, category: "Electronics" },
    { name: "Book", price: 15, rating: 4.2, stock: 50, category: "Education" },
    { name: "Chair", price: 150, rating: 4.0, stock: 20, category: "Furniture" }
];

// Function to filter products based on different criteria
function filterProducts(products, filterCriteria) {
    return products.filter(product => {
        let match = true; // Assume product matches unless proven otherwise

        // Check for price range
        if (filterCriteria.price) {
            const [minPrice, maxPrice] = filterCriteria.price;
            match = match && product.price >= minPrice && product.price <= maxPrice;
        }
        // Check for rating
        if (filterCriteria.rating) {
            match = match && product.rating >= filterCriteria.rating;
        }
        // Check for in-stock status
        if (filterCriteria.inStock !== undefined) {
            match = match && product.stock > 0 === filterCriteria.inStock;
        }
        // Check for category
        if (filterCriteria.category) {
            match = match && product.category === filterCriteria.category;
        }

        return match; // Return true if all conditions match
    });
}

// Example usage:
const filters = { price: [100, 1000], rating: 4.0, inStock: true, category: "Electronics" };
console.log(filterProducts(products, filters)); // Filters and shows the matching products

/*
 * Problem 3: Building a Priority Queue
 * Use comparisons to prioritize items
 */

// PriorityQueue class to manage tasks with priority
class PriorityQueue {
    constructor() {
        this.queue = []; // Empty array for the queue
    }

    // Add item with priority
    addItem(item, priority) {
        this.queue.push({ item, priority });
        this.queue.sort((a, b) => b.priority - a.priority); // Sort by priority (highest first)
    }

    // Get the highest-priority item
    getHighestPriority() {
        return this.queue[0]; // First item is the highest priority
    }

    // Remove and return the highest-priority item
    removeHighest() {
        return this.queue.shift(); // Remove the first item (highest priority)
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0; // Returns true if queue is empty
    }
}

// Example usage:
const pq = new PriorityQueue();
pq.addItem("Task 1", 1); // Add Task 1 with priority 1
pq.addItem("Task 2", 5); // Add Task 2 with priority 5
pq.addItem("Task 3", 3); // Add Task 3 with priority 3

console.log(pq.getHighestPriority()); // { item: 'Task 2', priority: 5 }
console.log(pq.removeHighest()); // { item: 'Task 2', priority: 5 }
console.log(pq.isEmpty()); // false (queue still has items)

/*
 * Problem 4: Complete Comparison Challenge
 * Build a comprehensive comparison-based application
 */

const students = [
    { name: "Alice", grades: [85, 90, 88], age: 20, attendance: 95 },
    { name: "Bob", grades: [92, 88, 90], age: 19, attendance: 98 },
    { name: "Charlie", grades: [78, 82, 80], age: 21, attendance: 87 },
    { name: "Diana", grades: [95, 92, 94], age: 20, attendance: 100 }
];

// Function to calculate average grade
function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0); // Add up all grades
    return total / grades.length;  // Return the average
}

// Function to check if student is passing
function isPassing(student) {
    const avgGrade = calculateAverage(student.grades);
    return avgGrade >= 70;  // Returns true if average grade is 70 or above
}

// Function to get the top performers (top N students)
function getTopPerformers(students, count) {
    return students.sort((a, b) => calculateAverage(b.grades) - calculateAverage(a.grades)).slice(0, count);
}

// Example usage:
console.log(isPassing(students[0])); // true (Alice is passing)
console.log(getTopPerformers(students, 2)); // Top 2 performers by average grade

// Function to generate student report based on multiple criteria
function generateReport(students) {
    const passingStudents = students.filter(student => isPassing(student) && student.attendance >= 90);
    const atRiskStudents = students.filter(student => !isPassing(student) || student.attendance < 90);
    const topPerformers = getTopPerformers(students, 3);

    const averageClassPerformance = students.reduce((total, student) => total + calculateAverage(student.grades), 0) / students.length;

    const report = {
        passingStudents,
        atRiskStudents,
        topPerformers,
        averageClassPerformance
    };

    return report;
}

console.log(generateReport(students)); // Report with passing, at-risk students, and top performers

