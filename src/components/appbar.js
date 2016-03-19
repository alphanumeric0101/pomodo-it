import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Settings from 'material-ui/lib/svg-icons/action/settings';

import FlatButton from 'material-ui/lib/flat-button';

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
    title={<span style={styles.title}>Pomodo-it</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={<IconButton><Settings /></IconButton>}
  />
);

export default Top;