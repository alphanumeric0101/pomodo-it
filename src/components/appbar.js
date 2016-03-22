import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Settings from 'material-ui/lib/svg-icons/action/settings';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import LeftNavSimpleExample from './leftnav.js';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Top = () => (
  <AppBar
    title={<span style={styles.title}>Pomodo-It</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={
      <LeftNavSimpleExample />
    }
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><Settings /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  />
);

export default Top;