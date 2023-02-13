import "./App.css";
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
  return (
    <div>
      <h1>hello Adapta</h1>
      <ToDoList items={toDo} />
    </div>
  );
}

export default App;
