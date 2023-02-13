import React from "react";
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.date.toLocaleString()}</p>
            <p>{item.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
