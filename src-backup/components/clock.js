import React from 'react';
import Paper from 'material-ui/lib/paper';
import CircularProgress from 'material-ui/lib/circular-progress';
import Colors from 'material-ui/lib/styles/colors'; 
import IconButton from 'material-ui/lib/icon-button';
import PlayCircle from 'material-ui/lib/svg-icons/av/play-circle-outline';
import Restore from 'material-ui/lib/svg-icons/action/restore';
import Pause from 'material-ui/lib/svg-icons/av/pause-circle-outline';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 100,
      taskTime: 0,
      interval: 100 / this.props.taskTime,
      status: 'ready'
    };
  }

  componentDidMount() {
    this.setState({taskTime: this.props.taskTime})
    // this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  pauseProgress = () => {
    clearTimeout(this.timer);
    this.setState({status: 'paused'})
  }

  restart = () => {
    clearTimeout(this.timer);
    this.setState({status: 'ready', completed: 100, taskTime: this.props.taskTime})
  }

  pause = () => {
    clearTimeout(this.timer);
    this.setState({status: 'paused'})
  }

  startProgress = () => {
    if (this.state.status === 'ready'){
      this.setState({completed: 0, status: 'active'});
      this.timer = setTimeout(() => this.progress(this.state.interval), 1000);
    }
    else if (this.state.status === 'paused') {
      this.setState({status: 'active'});
      this.timer = setTimeout(() => this.progress(this.state.completed + this.state.interval), 500);
    }
  }

  progress(completed) {
    if (completed >= 100) {
      this.setState({completed: 100, taskTime: this.props.taskTime, status: 'ready'});
      clearTimeout(this.timer);
    } else {
      this.setState({completed});
      this.setState({taskTime: this.state.taskTime - 1});
      this.timer = setTimeout(() => this.progress(completed + this.state.interval), 1000);
    }
  }

  render() {

  const style = {
    box: {
      height: 200,
      width: '35%',
      maxWidth: 150,
      textAlign: 'center',
      marginTop: 25,
      marginRight: '8vw',
      marginBottom: 15,
      float: 'right',
      position: 'relative'
    },
    outter: {
      padding: 0,
      width: 48,
      height: 48      
    },
    icon: {
      width: 52,
      height: 52
    },
    face: {
      fontSize: 50,
      position: 'absolute',
      top: 40,
      left: 45,
    }
  };
  
  if (this.state.taskTime < 10) {
    style.face.left = 65
  }

  const controls = {
    start: (
      <div>
        <IconButton style={style.outter} iconStyle={style.icon} onClick={this.startProgress}>
          <PlayCircle color={Colors.green400} />
        </IconButton>
        <IconButton style={style.outter} iconStyle={style.icon} onClick={this.pause}>
          <Pause color={Colors.amber900} />
        </IconButton>
      </div>
      ),
    pause: (
      <div>
        <IconButton style={style.outter} iconStyle={style.icon} onClick={this.startProgress}>
          <PlayCircle color={Colors.green400} />
        </IconButton>
        <IconButton style={style.outter} iconStyle={style.icon} onClick={this.pause}>
          <Pause color={Colors.amber900} />
        </IconButton>
      </div>
      ),
    active: (
      <div>
        <IconButton style={style.outter} iconStyle={style.icon} onClick={this.restart}>
          <Restore color={Colors.blue400} />
        </IconButton>
        <IconButton style={style.outter} iconStyle={style.icon} onClick={this.pause}>
          <Pause color={Colors.amber900} />
        </IconButton>
      </div>
      )
  }

    return (    
      <Paper style={style.box} zDepth={2} circle={false}>
        <CircularProgress mode="determinate" value={this.state.completed} size={2} />       
        <span style={style.face}>{this.state.taskTime}</span>
        
        {this.state.status === 'ready' ? controls.start : this.state.status === 'paused' ? controls.pause : controls.active}

      </Paper>
    );
  }
}