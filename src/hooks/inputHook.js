import { useState } from "react";
import { useMyContext } from "../MyContext";
import { v4 as uuidv4 } from "uuid";

function useInputHook() {
  const [todoText, setTodoText] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  // Context Api
  const { todos, setTodos } = useMyContext();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: todoText,
      priority,
      completed: false,
      incomplete: true,
    };
    setTodos([...todos, newTodo]);
    // Clear the input fields
    handleInputChange({ target: { value: "" } });
    handlePriorityChange({ target: { value: "Low" } });
  };

  return {
    todoText,
    priority,
    handleInputChange,
    handlePriorityChange,
    handleAddTodo,
  };
}

export default useInputHook;
