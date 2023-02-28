import React from "react";

interface Props {
  text: string;
  id: string;
  removeTodo: (id: string) => void;
}
const TodoItem: React.FC<Props> = (props) => {
  /*   const removeTodo = (id: string) => {
    props.removeTodo(id);
  }; */
  return <li onClick={() => props.removeTodo(props.id)}>{props.text}</li>;
};

export default TodoItem;
