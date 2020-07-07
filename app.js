// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// Add video to app 
// const http = require('http');
// const fs = require('fs');     // to help serve a local video file

// // Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {
//     // Set a response type of mp4 video for the response
//     res.writeHead(200, {'Content-Type': 'video/mp4'});

//     // Read the video into a stream
//     let vidstream = fs.createReadStream('assets/Kodak-Black-Tunnel-Vision.mp4');

//     // Pipe our stream into the response
//     vidstream.pipe(res);
// });

// // Start the server on port 3000
// app.listen(3000, '127.0.0.1');
// console.log('Node server running on port 3000');

const express = require('express')

// Create Express app
const app = express()

// A sample route
app.get('/', (req, res) => res.send('Hello World!'))

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))


//Promise.byResolve. 
// Super agent - Super Test
// - Starting express or GrapgQl 
//VAnilla JS or transpile server