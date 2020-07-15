import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="container">
      {todos.length ? (
        todos.map((todo) => <Todo todo={todo} key={todo.id} />)
      ) : (
        <p>No Todos Found</p>
      )}
    </div>
  );
};

export default TodoList;
