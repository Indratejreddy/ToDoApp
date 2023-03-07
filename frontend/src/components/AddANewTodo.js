import { Link } from "react-router-dom";
function AddANewToDo() {
  return (
    <>
      {/* card */}
      <div className="group h-52 w-52 ">
        <div className="bg-[#333335] group-hover:bg-[#181a1a] group-hover:text-[#f4f4f4] relative h-full w-full rounded-[32px] shadow-2xl shadow-[#333335] hover:shadow-[#181a1a] transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute inset-0 h-full w-full rounded-[32px]  px-12 text-center text-slate-200">
            <div className="text-xl  group-hover:hidden mt-24">Add</div>
            <div className="flex min-h-full flex-col items-center justify-center group-hover:visible invisible group-hover:[transform:rotateY(180deg)] text-[#f4f4f4]">
              <Link to={"/CreateANewTodo"}>
                <button className="text-center  bg-[#f4f4f4] p-4 rounded-3xl text-sm text-[#333335] hover:bg-[#181a1a] hover:text-[#f4f4f4] border-[5px] hover:border-[#f4f4f4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon h-6 w-6"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M256 112v288m144-144H112"
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

export default AddANewToDo;
