import { MyProvider } from "./MyContext";
import Filter from "./components/Filter";
import Input from "./components/Input";
import ShowList from "./components/ShowList";
import { FcTodoList } from "react-icons/fc";

function App() {
  return (
    <MyProvider>
      <main className="flex flex-col items-center justify-center h-screen bg-slate-100">
        <div className="max-w-[50rem] h-full my-4 rounded-md flex flex-col overflow-hidden">
          <h1 className="text-2xl flex justify-center items-center gap-2 p-4 bg-green-600 text-white font-semibold">
            <FcTodoList />
            My Todo List App
          </h1>
          <Input />
          <Filter />
          <ShowList />
        </div>
      </main>
    </MyProvider>
  );
}

export default App;
