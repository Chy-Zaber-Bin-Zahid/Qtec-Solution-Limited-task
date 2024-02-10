import { useMyContext } from "../MyContext";

function useFilterHook() {
  // Context Api
  const { todos, setFilter } = useMyContext();

  // At least one todo is complete
  const atLeastOneComplete = todos.some((todo) => todo.completed);
  const completeCount = todos.filter((todo) => todo.completed).length;
  // At least one todo is incomplete
  const atLeastOneIncomplete = todos.some((todo) => todo.incomplete);
  const incompleteCount = todos.filter((todo) => todo.incomplete).length;

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  return {
    handleSelectChange,
    atLeastOneComplete,
    completeCount,
    atLeastOneIncomplete,
    incompleteCount,
  };
}

export default useFilterHook;
