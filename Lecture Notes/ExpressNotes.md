# Express.js Lecture Notes

## Clients and Servers
1. Client requests a resource from the server
2. Server responds with resource and sends it to the client
  1. These are roles - not technical specs

## Web Servers
- Serves data to other computers via the web
- A server is a process it doesn't have to be physical machines
  - Might be running on a laptop
  - Raspberry Pi
  - Or an enterpris e workstation

## HTTP && TCP/IP
### TCP/IP
- Sorts and directs communication between computers
  - We won't be dealing too much with this
### HTTP
- An application level communications protocol.
  - We could call it a messaging protocol.
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
- First we must `const express = require('express')` to link our page with express functions. This essentially imports the module from npm. Then we use `const app = express();` to assign the app variable the express object. We can now access all the properties/methods express provides via app.
  - ex. `app.get`, `app.use`, and a bunch more.
- Then we must have our server listen for requests it is being sent:
```javascript
 const PORTNUMBER = 3000;
 app.listen(PORTNUMBER () => {console.log('Listening on port 3000')}
```
- This allows us to wait for requests from the client.
- The above uses port 3000, this isn't super important unless we have it listen on a port that is already being used.
- We can use GET requests to request information to be sent to us from the server:
```javascript
app.get('/yolo',(req, res) => {res.send('HERE IS THE RESPONSE OUR SERVER WILL SEND, THIS CAN BE ANYTHING: A FILE, TEXT, ETC')}
```
- Special GET Request with a variable in the URI:
```javascript
app.get('/arrayOfJokes/:variableName', (req, res) => {
const variableName = req.params.variableNum;
//This can then be used in JavaScript code;
     }
```
- The above functions are request



