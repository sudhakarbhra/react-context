import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Home = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="column">
          <h1>React Todo w/ Hooks & Context API</h1>
          <p>
            This project is practise for Context API, React Hooks, Reducer and
            Dispatch
          </p>
        </div>
      </div>
      <div className="row">
        <TodoList />
      </div>
      <div className="container">
        <h4>Add Todo</h4>
        <TodoForm />
      </div>
    </div>
  );
};

export default Home;
