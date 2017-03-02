import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from './TodoInput';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <TodoInput />
      </div>
    );
  }
};

const mapStateToProps= (state) => state;

export default connect(mapStateToProps)(App);
