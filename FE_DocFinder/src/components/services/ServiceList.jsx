import { ServiceCard } from "./ServiceCard";
import { services } from "../../assets/data/services";

export const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-7 lg:mt-14 ">
      {services.map((item, index) => (
        <ServiceCard key={index} {...item} />
      ))}
    </div>
  );
};
