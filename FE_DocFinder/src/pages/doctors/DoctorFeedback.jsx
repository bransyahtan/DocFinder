import { useState } from "react";
import avatar from "../../assets/images/avatar.jpg";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import { FeedbackForm } from "./FeedbackForm";

export const DoctorFeedback = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="mt-[50px]">
        <h4 className="text-[20px] leading-[30px] text-headingColor font-bold mb-[30px] ">
          All Reviews (273)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img
                src={avatar}
                alt="avatar"
                height="50px"
                width="50px"
                className="rounded-full"
              />
            </figure>
            <div>
              <h5 className="text-[17px] leading-6 text-primaryColor font-bold">
                Park Ji-Hyo
              </h5>
              <p className="text-[15px] leading-6 text-textColor">
                {formatDate("02-14-2024")}
              </p>
              <p className="text__paragraph mt-3 font-medium text-[16px] text-justify">
                Highly impressed with the doctor today! Attentive, informative,
                and answered all my questions clearly. Explained treatment
                options well, letting me choose confidently. Professional and
                compassionate - highly recommend!
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>

      {!showForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showForm && <FeedbackForm />}
    </div>
  );
};
