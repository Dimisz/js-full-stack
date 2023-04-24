const friends = [
  {
    id: 0,
    name: 'Albert Einstein'
  },
  {
    id: 1,
    name: 'Sir Isaac Newton'
  },
  {
    id: 2,
    name: 'Stephen Hockings'
  },
];

function postFriend(req, res){
  if(!req.body.name){
    return res.status(400).json({'error': 'need a name property'});
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length
  };
  friends.push(newFriend);
  res.json(newFriend);
};

function getFriends(req, res){
  res.json(friends);
};

function getFriendById(req, res){
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if(friend){
    res.json(friend);
  }
  else {
    res.status(404).send('No friend found');
  }
};

module.exports = {
  postFriend,
  getFriendById,
  getFriends
}