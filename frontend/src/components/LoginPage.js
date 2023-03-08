import { signInwithGmail, loginInWithEmailAndPassword } from "../FireBaseAuth";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { toDoContext } from "../App";

function LoginPage() {
  const { setMyemail } = useContext(toDoContext);
  const navigate = useNavigate();
  const password = useRef(null);
  const email = useRef(null);
  async function login() {
    if (
      await loginInWithEmailAndPassword(
        email.current.value,
        password.current.value,
        setMyemail
      )
    ) {
      navigate("/home");
    }
  }

  async function loginWithGmail() {
    if (await signInwithGmail(setMyemail)) {
      navigate("/home");
    }
  }

  return (
    <>
      <div
        className="flex flex-col justify-center item-center min-h-screen w-full 
bg-[#333335] hover:bg-[#181a1a] group
"
      >
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-lg font-semibold text-[#f4f4f4]">Sign in with</p>
          <div className="flex  justify-center w-full flex-wrap">
            <button
              onClick={loginWithGmail}
              className="flex gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-10 border border-gray-400 rounded-lg shadow"
            >
              <svg
                className="h-6"
                viewBox="0 0 36 36"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch */}
                <title>UI/icons/color/google</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="UI/icons/color/google">
                    <g id="Group" transform="translate(2.000000, 2.000000)">
                      <path
                        d="M32.4365525,16.6024012 C32.4365525,15.4515967 32.3313665,14.344128 32.1357206,13.2820585 L16.5492615,13.2820585 L16.5492615,19.5616128 L25.4557094,19.5616128 C25.0721312,21.5908257 23.9059692,23.3098098 22.1535707,24.4613022 L22.1535707,28.5341733 L27.5019274,28.5341733 C30.631561,25.7077204 32.4365525,21.5461142 32.4365525,16.6024012 L32.4365525,16.6024012 Z"
                        id="Shape"
                        fill="#4285F4"
                      />
                      <path
                        d="M16.5492615,32.4674071 C21.0175621,32.4674071 24.7635856,31.0139403 27.5019274,28.5341733 L22.1535707,24.4613022 C20.6718508,25.4353244 18.7756982,26.0110706 16.5492615,26.0110706 C12.2387399,26.0110706 8.59088994,23.1557272 7.2893887,19.3181072 L1.76011213,19.3181072 L1.76011213,23.5244249 C4.48302664,28.8299569 10.0796222,32.4674071 16.5492615,32.4674071 L16.5492615,32.4674071 Z"
                        id="Shape"
                        fill="#34A853"
                      />
                      <path
                        d="M7.2893887,19.3181072 C6.95840347,18.344085 6.77047118,17.3033395 6.77047118,16.2337035 C6.77047118,15.1640676 6.95840347,14.1233221 7.2893887,13.1492999 L7.2893887,8.94298219 L1.76011213,8.94298219 C0.639530783,11.1345322 0,13.6142992 0,16.2337035 C0,18.8531079 0.639530783,21.3328749 1.76011213,23.5244249 L7.2893887,19.3181072 L7.2893887,19.3181072 Z"
                        id="Shape"
                        fill="#FBBC05"
                      />
                      <path
                        d="M16.5492615,6.4563365 C18.9790577,6.4563365 21.160615,7.27558824 22.8758478,8.88382548 L27.6225407,4.22764161 C24.755872,1.60892511 21.0098485,0 16.5492615,0 C10.0803235,0 4.48302664,3.63813805 1.76011213,8.94298219 L7.2893887,13.1492999 C8.59088994,9.31236774 12.2394411,6.4563365 16.5492615,6.4563365 Z"
                        id="Shape"
                        fill="#EA4335"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-[#333335] hover:text-[#181a1a]">Gmail</p>
            </button>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8  border-0 bg-gray-500" />
            <span className="absolute px-3 font-extralight text-xl -translate-x-1/2  bg-[#333335] group-hover:bg-[#181a1a]  left-1/2 text-[#f4f4f4] ">
              Or
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-1/3">
            <h3 className="text-2xl font-bold text-center text-[#333335] hover:text-[#181a1a]">
              Login to your account
            </h3>
            <form action="" onSubmit={(event) => event.preventDefault()}>
              <div className="mt-4">
                <div>
                  <label
                    className="block text-[#333335] hover:text-[#181a1a]"
                    htmlFor="email"
                  >
                    Email
                    <label>
                      <input
                        ref={email}
                        required
                        type="text"
                        placeholder="Email"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#333335] text-[#333335] hover:text-[#181a1a] selection:bg-[#181a1a] selection:text-[#f4f4f4]"
                      />
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block text-[#333335] hover:text-[#181a1a]">
                    Password
                    <label>
                      <input
                        ref={password}
                        required
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#333335] text-[#333335] hover:text-[#181a1a] selection:bg-[#181a1a] selection:text-[#f4f4f4] "
                      />
                    </label>
                  </label>
                </div>
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <button
                    onClick={login}
                    className="px-6 py-2 mt-4 text-white  rounded-lg bg-[#333335] hover:bg-[#181a1a] "
                  >
                    Login
                  </button>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Link to={"/register"}>
                    <p className="text-sm text-[#333335] hover:text-[#181a1a] hover:underline">
                      Register
                    </p>
                  </Link>
                  <Link to={"/register"}>
                    <p className="text-sm text-[#333335] hover:text-[#181a1a] hover:underline">
                      Forgot password?
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
