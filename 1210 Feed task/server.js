const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/tweets', (req, res) => {
  const tweets = JSON.parse(fs.readFileSync('tweets.json'));
  res.json(tweets);
});

app.post('/tweets', (req, res) => {
  const { username, tweet } = req.body;
  const tweets = JSON.parse(fs.readFileSync('tweets.json'));
  tweets.push({ username, tweet });
  fs.writeFileSync('tweets.json', JSON.stringify(tweets));
  res.json({ message: 'Tweet added successfully' });
});

// Listen on a port
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
