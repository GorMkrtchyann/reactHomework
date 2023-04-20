import './App.css';
import {TodoInput} from "./components/todoInput";
import {TodoList} from "./components/todoList";
import {useEffect, useState} from "react";


function App() {
    const [toDo, setToDo] = useState([])
    const [newToDo, setNewToDo] = useState('')

    useEffect(() => {
        addTasks()
    }, [])

    const addTasks = () => {
        if (newToDo){
            setToDo([...toDo, {
                taskName: newToDo,
                status: false
            }])
            localStorage.setItem("listJSON", JSON.stringify(toDo))
        }
    }

    return (
    <div className={"container"}>
      <TodoInput addTasks={addTasks} newTodo={newToDo} setNewToDo={setNewToDo}/>
      <TodoList lists={toDo} setToDo={setToDo}/>
    </div>
  );
}

export default App;
