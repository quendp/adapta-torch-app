import "./ToDoList.css";

import React from "react";

const ToDoItem = (props) => {
  return (
    <li>
      <h1>{props.item.title}</h1>
      <p>{props.item.date.toLocaleString()}</p>
      <p>{props.item.status}</p>
    </li>
  );
};

export default ToDoItem;
