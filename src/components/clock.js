import React from 'react';
import Paper from 'material-ui/lib/paper';
import TimeSet from './timeSet.js';

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Clock = () => (
    <Paper style={style} zDepth={1} circle={true}>
    	<p>12</p>
    	<TimeSet />
    </Paper>
);

export default Clock;