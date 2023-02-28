import React, { useState } from "react";

import "./App.css";
import NewTodo from "./components/NewTodo";
import { Todos } from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  /*   const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevState) => {
      return [...prevState, { id: Math.random().toString(), text: text }];
    });
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  }; */
  return (
    <div>
      <NewTodo /* onAddTodo={addTodo}  */ />
      <Todos /* items={todos} removeTodo={removeTodo}  */ />
    </div>
  );
}

export default App;
