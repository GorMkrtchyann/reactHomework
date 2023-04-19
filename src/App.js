import './App.css';
import {TodoInput} from "./components/todoInput";
import {TodoList} from "./components/todoList";
import {useState} from "react";

let taskList = []

function App() {

    const [toDo, setToDo] = useState(taskList)

    return (
    <div className={"container"}>
      <TodoInput lists={toDo} func={setToDo}/>
      <TodoList lists={toDo}/>
    </div>
  );
}

export default App;
