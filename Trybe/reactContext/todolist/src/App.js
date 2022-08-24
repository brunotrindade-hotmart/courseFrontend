import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import TodoProvider from "./context/TodoProvider";

export default function App() {
  return (
    <main>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </main>
  );
};
