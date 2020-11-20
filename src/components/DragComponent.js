import React, {Component } from 'react';

class Drag extends Component {
  constructor(props){
    super(props);
    this.state = {
      x:"10",
      y:"10",
      top: "0",
      left: "0",
      drag: false
    };
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }
  handleDragStop = e => {
    var left = e.screenX - this.state.x;
    var top = e.screenY - this.state.y;
    if(left < 0) left=0;
    if(top < 0) top=0;
    this.setState({
      top: top,
      left: left,
      drag: false
    });
  };
  handleDragStart = e => {
      var input = (e.target.getBoundingClientRect());
      this.setState({
        y: e.screenY - input.top,
        x: e.screenX - input.left,
        drag: true
      });
  };
  render() {
    return(
      <div onDragStart={this.handleDragStart}
      onDragEnd={this.handleDragStop}
      draggable={true}  
      className="position"
      style={{top:this.state.top, left:this.state.left}}>
        {this.props.children} 
      </div>
      
    );
  }
}

export default Drag;