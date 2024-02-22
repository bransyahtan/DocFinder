import avatar from "../../assets/images/avatar.jpg";

export const DoctorFeedback = () => {
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
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Park Ji-Hyo
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
