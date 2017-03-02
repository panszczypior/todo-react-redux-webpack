import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import todoActions from '../redux/actions';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    );
  }
};

const mapStateToProps= (state) => state;

const mapDispatchToPropos = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToPropos)(App);
