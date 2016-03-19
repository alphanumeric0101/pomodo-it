import React, { Component } from 'react';
import Top from './components/appbar.js';

export default class App extends Component {
  render() {
    return (
    	<div>
    	<Top />
    	<h1>Hello, Pidg!</h1>
    	</div>
    );
  }
}
