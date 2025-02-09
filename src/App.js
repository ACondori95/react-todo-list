import React from "react";
import "./App.css";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoCounter} from "./TodoCounter";
import {TodoItem} from "./TodoItem";
import {TodoList} from "./TodoList";
import {TodoSearch} from "./TodoSearch";

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar el Curso de Intro a React.js", completed: false},
  {text: "Llorar con la Llorona", completed: false},
  {text: "LALALALALA", completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
