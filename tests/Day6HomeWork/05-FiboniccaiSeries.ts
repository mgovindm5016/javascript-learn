function fibonacci(n: number): number {
    // First two Fibonacci numbers
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Initializing the first two Fibonacci numbers
    let prev = 0;  // F(0)
    let curr = 1;  // F(1)

    // Using the loop to compute Fibonacci number iteratively
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

// Example 1: First Fibonacci number
console.log('fibonacci(0):', fibonacci(0));
// Output: 0

// Example 2: Second Fibonacci number
console.log('fibonacci(1):', fibonacci(1));
// Output: 1

// Example 3: Typical case
console.log('fibonacci(5):', fibonacci(5));
// Output: 5

// Example 4: Larger number
console.log('fibonacci(10):', fibonacci(10));
// Output: 55

// Example 5: Even larger number
console.log('fibonacci(15):', fibonacci(15));
// Output: 610


