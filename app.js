const express = require('express'); // Includes the Express framework
const app = express();
const port = 3000; // Sets the port to 3000 (standard for express)
const fs = require('fs'); // Includes the Node.js File System Module

// GET endpoint
app.get('/api/players', (req, res) => {
    fs.readFile('./players.json', (err, data) => {
        res.status(200).send(JSON.parse(data));
    });
  });

app.listen(port, () => console.log(`Server is up and running on port: ${port}`));