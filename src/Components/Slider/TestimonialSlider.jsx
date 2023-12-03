import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { Testimonials } from "../../../public/Tesimonials";
const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };
  return (
    <div className="relative container mx-auto">
      <Slider ref={sliderRef} {...settings}>
        {Testimonials.map(({ testimonial, profile, name, occupation }) => (
          <div key={testimonial} className=" text-center">
            <h2 className="text-secondary font-semibold text-[20px] sm:text-[24px] md:text-[36px] pb-[32px]">
              {testimonial}
            </h2>
            <img
              className="w-[64px] h-[64px] rounded-full mx-auto"
              src={profile}
              alt={`${name} profile`}
            />
            <p className="text-[18px] text-secondary font-medium pt-[16px]">
              {name}
            </p>
            <p className="text-[16px] text-gray-500 pt-[4px]">{occupation}</p>
          </div>
        ))}
      </Slider>

      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
        {Testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${
              index === currentSlide ? "bg-primary" : "bg-[#D9D9D9]"
            } focus:outline-none`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
