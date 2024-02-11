import { useState } from "react";
import { useMyContext } from "../MyContext";

function useEditHook() {
  const [inputText, setInputText] = useState("");

  const { editId, setEditId, setEdit, todos, setTodos } = useMyContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, text: inputText } : todo
    );
    setTodos(updatedTodos);
    setEdit(false);
    setEditId("");
    setInputText("");
  };

  // Close popup window
  const handleClose = () => {
    setEdit(false);
    setInputText("");
  };

  return { inputText, setInputText, handleSubmit, handleClose };
}

export default useEditHook;
