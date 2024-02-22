import { useState } from "react";

const AddTodo = ({ addTodos }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Add your todos...."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button
        onClick={() => {
          if (todoText.length != 0) {
            addTodos(todoText);
          }

          setTodoText("");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
