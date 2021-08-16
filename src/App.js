import React, { Component } from 'react';
import './App.css';
import LifeCycleSample from './LifeCycleSample';
import Counter from './Counter';
import InputSample from './InputSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  return (
    <InputSample />
  );
}

/*class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}> random color </button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}*/


export default App;
