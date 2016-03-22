import Top from './components/appbar.js';
import Clock from './components/clock.js';
import Task from './components/task.js';
import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
