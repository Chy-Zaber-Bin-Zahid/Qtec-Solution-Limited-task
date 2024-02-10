import { FaRegEdit } from "react-icons/fa";
import useShowListHook from "../../hooks/showListHook";
import { MdDeleteOutline } from "react-icons/md";

function ShowFiltered() {
  const { toggleTodoCompletion, handleDeleteTodo, filteredTodos } =
    useShowListHook();
  return (
    <>
      {filteredTodos.map((todo, index) => (
        <div
          key={index}
          className={`flex justify-between items-center ${
            todo.priority === "Low"
              ? "bg-green-500"
              : todo.priority === "Medium"
              ? "bg-orange-500"
              : "bg-red-500"
          } p-2 gap-2 rounded-md`}
        >
          <div className="flex gap-2 justify-start items-center w-full">
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={() => toggleTodoCompletion(todo.id)}
            />
            <p className="">{todo.text}</p>{" "}
          </div>
          <FaRegEdit className="cursor-pointer text-lg" />
          <MdDeleteOutline
            className="cursor-pointer text-lg"
            onClick={() => handleDeleteTodo(todo.id)}
          />
        </div>
      ))}
    </>
  );
}

export default ShowFiltered;
