import './App.css';
import {TodoInput} from "./components/todoInput";
import {TodoList} from "./components/todoList";

function App() {
  return (
    <div className={"container"}>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
