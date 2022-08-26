import React, {useState} from "react";

import TodoContext from "./TodoContext";

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo])
  }

  return (
    <main>
      <TodoContext.Provider value={{ todos, addTodo }}>
        {children}
      </TodoContext.Provider>
    </main>
  );
};