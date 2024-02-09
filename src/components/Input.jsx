import React from "react";

function Input() {
  return (
    <section className="flex justify-between items-center gap-4 p-4 bg-white">
      <input
        className="w-full p-2 outline-none border-2 focus:border-green-600 rounded"
        placeholder="Write todo list..."
        type="text"
      />
      <div className="flex gap-2 justify-center items-center">
        <label className="font-semibold" htmlFor="priority">Priority:</label>
        <select
          id="priority"
          className="border-2 text-white p-2 mr-2 cursor-pointer bg-green-600"
        >
          <option value="option1">Low</option>
          <option value="option2">Medium</option>
          <option value="option3">High</option>
        </select>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded font-semibold transition-all duration-300 hover:bg-slate-800">
        Add
      </button>
    </section>
  );
}

export default Input;
