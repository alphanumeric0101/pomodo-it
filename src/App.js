import Top from './components/appbar.js';
import Task from './components/task.js';
import AddTask from './components/addtask.js';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    	<div>
    	<Top />
      	<Task />
      	<AddTask />
    	</div>
    );
  }
}
