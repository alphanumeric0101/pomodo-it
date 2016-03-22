import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

import Colors from 'material-ui/lib/styles/colors';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={Colors.grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const Task = () => (
  <Card>
    <CardHeader
      title="Setup Environment"
      avatar="http://lorempixel.com/100/100/nature/"
    ><rightIconMenu />

    </CardHeader>

    <CardText>
    	<List>
    	 <ListItem
          primaryText="Clone Repo"
          secondaryText={
            <p>
              github.com/the/best/repo
            </p>
          }
          secondaryTextLines={1}
        />
        <Divider inset={false} />
        <ListItem
          primaryText="npm Install"
          secondaryText={
            <p>
            	Babel, react-hot-loader, webpack, react, etc
            </p>
          }
          secondaryTextLines={1}
        />
        <Divider inset={false} />
        <ListItem
          primaryText="Run npm start"
          secondaryText={
            <p>
              and navigtate to http://localhost:3000
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
    </CardText>
  </Card>
);

export default Task;