import React from 'react';
import Add from 'material-ui/lib/svg-icons/content/add';
import AddButton from 'material-ui/lib/floating-action-button';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';

export default class addTask extends React.Component {

  	constructor(props) {
	  	  super(props);
	  	  this.state = {
	  	  	open: true,
	  	  	titleValue: null,
	  	  	subtasks: [{title: 'git init'},{title: 'git clone'}],
	  	  	durationValue: null,
	  	  };
	  	}
	
  	handleOpen = () => this.setState({open: true});
  	handleSave = () => this.setState({open: false});
  	handleClose = () => this.setState({open: false});
  	handleDurationChange = (event, index, value) => this.setState({durationValue});
  	handleTitleChange = (event) => this.setState({titleValue: event.target.value});
  	handleSave = () => {this.setState({open: false}); alert('task saved')};

	render() {
		const actions = [
      		<FlatButton
      		  label="Cancel"
      		  secondary={true}
      		  keyboardFocused={true}
      		  onClick={this.handleClose}
      		/>,
      		<FlatButton
      		  label="Ok"
      		  primary={true}
      		  keyboardFocused={true}
      		  onClick={this.handleSave}
      		/>
    ];
		const styles = {
			position: 'fixed',
			right: '5',
			bottom: '5',
			zIndex: 2000
		}

		let SubTasks =
			<div>
        	    {this.state.subtasks.map(function(data, i) {
        	        return (<TextField hintText={data.title} key={i} />)
        	    })}
        	</div>

	return (
		<div>
		<AddButton 
	        secondary={true}
	        style={styles}
	        onClick={this.handleOpen}
	    >
	      <Add />
	    </AddButton>

	    <Dialog
          title="Create New Task"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >

	        <TextField
	          hintText="Task Title"
	          onChange={this.handleTitleChange}
	        />

	        {SubTasks}


	        <SelectField value={this.state.durationValue} onChange={this.handleDurationChange} floatingLabelText="Duration">
	          <MenuItem value={1} primaryText="25min"/>
	          <MenuItem value={2} primaryText="50min"/>
	          <MenuItem value={3} primaryText="1hr 45min"/>
	          <MenuItem value={4} primaryText="4hrs"/>
	          <MenuItem value={5} primaryText="8hrs"/>
	        </SelectField>


        </Dialog>
        </div>		
    )}
}