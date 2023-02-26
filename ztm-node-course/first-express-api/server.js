const express = require('express');
const path = require('path');

// routes
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`Request took ${delta} milliseconds`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
//parsing middleware
app.use(express.json());
app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends are very clever',
    caption: 'Let\'s go skiing'
  })
});


app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})