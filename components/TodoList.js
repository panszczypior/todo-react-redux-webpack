import React, { Component } from 'react';

class TodoList extends Component {

  render() {

    const todos = this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>);
    return (
      <ul>
        {todos}
      </ul>
    );
  }
};

export default TodoList;
