const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body><html>');
    return res.end();
  }
  else if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data', (chunk) => {
      console.log(`chunk ${chunk}`);
      body.push(chunk);
      // fs.writeFileSync('message.txt', chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(`parsed body ${parsedBody}`);
      const message = parsedBody.split('=')[1].split('+').join(' ');
      fs.writeFileSync('message.txt', message);
    })
    
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

});

server.listen(3000, ()=>{
  console.log(`listening on port ${PORT}...`)
});