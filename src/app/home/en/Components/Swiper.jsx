import "swiper/css";
import "../index.css";
import "swiper/css/pagination";
import { Services } from "@/app/Utils";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SwiperJS() {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      loop={true}
      speed={1000}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper bg-white"
      breakpoints={{
        // when window width is <= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        // when window width is <= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is <= 2560px
        2560: {
          slidesPerView: 9,
          spaceBetween: 30,
        },
      }}
    >
      {Services.map((service, index) => (
        <SwiperSlide
          key={index}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="flex justify-evenly h-10 w-96 cursor-pointer text-center font-body rounded-full bg-[#E3C4FF] p-1 text-sm text-[#494949] px-4 py-2"
        >
          {service.elem}
        </SwiperSlide>
      ))}
      {Services.map((service, index) => (
        <SwiperSlide
          key={index}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="flex justify-evenly h-10 w-96 cursor-pointer text-center font-body rounded-full bg-[#E3C4FF] p-1 text-sm text-[#494949] px-4 py-2"
        >
          {service.elem}
        </SwiperSlide>
      ))}
      {Services.map((service, index) => (
        <SwiperSlide
          key={index}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="flex justify-evenly h-10 w-96 cursor-pointer text-center font-body rounded-full bg-[#E3C4FF] p-1 text-sm text-[#494949] px-4 py-2"
        >
          {service.elem}
        </SwiperSlide>
      ))}
      {Services.map((service, index) => (
        <SwiperSlide
          key={index}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="flex justify-evenly h-10 w-96 cursor-pointer text-center font-body rounded-full bg-[#E3C4FF] p-1 text-sm text-[#494949] px-4 py-2"
        >
          {service.elem}
        </SwiperSlide>
      ))}
      {Services.map((service, index) => (
        <SwiperSlide
          key={index}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="flex justify-evenly h-10 w-96 cursor-pointer text-center font-body rounded-full bg-[#E3C4FF] p-1 text-sm text-[#494949] px-4 py-2"
        >
          {service.elem}
        </SwiperSlide>
      ))}
      {Services.map((service, index) => (
        <SwiperSlide
          key={index}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="flex justify-evenly h-10 w-96 cursor-pointer text-center font-body rounded-full bg-[#E3C4FF] p-1 text-sm text-[#494949] px-4 py-2"
        >
          {service.elem}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
