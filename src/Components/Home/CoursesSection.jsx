import { Courses } from "../../../public/Courses";
import CoursesSlider from "../Slider/CoursesSlider";

const CoursesSection = () => {
  console.log(Courses);
  return (
    <div>
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

      <CoursesSlider />
    </div>
  );
};

export default CoursesSection;
