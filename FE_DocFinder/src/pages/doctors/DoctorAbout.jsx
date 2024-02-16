import { formatDate } from "../../utils/formatDate";

export const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Dr. Ahn Hyeo-Seop
          </span>
        </h3>
        <p className="text__paragraph text-justify">
          I am Dr. Ahn Hyeo-Seop, an accomplished surgeon with a distinguished
          specialization in war wound surgery, complemented by extensive
          expertise in minimally invasive surgery, oncology, and transplants.
          With a steadfast commitment to precision and patient-centered care, I
          bring a wealth of experience to every clinical encounter. My focus on
          addressing the intricate complexities of war-related injuries,
          combined with proficiency in advanced surgical methodologies, enables
          me to deliver compassionate and proficient treatment to individuals in
          need.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[16px] leading-6 font-semibold">
                {formatDate("07-23-2005")} - {formatDate("07-23-2008")}
              </span>
              <p className="text-[18px] leading-6 font-medium text-textColor">
                PhD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[16px] leading-6 font-semibold">
                {formatDate("07-23-2008")} - {formatDate("07-23-2012")}
              </span>
              <p className="text-[18px] leading-6 font-medium text-textColor">
                Prof in War Wound Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-5 font-medium text-textColor">
              Mikaela Yoshikawa Hospital, Tokyo
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-9">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experiences
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded-xl bg-[#dcedc1]">
            <span className="text-irisBlueColor text-[16px] leading-6 font-semibold ">
              {formatDate("01-23-2013")} - {formatDate("05-23-2018")}
            </span>
            <p className="text-[18px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[16px] leading-5 font-medium text-textColor">
              Al-Ahly Hospital, Saudi Arabia
            </p>
          </li>
          <li className="p-4 rounded-xl bg-[#dcedc1]">
            <span className="text-irisBlueColor text-[16px] leading-6 font-semibold ">
              {formatDate("01-23-2013")} - {formatDate("05-23-2018")}
            </span>
            <p className="text-[18px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[16px] leading-5 font-medium text-textColor">
              Korean Research Hospital, Seoul
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
