import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoInput extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="add new todo" value={this.state.inputValue} onChange={this.handleChangeInput} />
        <input type="submit" value="submit" />
      </form>
    </div>
    );
  }
};

export default TodoInput;
