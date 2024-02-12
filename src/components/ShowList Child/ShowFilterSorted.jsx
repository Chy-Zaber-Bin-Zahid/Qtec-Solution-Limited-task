import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useShowListHook from "../../hooks/showListHook";

const ShowFilterSorted = ({ todo, toggleTodoCompletion, handleDeleteTodo }) => {
  const { handleEditTodo } = useShowListHook();

  return (
    <div
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
        <p className={`${todo.completed && 'line-through'}`}>{todo.text}</p>{" "}
      </div>
      <FaRegEdit
        onClick={() => handleEditTodo(todo.id)}
        className="cursor-pointer text-lg hover:text-white transition-all duration-300"
      />
      <MdDeleteOutline
        className="cursor-pointer text-lg hover:text-white transition-all duration-300 hover:animate-shake"
        onClick={() => handleDeleteTodo(todo.id)}
      />
    </div>
  );
};

export default ShowFilterSorted;
