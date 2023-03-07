import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import ToDoCards from "../components/ToDoCards";
import { toDoContext } from "../App";
import AddNewToDo from "./AddANewTodo";

function Home() {
  const { toDos } = useContext(toDoContext);

  return (
    <>
      <div className="flex flex-col font-Lindra">
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
