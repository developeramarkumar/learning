const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('this is my first docker app!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`port running on :  ${PORT}`);
});
