import React from "react";

function ToDosList() {
  return (
    <div className="container max-w-3xl px-4 mx-auto sm:px-8">
      <h2 className="mt-[20px] text-2xl leading-tight">ToDo App</h2>

      {/* container 1 */}
      <div className="flex py-4 flex-row justify-between w-full mb-1 sm:mb-0">
        <form className="mt-[25px] flex  justify-between items-center gap-x-10 ">
          <div className="flex relative mx-auto  max-w-md">
            <input
              className=" hover:bg-purple-50 text-gray-400 border-2 border-primary  transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-lg "
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-2 top-3 mr-4">
              <svg
                className="text-purple-400 hover:text-purple-500  h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div className="flex gap-x-2">
            <input
              className=" hover:bg-purple-50 text-gray-400 border-2 border-primary  transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-lg "
              type="search"
              name="search"
              placeholder="add todo"
            />
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      {/* container2 */}
      <div className="px-4 py-4 mx-4 overflow-x-auto sm:-mx-8 sm:px-8 ">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  ToDos
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Created at
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Updated at
                </th>
                <th
                  scope="col"
                  className="px-8 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  status
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  EDIT
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  DELETE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p className="text-gray-900 whitespace-no-wrap">todo</p>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p className="text-gray-900 whitespace-no-wrap">12/09/2020</p>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p className="text-gray-900 whitespace-no-wrap">12/09/2020</p>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                    ></span>
                    <span className="relative">completed</span>
                  </span>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <button className="text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <button className="text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
            <div className="flex items-center">
              <button
                type="button"
                className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
              >
                <svg
                  width={9}
                  fill="currentColor"
                  height={8}
                  className=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
              >
                1
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
              >
                2
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
              >
                3
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
              >
                4
              </button>
              <button
                type="button"
                className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
              >
                <svg
                  width={9}
                  fill="currentColor"
                  height={8}
                  className=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDosList;
