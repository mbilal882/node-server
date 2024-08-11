const http = require("http");
const color = require("colors");
const data = require("./data");

console.log("Hi");
console.log("Hello Muhammad Bilal".green.bgBlue);
// Server make code \/
// http
//   .createServer((req, res) => {
//     res.write("<h1>Hi Muhammad Bilal Iqbal</h1>");
//     res.end();
//   })
//   .listen(4500);

// Make a server than a Simple api

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));

    res.end();
  })
  .listen(5000);
