const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const PORT = 3000;
const app = express();

// Read the file from the local device
const filePath = './course_info.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  // Parse the JSON data
  const jsonObject = JSON.parse(data);

  // Inside the callback function, you can access and log the JSON properties
  console.log('Name:', jsonObject.name);
  console.log('GPA:', jsonObject.GPA);

  // Now you can use jsonObject in your Express routes or other logic
  app.get('/', (req, res) => {
    res.send(`Name: ${jsonObject.name}, GPA: ${jsonObject.GPA}`);
  });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
