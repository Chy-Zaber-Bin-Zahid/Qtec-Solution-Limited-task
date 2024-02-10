import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function ShowList() {
  return (
    <section className="border-t p-4 h-full bg-white overflow-y-auto flex flex-col gap-2">
      <div className="flex justify-between items-center bg-green-500 p-2 gap-2 rounded-md">
        <div className="flex gap-2 justify-start items-center w-full">
          <input type="checkbox" />
          <p className="" >Text</p>
        </div>
        <FaRegEdit className="" />
        <MdDeleteOutline />
      </div>
    </section>
  );
}

export default ShowList;
