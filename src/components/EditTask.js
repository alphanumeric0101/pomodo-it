import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Settings from 'material-ui/lib/svg-icons/action/settings';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Colors from 'material-ui/lib/styles/colors';

import Dialog from 'material-ui/lib/dialog';
import SelectField from 'material-ui/lib/select-field';
import TextField from 'material-ui/lib/text-field';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import CloseButton from 'material-ui/lib/svg-icons/navigation/close';

export default class EditTask extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      open: false,
      subTasks: []
    }
  }

  handleOpening = (task) => {
    this.setState({open: true, selectedTaskId: task._id, titleValue: task.title, subValue: '', durationValue: task.duration, subTasks: task.subTasks})
  }

  handleOpen = () => this.setState({open: true});
  handleSave = () => {
    this.setState({open: false});
    this.props.updateTask(this.state.selectedTaskId, this.state.titleValue, this.state.subTasks, this.state.durationValue)

  }
  handleCancel = () => this.setState({open: false, titleValue: '', subValue: '', durationValue: 25, subTasks: [] });
  handleDurationChange = (event, index, value) => this.setState({durationValue: value});
  handleTitleChange = (event) => this.setState({titleValue: event.target.value});
  handleSubChange = (event) => this.setState({subValue: event.target.value});
  saveSubTask = (event) => {
    if (event.target.value) {
        var t = this.state.subTasks
        t.push(this.state.subValue)
        this.setState({subTasks: t, subValue: ''})
      }
  };
  deleteSubTask = (event) => {
      var t = this.state.subTasks
      t.pop(event.target.key)
      this.setState({subTasks: t})
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        keyboardFocused={false}
        onClick={this.handleCancel}
      />,
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={false}
        onTouchTap={this.handleSave}
      />
    ];

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
      <Dialog
            title="Edit Task"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleCancel}
          >
            <TextField
              floatingLabelText={this.state.title}
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


    )
  }
}
