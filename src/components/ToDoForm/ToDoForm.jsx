import React, { useState } from "react";

const ToDoForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const changeStatusHandler = (event) => {
    setEnteredStatus(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const toDoData = {
        id: Math.random(),
        title: enteredTitle,
        date: new Date(enteredDate),
        status: enteredStatus,
    }

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredStatus("");

    props.onAddToDo(toDoData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" onChange={changeTitleHandler} value={enteredTitle} />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" onChange={changeDateHandler} value={enteredDate} />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <input id="status" type="text" onChange={changeStatusHandler} value={enteredStatus} />
      </div>
      <button type="submit">Add To Do</button>
    </form>
  );
};

export default ToDoForm;
