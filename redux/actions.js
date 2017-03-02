const addTodo = function(text) {
    return {
      type: 'ADD_TODO',
      payload: text
    }
  }

export default addTodo;
