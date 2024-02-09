import React from "react";

function Input() {
  return (
    <section className="flex justify-between items-center gap-4 p-4">
      <input className="w-full" type="text" />
      <div className="flex gap-2">
        <label htmlFor="">Priority: </label>
        <select>
          <option value="option1">Low</option>
          <option value="option2">Medium</option>
          <option value="option3">High</option>
        </select>
      </div>
      <button>Add</button>
    </section>
  );
}

export default Input;
