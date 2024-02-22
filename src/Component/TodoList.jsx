import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const onDeleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  const onEdit = (id, newText) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id == id) {
        todo.text = newText;
      }
      return todo;
    });
    setTodos(newTodoList);
  };
  const onfinishedTodo = (id, state) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id == id) {
        todo.isFinished = state;
      }
      return todo;
    });
    setTodos(newTodoList);
  };
  return (
    <div>
      {console.log(todos)}
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            isFinished={todo.isFinished}
            deleteTodo={() => onDeleteTodo(todo.id)}
            editTodo={(newText) => onEdit(newText)}
            finishedTodo={(state) => onfinishedTodo(todo.id, state)}
          />
        ))}
    </div>
  );
};
export default TodoList;
