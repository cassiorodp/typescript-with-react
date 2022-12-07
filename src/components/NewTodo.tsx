import React, { useRef } from 'react';

interface NewTodoProps {
  todoAddHandler: (text: string) => void;
}

const NewTodo = (props: NewTodoProps) => {
  const textInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInput.current!.value;

    props.todoAddHandler(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" ref={textInput} id="todo-text" />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
