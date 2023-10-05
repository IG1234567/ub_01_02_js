const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

// Serve static files
app.use(express.static(__dirname));

// Maršrutas, kuris atsako į GET užklausą į šakninį URL
app.get("/", (req, res) => {
    res.send("Sveiki atvykę į mano serverį!");
});

// Maršrutas, kuris atsako į POST užklausą į "/submit" URL
app.post("/submit", (req, res) => {
    res.send("Forma buvo pateikta!");
});

app.post("/register-vote", (req, res) => {
    const vote = req.body;

    // Įrašom balsą į failą naudojant 'fs' modulį
    fs.appendFile("votes.json", JSON.stringify(vote) + "\n", (err) => {
        if (err) {
            console.error("Nepavyko įrašyti balsų į failą:", err);
            res.status(500).json({ message: "Nepavyko užregistruoti balsų" });
        } else {
            console.log("Balsas užregistruotas:", vote);
            res.status(200).json({ message: "Balsas užregistruotas sėkmingai" });
        }
    });
});

// Assuming you have an array of votes
const votes = [
    { candidateId: 1 },
    { candidateId: 2 },
    { candidateId: 3 },
];

// Calculate the count of votes for each candidate
const candidateVotesCount = {};
votes.forEach((vote) => {
    const { candidateId } = vote;
    if (candidateVotesCount[candidateId]) {
        candidateVotesCount[candidateId]++;
    } else {
        candidateVotesCount[candidateId] = 1;
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

app.get("/vote-summary", (req, res) => {
    // Render the vote summary page with the calculated results
    res.sendFile(__dirname + "/vote-summary.html");
});

const PORT = process.env.PORT || 3000;

// Paleisti serverį
app.listen(PORT, () => {
    console.log(`Serveris veikia portu ${PORT}`);
});
