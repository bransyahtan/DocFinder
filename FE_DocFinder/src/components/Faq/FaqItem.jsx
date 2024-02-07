/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-3 lg:p-5 rounded-xl border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleFaq}
      >
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primaryColor text-white bg-none border-none"
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex 
        items-center justify-center`}
        >
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 ">
          <p
            className="text-justify text-textColor text-[14px] leading-6 lg:text-[16px] lg:leading-7 
          font-[400] "
          >
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};
