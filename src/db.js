import mongoose from 'mongoose';

var taskSchema  = mongoose.Schema,
	ObjId = Schema.ObjectId;
 
var Task = new Schema({
    user_id    : String,
    task_id : ObjId,
    title    : String,
    subTasks   : [],
    updated_at : Date
});
 
mongoose.model( 'Task', Task );
mongoose.connect( 'mongodb://admin:pomodoitprivate@ds025469.mlab.com:25469/pomodoit' );

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
}