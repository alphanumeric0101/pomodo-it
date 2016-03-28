import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Settings from 'material-ui/lib/svg-icons/action/settings';
import AddButton from 'material-ui/lib/floating-action-button';

import Add from 'material-ui/lib/svg-icons/content/add';

import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import Nav from './leftnav.js';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
  add: {
  }
};

const Top = () => (
  <AppBar
    title={<span style={styles.title}>Pomodo-It</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={
      <Nav />
    }
    iconElementRight={
      <IconButton><Settings /></IconButton>
  }

  />
);

export default Top;