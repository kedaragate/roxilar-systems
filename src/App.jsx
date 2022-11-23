import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";
import UserEntries from "./components/UserEntries/UserEntries";

function App() {
  let [todoData, setTodoData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodoData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Todos todoData={todoData} />
    </div>
  );
}

export default App;
