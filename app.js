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

    fs.writeFile('./players.json', JSON.stringify(json, null, 2), (err) => {
      res.status(201).send(json);
    });
  });
});

// PUT endpoint
app.put('/api/players/:id', (req, res) => {
  fs.readFile('./players.json', (err, data) => {
    let json = JSON.parse(data);

    // Tries to find() the player id
    let player = json.find((player) => player.id == (req.params.id));

    // Pick a new team for the specified id parameter
    player.team = req.body.team;

    fs.writeFile('./players.json', JSON.stringify(json, null, 2), (err) => {
      res.status(200).send(player);
    });
  });
});

// DELETE endpoint
app.delete('/api/players/:id', (req, res) => {
  fs.readFile('./players.json', (err, data) => {
    let json = JSON.parse(data);

    let player = json.find((player) => player.id == (req.params.id));

    json.splice(json.indexOf(player), 1);
    fs.writeFile('./players.json', JSON.stringify(json, null, 2), () => {
      res.status(200).send(player);
    });
  });
});

app.listen(port, () => console.log(`Server is up and running on port ${port}`));