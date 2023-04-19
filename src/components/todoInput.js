import {Button} from "./button";
import {useState} from "react";


export function TodoInput({lists, func}){
    const [newToDo, setNewToDo] = useState()

    const addTasks = () => {
        lists.push({
            toDo: newToDo,
            status: false
        })
        func(lists)
        localStorage.setItem('toDoJSON', JSON.stringify(lists))
    }
    return(
        <div className={"todoInput"}>
            <h2>TodoList</h2>
            <div className={"todoInput__main"}>
                <div className={"todoInput__main__input"}>
                    <i className="fa-solid fa-book"></i>
                    <input type="text" onChange={(e) => {setNewToDo(e.target.value)}}/>
                </div>
                <Button text={"Add New Task "} event={addTasks} />
            </div>
        </div>
    )
}