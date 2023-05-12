import {Button} from "../components/button";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateList} from "../store/list/list.action";

let i = 4

export function TodoInput(){
    const [newToDo, setNewToDo] = useState('')
    const lists = useSelector((store) => store.listReducer.taskList)
    const dispatch = useDispatch()

    const addTasks = (e) => {
        e.preventDefault()
        newToDo ? dispatch(updateList([...lists, {
            id: "task_" + i++,
            name: newToDo,
            status: false
        }])) : alert("Write ToDo")
        setNewToDo('')
    }

    const addTaskName = (e) => {
        setNewToDo(e.target.value)
    }

    return(
        <div className={"todoInput"}>
            <h2>TodoList</h2>
            <form onSubmit={addTasks} className={"todoInput__main"}>
                <div className={"todoInput__main__input"}>
                    <i className="fa-solid fa-book"></i>
                    <input type="text" onChange={addTaskName} value={newToDo}/>
                </div>
                <Button text={"Add New Task "} />
            </form>
        </div>
    )
}



