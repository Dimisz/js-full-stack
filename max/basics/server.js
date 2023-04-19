const http = require('http');
const PORT = 3000;

const server = http.createServer(function(req, res){
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>My first page</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

