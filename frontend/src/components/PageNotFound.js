import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="flex items-center h-full p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-[#333335]">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-[#333335]">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <Link to="/"><button className="px-8 py-3 font-semibold rounded bg-[#333335] text-white hover:bg-white hover:text-[#333335] border-2 border-[#333335]">
            Back to homepage
          </button></Link>
        </div>
      </div>
    </div>
  );
}
export default PageNotFound;
