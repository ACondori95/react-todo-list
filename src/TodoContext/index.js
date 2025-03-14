import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({text, completed: false, id});
    saveTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

function newTodoId(todoList) {
  if (!todoList.length) {
    return 1;
  }

  const idList = todoList.map((todo) => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export {TodoContext, TodoProvider};
