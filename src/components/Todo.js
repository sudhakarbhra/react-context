import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <blockquote onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
    </blockquote>
  );
};

export default Todo;
