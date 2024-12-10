import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { markTodoAsCompleted, removeTodo } from "./actions";
import { loadTodos } from "./thunks";

const TodoList = () => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const isLoading = useSelector((state) => state.isLoading);

  const handleRemove = (text) => {
    dispatch(removeTodo(text));
  };

  const handleMarkTodoAsCompleted = (text) => {
    dispatch(markTodoAsCompleted(text));
  };

  const startLoadingTodos = () => dispatch(loadTodos());

  const loadingMessage = <div>Loading todos...</div>;

  const content = (
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
  return isLoading ? loadingMessage : content;
};

export default TodoList;
