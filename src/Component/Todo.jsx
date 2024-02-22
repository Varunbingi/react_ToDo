import { useState } from "react";

const Todo = ({ editTodo, text, isFinished, deleteTodo, finishedTodo }) => {
  const [isEditing, setIsEnding] = useState(false);
  const [todoText, setTodoText] = useState(text);
  return (
    <div>
      <input
        type="checkbox"
        name=""
        id=""
        checked={isFinished}
        onChange={() => finishedTodo(!isFinished)}
      />
      {isEditing ? (
        <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      ) : (
        <span>{todoText}</span>
      )}
      <button
        onClick={() => {
          setIsEnding(!isEditing);
          editTodo(todoText);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};
export default Todo;
