import { useMyContext } from "../MyContext";

function useSearchHook() {
  // Context Api
  const { setSearchQuery } = useMyContext();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return { handleSearchChange };
}

export default useSearchHook;
