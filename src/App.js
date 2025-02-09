import "./App.css";
import {TodoCounter} from "./TodoCounter";
import {TodoItem} from "./TodoItem";
import {TodoList} from "./TodoList";
import {TodoSearch} from "./TodoSearch";

function App() {
  return (
    <div className='App'>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
    </div>
  );
}

export default App;
