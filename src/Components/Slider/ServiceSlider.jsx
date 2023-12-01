// Slider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceData } from "../../../public/service";
import { useRef, useState } from "react";
const ServiceSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };
  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {serviceData.map((item) => (
          <div
            key={item.serviceName}
            className="p-3 bg-transparent focus:outline-none"
          >
            <div className="bg-white hover:bg-primary text-secondary hover:text-white group p-4 shadow-md rounded-md border border-[#D8D8D8]/40">
              <div className="flex items-center gap-4">
                <img
                  src={item.logo}
                  alt={`${item.serviceName} Logo`}
                  className="mb-4"
                />
                <h3 className="lg:text-2xl font-bold mb-2">
                  {item.serviceName}
                </h3>
              </div>
              <p className="text-[#646464] group-hover:text-white pt-[30px] pb-[22px]">
                {item.details.description.slice(0, 100)}
              </p>
              <button className="text-primary group-hover:text-white font-medium text-[18px] flex items-center gap-[20px]">
                <span> Learn more</span>
                <svg
                  className=" stroke-current"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 11.5L6.5 6.5L1.5 1.5"
                    // stroke="#7F56D9"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
        {serviceData.map((_, index) => (
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

export default ServiceSlider;
