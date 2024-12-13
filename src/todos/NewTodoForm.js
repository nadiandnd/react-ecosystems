import React, { useState } from "react";
import styled from "styled-components";
import "./NewTodoForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodoRequest } from "./thunks";

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #d5d5d5;

  &:hover {
    background-color: #b0b0b0;
  }
`;

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  return (
    <FormContainer>
      <NewTodoInput
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <NewTodoButton
        onClick={() => {
          const isDuplicatedText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicatedText && inputValue.trim() !== "") {
            dispatch(addTodoRequest(inputValue));
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </NewTodoButton>
    </FormContainer>
  );
};

export default NewTodoForm;
