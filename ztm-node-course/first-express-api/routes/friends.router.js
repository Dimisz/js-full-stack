const express = require('express');
const friendsRouter = express.Router();
const friendsController = require('../controllers/friends.controller');

friendsRouter.use((req, res, next) => {
  console.log('ip address: ', req.ip);
  next();
});

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriendById);

module.exports = friendsRouter;