import { useState } from "react";
import { useTodo } from "../context/context";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ ...todo, text: todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex justify-between">
      <input
        autoFocus
        type="text"
        placeholder="Write Todo..."
        className=" w-1/4 border border-black/10 rounded-lg px-3 outline-none duration-[1s] bg-white/20 py-1.5 focus:bg-gray-700 transition-all ease-in focus:w-full"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg px-3 py-1 bg-green-600 text-white shrink-0 hover:bg-green-700 duration-100 transition-all ease-in"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
