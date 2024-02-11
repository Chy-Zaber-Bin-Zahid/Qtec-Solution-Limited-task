import { VscEdit } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

function Edit() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-75 blur-sm"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex justify-between items-center bg-green-600 p-2 text-white">
          <h1 className="  font-semibold text-lg flex justify-start items-center gap-2">
            Edit Your Todo <VscEdit />
          </h1>
          <IoMdClose className="text-xl hover:rotate-180 cursor-pointer transition-all duration-300 font-semibold hover:scale-125" />
        </div>
        <div className="flex gap-2 justify-center items-center p-2 ">
          <input
            className="w-full px-2 py-1 outline-none border-2 border-green-200 focus:border-green-600 rounded "
            placeholder="Edit todo..."
            type="text"
            required
          />
          <button
            type="submit"
            className="bg-black text-white text-sm px-3 py-2 rounded font-semibold transition-all duration-300 hover:bg-slate-800"
          >
            Change
          </button>
        </div>
      </div>
    </>
  );
}

export default Edit;
