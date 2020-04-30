import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList/TodoList";

  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
    <div className="heading">
        <h1>To-do List</h1>
    </div>
    
     <TodoList/>
     </div>,
    destination
);