import { useMyContext } from "../MyContext";

function useEditHook() {
  const {
    editId,
    setEditId,
    setEdit,
    todos,
    setTodos,
    inputText,
    setInputText,
  } = useMyContext();

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

  return { handleSubmit, handleClose };
}

export default useEditHook;
