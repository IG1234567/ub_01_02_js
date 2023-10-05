const express = require("express");
const app = express();
const fs = require("fs");

// Serve static files (HTML, CSS, JS, etc.) from a directory
app.use(express.static(__dirname));

// Parse JSON request bodies
app.use(express.json());

// Maršrutas, kuris atsako į GET užklausą į šakninį URL
app.get("/", (req, res) => {
    res.send("Sveiki atvykę į mano serverį!");
});

// Maršrutas, kuris atsako į POST užklausą į "/submit" URL
app.post("/submit", (req, res) => {
    res.send("Forma buvo pateikta!");
});

// Sample array to store votes
const votes = [];

// Route to register a vote
app.post("/register-vote", (req, res) => {
    const vote = req.body;
    
    // Push the vote to the array (You can also write it to a file)
    votes.push(vote);

    // Respond with a success message or appropriate status code
    res.status(200).json({ message: "Vote registered successfully" });
});

// Route to get the vote summary
app.get("/vote-summary", (req, res) => {
    // Calculate the vote summary based on the votes array
    const candidateVotesCount = {};
    votes.forEach((vote) => {
        const { selectedCandidateId } = vote;
        if (candidateVotesCount[selectedCandidateId]) {
            candidateVotesCount[selectedCandidateId]++;
        } else {
            candidateVotesCount[selectedCandidateId] = 1;
        }
    });

    // Calculate the percentage of votes for each candidate
    const totalVotes = votes.length;
    const candidateVotesPercentage = {};
    for (const candidateId in candidateVotesCount) {
        const count = candidateVotesCount[candidateId];
        const percentage = (count / totalVotes) * 100;
        candidateVotesPercentage[candidateId] = percentage;
    }

    // Respond with the vote summary data
    res.json({
        candidateVotesCount,
        candidateVotesPercentage,
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
