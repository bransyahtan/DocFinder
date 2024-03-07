import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back
          &#127881;
        </h3>

        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email."
              name="email"
              value={formData.email}
              onChange={handleInput}
              className="w-full py-3 border-b border-solid border-blue-950 focus:outline-none 
              focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor
               cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your password."
              name="password"
              value={formData.password}
              onChange={handleInput}
              className="w-full py-3 border-b border-solid border-blue-950 focus:outline-none 
              focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor
               cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button className="w-full px-4 py-3 bg-primaryColor text-white text-[18px] leading-7 rounded-lg font-semibold">
              LOGIN
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
