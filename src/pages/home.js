import {TodoInput} from "./todoInput";
import {TodoList} from "./todoList";

export const Home = () => {

    return (
        <div className={"container"}>
            <TodoInput/>
            <TodoList/>
        </div>
    )
}