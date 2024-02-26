import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[18px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7">
        <h3 className="text-headingColor text-[18px] leading-6 font-semibold mb-4">
          Share your feedback or suggestion
        </h3>
        <textarea
          className="border border-solid border-blue-950 focus:outline outline-primaryColor
        w-full px-4 py-3 rounded-xl"
          rows="5"
          placeholder="Write Your Feedback"
          style={{ resize: "none" }}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
      <button className="btn" type="submit" onClick={handleSubmit}>
        Submit Feedback
      </button>
    </form>
  );
};
