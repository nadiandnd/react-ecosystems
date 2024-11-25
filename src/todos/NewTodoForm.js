import React, { useState } from "react";
import "./NewTodoForm.css";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "./actions";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicatedText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicatedText && inputValue.trim() !== "") {
            dispatch(createTodo(inputValue));
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

export default NewTodoForm;
