const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer(function(req, res){
  //console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;

  if(url === '/'){
    res.write('<html>');
    res.write('<body>');
    res.write('<form action="/message" method="POST"><input name="mesage" type="text"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if(url === '/message' && method === 'POST'){
    fs.writeFileSync('message.txt', 'Dummy');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

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

