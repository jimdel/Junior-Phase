# Express Review
## What is it?
- Express.js is a framework built on Node.js
  - It provides af framework for building server side web and mobile apps
- It is composed of HTTP utility methods and middlewar that is used to do a bunch of useful things like accessing/changing the request and response objects.
  - These objects represents the HTTP request & response and have many properties we can access.
- More information [can be found here](https://expressjs.com/)

# Middleware
- Middleware are functions that can access the request and response HTTP objects as well as the next function
- The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware
- Middleware functions can perform the following tasks:
  - Execute any code.
  - Make changes to the request and the response objects.
  - End the request-response cycle.
  - Call the next middleware in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function
  - Otherwise the request is left hanging
