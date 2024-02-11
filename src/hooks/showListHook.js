import { useMyContext } from "../MyContext";

function useShowListHook() {
  const {
    todos,
    setTodos,
    filter,
    setEdit,
    setEditId,
    searchQuery,
    setInputText,
  } = useMyContext();

  const queryTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort todos by priority (High -> Medium -> Low)
  const sortedTodos =
    searchQuery.length !== 0
      ? todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchQuery.toLowerCase())
        ) //Search Sort
      : todos.sort((a, b) => {
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

  // Edit the todo
  const handleEditTodo = (id) => {
    setEditId(id);
    setEdit(true);
    const todoTextArray = todos.filter((todo) => todo.id === id);
    setInputText(todoTextArray[0].text);
  };

  // Filtering todo
  const filteredTodos = todos
    .filter((todo) => {
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
    })
    .filter(
      (todo) => todo.text.toLowerCase().includes(searchQuery.toLowerCase()) //Search filter
    );

  return {
    toggleTodoCompletion,
    sortedTodos,
    handleDeleteTodo,
    filteredTodos,
    handleEditTodo,
    queryTodos,
  };
}

export default useShowListHook;
