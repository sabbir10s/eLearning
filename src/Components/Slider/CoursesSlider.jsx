// Slider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { Courses } from "../../../public/Courses";
import watch from "../../Assets/icon/svg/watch.svg";
import StarRating from "../../Shared/StarRating/StarRating";
const CoursesSlider = () => {
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
        {Courses.map((course) => (
          <div
            key={course.name}
            className="p-3 bg-transparent focus:outline-none"
          >
            <div className="p-4 border rounded-lg relative">
              <img
                src={course.image}
                alt={`${course.name} cover`}
                className="mb-4"
              />
              <div className="bg-white flex items-center gap-2 px-2 py-1 rounded absolute top-6 right-8">
                <img src={watch} alt="" />
                <span className="text-[14px] text-[#667085]">
                  {course.duration}
                </span>
              </div>
              <span className="text-primary-700 font-medium text-sm">
                {course.tag}
              </span>
              <h3 className="text-secondary lg:text-2xl font-semibold">
                {course.name}
              </h3>
              <p className="text-base text-secondary-500">{course.details}</p>
              <div>
                <span className="text-primary">{course.ratings}</span>
                <StarRating rating={course.ratings} />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute bottom-[-4] left-1/2 transform -translate-x-1/2">
        {Courses.map((_, index) => (
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

export default CoursesSlider;
