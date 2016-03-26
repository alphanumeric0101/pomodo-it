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
import Checkbox from 'material-ui/lib/checkbox';

import CardTop from './taskTop.js';
import Clock from './clock.js';

import Colors from 'material-ui/lib/styles/colors';

const Styles = {
  listStyle: {
    width: '60vw',
    float: 'left',
    marginTop: '2%'
    },
  cardStyle: {
    },
  }

const Task = () => (
  <div>
  <Card style={Styles.cardStyle}>
      <CardHeader><CardTop taskTitle={'Setup Environment'}/></CardHeader>
      <CardText>
        <List style={Styles.listStyle}>
         <ListItem
            primaryText="Clone Repo"
            style={Styles.listItemStyle}
            leftCheckbox={<Checkbox />}
          />
          <Divider inset={false} />
          <ListItem
            primaryText="npm install"
            style={Styles.listItemStyle}  
            leftCheckbox={<Checkbox />}
          >
          </ListItem>
          <Divider inset={false} />
          <ListItem
            primaryText="Run npm start and navigate to localhost"
            style={Styles.listItemStyle}
            leftCheckbox={<Checkbox />}
          />
        </List>
        <Clock taskTime={25}/>
      </CardText>
  </Card>

  <Card style={Styles.cardStyle}>
      <CardHeader><CardTop taskTitle={'Build App Bar'}/></CardHeader>
      <CardText>
        <List style={Styles.listStyle}>
         <ListItem
            primaryText="Choose Color"
            style={Styles.listItemStyle}
            leftCheckbox={<Checkbox />}
          />
          <Divider inset={false} />
          <ListItem
            primaryText="Configure LeftNav component"
            style={Styles.listItemStyle}  
            leftCheckbox={<Checkbox />}
          >
          </ListItem>
          <Divider inset={false} />
          <ListItem
            primaryText="Define available settings options"
            style={Styles.listItemStyle}
            leftCheckbox={<Checkbox />}
          />
        </List>
        <Clock taskTime={25}/>
      </CardText>
  </Card>
  </div>
);

export default Task;