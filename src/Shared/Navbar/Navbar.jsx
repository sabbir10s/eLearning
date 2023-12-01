import logo from "../../Assets/Images/logo.png";
const Navbar = () => {
  return (
    <div className=" container mx-auto py-4">
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-6 text-secondary font-medium">
          <li>
            <img className="w-[170px]" src={logo} alt="" />
          </li>
          <li className=" relative">
            <svg
              className=" absolute left-2.5 top-3"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                stroke="#98A2B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              className="border border-[#D0D5DD] rounded-[8px] py-2 pl-10 outline-none active:border-primary focus:border-primary min-w-[300px] font-normal"
              type="text"
              placeholder="Want to learn?"
            />

            <span className=" absolute right-2.5 top-2">
              <span className=" relative">
                <svg
                  className=" absolute right-0 top-2"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#7F56D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <select
                  id="explore"
                  className="focus:outline-none appearance-none bg-primary-25 pr-4 pl-2 text-primary font-medium"
                >
                  <option>Explore</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </span>
            </span>
          </li>

          <li>Program</li>
          <li>Enterprise</li>
          <li>Universities</li>
        </ul>
        <div className="flex items-center font-medium text-secondary gap-6">
          <a href="#">Sign In</a>
          <a href="#" className="text-white bg-primary py-2 px-3 rounded-lg">
            Create Free Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
