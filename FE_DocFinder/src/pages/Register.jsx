import registerImg from "../assets/images/signup.gif";

export const Register = () => {
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
            <form>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="Full Name"
                  value=""
                  className="w-full pr-4 py-3 border-b border-solid border-blue-950 focus:outline-none 
              focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor
               cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Full Name"
                  name="email"
                  value=""
                  className="w-full pr-4 py-3 border-b border-solid border-blue-950 focus:outline-none 
              focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor
               cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value=""
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
                    name="role"
                    className="text-textColor font-semibold text-[15px] leading -7 
                  px-4 py-3 focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>
            </form>
          </div>
          {/* end form */}
        </div>
      </div>
    </section>
  );
};
