import { Link } from "react-router-dom";
import { Courses } from "../../../public/Courses";
import CoursesSlider from "../Slider/CoursesSlider";

const CoursesSection = () => {
  console.log(Courses);
  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="mx-auto text-center pt-[30px] xs:pt-[80] md:pt-[100px] lg:pt-[115px] pb-[20px] xs:pb-[30px] md:pb-[40px]">
        <h5 className="text-primary-700 font-semibold">Explore Programs</h5>
        <h2 className="text-secondary font-semibold text-[26px] sm:text-[36px] mt-1 sm:mt-3 sm:leading-[44px]">
          Our Most Popular Class
        </h2>
        <div className="mt-1 sm:mt-3 md:mt-5 flex justify-center">
          <p className="text-xl text-secondary-500 max-w-full sm:max-w-[600px] md:max-w-[768px]">
            {" "}
            Let&apos;s join our famous class, the knowledge provided will
            definitely be useful for you.
          </p>
        </div>
      </div>

      <div className="w-[300px] xs:w-full mx-auto sm:mx-0 ">
        <CoursesSlider />
      </div>

      <div className="text-center pt-[90px]">
        <Link className="text-secondary border border-secondary-300 px-4 py-2.5 text-sm font-semibold rounded-lg hover:border-primary-900 hover:text-primary-900 duration-300">
          Explore All Programs
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
