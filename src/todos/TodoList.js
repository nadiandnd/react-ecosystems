import React, { useEffect } from "react";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import {
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos,
} from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "./thunks";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getTodosLoading);
  const inCompleteTodos = useSelector(getIncompleteTodos);
  const completedTodos = useSelector(getCompletedTodos);

  useEffect(() => {
    startLoadingTodos();
  }, [dispatch]);

  const startLoadingTodos = () => dispatch(loadTodos());

  const handleRemove = (id) => {
    dispatch(removeTodoRequest(id));
  };

  const handleMarkTodoAsCompleted = (id) => {
    dispatch(markTodoAsCompletedRequest(id));
  };

  const loadingMessage = <div>Loading todos...</div>;

  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {inCompleteTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={handleRemove}
          onCompletedPressed={handleMarkTodoAsCompleted}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={handleRemove}
          onCompletedPressed={handleMarkTodoAsCompleted}
        />
      ))}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

export default TodoList;
