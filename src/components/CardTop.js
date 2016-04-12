import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Settings from 'material-ui/lib/svg-icons/action/settings';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Colors from 'material-ui/lib/styles/colors';

export default class CardTop extends React.Component {

    constructor(props) {
    super(props);
  }

  render() {

    const Styles = {
      appBar: {
        background: Colors.grey500,
        height: '100%',
        position: 'relative',
        zIndex: 100
      }
    }

  return (
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
            <MenuItem primaryText="Edit" />
            <MenuItem primaryText="Add to routine" />
            <MenuItem primaryText="Discard" onTouchTap={this.props.deleteTask.bind(this, this.props.taskObj._id) }/>
          </IconMenu>
        }
      />
    )
  }
}

CardTop.propTypes = {
  taskObj: React.PropTypes.object,
  del: React.PropTypes.func,
  taskId: React.PropTypes.string
};
