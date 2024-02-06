import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

export const ServiceCard = (item) => {
  const { name, desc } = item;

  return (
    <div className="py-7 px-3 lg:px-5 shadow-lg rounded-2xl">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4 text-justify">
        {desc}
      </p>
      <div className="flex items-center justify-end mt-7">
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
