import { MyProvider } from "./MyContext";
import Input from "./components/Input";

function App() {
  return (
    <MyProvider>
      <main className="flex flex-col items-center justify-center h-screen bg-slate-100">
        <div className="max-w-[50rem] h-full my-4 rounded-md overflow-hidden">
          <h1 className="text-2xl text-center p-4 bg-green-600 text-white font-semibold">
            My Todo List App
          </h1>
          <Input />
        </div>
      </main>
    </MyProvider>
  );
}

export default App;
