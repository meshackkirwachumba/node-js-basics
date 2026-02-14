const path = require("path");

console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log("Base name:", path.basename(__filename));
console.log("Parsed path:", path.parse(__filename));

const joinedPath = path.join("/users", "test", "mesh", "hello.txt");
console.log("Joined path:", joinedPath);

const resolvedPath = path.resolve("hello.txt");
console.log("Resolved path:", resolvedPath);

const normalizedPath = path.normalize("/users//test/../mesh/hello.txt");
console.log("Normalized path:", normalizedPath);
