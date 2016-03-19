import Top from './components/appbar.js';
import Clock from './components/clock.js';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    	<div>
    	<Top />
    	<Clock />
    	</div>
    );
  }
}
