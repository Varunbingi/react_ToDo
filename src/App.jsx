import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./Component/AddTodo";
import TodoList from "./Component/TodoList";
import TodoContext from "./context/TodoContext";

function App() {
  // Parse storedTodos from localStorage or default to an empty array
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  // Set todos state with storedTodos
  const [todos, setTodos] = useState(storedTodos);

  useEffect(() => {
    // Update localStorage whenever todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-green-100 max-h-full min-h-screen flex flex-col p-5 gap-5">
      <h1 className="text-3xl text-center font-serif font-semibold">
        Todo Application
      </h1>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <AddTodo />
        {todos.length > 0 && <TodoList />}
      </TodoContext.Provider>
    </div>
  );
}

export default App;
