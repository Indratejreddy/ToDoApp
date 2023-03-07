import updateTaskAndTitle from "../utils/UpdateTaskAndTitle";
import { useRef } from "react";

function EditForm({ Url, data, setToDos, setEditMode }) {
  const editRef = useRef(null);
  function sendTextInput() {
    const data = editRef.current.value;
    updateTaskAndTitle(Url, data, setToDos);
    setEditMode((editMode) => false);
    console.log(data);
  }
  return (
    <>
      {/* task */}
      <div className="   group flex w-full justify-around items-center mt-3  flex-wrap  rounded-xl ">
        {/*text input */}

        <input
          ref={editRef}
          className="block w-[90%] h-10 appearance-none rounded-xl border bg-[#f4f4f4] py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none
          text-lg"
          id="task-input"
          type="text"
          defaultValue={data}
        />
        <div className="flex justify-between items-center gap-2  flex-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon h-9 w-9 hover:text-green-600 text-[#f4f4f4]"
            viewBox="0 0 512 512"
            onClick={sendTextInput}
          >
            <title>Save</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
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
              d="M352 176L217.6 336 160 272"
            />
          </svg>

          <svg
            className="ionicon h-9 w-9 hover:text-red-600 text-[#f4f4f4] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => (editRef.current.value = "")}
          >
            <title>Clear</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
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
              d="M320 320L192 192M192 320l128-128"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
export default EditForm;
