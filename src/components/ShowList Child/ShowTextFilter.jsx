import { useMyContext } from "../../MyContext";

function ShowFilter() {
  const { todos, filter } = useMyContext();

  const filterConditions = {
    Low: { condition: todo => todo.priority === "Low", message: "No low priority todos!" },
    Medium: { condition: todo => todo.priority === "Medium", message: "No medium priority todos!" },
    High: { condition: todo => todo.priority === "High", message: "No high priority todos!" },
    Completed: { condition: todo => todo.completed, message: "No completed todos!" },
    Incomplete: { condition: todo => !todo.completed, message: "No incomplete todos!" }
  };

  const { condition, message } = filterConditions[filter] || {};

  return (
    <>
      {todos.length !== 0 && condition && todos.filter(condition).length === 0 && (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-400 text-2xl">{message}</p>
        </div>
      )}
    </>
  );
}

export default ShowFilter;
