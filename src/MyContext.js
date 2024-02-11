import { createContext, useContext, useEffect, useState } from "react";

// Creating context api
const MyContext = createContext();

function MyProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [filter, setFilter] = useState("All");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Fetch tasks from local storage
  const fetchTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  };

  // Save tasks to local storage
  const saveTodosToLocalStorage = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // Load todos from local storage
  useEffect(() => {
    fetchTodosFromLocalStorage();
  }, []);

  // Update local storage
  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  // Window hight check
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

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
        searchQuery,
        setSearchQuery,
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
