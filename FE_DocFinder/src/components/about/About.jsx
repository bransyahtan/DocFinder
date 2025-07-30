import aboutImg from "../../assets/images/about1.jpg";
import aboutCard from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-12 lg:gap-32 xl:gap-0 flex-col lg:flex-row">
          {/* image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-2/4 z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="image" className="rounded-2xl" />
            <div>
              <img
                src={aboutCard}
                alt="card"
                className="absolute rounded-xl z-20 bottom-24 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]"
              />
            </div>
          </div>
          {/* content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Honored to be acknowledged as one of the premier entities in the
              country
            </h2>
            <p className="text__paragraph text-justify">
              With a rich heritage of excellence and an unwavering commitment to
              pioneering innovation, we proudly stand as a cornerstone of
              quality and integrity within our nations dynamic landscape.
            </p>
            <p className="text__paragraph mt-7 text-justify">
              Embracing an ethos of continuous improvement and
              customer-centricity, we strive tirelessly to transcend
              conventional boundaries, driving forward the frontiers of our
              industries while setting new standards of excellence and
              leadership.
            </p>
            <Link to="/contact">
              <button className="btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
