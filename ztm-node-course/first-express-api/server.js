const express = require('express');

const messagesController = require('./controller/messages.controller');
const friendsController = require('./controller/friends.controller');

const app = express();
const PORT = 3000;


// logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`Request took ${delta} milliseconds`);
});

//parsing middleware
app.use(express.json());

app.post('/friends', friendsController.postFriend);

app.get('/friends', friendsController.getAllFriends);

app.get('/friends/:friendId', friendsController.getAFriend);

app.get('/messages', messagesController.getMessages);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})