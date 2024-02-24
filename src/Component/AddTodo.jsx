import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  return (
    <div className="w-full  ">
      <input
        className="sm:w-2/3 lg:w-5/6 py-2 m-5 border-b-black border-2 rounded-lg"
        type="text"
        name=""
        id=""
        placeholder="Add your todos...."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button
        className="bg-blue-800 py-2 px-4 font-semibold text-white rounded-md"
        onClick={() => {
          if (todoText.length != 0) {
            let nextId = todos.length + 1;
            setTodos([
              ...todos,
              { id: nextId, isFinished: false, text: todoText },
            ]);
          }

          setTodoText("");
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

export default AddTodo;
