import {TodoInput} from "./todoInput";
import {TodoList} from "./todoList";
import {useEffect, useState} from "react";

let taskList = [
    {id: "task_1", name: "Learn React", status: false, edit: false},
    {id: "task_2", name: "Learn Redux", status: true, edit: true},
    {id: "task_3", name: "Learn React Native", status: false, edit: false},
]

export const Home = () => {
    const [toDo, setToDo] = useState()

    useEffect(() => {

        setTimeout(() => {
            setToDo(taskList)
        }, 3000)
    }, [])

    return (
        <div className={"container"}>
            {
                toDo ?
                    <>
                        <TodoInput lists={toDo} setToDo={setToDo}/>
                        <TodoList lists={toDo} setToDo={setToDo}/>
                    </>
                    :
                    <h2>Loading...</h2>
            }

        </div>
    );
}