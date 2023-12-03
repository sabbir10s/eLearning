import ServiceSlider from "../Slider/ServiceSlider";

const ServiceSection = () => {
  return (
    <div className=" pb-20 container mx-auto">
      <div className="max-w-[310px] sm:max-w-[600px]  md:max-w-[768px] mx-auto text-center pt-[60px] xs:pt-[80] md:pt-[100px] lg:pt-[115px] pb-[20px] xs:pb-[30px] md:pb-[40px]">
        <h5 className="text-primary-700 font-semibold">Our Service</h5>
        <h2 className="text-secondary font-semibold text-[26px] sm:text-[36px] mt-1 sm:mt-3 md:leading-[44px]">
          Fostering a playful & engaging learning environment
        </h2>
      </div>

      <div className="w-[310px] xs:w-full mx-auto sm:mx-0 ">
        <ServiceSlider />
      </div>
    </div>
  );
};

export default ServiceSection;
