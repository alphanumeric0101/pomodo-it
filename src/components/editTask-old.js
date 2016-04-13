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

export default class CardTop extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      open: false,
      titleValue: props.taskObj.title,
      subValue: '',
      subTasks: props.taskObj.subTasks,
      durationValue: props.taskObj.duration,
    }
  }

  handleOpen = () => this.setState({open: true});
  handleSave = () => this.setState({open: false});
  handleCancel = () => this.setState({open: false, titleValue: '', subValue: '', durationValue: 25, subTasks: [] });
  handleDurationChange = (event, index, value) => this.setState({durationValue: value});
  handleTitleChange = (event) => this.setState({titleValue: event.target.value});
  handleSubChange = (event) => this.setState({subValue: event.target.value});

  render() {

    const Styles = {
      appBar: {
        background: Colors.grey500,
        height: '100%',
        position: 'relative',
        zIndex: 100
      }
    }

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
        onTouchTap={ this.props.updateTask(this.state.taskUnderEdit, this.state.titleValue, this.state.subTasks, this.state.durationValue) }
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
      <AppBar
        title={<span>{this.props.taskObj.title}</span>}
        style={Styles.appBar}
        showMenuIconButton={false}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Edit" onTouchTap={this.handleOpen}/>
            <MenuItem primaryText="Add to routine" />
            <MenuItem primaryText="Discard" onTouchTap={this.props.del.bind(this, this.props.taskId) }/>
          </IconMenu>
        }
    />

      <Dialog
            title="Edit Task"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleCancel}
          >

            <TextField
              floatingLabelText="Title"
              hintText={this.props.taskObj.title}
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

CardTop.propTypes = {
  taskObj: React.PropTypes.object,
  updateTask: React.PropTypes.func,
  del: React.PropTypes.func,
  taskId: React.PropTypes.string
};
