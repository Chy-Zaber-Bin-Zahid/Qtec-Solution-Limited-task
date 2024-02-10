import React from "react";
import { useMyContext } from "../MyContext";
import ShowFilter from "./ShowList Child/ShowTextFilter";
import ShowSorted from "./ShowList Child/ShowSorted";
import ShowFiltered from "./ShowList Child/ShowFiltered";

function ShowList() {
  const { todos, filter } = useMyContext();

  return (
    <section className=" border-t p-4 bg-white overflow-y-auto flex flex-col gap-2 h-full">
      <ShowFilter />
      {todos.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-400 text-2xl ">No todos!</p>
        </div>
      ) : filter === "All" ? (
        <ShowSorted />
      ) : (
        <ShowFiltered />
      )}
    </section>
  );
}

export default ShowList;
