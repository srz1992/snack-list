import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

const mapReduxStateToProps = (reduxStore)=>{
  reduxStore
}


class App extends Component {

constructor(props){
  super(props)
  this.state = {
    snack: ''
  }
}

addSnack = ()=>{
  const action = {type: 'ADD_SNACK', payload: this.state.snack}
  this.props.dispatch(action);
}

handleSnackChange = (event)=>{
  this.setState({
    snack: event.target.value
  })
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        Snacks
        </p>
        <input type="text" onChange={this.handleSnackChange} value={this.state.snack}/>
        <button onClick={this.addSnack}>Add Snack</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
