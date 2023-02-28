import React, { useState } from "react";
import { Todo } from "../models/Todo";

interface TodosContext {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext({} as TodosContext);

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevState) => {
      return [...prevState, { id: Math.random().toString(), text: text }];
    });
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const contextValue = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
