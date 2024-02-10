import { useMyContext } from "../MyContext";

function useShowListHook() {
  const { todos, setTodos, filter } = useMyContext();

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

  // Filtering todo
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "Low":
      case "Medium":
      case "High":
        return todo.priority === filter;
      case "Completed":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;
      default:
        return true;
    }
  });

  return {
    toggleTodoCompletion,
    sortedTodos,
    handleDeleteTodo,
    filteredTodos,
  };
}

export default useShowListHook;
