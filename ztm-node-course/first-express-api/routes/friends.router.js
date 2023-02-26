const express = require('express');

const friendsController = require('../controller/friends.controller');

const friendsRouter = express.Router();
friendsRouter.use((req, res, next) => {
  console.log(`ip address: ${req.ip}`);
  next();
});

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getAllFriends);
friendsRouter.get('/:friendId', friendsController.getAFriend);

module.exports = friendsRouter;