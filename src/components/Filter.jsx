import React from "react";

function Filter() {
  const completionOptions = [
    "All",
    "Low",
    "Medium",
    "High",
    "Completed",
    "Incomplete",
  ];

  return (
    <section className="flex justify-between items-center gap-4 px-4 pb-4 bg-white ">
      <div className="flex justify-between items-center gap-2">
        <h1 className="font-semibold">Completed:</h1>
        <p className="mr-3">*</p>
        <h1 className="font-semibold">Incomplete:</h1>
        <p>*</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <label className="font-semibold" htmlFor="filter">
          Filter:
        </label>
        <select
          id="priority"
          className="border-2 text-white p-2 cursor-pointer bg-green-600"
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
