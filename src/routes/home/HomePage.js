import React from "react";
import {TodoContext} from "../../TodoContext";
import {TodoCounter} from "../../ui/TodoCounter";
import {TodoSearch} from "../../ui/TodoSearch";
import {TodoList} from "../../ui/TodoList";
import {TodosLoading} from "../../ui/TodosLoading";
import {TodosError} from "../../ui/TodosError";
import {EmptyTodos} from "../../ui/EmptyTodos";
import {TodoItem} from "../../ui/TodoItem";
import {CreateTodoButton} from "../../ui/CreateTodoButton";
import {Modal} from "../../ui/Modal";
import {TodoForm} from "../../ui/TodoForm";

function HomePage() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => console.log("Editar todo")}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export {HomePage};
