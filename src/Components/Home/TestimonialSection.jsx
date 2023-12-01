import logo from "../../Assets/Images/others/small logo.png";
import TestimonialSlider from "../Slider/TestimonialSlider";
const TestimonialSection = () => {
  return (
    <div className="bg-secondary-50 lg:pt-[100px]">
      <img className="mx-auto pb-[40px]" src={logo} alt="" />
      <TestimonialSlider />
    </div>
  );
};

export default TestimonialSection;
