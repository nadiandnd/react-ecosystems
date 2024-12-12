import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      {todo.isCompleted ? (
        <span>{"\u{1F44D} "}</span>
      ) : (
        <button
          className="complete-button"
          onClick={() => onCompletedPressed(todo.id)}
        >
          Mark As Completed {todo.text}
        </button>
      )}
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.id)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
