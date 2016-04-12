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

import CardTop from './CardTop.js';
import Clock from './clock.js';

import Colors from 'material-ui/lib/styles/colors';

export default class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tasks: props.data}
    }

    updateTask = (taskId, t, s, d) => {this.props.updateTask(taskId, t, s, d)};
    deleteTask = (taskId) => {this.props.deleteTask(taskId)};

    render() {

      const Styles = {
        listStyle: {
          maxWidth: '60vw',
          float: 'left',
          marginTop: '2%'
        }
      }

      let taskList = this.props.data

      const Tasks =
        
        taskList.map((task, i) => {

          let subs =

            task.subTasks.map((sub, i) => {
              return (
                <ListItem
                  primaryText={sub}
                  leftCheckbox={<Checkbox/>}
                  key={i}
                />
              )
            })

          return (
              <Card style={Styles.cardStyle} key={i}>
                <CardHeader><CardTop taskObj={task} deleteTask={this.deleteTask}/></CardHeader>
                <CardText>
                  <List style={Styles.listStyle}>
                    {subs}
                  </List>
                  <Clock taskTime={task.duration}/>
                </CardText>
              </Card>
            )
        })

      return (
        <div>
        {Tasks}
        </div>
      )
    }
}