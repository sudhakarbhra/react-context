import React, { createContext, useReducer, useEffect } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

export const TodoContext = createContext();
const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
