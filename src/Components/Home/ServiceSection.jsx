import ServiceSlider from "../Slider/ServiceSlider";

const ServiceSection = () => {
  return (
    <div className=" pb-20 container mx-auto">
      <div className="max-w-[768px] mx-auto text-center lg:pt-[115px] pb-[40px]">
        <h5 className="text-primary-700 font-semibold">Our Service</h5>
        <h2 className="text-secondary font-semibold lg:text-[36px] mt-3">
          Fostering a playful & engaging learning environment
        </h2>
      </div>

      <ServiceSlider />
    </div>
  );
};

export default ServiceSection;
