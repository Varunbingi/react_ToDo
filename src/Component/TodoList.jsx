import { useContext, useState } from "react";
import Todo from "./Todo";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const [searchValue, setSearchValue] = useState("");
  const { todos, setTodos } = useContext(TodoContext);
  const [filteredSearch, setFilteredSearch] = useState([]);

  const onDeleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const onEdit = (id, newText) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
      return todo;
    });
    setTodos(newTodoList);
  };

  const onFinishedTodo = (id, state) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        todo.isFinished = state;
      }
      return todo;
    });
    setTodos(newTodoList);
  };

  const handleSearch = () => {
    const newFilteredTodos = todos.filter((todo) =>
      todo.text.includes(searchValue)
    );
    setFilteredSearch(newFilteredTodos);
  };

  return (
    <div className="flex flex-col gap-3 border-t-2 border-black">
      <div className="m-3 gap-5 flex">
        <input
          className="sm:w-2/3 lg:w-5/6 py-2  border-b-black border-2 rounded-lg"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="text-red-700 font-semibold border-2 border-red-700 px-6 rounded-md hover:bg-red-600 hover:text-white"
        >
          Search
        </button>
      </div>

      {searchValue !== ""
        ? filteredSearch.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              isFinished={todo.isFinished}
              deleteTodo={() => onDeleteTodo(todo.id)}
              editTodo={(newText) => onEdit(todo.id, newText)}
              finishedTodo={(state) => onFinishedTodo(todo.id, state)}
            />
          ))
        : todos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              isFinished={todo.isFinished}
              deleteTodo={() => onDeleteTodo(todo.id)}
              editTodo={(newText) => onEdit(todo.id, newText)}
              finishedTodo={(state) => onFinishedTodo(todo.id, state)}
            />
          ))}
    </div>
  );
};

export default TodoList;
