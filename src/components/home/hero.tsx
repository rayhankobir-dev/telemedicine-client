import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "@/assets/images/banner/banner-1.webp";
import Banner2 from "@/assets/images/banner/banner-2.webp";
import Banner3 from "@/assets/images/banner/banner-3.webp";
import Banner4 from "@/assets/images/banner/banner-4.webp";

const slides = [Banner1, Banner2, Banner3, Banner4];

function HeroSection() {
  return (
    <section className="w-full h-fit max-h-[300px]">
      <Swiper
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="hero-slider rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <div className="rounded-xl overflow-hidden bg-primary/10">
              <img
                className="min-h-[130px] w-full object-cover object-bottom"
                src={slide}
                alt="Banner"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSection;
