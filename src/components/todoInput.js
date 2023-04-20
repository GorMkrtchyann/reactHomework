import {Button} from "./button";

export function TodoInput({addTasks, setNewToDo}){

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