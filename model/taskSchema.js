import mongoose from 'mongoose';

var taskSchema  = new mongoose.Schema({
    user_id    : String,
    task_id : Schema.ObjectId,
    title    : String,
    subTask   : [],
    updated_at : Date
})

mongoose.model( 'Task', taskSchema );
mongoose.connect( 'mongodb://admin:pomodoitprivate@ds025469.mlab.com:25469/pomodoit' );

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to mongoDB");
}