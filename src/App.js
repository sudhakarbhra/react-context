import React from "react";
import "./App.css";
import Home from "./components/Home";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Home />
      </TodoContextProvider>
    </div>
  );
}

export default App;
