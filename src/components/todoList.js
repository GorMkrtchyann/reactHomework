import {Button} from "./button";

export function TodoList({lists, setToDo}){

    const deleteAllTask = () => {
        setToDo([])
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
                    lists.map((el, i) => {
                        return(
                            <div key={i} className={"todoList__todos__item"}>
                                <label htmlFor={i}>{el.taskName}</label>
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