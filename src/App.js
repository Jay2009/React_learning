import React, { Component } from 'react';
//import ValidationSaSmple from './ScrollBox.js
import './App.css';
import ScrollBox from './ScrollBox.js';

class App extends Component {
  render() {
    return(
      <div>
      <ScrollBox ref={(ref) => this.scrollBox=ref} />
      <button onClick={() => this.scrollBox.scrollToBottom()}>
        go to the botton
        </button>
        
      </div>
    );
  }
}



export default App;
