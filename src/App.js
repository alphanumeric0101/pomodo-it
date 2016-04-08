import Top from './components/appbar.js';
import TaskList from './components/task.js';
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
          self.refs.addTask.handleClose();
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

  deleteTask = (taskId) => {
  	  request
  	  		.post('/tasks/deleteTask')
  	  		.send(taskId)
  	  		.end();
  	this.getData();
  }

  render() {
    return (
    	<div>
    		<Top />
      		<TaskList data={this.state.tasks} delete={this.deleteTask} ref='taskList' />
      		<AddTask saveTask={this.saveTask} ref='addTask' />
    	</div>
    );
  }
}
