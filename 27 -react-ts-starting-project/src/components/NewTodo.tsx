import React, { useContext, useRef } from "react";
import { TodosContext } from "../context/todosContext";

/* interface Props {
  onAddTodo: (text: string) => void;
} */

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;
    console.log(enteredText);
    addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
