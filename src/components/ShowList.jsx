import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useMyContext } from "../MyContext";
import useShowListHook from "../hooks/showListHook";

function ShowList() {
  const { todos } = useMyContext();
  const { toggleTodoCompletion, sortedTodos, handleDeleteTodo } =
    useShowListHook();

  return (
    <section className=" border-t p-4 bg-white overflow-y-auto flex flex-col gap-2 h-full">
      {todos.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-400 text-2xl ">No todos!</p>
        </div>
      ) : (
        sortedTodos.map((todo, index) => (
          <div
            key={index}
            className={`flex justify-between items-center ${
              todo.priority === "Low"
                ? "bg-green-500"
                : todo.priority === "Medium"
                ? "bg-orange-500"
                : "bg-red-500"
            } p-2 gap-2 rounded-md`}
          >
            <div className="flex gap-2 justify-start items-center w-full">
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => toggleTodoCompletion(todo.id)}
              />
              <p className="">{todo.text}</p>{" "}
            </div>
            <FaRegEdit className="cursor-pointer text-lg" />
            <MdDeleteOutline
              className="cursor-pointer text-lg"
              onClick={() => handleDeleteTodo(todo.id)}
            />
          </div>
        ))
      )}
    </section>
  );
}

export default ShowList;
