const http = require('http');
const PORT = 3000;

const friends = [
  {
    id: 1,
    name: 'Sir Isaac Newton'
  },
  {
    id: 2,
    name: 'Albert Einstein'
  },
  {
    id: 3,
    name: 'Thomas Edison'
  },
  {
    id: 4,
    name: 'Marie Curie'
  }
];

const server = http.createServer();

server.on('request', (req, res) => {
  const items = req.url.split('/');
  if(req.method === 'POST' && items[1] === 'friends'){
    req.on('data', (data) => {
      const friend = data.toString();
      console.log('Request: ', friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  }
  else if(req.method === 'GET' && items[1] === 'friends'){
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    if(items.length === 3){
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    }
    else{
      res.end(JSON.stringify(friends));
    }
  }
  else if(req.method === 'GET' && items[1] === 'messages'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Messages</h1></body></html>');
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Page Not Found</h1></body></html>');
  }
  
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});