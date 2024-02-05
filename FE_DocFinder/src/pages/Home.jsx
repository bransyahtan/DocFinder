import heroImg1 from "../assets/images/hero-img01.png";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";

export const Home = () => {
  return (
    <>
      {/* banner home */}
      <section className="home__banner pt-14 2xl:h-[800px]">
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
      <section className="">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Delivering top-tier medical care services
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};
