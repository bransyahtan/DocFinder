/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import star from "../../assets/images/Star.png";
import { BsChevronRight } from "react-icons/bs";

export const DoctorCard = ({ doctor }) => {
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="rounded-2xl shadow-2xl p-3 lg:p-5">
      <div className="w-full h-[400px] relative overflow-hidden rounded-2xl p-3 lg:p-5">
        <img
          src={photo}
          alt="Doctor Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <h2
        className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] 
      mt-3 lg:mt-5"
      >
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span
          className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px]
        leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded-xl"
        >
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span
            className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 
          font-semibold text-headingColor"
          >
            <img src={star} alt="star rating" />
            {avgRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-4 lg:mt-5 flex items-center justify-between">
        <div>
          <h3
            className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold
            text-headingColor"
          >
            {totalPatients} patients
          </h3>
          <p className="text-[14px} leading-6 font-[400] text-textColor">
            At {hospital}
          </p>
        </div>
        <Link
          to="/doctors"
          className="w-11 h-11 rounded-full border border-solid border-[#181A1E] flex items-center
           justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsChevronRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};
