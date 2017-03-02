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
    console.log('submit');
  }

  render() {
    return (
    <div>
      <input type="text" placeholder="add new todo" value={this.state.inputValue} onChange={this.handleChangeInput} />
      <button onClick={this.handleSubmit}>Submit</button>
    </div>
    );
  }
};

export default TodoInput;
