import Speaking from "../../Assets/icon/svg/public speaking.svg";
import Career from "../../Assets/icon/svg/career.svg";
import Creative from "../../Assets/icon/svg/creative.svg";
import bannerImg from "../../Assets/Images/others/bannerImg.png";
import heroBgImg from "../../Assets/Images/others/heroBgImg.png";
const HeroSection = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-20 pt-[40px]">
          <div className=" order-2 md:order-1">
            <h1 className=" font-bold text-secondary lg:text-[68px] capitalize leading-[82px]">
              up your <span className="text-primary">skills</span> to{" "}
              <span className="text-primary">advance</span> your{" "}
              <span className="text-primary">career</span> path
            </h1>
            <p className=" text-[#646464] mt-[20px] mb-[36px]">
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
            <div className=" space-x-7">
              <button className="bg-primary text-white font-bold py-4 px-7 rounded-lg">
                Get Started
              </button>
              <button className="bg-primary-200 text-primary font-bold py-4 px-7 rounded-lg">
                Get free trial
              </button>
            </div>

            <div className=" flex items-center gap-8 mt-[50px]">
              <div className="flex items-center gap-2 font-Inter">
                <img src={Speaking} alt="" />
                <p className="text-secondary/70">Public Speaking</p>
              </div>
              <div className="flex items-center gap-2 font-Inter">
                <img src={Career} alt="" />
                <p className="text-secondary/70">Career-Oriented</p>
              </div>
              <div className="flex items-center gap-2 font-Inter">
                <img src={Creative} alt="" />
                <p className="text-secondary/70">Creative Thinking</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end order-1 md:order-2">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
      <img
        className=" absolute top-0 left-1/2 transform -translate-x-1/2 xl:w-full -z-10"
        src={heroBgImg}
        alt=""
      />
    </div>
  );
};

export default HeroSection;
