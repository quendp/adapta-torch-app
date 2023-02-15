import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  
  const toDo = [
    {
      id: "1",
      title: "Example Title",
      date: new Date(2023, 3, 30),
      status: "In Progress",
    },
    {
      id: "2",
      title: "Example Title 2",
      date: new Date(2023, 3, 30),
      status: "In Progress",
    },
  ];

  const [toDos, setToDos] = useState(toDo);

  const addToDoHandler = (toDoData) => {
    setToDos((prevToDos) => {
      return [toDoData, ...prevToDos]
    });
  };

  const editItemHandler = (itemId) => {
    console.log("update: ", itemId)
  }

  const deleteItemHandler = (itemId) => {
    console.log("delete: ", itemId);
    setToDos((prevToDos) => {
      return prevToDos.filter((item) => item.id !== itemId);
    });
  }

  return (
    <div>
      <ToDoForm onAddToDo={addToDoHandler} />
      <h1>hello Adapta</h1>
      <ToDoList items={toDos} onEditItem={editItemHandler} onDeleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
