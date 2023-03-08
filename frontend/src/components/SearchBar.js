import { useContext } from "react";
import { toDoContext } from "../App";
function SearchBar() {
   const { setQuery } = useContext(toDoContext);
  return (
    <>
      <div className="py-2 sticky top-0  mt-4 flex group md:ml-[45%] ml-[35%]  hover:ml-0 focus-within:ml-0 duration-1000 ">
        {/*logo */}
        <div>
          <svg
            className="place-self-end group-hover:hidden group-focus-within:hidden  duration-1000 group-focus-within:opacity-0 group-hover:opacity-0 fill-[#e2e7ea]"
            width="75px"
            height="75px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="165.540380859375 14 168.91923828125 122"
            style={{
              background: "0 0",
            }}
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <filter
                id="editing-extrusion"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feFlood result="color1" floodColor="#444" />
                <feConvolveMatrix
                  order="8,8"
                  divisor={1}
                  kernelMatrix="1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1"
                  in="SourceAlpha"
                  result="extrude"
                />
                <feComposite
                  in="color1"
                  in2="extrude"
                  result="comp-extrude"
                  operator="in"
                />
                <feOffset
                  dx={4}
                  dy={4}
                  in="comp-extrude"
                  result="offset-extrude"
                />
                <feMerge>
                  <feMergeNode in="offset-extrude" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#editing-extrusion)">
              <path
                d="M6.21-31.17q-2.18-1.66-2.18-5.21 0-3.56 2.34-5.41 2.33-1.86 6.37-1.86 2.56 0 8.64.9l4.35.64q2.17.25 4.45.25 2.27 0 3.8-.96 2.31 2.05 2.31 5 0 2.94-2.63 5.05-2.68 2.24-6.14 2.24-1.66 0-4.35-.45-3.14 9.86-3.14 16.71 0 6.85 3.46 10.43-1.6 2.88-3.97 4T13.6 1.28q-3.55 0-5.76-1.95T5.63-6.66q0-4.67 2.56-12.35 2.56-7.61 6.4-13.44-1.85-.19-3.77-.19-3.97 0-4.61 1.47zM45.25 1.28q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.51-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.59 5.89zm1.66-27.84q-.77 1.73-1.37 4.32-.61 2.59-1.38 6.69-.77 4.09-.77 9.15 0 1.66.55 2.75.54 1.09 2.01 1.09 1.47 0 2.4-.7.93-.71 1.63-2.37 1.28-2.95 2.31-8.42 1.02-5.47 1.12-7.84.09-2.37.09-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm42.37-7.36q2.3 0 4.1.51.06-.25.19-.96l.32-1.98q.25-1.28.64-3.39l1.02-5.06 12.74-1.28-7.11 37.12q-.06.38-.06 1.02v1.03q0 1.41.7 2.46.71 1.06 1.86 1.06Q102.4-.38 98.5.9q-1.35.38-3.24.38-1.88 0-3.61-.99t-2.24-2.66Q88.38-.7 86.34.29q-2.05.99-5.03.99-2.97 0-5.44-.77-2.46-.77-4-2.43-2.81-3.26-2.81-10.69 0-9.6 5.63-15.42 5.63-5.89 14.59-5.89zm-.45 3.84q-2.37 0-3.65 2.56-1.28 2.56-2.59 8.9-1.31 6.33-1.31 12.03 0 3.9 2.3 3.9 2.05 0 3.49-2.05 1.44-2.04 2.02-5.44l3.45-18.75q-1.34-1.15-3.71-1.15z"
                fill="#ccc"
                transform="translate(194.573 98.68)"
              />
            </g>
            <style />
          </svg>
        </div>
        {/* search component */}
        <div className="group-hover:w-full group-hover:ml-0 group-focus-within:ml-0 group-focus-within:w-full -ml-7 mt-4">
          <div className="flex  group p-0.5">
            <div className="ease-in-out duration-1000 group-hover:w-full group-focus-within:w-full group-focus-within:#f4f4f4 flex group-hover:#f4f4f4 items-center justify-between w-0 rounded-full shadow-xl p-1.5 sticky">
              {/* close icon */}
              <button className=" invisible group-hover:visible  group-focus-within:visible ease-linear duration-500 opacity-40 group-hover:opacity-100 group-focus-within:opacity-100 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon w-9 h-9  fill-[#444444] hover:fill-[#181a1a]"
                  viewBox="0 0 512 512"
                >
                  <title>Close Circle</title>
                  <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
                </svg>
              </button>
              {/* text input */}
              <input
                className="bg-[#333335] focus:bg-[#181a1a] focus:text-[#f4f4f4] selection:bg-green-700  focus:bg-[#333335] group-hover:bg-[#181a1a] group-hover:text-[#f4f4f4] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 invisible group-hover:visible group-focus-within:visible ease-in-out duration-700 font-bold uppercase rounded-full w-full h-9 py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setQuery((query) => e.target.value);
                }}
              />
              {/* search icon */}
              <button className="-ml-11 group-hover:ml-auto group-focus-within:ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon h-9 w-9 fill-[#444444] hover:fill-[#181a1a]"
                  viewBox="0 0 512 512"
                >
                  <title>Search Circle</title>
                  <path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z" />
                  <circle cx={232} cy={232} r={56} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
