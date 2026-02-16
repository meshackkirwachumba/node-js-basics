const fs = require("fs");
const path = require("path");

//create a folder if it doesn't exist
const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder path:", dataFolder);
}

//create a file and write to it synchronously
const filePath = path.join(dataFolder, "hello.txt");
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "Hello, World!");
  console.log("File created and written to:", filePath);
}

//read the file synchronously
const fileContent = fs.readFileSync(filePath, "utf-8");
console.log("File content:", fileContent);

//append to the file synchronously
fs.appendFileSync(filePath, "\nThis is an appended line.");
console.log("Appended to the file.");

//async version of the above operations
const asyncMyFolderPath = path.join(__dirname, "asyncfolder");
if (!fs.existsSync(asyncMyFolderPath)) {
  fs.mkdirSync(asyncMyFolderPath);
}

//
//create a file and write to it asynchronously asyncfolder/asynchello.txt
const asyncMyFilePath = path.join(asyncMyFolderPath, "asynchello.txt");
fs.writeFile(asyncMyFilePath, "Hello from async folder!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("Async file created and written to:", asyncMyFilePath);
  }
});

//read the file asynchronously
fs.readFile(asyncMyFilePath, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Async file content:", data);
});

//append to the file asynchronously
fs.appendFile(
  asyncMyFilePath,
  "\nThis is an appended line in async file.",
  (err) => {
    if (err) {
      console.error("Error appending to file:", err);
    } else {
      console.log("Async file appended to.");
    }
  },
);
