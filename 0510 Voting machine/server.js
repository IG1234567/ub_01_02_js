const express = require("express");
const app = express();

// Serve static files (HTML, CSS, JS, etc.) from a directory
app.use(express.static(__dirname));

// Define your routes and server logic here

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
