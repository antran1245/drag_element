import React, {Component } from 'react';
import Drag from './components/DragComponent';
import Navi from './components/NavComponent';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0
    }; 
  }
  render() {
    return(
      <div className="App">
        <Drag>
          <div>
            <Navi/>
          </div>
        </Drag>
      </div>
    );
  }
}

export default App;
