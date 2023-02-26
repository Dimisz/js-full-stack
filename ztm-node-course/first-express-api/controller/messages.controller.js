const path = require('path');

function getMessages(req, res){
  // res.send('<h1>Messages</h1>');
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'logo.png'))
  res.render('messages', {
    title: 'Messages to my friend',
    friend: 'John Doe'
  })
}

function postMessage(req, res){
  console.log('Updating messages');
}

module.exports = {
  getMessages,
  postMessage
}