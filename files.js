// This is a JavaScript file

// Global Variables
let name = "Patrick";
const age = 25;

// Functions
function greet() {
  console.log("Hello, " + name + "!");
}

function calculateBirthYear() {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  return birthYear;
}

// Execute Code
greet();
const birthYear = calculateBirthYear();
console.log("Your birth year is: " + birthYear);
