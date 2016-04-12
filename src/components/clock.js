import React from 'react';
import Paper from 'material-ui/lib/paper';
import CircularProgress from 'material-ui/lib/circular-progress';
import Colors from 'material-ui/lib/styles/colors'; 
import IconButton from 'material-ui/lib/icon-button';
import PlayCircle from 'material-ui/lib/svg-icons/av/play-circle-outline';
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
	  height: 200,
	  width: '35%',
	  maxWidth: 150,
	  textAlign: 'center',
	  marginTop: 25,
	  marginRight: '8vw',
	  marginBottom: 15,
	  float: 'right',
	  position: 'relative'
	};

	const rootStyles = {
    padding: 0,
    width: 48,
    height: 48
	};

  const iconStyle = {
    width: 52,
    height: 52
  }


	const controlStyles = {
	};

	const timeStyle = {
		fontSize: 50,
		position: 'absolute',
		top: 40,
		left: 45,
	};

	if (this.state.taskTime < 10) {
		timeStyle.left = 65
	}

    return (    
    	<Paper style={style} zDepth={2} circle={false}>
    		<CircularProgress mode="determinate" value={this.state.completed} size={2} />    		
    		<span style={timeStyle}>{this.state.taskTime}</span>
    			
          <IconButton style={rootStyles} iconStyle={iconStyle} onClick={this.startProgress}>
    				<PlayCircle color={Colors.green400} />
    			</IconButton>

       		<IconButton style={rootStyles} iconStyle={iconStyle} onClick={this.pauseProgress}>
    				<Pause color={Colors.amber900} />
    			</IconButton>
    	</Paper>
    );
  }
}