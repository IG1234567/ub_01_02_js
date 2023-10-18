document.addEventListener('DOMContentLoaded', function () {
  const tweetForm = document.getElementById('tweet-form');
  const usernameInput = document.getElementById('username');
  const tweetInput = document.getElementById('tweet');
  const tweetsContainer = document.getElementById('tweets');

  // Function to load tweets from the server
  function loadTweets() {
    fetch('/tweets') // Assuming server serves the tweets at this endpoint
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          // Handle non-200 responses here, if needed.
          throw new Error('Error fetching tweets');
        }
      })
      .then(data => {
        // Clear the existing tweets
        tweetsContainer.innerHTML = '';
        
        // Display the new tweets
        data.forEach(tweet => {
          const tweetDiv = document.createElement('div');
          tweetDiv.textContent = `${tweet.username}: ${tweet.tweet}`;
          tweetsContainer.appendChild(tweetDiv);
        });
      })
      .catch(error => {
        console.error(error);
        // Handle errors here, such as displaying an error message.
      });
  }

  // Initial load of tweets
  loadTweets();

  // Add a new tweet
  tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = usernameInput.value;
    const tweet = tweetInput.value;
    
    // Create a new tweet object
    const newTweet = { username, tweet };

    // Send a POST request to your server to add the new tweet
    fetch('/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTweet),
    })
      .then(response => {
        if (response.status === 200) {
          // Tweet added successfully, reload the tweets
          loadTweets();
        } else {
          // Handle non-200 responses here, if needed.
          throw new Error('Error posting the tweet');
        }
      })
      .catch(error => {
        console.error(error);
        // Handle errors here, such as displaying an error message.
      });

    // Clear the tweet input field
    tweetInput.value = '';
  });
});
