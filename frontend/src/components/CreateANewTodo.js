import { useContext, useRef } from "react";
import { toDoContext } from "../App";

import createAToDo from "../utils/CreateAToDo";

export default function CreateANewTodo() {
  const { setToDos, toDoUrl } = useContext(toDoContext);
  const titleRef = useRef(null);
  const taskRef = useRef(null);

  function sendTextInput() {
    const url = toDoUrl + "createtodo";
    const title = titleRef.current.value;
    const tasks = taskRef.current.value
      .trim()
      .split(" ")
      .map((task) => ({ task: task }));
    createAToDo(url, title, tasks, setToDos);
  }
  return (
    <>
      <div className=" h-screen md:h-full font-Lindra flex flex-col items-center justify-center bg-[#333335] hover:bg-[#181a1a]  m-6 p-10 rounded-2xl gap-4 shadow-2xl shadow-[#333335] hover:shadow-[#181a1a]">
        <div className="flex flex-col justify-center items-center w-full mx-6 md:gap-10 md:p-24">
          <div className="flex w-full justify-between items-center group flex-wrap gap-1">
            <h1 className=" font-semibold text-3xl text-[#f4f4f4]">
              Todo Title:
            </h1>

            {/*  title input */}
            <div className="w-full flex justify-center items-center mt-1">
              <input
                ref={titleRef}
                className="selection:bg-green-200 appearance-none block w-full bg-[#f4f4f4] text-gray-700 border  rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Please enter todo title here"
              />
            </div>
          </div>

          <div className="flex w-full justify-between items-center group flex-wrap gap-1">
            <h1 className=" font-semibold text-3xl text-[#f4f4f4]">Tasks:</h1>

            {/*  task input */}
            <div className="w-full flex justify-center items-center mt-1">
              <input
                ref={taskRef}
                className="selection:bg-green-200 appearance-none block w-full bg-[#f4f4f4] text-gray-700 border  rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="please enter tasks separated by space. Example: task1 task2 task3 "
              />
            </div>

            {/* create button */}
            <div className="w-full flex justify-center items-center mt-4 ">
              <button
                onClick={sendTextInput}
                className="hover:text-green-600 font-semibold  bg-[#f4f4f4] rounded-xl px-6 py-2 text-center hover:border-green-600 border-2 shadow-3xl "
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
