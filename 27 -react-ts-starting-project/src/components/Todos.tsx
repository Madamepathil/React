import React, { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";

/* interface Props {
  items: Todo[];
  removeTodo: (id: string) => void;
} */

export const Todos: React.FC = () => {
  const { items, removeTodo } = useContext(TodosContext);
  return (
    <ul>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            id={item.id}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};
