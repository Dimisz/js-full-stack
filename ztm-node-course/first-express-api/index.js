const express = require('express');
const app = express();

const PORT = 3000;

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
})
app.use(express.json());


app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})