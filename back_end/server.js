const express = require('express');
const fs = require('fs');
const PORT = 3000;
const app = express();

// Read the file from the local device
const userPath='./student_info.json';
const userType='./user_info.json';

//Get the tpye of user and send the user info from user_info.json
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


//Get the id from user, then send the special info to user 
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


//After get the user, then send the whole courses' info from json
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

//send the indivial course info to user
app.get('/indivialCourse', function(req, res) {
    fs.readFile(userPath, 'utf8', function(err, data) {
      if (err) {
          console.error('Can not read Json file', err);
          res.send('Error!');
          return;
        }
  
      const obj = JSON.parse(data);
      if(obj.course.name===req.course.name){
          res.send(obj.student.student1.course1);
      }
        
     
    });
  });
//

//in the terminal, console the running status
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
