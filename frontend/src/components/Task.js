import  updateStatus  from "../utils/UpdateStatus";
import deleteATask from "../utils/DeleteATask";

function Task({
  toDoTask,
  toDoTaskstatus,
  toDoTaskId,
  toDoId,
  setToDos,
  toDoUrl,
  setEditMode,
}) {
  const taskStatusUrl =
    toDoUrl + "updatetaskstatus/" + toDoId + "/" + toDoTaskId;
  const statusColor = toDoTaskstatus && "group-hover:border-green-600";

  return (
    <>
      <div className=" group flex w-full justify-between items-center mt-3  flex-wrap hover:bg-[#f4f4f4] rounded-xl hover:opacity-80 px-2 py-1">
        <div className="text-xl font-semibold text-[#f4f4f4] group-hover:text-[#333335]">
          {toDoTask}
        </div>
        <div className="flex justify-between items-center gap-3  flex-wrap">
          <button
            className={
              "group border-2  bg-[#f4f4f4] p-1 rounded-2xl flex justify-center hover:border-green-600   shadow-3xl " +
              statusColor
            }
            onClick={() =>
              updateStatus(taskStatusUrl, toDoTaskstatus, setToDos)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon h-6 w-6 group-hover:text-green-600
            group-hover:fill-green-600"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M352 176L217.6 336 160 272"
              />
              <rect
                x={64}
                y={64}
                width={384}
                height={384}
                rx={48}
                ry={48}
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={32}
              />
            </svg>
          </button>
          <button
            className="group bg-[#f4f4f4] p-1 rounded-2xl flex justify-center hover:border-orange-600 border-2 shadow-3xl"
            onClick={() => setEditMode((editMode) => true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon h-6 w-6 group-hover:text-orange-600 group-hover:fill-orange-600"
              viewBox="0 0 512 512"
            >
              <path
                d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
              />
              <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
            </svg>
          </button>
          <button
            onClick={() => deleteATask(toDoId, toDoTaskId, setToDos)}
            className="group bg-[#f4f4f4] p-1 rounded-2xl flex justify-center hover:border-red-600 border-2 shadow-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon h-6 w-6 group-hover:text-red-600 group-hover:fill-red-600"
              viewBox="0 0 512 512"
            >
              <path
                d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M80 112h352"
              />
              <path
                d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Task;