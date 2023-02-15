import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <ToDoItem key={item.id} item={item} onEditHandler={props.onEditItem} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
