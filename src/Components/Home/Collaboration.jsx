import duolingo from "../../Assets/Images/companyLogos/duolingo.png";
import codecov from "../../Assets/Images/companyLogos/codecov.png";
import userTesting from "../../Assets/Images/companyLogos/userTesting.png";
import magicLeap from "../../Assets/Images/companyLogos/magicLeap.png";

const Collaboration = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:items-center md:gap-8 pt-[40px] ss:pt-[60px] md:pt-[73px] container mx-auto px-2 md:px-0">
      <div className="flex flex-row items-center gap-2 md:flex-col md:items-start">
        <h2 className="text-primary font-bold text-[26px] ss:text-[30px]">
          250+
        </h2>
        <h4 className="text-secondary text-[20px] ss:text-[25px]">
          Collaboration
        </h4>
      </div>
      <div className="flex justify-between gap-2 md:gap-10 pt-2 xs:pt-4">
        <img
          className="w-[65px] ss:w-[120px] md:w-fit md:h-fit"
          src={duolingo}
          alt=""
        />
        <img
          className="w-[65px] ss:w-[120px] md:w-fit md:h-fit"
          src={codecov}
          alt=""
        />
        <img
          className="w-[65px] ss:w-[120px] md:w-fit md:h-fit"
          src={userTesting}
          alt=""
        />
        <img
          className="w-[65px] ss:w-[120px] md:w-fit md:h-fit"
          src={magicLeap}
          alt=""
        />
      </div>
    </div>
  );
};

export default Collaboration;
