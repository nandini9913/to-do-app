import React from "react";
import {HashRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList/TodoList";

  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <HashRouter>
    <div>
    <div className="heading">
        <h3>TODO LIST</h3>
      
        <TodoList/>
    </div>
   
     </div>
    
    </HashRouter>,
    destination
);