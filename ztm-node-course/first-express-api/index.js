const express = require('express');
const app = express();

const PORT = 3000;

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
})

app.use(express.json());

app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriendById);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})