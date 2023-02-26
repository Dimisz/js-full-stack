const express = require('express');

const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0, 
    name: 'Albert Einstein'
  },
  {
    id: 1, 
    name: 'Sir Isaac Newton'
  }
];

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

app.post('/friends', (req, res) => {
  if(!req.body.name) {
    res.status(400).json({
      error: 'Missing friend name'
    });
  }
  else {
    const newFriend = {
      name: req.body.name,
      id: friends.length
    };
    friends.push(newFriend);
    res.json(newFriend);
  }
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/messages', (req, res) => {
  res.send('<h1>Messages</h1>');
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if(friend){
    res.status(200).json(friend);
  }
  else {
    res.status(404).json({
      error: 'Friend does not exist'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})