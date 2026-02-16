const httpModule = require("http");

const server = httpModule.createServer((req, res) => {
  console.log("req:", req);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World! from http module");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
