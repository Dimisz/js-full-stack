const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body><html>');
    return res.end();
  }
  else if(req.url === '/message'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><h1>Message successfully sent!</h1></body></html>');
    return res.end();
  }

});

server.listen(3000, ()=>{
  console.log(`listening on port ${PORT}...`)
});