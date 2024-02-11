import { MyProvider } from "./MyContext";
import Edit from "./components/EditSection";
import Filter from "./components/FilterSection";
import Input from "./components/InputSection";
import ShowList from "./components/ShowListSection";
import { FcTodoList } from "react-icons/fc";

function App() {
  return (
    <MyProvider>
      <main className="flex flex-col items-center justify-center h-screen bg-slate-100 relative max-[450px]:px-2">
        <div className="max-w-[50rem] h-full my-4 rounded-md flex flex-col overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] min-[800px]:h-[750px] max-[450px]:w-full">
          <h1 className="text-2xl flex justify-center items-center gap-2 p-4 bg-green-600 text-white font-semibold max-[350px]:text-lg">
            <FcTodoList />
            My Todo List App
          </h1>
          <Filter />
          <Input />
          <ShowList />
          <Edit />
        </div>
      </main>
    </MyProvider>
  );
}

export default App;
