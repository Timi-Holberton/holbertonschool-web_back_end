// import http from 'node:http'
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is running at http://localhost:1245/');
});
