import {Button} from "./button";
import {useState} from "react";

let listTodo = [];

export function TodoList({lists}){
    console.log(lists)
    const [list, setList] = useState([])

    const deleteAllTask = () => {
        setList([])
    }

    return(
        <div className={"todoList"}>
            <h2>TodoList</h2>
            <div className="todoList__buttons">
                <Button text={"All"}/>
                <Button text={"Done"}/>
                <Button text={"Todo"}/>
            </div>
            <div className="todoList__todos">
                {
                    list.map((el, i) => {
                        return(
                            <div key={i} className={"todoList__todos__item"}>
                                <label htmlFor={i}>{el.toDo}</label>
                                <div className={"todoList__todos__item__buttons"}>
                                    <input type="checkbox" id={i} />
                                    <i className="fa-solid fa-pen" style={{color: "orange"}}></i>
                                    <i className="fa-solid fa-trash" style={{color: "red"}}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="todoList__buttons">
                <Button text={"Delet Done Tasks"} background={"#d61c1c"}/>
                <Button text={"Delet All Tasks"} background={"#d61c1c"} event={deleteAllTask}/>
            </div>
        </div>
    )
}