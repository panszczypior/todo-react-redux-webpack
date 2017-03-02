const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
});

const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: id,
});

const completeTodo = (id) => ({
  type: 'COMPLETE_TODO',
  payload: id,
});

const todoActions = {
  addTodo: addTodo,
  removeTodo: removeTodo,
  completeTodo: completeTodo,
}

export {
  todoActions as default,
  addTodo,
  removeTodo,
  completeTodo,
}
