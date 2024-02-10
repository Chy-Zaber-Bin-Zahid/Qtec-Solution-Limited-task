import { useMyContext } from "../MyContext";

function useShowListHook() {
  const { todos, setTodos } = useMyContext();

  // Sort todos by priority (High -> Medium -> Low)
  const sortedTodos = todos.sort((a, b) => {
    if (a.priority === "High") return -1;
    if (a.priority === "Medium" && b.priority !== "High") return -1;
    return 1;
  });

  const toggleTodoCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed, incomplete: !todo.incomplete }
        : todo
    );
    setTodos(updatedTodos);
  };

  // Update the state with the filtered todos
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return {
    toggleTodoCompletion,
    sortedTodos,
    handleDeleteTodo,
  };
}

export default useShowListHook;
