import React from 'react';
import Paper from 'material-ui/lib/paper';
import TimePickerExampleSimple from './timeSet.js';
import TimePicker from 'material-ui/lib/time-picker/time-picker';

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Clock = () => (
    <Paper style={style} zDepth={1} circle={true}>
    	<TimePicker hintText="Set Start" />
    </Paper>
);

export default Clock;