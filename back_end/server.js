const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const PORT = 3000;
const app = express();

// Read the file from the local device
const userPath = './user_info.json';
const coursePath='./course_info.json';

app.get('/login/id', (req, res) => {
  fs.readFile(userPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Can not read Json file', err);
      res.send('Error');
      return;
    }

    const jsonObject = JSON.parse(data);

    const id =data.users.id.find(function(obj) {
        if (obj.id === req.id ) {
            const userData = jsonObject[user];
            res.json(userData);
        } else {
          res.json({success:false});
        }
      });
   
  });
});

app.get('/login/id', (req, res) => {
    fs.readFile(userPath, 'utf8', (err, data) => {
        
          
        });
  });

app.get('/allCourse', (req, res) => {
    fs.readFile(coursePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Can not read Json file', err);
        res.send('Error');
        return;
      }
  
      const jsonObject = JSON.parse(data);
      const course = req.params.course;
  
   
      if (user === "student" || type === "admit"||user === "educator") {
        const userData = jsonObject[user];
        res.json(userData);
      } else {
        res.status(404).send('No such a user!');
      }
    });
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
