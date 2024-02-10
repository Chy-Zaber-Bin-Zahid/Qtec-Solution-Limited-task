import React from "react";
import { useMyContext } from "../MyContext";
import useFilterHook from "../hooks/filterHook";

function Filter() {
  const completionOptions = [
    "All",
    "Low",
    "Medium",
    "High",
    "Completed",
    "Incomplete",
  ];

  const { todos, filter } = useMyContext();
  const { handleSelectChange } = useFilterHook();

  // At least one todo is complete
  const atLeastOneComplete = todos.some((todo) => todo.complete);
  const completeCount = todos.filter((todo) => todo.complete).length;
  // At least one todo is incomplete
  const atLeastOneIncomplete = todos.some((todo) => todo.incomplete);
  const incompleteCount = todos.filter((todo) => todo.incomplete).length;

  return (
    <section className="flex justify-between items-center gap-4 px-4 pb-4 bg-white ">
      <div className="flex justify-between items-center gap-2">
        <h1 className="font-semibold">Completed:</h1>
        <p className="mr-3 font-semibold text-green-600">
          {todos.length === 0 || !atLeastOneComplete ? "0" : completeCount}
        </p>
        <h1 className="font-semibold">Incomplete:</h1>
        <p className="font-semibold text-red-600">
          {todos.length === 0 || !atLeastOneIncomplete ? "0" : incompleteCount}
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <label className="font-semibold" htmlFor="filter">
          Filter:
        </label>
        <select
          id="priority"
          className="border-2 text-white p-2 cursor-pointer bg-green-600"
          value={filter}
          onChange={handleSelectChange}
        >
          {completionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default Filter;
