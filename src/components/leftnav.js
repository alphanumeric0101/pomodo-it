import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import Menu from 'material-ui/lib/svg-icons/navigation/menu';
import Colors from 'material-ui/lib/styles/colors';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const styles = {
      menuIcon: {
        fill: 'white',
        color: 'white'
      },
    };
    return (
      <div>
        <IconButton style={styles.menuIcon} onTouchTap={this.handleToggle}><Menu color={Colors.grey50}/></IconButton>
          
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Work Day</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Exercise</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Morning</MenuItem>
        </LeftNav>
      </div>
    );
  }
}