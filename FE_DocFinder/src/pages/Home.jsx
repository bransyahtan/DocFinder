import heroImg1 from "../assets/images/hero-img01.png";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import { About } from "../components/about/About";

export const Home = () => {
  const services = [
    {
      href: "/doctors",
      icon: icon1,
      title: "Find a Doctor",
      description:
        "Explore our curated selection of healthcare professionals. Our directory streamlines the process of locating tailored medical expertise, prioritizing personalized care for your well-being.",
    },
    {
      href: "/doctors",
      icon: icon2,
      title: "Find a Location",
      description:
        "Explore our diverse network of conveniently situated facilities, offering personalized care and accessibility tailored to your needs. Experience seamless healthcare journeys with us.",
    },
    {
      href: "/doctors",
      icon: icon3,
      title: "Book Appointment",
      description:
        "Schedule your appointment effortlessly with us. Our user-friendly booking system provides prompt access to personalized care, ensuring your journey towards well-being is convenient and efficient.",
    },
  ];

  return (
    <>
      {/* banner home */}
      <section className="home__banner pt-14 2xl:h-[80%]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className=" text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We are dedicated to empowering patients to lead healthy,
                  Longer lives.
                </h1>
                <p className="text__paragraph text-justify">
                  At our core, we believe in the transformative power of patient
                  empowerment. Through personalized care and comprehensive
                  support, we equip individuals with the tools and knowledge
                  necessary to embrace healthier lifestyles and navigate their
                  healthcare journey with confidence. Our commitment extends
                  beyond mere treatment, we strive to foster lasting habits and
                  cultivate resilience, enabling our patients to enjoy fuller,
                  more fulfilling lives. Together, we embark on a journey
                  towards vitality, embracing each day with renewed vigor and
                  purpose.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              <div className="mt-7 lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-7">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    40+
                  </h2>
                  <span className="w-24 h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p className="text__paragraph">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    1.000+
                  </h2>
                  <span className="w-40 h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text__paragraph">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-32 h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text__paragraph">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex gap-7 justify-end">
              <div>
                <img src={heroImg1} alt="hero1" className="w-full" />
              </div>
              <div>
                <img src={heroImg2} alt="hero1" className="w-full mb-8" />
                <img src={heroImg3} alt="hero1" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner home end */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Delivering top-tier medical care services
            </h2>
            <p className="text__paragraph text-center">
              Delivering unparalleled, world-class healthcare accessible to all,
              our health system offers unmatched expertise and care.
            </p>
          </div>
          {/* start card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-7 lg:mt-14">
            {services.map((service, index) => (
              <a
                href={service.href}
                key={index}
                className="py-7 px-5 block cursor-pointer rounded-2xl shadow-panelShadow"
              >
                <div className="flex items-center justify-center">
                  <img src={service.icon} alt="icon" />
                </div>
                <div className="mt-7">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    {service.title}
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          {/* end card
           */}
        </div>
      </section>

      <About />
    </>
  );
};
