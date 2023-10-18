document.addEventListener('DOMContentLoaded', function () {
    const tweetForm = document.getElementById('tweet-form');
    const usernameInput = document.getElementById('username');
    const tweetInput = document.getElementById('tweet');
    const tweetsContainer = document.getElementById('tweets');
  
    // Function to load tweets from the server
    function loadTweets() {
      fetch('/tweets')
        .then(response => response.json())
        .then(data => {
          tweetsContainer.innerHTML = '';
          data.forEach(tweet => {
            const tweetDiv = document.createElement('div');
            tweetDiv.textContent = `${tweet.username}: ${tweet.tweet}`;
            tweetsContainer.appendChild(tweetDiv);
          });
        });
    }
  
    // Initial load of tweets
    loadTweets();
  
    // Add a new tweet
    tweetForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = usernameInput.value;
      const tweet = tweetInput.value;
      fetch('/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, tweet }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'Tweet added successfully') {
            usernameInput.value = '';
            tweetInput.value = '';
            loadTweets();
          }
        });
    });
  });
  