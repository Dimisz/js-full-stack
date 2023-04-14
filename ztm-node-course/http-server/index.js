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
    name: 'Nikola Tesla'
  },
]
const server = http.createServer((req, res) => {
  const reqParams = req.url.split('/');
  if(req.method === 'GET' && reqParams[1] === 'friends'){
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    if(reqParams.length >= 3){
      if(Number(reqParams[2]) < friends.length){
        res.end(JSON.stringify(friends[+reqParams[2]]));
      }
      else{
        res.end(`No friend number ${reqParams[2]}`)
      }
    }
    else{
      res.end(JSON.stringify(friends));
    }
  }
  else if(req.method === 'GET' && reqParams[1] === 'messages'){
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Messages page update</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
  else if(req.method === 'POST' && reqParams[1] === 'friends'){
    req.on('data', (data) => {
      const friend = data.toString();
      console.log('Request:', friend);
      friends.push(JSON.parse(friend));
      req.pipe(res);
    })
  }
  else{
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});