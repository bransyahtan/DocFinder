import { useState } from "react";
import doctorImg from "../../assets/images/doctor3.png";
// import doctorImg from "../../assets/images/faqImg.jpg";
import starIcon from "../../assets/images/star.png";
import { DoctorAbout } from "./DoctorAbout";
import { DoctorFeedback } from "./DoctorFeedback";

export const DoctorDetail = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1200px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2 ">
            <div className="flex items-center gap-5">
              <figure className="max-w-[300px] max-h-[300px]">
                <img
                  src={doctorImg}
                  alt="doctor"
                  className="rounded-xl object-cover w-full"
                />
              </figure>
              <div>
                <span
                  className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] 
                leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded-lg"
                >
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Dr. Ahn Hyeo-Seop
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span
                    className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] 
                  lg:leading-7 font-semibold text-headingColor"
                  >
                    <img src={starIcon} alt="star" /> 4.9
                  </span>
                  <span
                    className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400]
                  text-textColor"
                  >
                    (7825)
                  </span>
                </div>
                <p className="text__paragraph text-[14px] leading-6 md:text-[15px] lg:max-w-[390px] text-justify">
                  I am Dr. Ahn Hyeo-Seop, an experienced surgeon dedicated to
                  precision and patient care. With expertise in minimally
                  invasive surgery, oncology, and transplants, I am committed to
                  providing personalized care for every patient.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <DoctorFeedback />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
