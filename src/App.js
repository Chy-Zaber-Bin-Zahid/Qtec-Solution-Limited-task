import { MyProvider } from "./MyContext";
import Input from "./components/Input";

function App() {
  return (
    <MyProvider>
      <main className="h-screen border-2 border-red-500 max-w-[50rem] m-auto py-10">
        <h1 className="text-2xl text-center p-4 bg-orange-300 font-semibold">
          My Todo List App
        </h1>
        <Input />
      </main>
    </MyProvider>
  );
}

export default App;
