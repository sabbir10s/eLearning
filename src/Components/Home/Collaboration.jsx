import duolingo from "../../Assets/Images/companyLogos/duolingo.png";
import codecov from "../../Assets/Images/companyLogos/codecov.png";
import userTesting from "../../Assets/Images/companyLogos/userTesting.png";
import magicLeap from "../../Assets/Images/companyLogos/magicLeap.png";

const Collaboration = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between pt-[73px] container mx-auto px-2 md:px-0">
      <div>
        <h2 className="text-primary font-bold lg:text-[30px]">250+</h2>
        <h4 className="text-secondary lg:text-[25px]">Collaboration</h4>
      </div>
      <div className="flex justify-between gap-2 md:gap-10 pt-4">
        <img
          className="w-[50px] sm:w-[130px] md:w-full"
          src={duolingo}
          alt=""
        />
        <img className="w-[50px] sm:w-[130px] md:w-full" src={codecov} alt="" />
        <img
          className="w-[50px] sm:w-[130px] md:w-full"
          src={userTesting}
          alt=""
        />
        <img
          className="w-[50px] sm:w-[130px] md:w-full"
          src={magicLeap}
          alt=""
        />
      </div>
    </div>
  );
};

export default Collaboration;
