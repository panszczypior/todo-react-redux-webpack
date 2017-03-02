function getNextId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
}

const reducer =  function (state = {}, action) {
  console.log(state);
  switch(action.type){
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          id: getNextId(state),
          text: action.payload,
          completed: false,
        }, ...state.todos]
      });
    case 'REMOVE_TODO':
    return Object.assign({}, state, {
      todos: state.todos.filter(todo =>  {
        return  todo.id !== action.payload ? true : false
      })
    });
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map(todo =>  {
          return  todo.id !== action.payload ? todo : Object.assign({}, todo, {completed: true})
        })
      });
    default:
      return state;
  }
};

export default reducer;
