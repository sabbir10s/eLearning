// Slider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { Courses } from "../../../public/Courses";
import watch from "../../Assets/icon/svg/watch.svg";
import StarRating from "../../Shared/StarRating/StarRating";
import { Link } from "react-router-dom";
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
        {Courses.map(
          ({
            image,
            duration,
            tag,
            name,
            details,
            ratings,
            totalRatings,
            author,
            price,
          }) => (
            <div key={name} className="p-3 bg-transparent focus:outline-none">
              <div className="p-6 shadow-md rounded-lg relative">
                <div className="w-full h-full mb-4">
                  <img
                    className=" w-full object-cover"
                    src={image}
                    alt={`${name} cover`}
                  />
                </div>
                <div className="bg-white flex items-center gap-2 px-2 py-1 rounded absolute top-8 right-8">
                  <img src={watch} alt="" />
                  <span className="text-[14px] text-[#667085]">{duration}</span>
                </div>
                <span className="text-primary-700 font-medium text-sm">
                  {tag}
                </span>
                <Link className="flex justify-between items-center">
                  <h3 className="text-secondary lg:text-2xl font-semibold">
                    {name.split(" ").slice(0, 3).join(" ")}
                    {name.split(" ").length > 3 && "..."}
                  </h3>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H1M11 1V11"
                      stroke="#101828"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <p className="text-base text-secondary-500 pt-[12px]">
                  {details}
                </p>
                <div className="flex items-center gap-1 lg:pt-[22px ]">
                  <span className="text-primary">{ratings}</span>
                  <StarRating rating={ratings} />
                  <span className="text-sm text-[#969696]">
                    ({totalRatings})
                  </span>
                </div>
                {/* Author */}
                <div className="flex items-center justify-between lg:pt-[32px]">
                  <div className="flex items-center gap-3">
                    <img
                      className="lg:w-[40px] lg:h-[40px] rounded-full"
                      src={author.profile}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-secondary font-medium">
                        {author.name}
                      </span>
                      <span className="text-sm text-secondary-500">
                        {author.enrolled} Enrolled
                      </span>
                    </div>
                  </div>
                  <h2 className="text-[26px] font-bold text-primary">
                    {price}
                  </h2>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>

      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
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
