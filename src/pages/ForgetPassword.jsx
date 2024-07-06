import { useState } from "react";

import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email is sent");
    } catch (error) {
      toast.error("Could not send resend password.");
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forget Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[47%] lg:w[50%] mb-12 md:mb-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9ja3xlbnwwfHwwfHx8MA%3D%3D"
            alt="sign in "
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[47%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
              <p className="mb-6">
                Don't have account?{" "}
                <Link
                  to="/sign-up"
                  className="text-red-400 hover:text-red-700 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-400 hover:text-blue-800 transition duration-200 ease-in-out ml-1"
                >
                  Sign in
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-sm hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Send Reset Password
            </button>
            <div className="flex my-4 items-center before:border-t before:flex-1 before:border-gray-300  after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4 ">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
