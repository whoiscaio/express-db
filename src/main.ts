import http from 'http';

const PORT = 3000

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.end('Test')
})

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})