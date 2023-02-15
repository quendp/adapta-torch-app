import "./ToDoList.css";

import React from "react";

const ToDoItem = (props) => {

  const editItemHandler = () => {
    props.onEditHandler(props.item.id)
  }

  const deleteItemHandler = () => {
    props.onDeleteHandler(props.item.id);
  }

  return (
    <li>
      <h1>{props.item.title}</h1>
      <p>{props.item.date.toLocaleString()}</p>
      <p>{props.item.status}</p>
      <button onClick={editItemHandler}>Done</button>
      <button onClick={deleteItemHandler}>Delete</button>
    </li>
  );
};

export default ToDoItem;
