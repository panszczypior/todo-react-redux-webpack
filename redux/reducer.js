function getNextId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
}

export default function (state = {}, action) {
  switch(action.type){
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          id: getNextId(state),
          text: action.payload,
          completed: false,
        }, ...state.todos]
      });
    default:
      return state;
  }
};
