var express = require('express'),
	React = require('react'),  
    db = require('./model/db'),
    bodyParser = require('body-parser');
    http = require('http'),
    path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/tasks/all', db.readAllTasks);
app.post('/tasks/createTask', db.createTask);
app.delete('/tasks/deleteTask/:id', db.deleteTask);
app.put('/tasks/updateTask/:id', db.updateTask);
//app.put('/tasks/updateTask/:id', db.updateTask);

// app.get('/', .index);
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
