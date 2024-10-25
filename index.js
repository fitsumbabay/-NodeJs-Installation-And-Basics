const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
console.log("hi,Perscholas!");


// const server = http.createServer((req, res) => {
    
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World!\n");
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set default status code

//  Handle routing based on the request URL
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to the Home Page!\n");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/plain");
    res.end("About Us: Welcome to about us page.\n");
  } else if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Contact Us: Welcome to contact us page\n");
  } else {
    res.statusCode = 404; // Not Found
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found\n");
  }
});




// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.write('<h1 style="color: red">Hello World!</h1>');
//   res.write("<p>I wonder what else we can send...</p>");
//   res.end();
// });


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});