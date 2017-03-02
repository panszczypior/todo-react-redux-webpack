import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    console.log(this.props);
    const { todo } = this.props;
    return (
      <li>{todo.text}
        <button style={{display: "inline"}}>x</button>
      </li>
    );
  }
};

export default TodoItem;
