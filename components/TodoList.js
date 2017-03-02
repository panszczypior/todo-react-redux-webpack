import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {

  render() {

    const todos = this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
    return (
      <ul>
        {todos}
      </ul>
    );
  }
};

export default TodoList;
