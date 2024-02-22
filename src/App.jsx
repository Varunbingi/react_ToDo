import { useState } from "react";
import "./App.css";
import AddTodo from "./Component/AddTodo";
import TodoList from "./Component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodos = (todoText) => {
    const nextId = todos.length + 1;
    setTodos([...todos, { id: nextId, isFinished: false, text: todoText }]);
  };
  return (
    <div>
      <h1>Todo Application</h1>
      <AddTodo addTodos={addTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
