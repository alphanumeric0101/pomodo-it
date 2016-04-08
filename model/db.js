var mongoose = require('mongoose');

var taskSchema  = new mongoose.Schema({
    user_id    : String,
    title    : String,
    subTasks   : [],
    duration: Number,
    updated_at : Date
});

var Task = mongoose.model( 'Task', taskSchema );
mongoose.connect( 'mongodb://admin:pomodoitprivate@ds025469.mlab.com:25469/pomodoit' );

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected to mongoDB');
});

var allTasks = db.collection('tasks');

function readAllTasks(req, res) {
  var holster = []
  allTasks.find({}).forEach(function(doc){
    holster.push(doc);    
 	}, function(){
 		res.send(holster);
 	})
}
exports.readAllTasks = readAllTasks;

function createTask(req, res) {
	Task.create({
		user_id: 'ProductiveUser',
		title: req.body.title,
		subTasks: req.body.subTasks,
		duration: req.body.duration
	}, function(err, newTask){
		if (err) return handleError(err);
	})
};
exports.createTask = createTask;

function deleteTask(req, res) {
  console.log(req);
  allTasks.findOneAndRemove({
    _id: req.id
  }, function(err, removed){
    if (err) return handleError(err);
  })
}