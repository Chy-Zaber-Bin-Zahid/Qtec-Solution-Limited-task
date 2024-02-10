import { createContext, useContext, useState } from "react";

// Creating context api
const MyContext = createContext();

function MyProvider({ children }) {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  return (
    <MyContext.Provider value={{ todos, setTodos }}>
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
