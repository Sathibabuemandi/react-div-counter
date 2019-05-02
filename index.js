import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  render() {
    return (
      <h1 onClick = {()=>{this.setState({clicks:this.state.clicks + 1});}}>
      this div is clicked {this.state.clicks } times;
        
      </h1>
    );
  }
}

render(<App />, document.getElementById('root'));
