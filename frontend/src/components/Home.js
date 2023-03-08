import { useContext, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ToDoCards from "../components/ToDoCards";
import { toDoContext } from "../App";
import AddNewToDo from "./AddANewTodo";
import fetchAllToDos from "../utils/FetchAllToDos";

function Home() {
  const { toDos, setToDos } = useContext(toDoContext);
  useEffect(() => {
    fetchAllToDos(setToDos)
  }, []);
  return (
    <>
      <div className="flex flex-col font-Lindra">
        <div className="flex justify-center md:justify-end md:mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon h-8 mt-2 hover:scale-150 text-[#333335] hover:text-[#181a1a]"
            viewBox="0 0 512 512"
          >
            <path
              d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
            />
          </svg>
        </div>
        <SearchBar />

        {Object.keys(toDos).length > 0 ? (
          <ToDoCards todos={toDos} />
        ) : (
          <div className="justify-center w-full  justify-items-center gap-6 md:gap-y-10 md:p-8 absolute top-32 font-Lindra grid md:grid-cols-4">
            <AddNewToDo />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
