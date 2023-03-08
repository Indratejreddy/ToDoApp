import { useContext, useRef } from "react";
import { toDoContext } from "../App";
import { useParams } from "react-router-dom";
import ToDoTitle from "./ToDoTitle";
import ToDoTask from "./ToDoTask";
import addATask from "../utils/AddATask";
import checkAndUpdateTodoStatus from "../utils/CheckAndUpdateTodoStatus";

function ToDosList() {
  const { toDoId } = useParams();
  const { toDos, setToDos, toDoUrl } = useContext(toDoContext);
  const addTaskRef = useRef(null);
  const toDoStatusUrl = toDoUrl + "updatetodostatus/" + toDoId;
  const toDo = toDos.length > 0 && toDos.find((toDo) => toDo._id === toDoId);
  checkAndUpdateTodoStatus(toDo, toDoStatusUrl, setToDos);

  return (
    <>
      <div className="font-Lindra flex flex-col items-center justify-center bg-[#333335] hover:bg-[#181a1a]  m-6 p-5 rounded-2xl gap-4 shadow-2xl shadow-[#333335] hover:shadow-[#181a1a]">
        {/* todotitle */}
        {toDo && (
          <ToDoTitle
            toDoTitle={toDo.toDoTitle.title}
            toDoStatusUrl={toDoStatusUrl}
            toDoStatus={toDo.toDoStatus.status}
            setToDos={setToDos}
            toDoUrl={toDoUrl}
            toDoId={toDo._id}
          />
        )}

        {/* add task input */}
        <div className="w-full flex justify-center items-center">
          <input
            ref={addTaskRef}
            className="selection:bg-green-200 appearance-none block w-full bg-[#f4f4f4] text-gray-700 border  rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Todo Task"
          />
        </div>

        {/* add button */}
        <div>
          <button
            onClick={() => {
              addATask(toDoId, addTaskRef.current.value, setToDos);
              addTaskRef.current.value = "";
            }}
            className="hover:text-green-600 font-semibold  bg-[#f4f4f4] rounded-xl px-6 py-2 text-center hover:border-green-600 border-2 shadow-3xl "
          >
            Add
          </button>
        </div>

        {/* fetching tasks */}
        {toDo &&
          toDo.toDoTasks.tasks.map((toDoTask) => (
            <ToDoTask
              key={toDoTask._id}
              toDoId={toDoId}
              toDoTask={toDoTask.task}
              toDoTaskstatus={toDoTask.status}
              toDoTaskId={toDoTask._id}
              setToDos={setToDos}
              toDoUrl={toDoUrl}
            />
          ))}
      </div>
    </>
  );
}
export default ToDosList;
