import { HiStar } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import testimonials from "../../assets/data/testimonial";

export const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px] ">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="py-[30px] px-5 rounded-3 shadow-xl rounded-2xl">
              <div className="flex items-center gap-[13px]">
                <img
                  src={testimonial.photo}
                  alt="patient avatar"
                  className="w-12 h-12 rounded-full object-cover"
                  width="52px"
                  height="52px"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <HiStar
                        key={i}
                        className="text-yellowColor w-[18px] h-5"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-base leading-7 mt-4 text-textColor font-normal text-justify">
                {testimonial.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
