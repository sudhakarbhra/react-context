import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { dispatch } = useContext(TodoContext);
  const createSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", todo: { title, desc } });
    setTitle("");
    setDesc("");
  };
  return (
    <form onSubmit={(e) => createSubmit(e)}>
      <label>Todo Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Todo Desc</label>
      <textarea
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      ></textarea>
      <input class="button-primary" type="submit" value="Create" />
    </form>
  );
};

export default TodoForm;
