import { doctors } from "../../assets/data/doctors";
import { DoctorCard } from "../../components/Doctors/DoctorCard";
import { Testimonial } from "../../components/testimonial/Testimonial";

export const Doctors = () => {
  return (
    <>
      <section>
        <div className="container text-center">
          <h2 className="heading">Meet Our Best Team of Doctors</h2>
          <div
            className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-xl flex items-center
          justify-between"
          >
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
            placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search...
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7 mt-7 lg:mt-14">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Hear What Our Patients Have to Say
            </h2>
            <p className="text__paragraph text-center">
              Discover the testimonials from our satisfied patients who have
              experienced personalized care and exceptional treatment from our
              dedicated team of doctors. Their stories reflect our commitment to
              your health and well-being.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};
