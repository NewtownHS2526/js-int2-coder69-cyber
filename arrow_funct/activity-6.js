/*
 * ACTIVITY 6: Arrow Functions - Integration and Problem Solving
 * 
 * Problem 1: Building a Data Transformer
 * Create a flexible data transformation system using arrow functions
 */

const employees = [
    { id: 1, name: "John Doe", age: 30, salary: 50000, department: "IT" },
    { id: 2, name: "Jane Smith", age: 25, salary: 60000, department: "HR" },
    { id: 3, name: "Bob Johnson", age: 35, salary: 55000, department: "IT" },
    { id: 4, name: "Alice Brown", age: 28, salary: 65000, department: "Finance" }
];

// 1. Arrow functions to:
//    - Filter employees by department
const filterByDepartment = (department) => employees.filter(emp => emp.department === department);

//    - Calculate average salary for a department
const avgSalaryByDepartment = (department) => {
    const filtered = filterByDepartment(department);
    const totalSalary = filtered.reduce((total, emp) => total + emp.salary, 0);
    return totalSalary / filtered.length;
};

//    - Give a 10% raise to employees above a certain age
const giveRaiseToOlderEmployees = (age, raisePercent = 0.1) => employees.map(emp => {
    if (emp.age > age) {
        emp.salary += emp.salary * raisePercent;
    }
    return emp;
});

//    - Get employee names in "Last, First" format
const formatNames = () => employees.map(emp => {
    const [firstName, lastName] = emp.name.split(" ");
    return `${lastName}, ${firstName}`;
});

console.log(filterByDepartment("IT"));  // Filter employees in IT
console.log(avgSalaryByDepartment("IT"));  // Calculate average salary in IT
console.log(giveRaiseToOlderEmployees(30));  // Apply raise to employees older than 30
console.log(formatNames());  // Format employee names


// 2. Challenge: Create 'analyzeDepartment' function
const analyzeDepartment = (department) => {
    const deptEmployees = filterByDepartment(department);
    const employeeCount = deptEmployees.length;
    const avgSalary = avgSalaryByDepartment(department);
    const totalBudget = deptEmployees.reduce((total, emp) => total + emp.salary, 0);
    return {
        dept: department,
        employeeCount,
        avgSalary,
        totalBudget,
        employees: deptEmployees
    };
};

console.log(analyzeDepartment("IT"));  // Get analysis for IT department


// ============================================================================
// Problem 2: Arrow Functions for Data Validation
// Build a validation system using arrow functions

// 1. Validation arrow functions:
const isRequired = value => value && value.trim() !== '';
const minLength = (str, len) => str.length >= len;
const isEmail = str => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str);
const isNumber = val => !isNaN(val);
const isPositive = num => num > 0;

// 2. Create a 'validateForm' function that takes an object and validation rules:
const validateForm = (formData, rules) => {
    let valid = true;
    const errors = {};

    for (const field in rules) {
        errors[field] = [];
        rules[field].forEach(rule => {
            if (!rule(formData[field])) {
                valid = false;
                errors[field].push(`${field} is invalid`);
            }
        });
    }

    return { valid, errors };
};

const form = {
    email: "user@example.com",
    password: "password123"
};

const rules = {
    email: [isRequired, isEmail],
    password: [isRequired, (p) => minLength(p, 8)]
};

console.log(validateForm(form, rules));  // Validate form with email and password


// 3. Challenge: Validator that returns error messages
const validateWithMessages = (formData, rules) => {
    let valid = true;
    const errors = {};

    for (const field in rules) {
        errors[field] = [];
        rules[field].forEach(rule => {
            if (!rule(formData[field])) {
                valid = false;
                errors[field].push(`${field} is invalid`);
            }
        });
    }

    return { valid, errors };
};

console.log(validateWithMessages(form, rules));  // Validate with messages


// ============================================================================
// Problem 3: Arrow Functions in Sorting and Filtering
// Implement complex sorting and filtering using arrow functions

const products = [
    { name: "Laptop", price: 999, category: "Electronics", stock: 15 },
    { name: "Phone", price: 699, category: "Electronics", stock: 8 },
    { name: "Book", price: 15, category: "Education", stock: 50 },
    { name: "Chair", price: 150, category: "Furniture", stock: 20 }
];

// 1. Arrow functions to:
//    - Sort products by price (ascending and descending)
const sortByPriceAsc = () => products.slice().sort((a, b) => a.price - b.price);
const sortByPriceDesc = () => products.slice().sort((a, b) => b.price - a.price);

//    - Sort products by multiple criteria (category, then price)
const sortByCategoryThenPrice = () => products.slice().sort((a, b) => {
    if (a.category === b.category) {
        return a.price - b.price;
    }
    return a.category.localeCompare(b.category);
});

//    - Filter products by category
const filterByCategory = (category) => products.filter(product => product.category === category);

//    - Filter products with low stock (< 10 items)
const filterLowStock = () => products.filter(product => product.stock < 10);

console.log(sortByPriceAsc());  // Sort products by price (ascending)
console.log(sortByPriceDesc());  // Sort products by price (descending)
console.log(sortByCategoryThenPrice());  // Sort by category then price
console.log(filterByCategory("Electronics"));  // Filter by Electronics category
console.log(filterLowStock());  // Filter products with low stock


// 2. Challenge: Create a 'smartFilter' function
const smartFilter = (array, criteria) => {
    return array.filter(item => {
        for (const key in criteria) {
            if (key === 'maxPrice' && item.price > criteria[key]) return false;
            if (key === 'minStock' && item.stock < criteria[key]) return false;
            if (key !== 'maxPrice' && key !== 'minStock' && item[key] !== criteria[key]) return false;
        }
        return true;
    }).sort((a, b) => a.price - b.price);
};

const criteria = { category: "Electronics", maxPrice: 800, minStock: 10 };
console.log(smartFilter(products, criteria));  // Filter and sort products based on criteria


// ============================================================================
// Problem 4: Building a Utility Library
// Create a collection of useful arrow function utilities

// 1. debounce(func, delay) - delays function execution until after delay milliseconds
const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

// 2. throttle(func, limit) - limits function execution to once per limit milliseconds
const throttle = (func, limit) => {
    let lastFunc;
    let lastTime;
    return (...args) => {
        if (!lastTime || (new Date() - lastTime) >= limit) {
            func(...args);
            lastTime = new Date();
        }
    };
};

// 3. memoize(func) - caches function results for same inputs
const memoize = (func) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
};

// 4. pipe(...functions) - composes functions left to right
const pipe = (...fns) => (x) => fns.reduce((v, fn) => fn(v), x);

// 5. compose(...functions) - composes functions right to left
const compose = (...fns) => (x) => fns.reduceRight((v, fn) => fn(v), x);

// Challenge: Test each utility with real scenarios
const expensiveCalculation = (num) => num * 2;  // Expensive calculation example
const memoizedExpensiveCalculation = memoize(expensiveCalculation);

console.log(memoizedExpensiveCalculation(5));  // First call, calculates and caches
console.log(memoizedExpensiveCalculation(5));  // Second call, returns cached result

const add5 = (x) => x + 5;
const multiplyBy2 = (x) => x * 2;
const transform = pipe(add5, multiplyBy2);
console.log(transform(3));  // Output: 16 (3 + 5 = 8, then 8 * 2 = 16)


