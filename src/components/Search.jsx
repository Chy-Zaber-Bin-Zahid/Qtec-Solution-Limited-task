import useSearchHook from "../hooks/searchHook";

function Search() {
  const { searchQuery, handleSearchChange } = useSearchHook();

  return (
    <section className="flex justify-between items-center gap-4 p-4 pt-0 bg-white max-[350px]:text-sm">
      <input
        className="w-full p-2 outline-none border-2 border-green-200 focus:border-green-600 rounded"
        placeholder="Seacrh your todo..."
        type="text"
        required
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </section>
  );
}

export default Search;
