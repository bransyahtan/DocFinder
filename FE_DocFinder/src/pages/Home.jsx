import heroImg1 from "../assets/images/hero-img01.png";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon11.gif";
import icon2 from "../assets/images/icon22.gif";
import icon3 from "../assets/images/icon33.gif";
import featureImg from "../assets/images/feature.jpg";
import videoIcon from "../assets/images/video-icon.png";
import avatar from "../assets/images/avatar.jpg";
import { About } from "../components/about/About";
import { ServiceList } from "../components/services/ServiceList";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { DoctorList } from "../components/Doctors/DoctorList";

export const Home = () => {
  const services = [
    {
      href: "/doctors",
      icon: icon1,
      title: "Find a Doctor",
      description: `Explore our curated selection of healthcare professionals. Our directory 
      streamlines the process of locating tailored medical expertise, prioritizing personalized care for 
      your well-being.`,
    },
    {
      href: "/services",
      icon: icon2,
      title: "Discover Our Services",
      description: `Explore our comprehensive healthcare services, from primary care to specialized treatments. 
      Our dedicated professionals provide personalized care tailored to your needs, ensuring seamless 
      healthcare experiences.`,
    },
    {
      href: "/doctors",
      icon: icon3,
      title: "Book Appointment",
      description: `Schedule your appointment effortlessly with us. Our user-friendly booking system 
      provides prompt access to personalized care, ensuring your journey towards well-being is convenient 
      and efficient.`,
    },
  ];

  const listItems = [
    {
      id: 1,
      text: "Schedule your appointment directly through our online platform.",
    },
    {
      id: 2,
      text: "Find your doctor and connect with them for virtual consultations.",
    },
    {
      id: 3,
      text: "Discover doctors who are currently accepting new patients and use our online scheduling tool to select an appointment time.",
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

      {/* services 1 */}
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
              <div
                key={index}
                className="py-7 px-5 block rounded-2xl  shadow-lg"
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
                  <div className="flex items-center justify-center mt-7">
                    <Link
                      to={service.href}
                      className="w-11 h-11 rounded-full border border-solid border-[#181A1E] flex items-center
                      justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <BsChevronRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* end card
           */}
        </div>
      </section>
      {/* services 1 end */}

      <About />

      {/* services */}
      <section id="services">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__paragraph text-center">
              Explore our range of medical services designed to keep you healthy
              and thriving. From preventive care to specialized treatments.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* end services */}

      {/* feature */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Experience Virtual Healthcare <br />
                Anytime, Anywhere
              </h2>
              <ul className="pl-4">
                {listItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-xl text-justify text-textColor mt-2"
                  >
                    {`${item.id}. ${item.text}`}
                  </li>
                ))}
              </ul>
              <Link to="/doctors">
                <button className="btn">Search Doctor</button>
              </Link>
            </div>
            {/* image */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-12 lg:mt-0">
              <img
                src={featureImg}
                className="w-3/4 rounded-2xl"
                alt="image feature"
              />
              <div
                className="w-[150px] lg:w-[248px] bg-white absolute bottom-12 left-0 md:bottom-[100px] 
              md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-7 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p
                      className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor 
                    font-[600]"
                    >
                      Mon, 24
                    </p>
                    <p
                      className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor 
                    font-[400]"
                    >
                      12:23 PM
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor
                  rounded py-1 px-[6px] lg:py-3 lg:px-[9px]"
                  >
                    <img src={videoIcon} alt="icon" />
                  </span>
                </div>
                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] 
                text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 
                lg:mt-4 rounded-full"
                >
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img
                    src={avatar}
                    alt="avatar"
                    height="50px"
                    width="50px"
                    className="rounded-full"
                  />
                  <h4
                    className="text-[10px] leading-3 lg:text-[16px] lg:heading-[22px] font-[700]
                  text-headingColor"
                  >
                    Park Ji-Hyo
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature end*/}

      {/* doctor */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Meet Our Best Team of Doctors
            </h2>
            <p className="text__paragraph text-center">
              Discover our dedicated doctors offering personalized care to keep
              you healthy and thriving. From routine check-ups to specialized
              treatments, we are here to support your healthcare needs.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* doctor end */}
    </>
  );
};
