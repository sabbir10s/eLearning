import { Tutors } from "../../../public/Tutors";
const TutorsSection = () => {
  return (
    <div className="container mx-auto pb-[80px]">
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
                className="flex flex-col items-center justify-between space-y-[8px] p-4 shadow-sm bg-tutors-card-bg hover:shadow-md border border-transparent hover:border-secondary-200/50 duration-300"
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
                    <svg
                      className="text-secondary-400 fill-current hover:text-primary duration-300"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.2918 17.125C13.8371 17.125 17.9652 10.8723 17.9652 5.45161C17.9652 5.27583 17.9613 5.09614 17.9535 4.92036C18.7566 4.33961 19.4496 3.62027 20 2.79614C19.2521 3.12889 18.458 3.34621 17.6449 3.44067C18.5011 2.92748 19.1421 2.12129 19.4492 1.17153C18.6438 1.64886 17.763 1.98557 16.8445 2.16724C16.2257 1.5097 15.4075 1.07432 14.5164 0.928437C13.6253 0.782549 12.711 0.93427 11.9148 1.36014C11.1186 1.78601 10.4848 2.46232 10.1115 3.28449C9.73825 4.10666 9.64619 5.02891 9.84961 5.90864C8.21874 5.8268 6.62328 5.40315 5.16665 4.66514C3.71002 3.92714 2.42474 2.89126 1.39414 1.62466C0.870333 2.52776 0.710047 3.59643 0.945859 4.61347C1.18167 5.63051 1.79589 6.5196 2.66367 7.10005C2.01219 7.07937 1.37498 6.90396 0.804688 6.58833V6.63911C0.804104 7.58685 1.13175 8.50555 1.73192 9.23904C2.3321 9.97252 3.16777 10.4755 4.09687 10.6625C3.49338 10.8277 2.85999 10.8517 2.2457 10.7329C2.50788 11.5479 3.01798 12.2608 3.70481 12.772C4.39164 13.2832 5.22093 13.5672 6.07695 13.5844C4.62369 14.726 2.82848 15.3452 0.980469 15.3422C0.652739 15.3417 0.325333 15.3216 0 15.2821C1.87738 16.4865 4.06128 17.1262 6.2918 17.125Z" />
                    </svg>
                  </a>
                  <a target="_blank" rel="noreferrer" href={linkedin}>
                    <svg
                      className="text-secondary-400 fill-current hover:text-primary duration-300"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" />
                    </svg>
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
