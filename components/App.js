import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <TodoInput dispatch={this.props.dispatch} />
        <TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
      </div>
    );
  }
};

const mapStateToProps= (state) => state;

export default connect(mapStateToProps)(App);
