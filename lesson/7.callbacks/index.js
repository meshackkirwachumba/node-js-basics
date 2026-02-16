const fs = require("fs");

function greetUser(name, callbackFnc) {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
  callbackFnc();
}

function displayAddress() {
  console.log("You live at 123 Main St, Anytown, USA");
}

greetUser("Alice", displayAddress);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});
