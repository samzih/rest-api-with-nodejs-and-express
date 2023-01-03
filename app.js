const express = require('express'); // Includes the Express framework
const app = express();
const port = 3000; // Sets the port to 3000 (standard for express)
const fs = require('fs'); // Includes the Node.js File System Module

app.use(express.json()); // Parses incoming JSON requests and puts the parsed data in req.body

// GET endpoint
app.get('/api/players', (req, res) => {
    fs.readFile('./players.json', (err, data) => {
        res.status(200).send(JSON.parse(data));
    });
});

// POST endpoint
app.post('/api/players', (req, res) => {
    fs.readFile('./players.json', (err, data) => {
      let json = JSON.parse(data);
      json.push(req.body);

      fs.writeFile('./players.json', JSON.stringify(json), (err) => {
        res.status(201).send(json);
      })
    });
});

app.listen(port, () => console.log(`Server is up and running on port ${port}`));