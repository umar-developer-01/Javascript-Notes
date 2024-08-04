// Map

const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
console.log(numbers); // [1, 2, 3, 4, 5] (original array remains unchanged)


// ForEach 

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

// Using forEach to push each doubled number to the new array
numbers.forEach(number => {
  doubledNumbers.push(number * 2);
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (original array remains unchanged)