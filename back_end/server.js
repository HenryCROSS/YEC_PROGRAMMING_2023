const express = require('express');
const fs = require('fs');
const PORT = 3000;
const app = express();

// Read the file from the local device
const userPath='./student_info.json';
const userType='./user_info.json';

app.get('/login_type',function(req,res){
    fs.readFile(userType,'utf-8',function(err,data){
        if (err) {
            console.error('Can not read Json file', err);
            res.send('Error!');
            return;
          }

          const obj=JSON.parse(data);
          res.send(obj.student);
          
    })
})


app.get('/login_id', function(req, res) {
  fs.readFile(userPath, 'utf8', function(err, data) {
    if (err) {
        console.error('Can not read Json file', err);
        res.send('Error!');
        return;
      }

    const obj = JSON.parse(data);
    if(obj.id===req.id){
        res.send(obj.student.student1);
    }
      
   
  });
});


app.get('/allCourse', function(req, res) {
    fs.readFile(userPath, 'utf8', function(err, data) {
      if (err) {
          console.error('Can not read Json file', err);
          res.send('Error!');
          return;
        }
  
      const obj = JSON.parse(data);
      if(obj.id===req.id){
          res.send(obj.student.student1.allCourse);
      }
        
     
    });
  });
  



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
