import React, { Component } from 'react';
import { completeTodo, removeTodo } from '../redux/actions';

class TodoItem extends Component {

  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleDelete() {
    this.props.dispatch(removeTodo(this.props.todo.id));
  }

  handleComplete() {
    this.props.dispatch(completeTodo(this.props.todo.id));
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        {todo.text}
        <button onClick={this.handleDelete}style={{display: "inline"}}>x</button>
        <button onClick={this.handleComplete}style={{display: "inline"}}>complete</button>
      </li>
    );
  }
};

export default TodoItem;
