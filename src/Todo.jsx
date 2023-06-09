import React from "react";
import { ACTION } from "./App";

const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTION.TODO_TOGGLE, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
            dispatch({ type: ACTION.TODO_DELETE, payload: { id: todo.id } })
        }
      >Delete</button>
    </div>
  );
};

export default Todo;
