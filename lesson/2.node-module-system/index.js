const firstModule = require("./first-module");

const result1 = firstModule.add(5, 3);
console.log(`Addition result: ${result1}`);
const result2 = firstModule.subtract(10, 4);
console.log(`Subtraction result: ${result2}`);

const result3 = firstModule.divide(20, 5);
console.log(`Division result: ${result3}`);

//handle error gracefully
try {
  console.log("trying to divide by zero...");
  const result4 = firstModule.divide(10, 0);
  console.log(`Division by zero result: ${result4}`);
} catch (error) {
  console.log("Error:", error.message);
}
