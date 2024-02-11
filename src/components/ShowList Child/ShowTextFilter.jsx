import { useMyContext } from "../../MyContext";
import useShowListHook from "../../hooks/showListHook";

function ShowFilter() {
  const { todos, filter, searchQuery } = useMyContext();
  const { queryTodos } = useShowListHook();

  const filterConditions = {
    Low: {
      condition: (todo) => todo.priority === "Low",
      message: "No low priority todos!",
    },
    Medium: {
      condition: (todo) => todo.priority === "Medium",
      message: "No medium priority todos!",
    },
    High: {
      condition: (todo) => todo.priority === "High",
      message: "No high priority todos!",
    },
    Completed: {
      condition: (todo) => todo.completed,
      message: "No completed todos!",
    },
    Incomplete: {
      condition: (todo) => !todo.completed,
      message: "No incomplete todos!",
    },
  };

  const { condition, message } = filterConditions[filter] || {};

  return (
    <>
      {todos.length !== 0 &&
        condition &&
        todos.filter(condition).length === 0 && (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-400 text-2xl">{message}</p>
          </div>
        )}
      {queryTodos.length === 0 && searchQuery !== "" && (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-400 text-2xl">No matching todos found!</p>
        </div>
      )}
    </>
  );
}

export default ShowFilter;
