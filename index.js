import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clicks: 0
  //   };
  // }
  state ={
    clicks :0
  }  

  render() {
    return (
      <div onClick = {()=>{this.setState({clicks:this.state.clicks + 1});}}>
      this div is clicked {this.state.clicks } times.
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
