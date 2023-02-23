const http = require('http');
const PORT = 3000;
const friends = [
  {
    id: 0,
    name: 'Sir Isaac Newton'
  },
  {
    id: 1,
    name: 'Albert Einstein'
  },
];

const server = http.createServer((req, res) => {
  const items = req.url.split('/');
  if(items[1] === 'friends'){
    // res.writeHead(200, {
    //   'Content-Type': 'application/json',
    // });
    if(Number(items[2]) === 0){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(friends[0]));
    }
    else if(Number(items[2]) === 1){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(friends[1]));
    }
  }
  else if(items[1] === 'messages'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Isaac!</li>');
    res.write('<li>What are your thoughts on astronomy?</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
  else {
    res.statusCode = 404;
    res.end()
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});