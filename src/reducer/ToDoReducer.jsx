const ToDoReducer = (state, action) => {
  if (action.type == "addToDo") {
    let nextId = state.length + 1;
    return [
      ...state,
      { id: nextId, isFinished: false, text: action.payload.todoText },
    ];
  } else if (action.type == "onDeleteTodo") {
    const newTodo = state.filter((todo) => todo.id !== action.payload.id);
    return newTodo;
  } else if (action.type == "onEdit") {
    const newTodoList = state.map((todo) => {
      if (todo.id === action.payload.id) {
        todo.text = action.payload.newText;
      }
      return todo;
    });
    return newTodoList;
  } else if (action.type == "onFinishedTodo") {
    const newTodoList = state.map((todo) => {
      if (todo.id === action.payload.id) {
        todo.isFinished = action.payload.state;
      }
      return todo;
    });
    return newTodoList;
  }
  return state;
};
export default ToDoReducer;
