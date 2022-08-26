import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => <li key={`${todo}${index}`}>{ todo }</li>)}
    </ul>
  );
};
