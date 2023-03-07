function UpdateTaskAndTitle() {
  return (
    <>
      <div className="flex  flex-col items-center justify-center bg-transparent h-screen p-4 backdrop-blur-xl">
        <div className="m-6 flex md:w-1/2 flex-col items-center justify-center gap-12 rounded-2xl bg-[#333335] p-6 shadow-2xl shadow-[#333335] selection:bg-green-200 selection:text-[#181a1a] hover:bg-[#181a1a] hover:shadow-[#181a1a] ">
          {/* date */}
          <div className="flex w-full flex-wrap items-center justify-between text-[#f4f4f4]">
            <div className="flex flex-col flex-wrap">
              <h2 className="font-bold">Created:</h2>
              <h3>2021/12/45</h3>
            </div>
            <div className="flex flex-col flex-wrap">
              <h2 className="font-bold">Updated:</h2>
              <h3>2023/12/9</h3>
            </div>
          </div>
          {/*text input */}
          <div className="flex w-full items-center justify-center">
            <input
              className="block w-full appearance-none rounded-xl border bg-[#f4f4f4] py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Type here to update..."
            />
          </div>
          {/* buttons */}
          <div className="flex flex-wrap gap-5">
            <button className="shadow-3xl rounded-xl border-2 bg-[#f4f4f4] px-6 py-2 text-center font-semibold hover:border-green-600 hover:text-green-600">
              Save
            </button>
            <button className="shadow-3xl rounded-xl border-2 bg-[#f4f4f4] px-6 py-2 text-center font-semibold hover:border-red-600 hover:text-red-600">
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateTaskAndTitle;
