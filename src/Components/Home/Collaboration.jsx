import duolingo from "../../Assets/Images/companyLogos/duolingo.png";
import codecov from "../../Assets/Images/companyLogos/codecov.png";
import userTesting from "../../Assets/Images/companyLogos/userTesting.png";
import magicLeap from "../../Assets/Images/companyLogos/magicLeap.png";

const Collaboration = () => {
  return (
    <div className="flex items-center justify-between pt-[73px]">
      <div>
        <h2 className="text-primary font-bold lg:text-[30px]">250+</h2>
        <h4 className="text-secondary lg:text-[25px]">Collaboration</h4>
      </div>
      <img src={duolingo} alt="" />
      <img src={codecov} alt="" />
      <img src={userTesting} alt="" />
      <img src={magicLeap} alt="" />
    </div>
  );
};

export default Collaboration;
