import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { markTodoAsCompleted, removeTodo } from "./actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleRemove = (text) => {
    dispatch(removeTodo(text));
  };

  const handleMarkTodoAsCompleted = (text) => {
    dispatch(markTodoAsCompleted(text));
  };

  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          onRemovePressed={handleRemove}
          onCompletedPressed={handleMarkTodoAsCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
