const express = require('express'); // Includes the Express framework
const app = express();
const port = 3000; // Sets the port to 3000 (standard for express)
const fs = require('fs'); // Includes the Node.js File System Module

app.use(express.json()); // Parses incoming JSON requests and puts the parsed data in req.body

// GET endpoint
app.get('/api/players', (req, res) => {
  fs.readFile('./players.json', (err, data) => {
    if (err) {
      res.status(404).send('ERROR. Could not get players!');
    } else {
      res.status(200).send(JSON.parse(data));
    }
  });
});


// POST endpoint
app.post('/api/players', (req, res) => {
  fs.readFile('./players.json', (err, data) => {

    if (err) {
      res.status(404).send('ERROR. Could not get players!');
    } else {
      let json = JSON.parse(data);
      json.push(req.body);

      fs.writeFile('./players.json', JSON.stringify(json, null, 2), (err) => {
        if (err) {
          res.status(404).send('ERROR. Could not add player!');
        } else {
          res.status(201).send(json);
        }
      });
    }
  });
});


// PUT endpoint
app.put('/api/players/:id', (req, res) => {
  fs.readFile('./players.json', (err, data) => {
    let json = JSON.parse(data);

    // Tries to find() the player id
    let player = json.find((player) => player.id == (req.params.id));

    if (!player) {
      res.status(404).send('ERROR. Player with this id does not exist!');
    } else {
      // Pick a new team for the specified id parameter
      player.team = req.body.team;

      fs.writeFile('./players.json', JSON.stringify(json, null, 2), (err) => {
        if (err) {
          res.status(404).send('ERROR. Could not modify this player!');
        } else {
          res.status(200).send(player);
        }
      });
    }
  });
});


// DELETE endpoint
app.delete('/api/players/:id', (req, res) => {
  fs.readFile('./players.json', (err, data) => {
    let json = JSON.parse(data);

    let player = json.find((player) => player.id == (req.params.id));

    if (!player) {
      res.status(404).send('ERROR. Player with this id could not be found!');
    } else {
      json.splice(json.indexOf(player), 1);
      fs.writeFile('./players.json', JSON.stringify(json, null, 2), () => {
        if (err) {
          res.status(404).send('ERROR. Could not delete this player!');
        } else {
          res.status(200).send(player);
        }
      });
    }
  });
});


app.listen(port, () => console.log(`Server is up and running on port ${port}`));