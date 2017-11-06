# Express.js Lecture Notes

## Clients and Servers
1. Client requests a resource
2. Server responds with resource
3. These are roles - not technical specs

## Web Servers
- Serves data to other computers via the web
- Processes(running programs), not physical machines
  - Might be running on a laptop
  - Raspberry Pi
  - Or an enterprise workstation

## HTTP && TCP/IP
### TCP/IP
- Sorts and directs communication between computers
  - We won't be dealing too much with this
### HTTP
- An Application level communications protocal. You might call it a messaging protocol.
- Specifies allowable *metadata* and *content* of messages.
- Example Clients
  - Web Browswers
  - Household Apps
  - Steroes/Refridgerators
  - Mobile Apps
- **Not** a transmission protocol.
- Every request gets exactly one total response (sometimes broken into chunks)
  - It's just a message with a certain format
- Use **_curl_** in the CLI for doing HTTP requests
  - Can use it to create all sorts of HTTP requests
    - Also to see the response sent from servers
## Express.js
- A framework written in JavaScript that allows us to build a web server easily
- First we must ``const express = require('express')`` to link our page with express functions
- Then we must listen `const app = express();` & `app.listen(3000, () => {console.log('Listening on port 3000')}`
  - This allows us to wait for GET request.
- Get Request: `app.get('/yolo',(req, res) => {res.send('HERE IS THE RESPONSE)}`
  - Special GET Request with a variable in the URI:
  ```javascript
   app.get('/arrayOfJokes/:variableName', (req, res) => {
     const variableName = req.params.variableNum;
     //This can then be used in JavaScript code;
     }
  ```




