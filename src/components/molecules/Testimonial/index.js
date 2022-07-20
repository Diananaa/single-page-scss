import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { BtnNext, CardTestimonial } from "../..";
import { bgOval2 } from "../../../assets/Background";
import BtnPrev from "../../atoms/Button/BtnPrev";
import "./testimonial.style.scss";

const Testimonial = ({ data }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1025px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1025px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <>
      <div className="bg-black-testimonial" />
      <div className="container-testimonial">
        <img src={bgOval2} className="bgOval2" alt="icon" />
        <p className="title-testimonial text-secondary text-lg font-extrabold">
          Testimonial
        </p>

        {/* scroll side */}

        {/* window tablet */}
        {matches && (
          <div className="next-icon" ref={navigationPrevRef}>
            <BtnPrev />
          </div>
        )}

        <div className="container-scroll">
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            slidesPerView={"auto"}
            spaceBetween={10}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <CardTestimonial by={item.by} testimony={item.testimony} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* window tablet */}
        {matches && (
          <div className="next-icon text-secondary" ref={navigationNextRef}>
            <BtnNext />
          </div>
        )}
      </div>
    </>
  );
};

export default Testimonial;
