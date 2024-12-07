import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Banner1 from "@/assets/images/banner/banner-1.webp";
import Banner2 from "@/assets/images/banner/banner-2.webp";
import Banner3 from "@/assets/images/banner/banner-3.webp";
import Banner4 from "@/assets/images/banner/banner-4.webp";

const slides = [Banner1, Banner2, Banner3, Banner4];

function HeroSection() {
  return (
    <section className="w-full h-fit max-h-[300px]">
      <Swiper
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="hero-slider rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <div className="rounded-xl overflow-hidden">
              <img className="bg-position-center" src={slide} alt="Banner" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSection;
