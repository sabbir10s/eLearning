import { Link } from "react-router-dom";
import { Courses } from "../../../public/Courses";
import CoursesSlider from "../Slider/CoursesSlider";

const CoursesSection = () => {
  console.log(Courses);
  return (
    <div className="container mx-auto">
      <div className="lg:pt-[115px] lg:pb-[40px]">
        <h5 className="text-primary-700 font-semibold">Explore Programs</h5>
        <h2 className="text-secondary font-semibold lg:text-[36px] mt-3">
          Our Most Popular Class
        </h2>
        <p className="text-xl text-secondary-500 mt-5">
          Let&apos;s join our famous class, the knowledge provided will
          definitely be useful for you.
        </p>
      </div>

      <div className="w-[300px] xs:w-full mx-auto sm:mx-0 ">
        <CoursesSlider />
      </div>

      <div className="text-center lg:pt-[90px]">
        <Link className="text-secondary border border-secondary-300 px-4 py-2.5 text-sm font-semibold rounded-lg hover:border-primary-900 hover:text-primary-900 duration-300">
          Explore All Programs
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
