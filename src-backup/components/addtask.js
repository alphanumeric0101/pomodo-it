import React from 'react';
import Add from 'material-ui/lib/svg-icons/content/add';
import AddButton from 'material-ui/lib/floating-action-button';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import CloseButton from 'material-ui/lib/svg-icons/navigation/close';
import Colors from 'material-ui/lib/styles/colors';

import request from 'superagent';

export default class addTask extends React.Component {

  	constructor(props) {
	  	  super(props);
	  	  this.state = {
	  	  	open: false,
	  	  	titleValue: null,
	  	  	subValue: '',
	  	  	subTasks: [],
	  	  	durationValue: 25
	  	  }
	  	}

  	handleOpen = () => this.setState({open: true});
  	handleSave = () => this.setState({open: false});
  	handleCancel = () => this.setState({open: false, titleValue: '', subValue: '', durationValue: 25, subTasks: [] });
  	handleDurationChange = (event, index, value) => this.setState({durationValue: value});
  	handleTitleChange = (event) => this.setState({titleValue: event.target.value});
  	handleSubChange = (event) => this.setState({subValue: event.target.value});

  	deleteSubTask = (event) => {
  		var t = this.state.subTasks
	  	t.pop(event.target.key)
	  	this.setState({subTasks: t})
	};
 
	saveSubTask = (event) => {
		if (event.target.value) {
		  	var t = this.state.subTasks
		  	t.push(this.state.subValue)
		  	this.setState({subTasks: t, subValue: ''})
	    }
	};

	render() {
		const actions = [
      		<FlatButton
      		  label="Cancel"
      		  secondary={true}
      		  keyboardFocused={true}
      		  onClick={this.handleCancel}
      		/>,
      		<FlatButton
      		  label="Ok"
      		  primary={true}
      		  keyboardFocused={true}
      		  onTouchTap={this.props.saveTask.bind(this, this.state.titleValue, this.state.subTasks, this.state.durationValue) }
      		/>
    ];
		const styles = {
			AddButtonStyles : {
				position: 'fixed',
				right: '5',
				bottom: '5',
				zIndex: 101
			}
		}

		let SubTasks =
        	    this.state.subTasks.map((data, i) => {
        	        return (
        	        	<ListItem 
        	        		primaryText={data} 
        	        		rightIcon={<CloseButton onClick={this.deleteSubTask} />}
        	        		key={i}
        	        		id={i}
        	        	/>
        	        )
        	    });

	return (
		<div>
			<AddButton 
		        secondary={true}
		        style={styles.AddButtonStyles}
		        onClick={this.handleOpen}
		    >
		      <Add />
		    </AddButton>

		    <Dialog
	          title="Create New Task"
	          actions={actions}
	          modal={false}
	          open={this.state.open}
	          onRequestClose={this.handleCancel}
	        >

		        <TextField
		          floatingLabelText="Title"
		          hintText="Set Title"
		          onChange={this.handleTitleChange}
		        />

		        <TextField
		          floatingLabelText="Add Sub Task"
		          hintText="Add Sub Task"
		          value={this.state.subValue}
		          onFocus={this.handleSubChange}
		          onChange={this.handleSubChange}
		          onBlur={this.saveSubTask}
		          onEnterKeyDown={this.saveSubTask}
		        />

		        <List>
		        	{SubTasks}
		        </List>

		        <SelectField value={this.state.durationValue} onChange={this.handleDurationChange} floatingLabelText="Duration">
		          <MenuItem value={25} primaryText="25min"/>
		          <MenuItem value={50} primaryText="50min"/>
		          <MenuItem value={105} primaryText="1hr 45min"/>
		          <MenuItem value={240} primaryText="4hrs"/>
		          <MenuItem value={480} primaryText="8hrs"/>
		        </SelectField>

		    </Dialog>
	    </div>		
    )}
}

addTask.propTypes = {
	saveTask: React.PropTypes.func
};