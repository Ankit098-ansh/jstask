function sortDescending(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements and swap them if they are in the wrong order
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
sortDescending(numbers);
console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]
