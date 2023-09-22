const express = require('express');
const path = require('path');
const app = express()

// setup static middleware
// Middleware comes in the middle of the request and response cycle of the node.js execution. It also provides access to many functions like request and response objects.
// :)

// Response Object is passed as the second parameter to the requestLister function. The response object represents the writeable stream back to the client
// --write() Sends text or text stream to the client
// --writeHead() sends status and response headers to the client
// --end() Signals that the server should consider that the response is complete
// --getHeader() Returns the value of the specific header
// --setTimeout -Sets the timeout value of the socket to the specified value in milliseconds
// --statusCode - Sets the status code that will be sent to the client

// For the writeHead and the statusCode methods the following are acceptable: 
// 100 - 199 Information Response
// 200 - 299 Sucessful response
// 300 - 399 Redirect Message
// 400 - 499 CLient Error
// 500 - 599 Server Error

// You can find the detailed list at 
// @https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Request object is made by a client to a named host which is located on the server. The asim of the requestis to access resources on the server.
// A proper HTTP request contains the following:
// --A request line
// -- A series of HTTP header(s)
// -- A message body if needed
// Request Line: Has 3 main aspects
// -- A method like GET,UPDATE,DELETE...etc tells the server what it should do with the resource
// -- The path component identifies the resource on the server
// -- The HTTP Version number showing what specification to which the client has tried to make the message comply

/* HTTP Headers: 
HTTP headers are written on a message to provide the respitent with information about the request, the sender and the way in which the sender want to communicate with the server/recipitant.
Ex.  {'Content-Type': 'text/html'},
-host, user-agent...etc

*/
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/public/better.html'));
})

app.get('*', (req, res) => {
    res.status(404).send("404 Not Found - AND YOU SUCK TEEHEEHEEHEEHEEHEE")
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})