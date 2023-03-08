import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpWithEmailAndPassword } from "../FireBaseAuth";

function SignUpPage() {
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const email = useRef(null);
  const navigate = useNavigate();
  async function signUp() {
    if (password.current.value === confirmPassword.current.value) {
      if (
        await signUpWithEmailAndPassword(
          email.current.value,
          password.current.value
        )
      ) {
        navigate("/login");
      }
    } else {
      alert("Password and Confirm must match");
    }
  }

  return (
    <>
      <div
        className="flex flex-col justify-center item-center min-h-screen w-full 
bg-[#333335] hover:bg-[#181a1a] group
"
      >
        <div className="flex items-center justify-center w-full">
          <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-1/3">
            <h3 className="text-2xl font-bold text-center text-[#333335] hover:text-[#181a1a]">
              Sign Up
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
                        required
                        ref={email}
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
                        required
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#333335] text-[#333335] hover:text-[#181a1a] selection:bg-[#181a1a] selection:text-[#f4f4f4] "
                      />
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block text-[#333335] hover:text-[#181a1a]">
                    Confirm Password
                    <label>
                      <input
                        required
                        ref={confirmPassword}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#333335] text-[#333335] hover:text-[#181a1a] selection:bg-[#181a1a] selection:text-[#f4f4f4] "
                      />
                    </label>
                  </label>
                </div>
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <button
                    onClick={signUp}
                    className="px-6 py-2 mt-4 text-white  rounded-lg bg-[#333335] hover:bg-[#181a1a] "
                  >
                    Sign up
                  </button>
                  <Link to={"/"}>
                    <p className="text-sm text-[#333335] hover:text-[#181a1a] hover:underline">
                      Already a member?{" "}
                      <span className="font-semibold">Login</span>
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

export default SignUpPage;
