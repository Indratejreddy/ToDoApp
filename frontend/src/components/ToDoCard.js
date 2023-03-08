import { Link } from "react-router-dom";
import { useContext } from "react";
import { toDoContext } from "../App";

function ToDoCard({ toDoTitle, toDoTasks, toDoStatus, toDoId }) {
  const { setQuery } = useContext(toDoContext);
  console.log("toDoCARD TODOID --------------------->", toDoId);
  return (
    <>
      {/* card */}
      <div className="group h-52 w-52 ">
        <div className="bg-[#333335] group-hover:bg-[#181a1a] group-hover:text-[#f4f4f4] relative h-full w-full rounded-[32px] shadow-2xl shadow-[#333335] hover:shadow-[#181a1a] transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute inset-0 h-full w-full rounded-[32px]  px-12 text-center text-slate-200">
            <div className="text-xl  group-hover:hidden mt-24">{toDoTitle}</div>
            <div className="flex min-h-full flex-col items-center justify-center group-hover:visible invisible group-hover:[transform:rotateY(180deg)] text-[#f4f4f4]">
              <h1 className="text-xl">{toDoTitle}</h1>
              <p className="text-lg">Total Tasks: {toDoTasks.length} </p>
              <p className="text-lg">
                Status: {toDoStatus ? "Completed" : "Inprogress"}
              </p>
              <Link to={"/ToDosList/" + toDoId}>
                <button
                  onClick={() => {
                    setQuery((query) => "");
                  }}
                  className="text-center flex gap-1 items-center justify-center mt-2 rounded-3xl bg-[#f4f4f4] p-2 text-sm text-[#333335] hover:bg-[#181a1a] hover:text-[#f4f4f4] border-[2px] hover:border-[#f4f4f4]"
                >
                  view more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon h-5 w-5 "
                    viewBox="0 0 512 512"
                  >
                    <toDoTitle>Chevron Forward Circle</toDoTitle>
                    <path
                      d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M216 352l96-96-96-96"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToDoCard;
