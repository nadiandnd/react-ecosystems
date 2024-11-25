import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleRemove = (text) => {
    dispatch(removeTodo(text));
  };

  console.log(todos);

  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          onRemovePressed={() => handleRemove(todo.text)}
        />
      ))}
    </div>
  );
};

export default TodoList;
