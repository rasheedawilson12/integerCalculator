// QuerySelector: Navigate to an HTML tag by the class name and taget is
let screen = document.querySelector(".screen");

// Once clicked/initlizied. I want the number key to show its value to the screen.

// Create a function that takes a parameter and will upload a number to the screen no matter the key that is pressed
const uploadToScreen = (number) => {
  screen.append(number);
};

// Clear Screen
// Sets the screen's innter HTML to a blank string.
const clearScreen = () => {
  screen.innerHTML = "";
};

// function and paramenters to calculate the numbers from the string input and convert to an integer data type.
// the function will calculate the integers based on the paramenters
const calculateTerms = (x, y, sign) => {
  if (sign === "+") {
    screen.innerHTML = parseInt(x) + parseInt(y);
  } else if (sign === "-") {
    screen.innerHTML = parseInt(x) - parseInt(y);
  } else if (sign === "*") {
    screen.innerHTML = parseInt(x) * parseInt(y);
  } else if (sign === "/") {
    screen.innerHTML = parseInt(x) / parseInt(y);
  } else {
    alert("ERROR!");
  }
};

// Splits the string input and seperates them into two arrays (seperated by the operator) and calcuates the answer using the calculate function
const splitInput = () => {
  let input = screen.textContent;

  console.log(input);
};
