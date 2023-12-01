import { Tutors } from "../../../public/Tutors";
import twitterImg from "../../Assets/icon/svg/twitter.svg";
import linkedInImg from "../../Assets/icon/svg/linkedIn.svg";
const TutorsSection = () => {
  return (
    <div className=" pb-20">
      <div className="max-w-[768px] mx-auto text-center lg:pt-[115px] pb-[40px]">
        <h5 className="text-primary-700 font-semibold">Tutors</h5>
        <h2 className="text-secondary font-semibold lg:text-[36px] mt-3">
          Meet the Heroes
        </h2>
        <p className="text-[20px] text-secondary-500">
          On Ed-Circle, instructors from all over the world instruct millions of
          students. We offer the knowledge and abilities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-[32px]">
        {Tutors.map(
          ({ name, profile, designation, position, twitter, linkedin }) => {
            return (
              <div
                className="flex flex-col items-center justify-between space-y-[8px] p-4 shadow-sm bg-tutors-card-bg"
                key={name}
              >
                <img
                  className="lg:w-[80px] lg:h-[80px] rounded-full"
                  src={profile}
                  alt=""
                />
                <div className="text-center">
                  <h5 className="text-secondary text-[18px] font-medium">
                    {name}
                  </h5>
                  <p className="text-primary-700 text-[16px]">{designation}</p>
                </div>
                <p className="text-secondary-500 text-[16px] text-center">
                  {position}
                </p>
                <div className="flex gap-3">
                  <a target="_blank" rel="noreferrer" href={twitter}>
                    <img src={twitterImg} alt="" />
                  </a>
                  <a target="_blank" rel="noreferrer" href={linkedin}>
                    <img src={linkedInImg} alt="" />
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TutorsSection;
