import React from "react";
import useInputHook from "../hooks/inputHook";

function Input() {
  const {
    todoText,
    priority,
    handleInputChange,
    handlePriorityChange,
    handleAddTodo,
  } = useInputHook();

  const priorityOptions = ["Low", "Medium", "High"];

  return (
    <form
      onSubmit={handleAddTodo}
      className="flex justify-between items-center gap-4 p-4 bg-white"
    >
      <input
        className="w-full p-2 outline-none border-2 border-green-200 focus:border-green-600 rounded"
        placeholder="Write todo list..."
        value={todoText}
        onChange={handleInputChange}
        type="text"
        required
      />
      <div className="flex gap-2 justify-center items-center">
        <label className="font-semibold" htmlFor="priority">
          Priority:
        </label>
        <select
          id="priority"
          className="border-2 text-white p-2 cursor-pointer bg-green-600"
          value={priority}
          onChange={handlePriorityChange}
        >
          {priorityOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded font-semibold transition-all duration-300 hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
}

export default Input;
