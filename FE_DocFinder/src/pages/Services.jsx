import { services } from "../assets/data/services";
import { ServiceCard } from "../components/services/ServiceCard";

export const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 ">
          {services.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
