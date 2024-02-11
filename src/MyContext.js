import { createContext, useContext, useState } from "react";

// Creating context api
const MyContext = createContext();

function MyProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");

  return (
    <MyContext.Provider
      value={{
        todos,
        setTodos,
        filter,
        setFilter,
        edit,
        setEdit,
        editId,
        setEditId,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

// Custom hook
function useMyContext() {
  const context = useContext(MyContext);
  return context;
}

export { MyProvider, useMyContext };
