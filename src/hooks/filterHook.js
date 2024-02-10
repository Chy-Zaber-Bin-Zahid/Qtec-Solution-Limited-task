import { useMyContext } from "../MyContext";

function useFilterHook() {
  // Context Api
  const { setFilter } = useMyContext();

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  return {
    handleSelectChange,
  };
}

export default useFilterHook;
