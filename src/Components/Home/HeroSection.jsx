import Speaking from "../../Assets/icon/svg/public speaking.svg";
import Career from "../../Assets/icon/svg/career.svg";
import Creative from "../../Assets/icon/svg/creative.svg";
import bannerImg from "../../Assets/Images/others/bannerImg.png";
import heroBgImg from "../../Assets/Images/others/heroBgImg.png";
const HeroSection = () => {
  return (
    <div>
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 xs:gap-10 md:gap-16 lg:gap-20 pt-[20px] sm:pt-[30px] lg:pt-[40px]">
          <div className=" order-2 md:order-1">
            <h1 className="font-bold text-secondary text-[32px] ss:text-[42px] sm:text-[48px] md:text-[54px] lg:text-[68px] capitalize leading-[42px] sm:leading-[60px] md:leading-[82px]">
              up your <span className="text-primary">skills</span> to{" "}
              <span className="text-primary">advance</span> your{" "}
              <span className="text-primary">career</span> path
            </h1>
            <p className=" text-[#646464] mt-2 xs:mt-4 sm:mt-[20px] mb-4 xs:mb-6 sm:mb-[36px]">
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
            <div className=" space-x-7">
              <button className="bg-primary text-white font-bold  py-3 sm:py-4 px-5 sm:px-7 rounded-lg">
                Get Started
              </button>
              <button className="bg-primary-200 text-primary font-bold  py-3 sm:py-4 px-5 sm:px-7 rounded-lg">
                Get free trial
              </button>
            </div>

            <div className=" flex items-center justify-between mt-[50px]">
              <div className="flex flex-col sm:flex-row items-center gap-2 font-Inter">
                <img src={Speaking} alt="" />
                <p className="text-secondary/70">Public Speaking</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 font-Inter">
                <img src={Career} alt="" />
                <p className="text-secondary/70">Career-Oriented</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 font-Inter">
                <img src={Creative} alt="" />
                <p className="text-secondary/70">Creative Thinking</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end order-1 md:order-2">
            <img className=" w-[320px] ss:w-full" src={bannerImg} alt="" />
          </div>
        </div>
      </div>
      <img
        className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 xl:w-full -z-10"
        src={heroBgImg}
        alt=""
      />
    </div>
  );
};

export default HeroSection;
