# -NodeJs-Installation-And-Basics
Installing and putting a package to use with npm is that simple!
The convenience of npm for package management and installation cannot be understated; it is one of the most important tools for Node developers. In addition to nodemon, there are many other popular packages available on npm. 
Below is a list of some of the most popular npm packages. You may already be familiar with some of these such as Axios, and others that will be introduced to you in the coming lessons. As you continue learning, explore the packages available to you!
Additionally, here is a reference for all available npm CLI commands.
The descriptions below, where available, have been provided directly from the npm package Readme.
Express
Fast, unopinionated, minimalist web framework for Node.js.
Async
Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript. Although originally designed for use with Node.js and installable via npm i async, it can also be used directly in the browser.
Lodash
Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
Axios
Promise based HTTP client for the browser and node.js
Karma
A simple tool that allows you to execute JavaScript code in multiple real browsers. The main purpose of Karma is to make your test-driven development easy, fast, and fun.
Mocha
Simple, flexible, fun JavaScript test framework for Node.js & The Browser
Moment
A JavaScript date library for parsing, validating, manipulating, and formatting dates.
Babel
Babel is a JavaScript compiler.
Socket.io
Socket.IO enables real-time bidirectional event-based communication.
Mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. 
React
React is a JavaScript library for creating user interfaces.
The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.
Redux
Redux is a predictable state container for JavaScript apps.
Jest
Delightful JavaScript Testing.
GraphQL
The JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook.
Nodemailer
Send emails from Node.js – easy as cake! 
dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
Passport
Passport is Express-compatible authentication middleware for Node.js.
...and literally millions more!


Node’s purpose is to allow developers to create back-end systems to pair with their application’s front-end. In order to do this, we need to develop a server that listens for communication from the client and returns a response.
Empty the contents of your index.js file, and follow along with the code below.
First, we want to use the require keyword to include the http module, which is built into Node (and does not need to be installed separately by npm). This module allows node to transfer data over the Hyper Text Transfer Protocol (HTTP) used by the internet.
const http = require('http');
Next, we need to define the location and port of the server. For now, we will use a local address; there are better ways to handle this, which we will explore in future lessons.
const hostname = '127.0.0.1';const port = 3000;
The createServer method of the http object allows us to define how the server will behave. The configuration below is extremely simple for example purposes, and will only ever respond with a status code of 200 (meaning “success”) and the text content “Hello World!”
The variables req and res correspond to the request and response objects of the server communications. Each of these has a variety of properties and methods that we will explore in future lessons. These abbreviations are used almost everywhere, so you should familiarize yourself with them.
const server = http.createServer((req, res) => {  res.statusCode = 200;  res.setHeader('Content-Type', 'text/plain');  res.end('Hello World!\n');});
Finally, we need to tell the server to actually listen for communications. We do this by calling the listen method of the server object we just created, and passing it the port and hostname we previously defined. It also accepts a callback function that we can use to indicate that the server is running.
server.listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`);});
Save the file, and use nodemon to start the application.
Open a web browser, and navigate to 127.0.0.1:3000 (or localhost:3000).
You should see the response being sent from the server: Hello World!
Congratulations, you just created your first Node server! Time permitting, feel free to explore the other options available to you within your Node server. For example, what happens if we change our createServer call to the following? Try it!
const server = http.createServer((req, res) => {  res.statusCode = 200;  res.setHeader('Content-Type', 'text/html');  res.write('<h1 style="color: red">Hello World!</h1>');  res.write('<p>I wonder what else we can send...</p>');  res.end();});

Part 5: Open Exploration
Using what you have learned about HTTP request routing, create at least two different routes for your application. Have the “default” route continue to render the content above.
Within those custom routes, explore your options! Be creative, and see what you can build by writing HTML to the response, reading and parsing different portions of the request, and implementing specific logic to create a unique experience.
This lab is not graded, so do not worry if your routes end up being silly, impractical, inefficient, or ineffective. This time is for you to explore the new possibilities of using JavaScript outside of the context of a web browser.
Use whatever time is available to continue your exploration. Brainstorm with your peers, reference documentation, and research the possibilities available to you.
When you begin running out of time, make sure that you comment out any code that prevents the program from running.
