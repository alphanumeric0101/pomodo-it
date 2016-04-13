import Top from './components/appbar.js';
import TaskList from './components/taskList.js';
import AddTask from './components/addtask.js';
import React, { Component } from 'react';
import request from 'superagent';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends Component {

  constructor(props) {
	  super(props);
  
	  this.state = {
	    tasks: [],  
	  };
	}

  componentWillMount(){
	this.getData();
  }

  getData = () => {
  	var self = this;
      request('/tasks/all').end(function(err, res) {
        if (err) {
          console.log(err);
        }
        else {
          self.setState({tasks: res.body});
          self.refs.addTask.handleCancel();
        }
      });
  }

  saveTask = (t, s, d) => {
  	  const postData = {
  			title: t,
			subTasks: s,
			duration: d
  		}
	  request
			.post('/tasks/createTask')
			.send(postData)
			.end();
	this.getData();
  }

  updateTask = (taskId, t, s, d) => {
  	  const postData = {
  	  	    title: t,
		    subTasks: s,
		    duration: d
		}
	  request
	  		.post('/tasks/updateTask/' + taskId)
	  		.send(postData)
	  		.end();
	this.getData();
  }

  deleteTask = (taskId) => {
  	  request
  	  		.del('/tasks/deleteTask/' + taskId)
  	  		.end();
  	this.getData();
  }

  render() {

  	const dummyData = [
          {
            title: 'git clone',
            _id: 111,
            subTasks: ['npm install', 'npm start'],
            duration: 25
          }, {
            title: 'Set Styles',
            _id: 222,
            subTasks: ['chose colors', 'import fonts'],
            duration: 25
          }
        ]
  
    return (
    	<div>
    		<Top />
      		<TaskList data={this.state.tasks} devData={dummyData} updateTask={this.updateTask} deleteTask={this.deleteTask} ref='taskList' />
      		<AddTask saveTask={this.saveTask} ref='addTask' />
    	</div>
    );
  }
}
