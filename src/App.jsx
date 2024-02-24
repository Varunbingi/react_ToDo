import { useEffect, useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./Component/AddTodo";
import TodoList from "./Component/TodoList";
import TodoContext from "./context/TodoContext";
import ToDoReducer from "./reducer/ToDoReducer";

function App() {
  // Parse storedTodos from localStorage or default to an empty array
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, dispatch] = useReducer(ToDoReducer, storedTodos);

  useEffect(() => {
    // Update localStorage whenever todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-green-100 max-h-full min-h-screen flex flex-col p-5 gap-5">
      <h1 className="text-3xl text-center font-serif font-semibold">
        Todo Application
      </h1>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <AddTodo />
        {todos.length > 0 && <TodoList />}
      </TodoContext.Provider>
    </div>
  );
}

export default App;
