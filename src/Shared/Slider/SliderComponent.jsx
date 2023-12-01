// SliderComponent.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const SliderComponent = ({ data, customSettings, children }) => {
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
    ...customSettings, // Merge with custom settings
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
        {data.map((_, index) => (
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

SliderComponent.propTypes = {
  data: PropTypes.array.isRequired,
  customSettings: PropTypes.object,
};

export default SliderComponent;
