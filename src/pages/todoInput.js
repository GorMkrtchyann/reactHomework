import PropTypes from 'prop-types';
import {Button} from "../components/button";
import {useState} from "react";

let i = 4

export function TodoInput({lists, setToDo}){
    const [newToDo, setNewToDo] = useState('')

    const addTasks = () => {
        newToDo ? setToDo([...lists, {
            id: "task_" + i++,
            name: newToDo,
            status: false
        }]) : alert("Write ToDo")
        setNewToDo('')
    }

    const addTaskName = (e) => {
        setNewToDo(e.target.value)
    }

    return(
        <div className={"todoInput"}>
            <h2>TodoList</h2>
            <div className={"todoInput__main"}>
                <div className={"todoInput__main__input"}>
                    <i className="fa-solid fa-book"></i>
                    <input type="text" onChange={addTaskName} value={newToDo}/>
                </div>
                <Button text={"Add New Task "} event={addTasks} />
            </div>
        </div>
    )
}

TodoInput.propTypes = {
    lists: PropTypes.any,
    setToDo: PropTypes.func
}



