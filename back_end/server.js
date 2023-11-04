const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const PORT = 3000;
const app = express();

// Read the file from the local device
const coursePath = './user_info.json';

app.get('/login/type', (req, res) => {
  fs.readFile(coursePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Can not read Json file', err);
      res.status(500).send('Server Error');
      return;
    }

    const jsonObject = JSON.parse(data);
    const user = req.params.user;

 
    if (user === "student" || type === "admit"||user === "educator") {
      const userData = jsonObject[user];
      res.json(userData);
    } else {
      res.status(404).send('No such a user!');
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
