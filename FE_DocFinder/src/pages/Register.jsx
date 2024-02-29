import registerImg from "../assets/images/signup.gif";
import avatar from "../assets/images/patient-avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    // pake cloudinary disini
    console.log(file);
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img */}
          <div className="hidden lg:block bg-primaryColor rounded-lg">
            <figure className="rounded-lg">
              <img
                src={registerImg}
                className="w-full rounded-lg"
                alt="signup image"
              />
            </figure>
          </div>
          {/* img end */}

          {/* form */}
          <div className="rounded-ld lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">Account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="Full Name"
                  value={formData.name}
                  onChange={handleInput}
                  className="w-full pr-4 py-3 border-b border-solid border-blue-950 focus:outline-none 
              focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor
               cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  className="w-full pr-4 py-3 border-b border-solid border-blue-950 focus:outline-none 
              focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor
               cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                  className="w-full pr-4 py-3 border-b border-solid border-blue-950 focus:outline-none 
              focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor
               cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInput}
                    className="text-textColor font-semibold text-[15px] leading -7 
                  px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInput}
                    className="text-textColor font-semibold text-[15px] leading -7 
                  px-4 py-3 focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="female">Other</option>
                  </select>
                </label>
              </div>
              <div className="mb-5 flex items-center gap-3">
                <figure
                  className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                flex items-center justify-center "
                >
                  <img
                    src={avatar}
                    alt="add avatar"
                    className="w-full rounded-full"
                  />
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileUpload}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center 
                  px-[0.75rem] py-[0.375rem] text-[16px] leading-6 overflow-hidden bg-blue-400 text-headingColor
                  font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button className="w-full px-4 py-3 bg-primaryColor text-white text-[18px] leading-7 rounded-lg font-semibold">
                  LOGIN
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
          {/* end form */}
        </div>
      </div>
    </section>
  );
};
