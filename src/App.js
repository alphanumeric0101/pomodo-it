import Top from './components/appbar.js';
import Task from './components/task.js';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    	<div>
    	<Top />
      	<Task />
    	</div>
    );
  }
}
