import logo from "../../Assets/Images/others/small logo.png";
import TestimonialSlider from "../Slider/TestimonialSlider";
const TestimonialSection = () => {
  return (
    <div className="bg-secondary-50 pt-[20px] pb-[80px] lg:pb-[100px]">
      <img className="mx-auto pb-[40px]" src={logo} alt="" />

      <div className="w-[300px] xs:w-full mx-auto sm:mx-0 ">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default TestimonialSection;
