const express = require('express');
const fs = require('fs');
const PORT = 3000;
const app = express();

// Read the file from the local device
const userPath='./student_info.json';

app.get('/login_id', function(req, res) {
  fs.readFile(userPath, 'utf8', function(err, data) {
    if (err) {
        console.error('Can not read Json file', err);
        res.send('Error!');
        return;
      }

    const data = JSON.parse(data);
  
      
   
  });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
