var mongoose = require('mongoose');  
exports.tasklist = function tasklist(gname, callback) {  
  var Task = mongoose.model('Task');
  Task.find(function(err, tasks) {
    if (err) {
      console.log(err);
    } else {
      console.log(tasks);
      callback("", tasks);
    }
  }); // end Task.find 
}; // end exports.Tasklist