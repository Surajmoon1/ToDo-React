import { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [{ id: 1, text: "To do text", completed: false }],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
