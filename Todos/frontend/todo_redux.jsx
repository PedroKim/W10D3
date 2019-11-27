import ReactDOM from "react-dom";
import React from "react";
import Root from "./components/root";

import store from "./store/store";
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import allTodos from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {

  const content = document.getElementById("content");

  ReactDOM.render(<Root store={store} />, content);

  // REMOVE LATER
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;

});
