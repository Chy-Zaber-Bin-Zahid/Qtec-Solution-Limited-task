import React from "react";
import { useMyContext } from "../MyContext";
import ShowFilter from "./ShowList Child/ShowTextFilter";
import ShowFilterSorted from "./ShowList Child/ShowFilterSorted";
import useShowListHook from "../hooks/showListHook";

function ShowList() {
  const { todos, filter } = useMyContext();
  const { toggleTodoCompletion, handleDeleteTodo, sortedTodos, filteredTodos } =
    useShowListHook();

  return (
    <section className=" border-t p-4 bg-white overflow-y-auto flex flex-col gap-2 h-full max-[350px]:text-sm">
      <ShowFilter />
      {todos.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-400 text-2xl ">No todos!</p>
        </div>
      ) : filter === "All" ? (
        sortedTodos.map((todo, index) => (
          <ShowFilterSorted
            key={index}
            todo={todo}
            toggleTodoCompletion={toggleTodoCompletion}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      ) : (
        filteredTodos.map((todo, index) => (
          <ShowFilterSorted
            key={index}
            todo={todo}
            toggleTodoCompletion={toggleTodoCompletion}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      )}
    </section>
  );
}

export default ShowList;
