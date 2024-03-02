// Function to calculate the sum of two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to calculate the difference between two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to calculate the product of two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to calculate the division of two numbers
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  }
  
  // Function to check if a number is positive
  function isPositive(num) {
    return num > 0;
  }
  
  // Function to check if a number is negative
  function isNegative(num) {
    return num < 0;
  }
  
  // Function to add a word to a string
  function addWord(str, word) {
    return str + " " + word;
  }
  
  // Example usage:
  console.log(add(5, 3)); // Output: 8
  console.log(subtract(10, 4)); // Output: 6
  console.log(multiply(3, 7)); // Output: 21
  console.log(divide(20, 5)); // Output: 4
  console.log(isPositive(10)); // Output: true
  console.log(isNegative(-7)); // Output: true
  console.log(addWord("Welcome", "to Game!")); // Output: Welcome to Game!
  
  // Adding the 'game' variable
  const game = "game";
  
  // Now you can use the 'game' variable in your code
  console.log(game); // Output: game
  