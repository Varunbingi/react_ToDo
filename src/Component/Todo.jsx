import { useState } from "react";

const Todo = ({ editTodo, text, isFinished, deleteTodo, finishedTodo }) => {
  const [isEditing, setIsEnding] = useState(false);
  const [todoText, setTodoText] = useState(text);
  return (
    <div className="flex gap-10">
      <input
        className="w-5"
        type="checkbox"
        name=""
        id=""
        checked={isFinished}
        onChange={() => finishedTodo(!isFinished)}
      />
      {isEditing ? (
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="p-2  border-2 w-3/5"
        />
      ) : (
        <span className=" p-2 w-3/5">{todoText}</span>
      )}
      <button
        className="w-1/6 bg-blue-800 p-2  font-semibold text-white rounded-md"
        onClick={() => {
          setIsEnding(!isEditing);
          editTodo(todoText);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      {isEditing ? (
        <button
          className="w-1/6 bg-red-700 p-2  font-semibold text-white rounded-md"
          onClick={() => {
            setTodoText(text);
            setIsEnding(!isEditing);
          }}
        >
          cancle
        </button>
      ) : (
        <button
          className="w-1/6 bg-red-700 p-2  font-semibold text-white rounded-md"
          onClick={deleteTodo}
        >
          Delete
        </button>
      )}
    </div>
  );
};
export default Todo;
