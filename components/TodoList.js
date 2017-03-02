import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {

  render() {

    const todos = this.props.todos.map(todo => <TodoItem actions={this.props.actions} key={todo.id} todo={todo} />);
    return (
      <ul>
        {todos}
      </ul>
    );
  }
};

export default TodoList;
