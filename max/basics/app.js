const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000, ()=>{
  console.log(`listening on port ${PORT}...`)
});