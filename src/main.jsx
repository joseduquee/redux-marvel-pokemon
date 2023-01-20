import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
// import { Test } from './Test';
// import { TodoApp } from "./TodoApp";
// import { PokemonApp } from "./PokemonApp";
import { MarvelApp } from "./MarvelApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      {/* <TodoApp /> */}
      <MarvelApp />
      {/* <Test /> */}
    </Provider>
  </React.StrictMode>
);
