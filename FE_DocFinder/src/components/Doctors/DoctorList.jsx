import { doctors } from "./../../assets/data/doctors";
import { DoctorCard } from "./DoctorCard";

export const DoctorList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7 mt-7 lg:mt-14">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};
