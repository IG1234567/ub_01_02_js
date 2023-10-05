const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

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

const PORT = process.env.PORT || 3000;

// Paleisti serverį
app.listen(PORT, () => {
    console.log(`Serveris veikia portu ${PORT}`);
});
