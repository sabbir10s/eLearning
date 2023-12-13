import { useEffect, useRef, useState } from "react";
import logo from "../../Assets/Images/others/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  //Dropdown options
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
  };
  return (
    <div className=" container mx-auto py-4 px-2 md:px-0">
      <div className="flex items-center justify-center pb-4 sm:hidden">
        <Link>
          <img className="w-[170px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center w-full sm:w-fit sm:gap-6 text-secondary font-medium">
          <Link>
            <img className="w-[170px] hidden sm:block" src={logo} alt="" />
          </Link>
          <div className="relative w-full sm:w-fit">
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
              className="border border-[#D0D5DD] rounded-[8px] py-2 pl-10 outline-none active:border-primary focus:border-primary w-full sm:min-w-[300px] font-normal"
              type="text"
              placeholder="Want to learn?"
            />

            <span className=" absolute right-2.5 top-2">
              <span className=" relative">
                <svg
                  className=" absolute right-0 top-[4px] xs:top-[5px] lg:top-[6px]"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    className=" text-primary stroke-current"
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
          </div>

          <ul className="hidden lg:flex items-center gap-6">
            <li>Program</li>
            <li>Enterprise</li>
            <li>Universities</li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center font-medium text-secondary gap-6">
          <a href="#">Sign In</a>
          <a href="#" className="text-white bg-primary py-2 px-3 rounded-lg">
            Create Free Account
          </a>
        </div>

        <div className=" absolute top-4 sm:static left-0 lg:hidden pl-2 transition">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className=" py-2 text-secondary-500 transition"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute left-0 sm:left-auto sm:right-0 z-10 mt-1 w-56 p-8 text-left text-sm text-gray-700 rounded-lg shadow backdrop-blur-lg border border-primary">
                <div className="py-1 flex flex-col gap-6">
                  <div className="flex flex-col gap-6 text-secondary font-medium">
                    <ul className=" space-y-6">
                      <li onClick={handleOptionClick}>Program</li>
                      <li>Enterprise</li>
                      <li>Universities</li>
                      <li>
                        <Link to="/SignIn">Sign In</Link>
                      </li>
                      <li>
                        <Link className="text-white bg-primary py-2 px-3 rounded-lg">
                          Create Account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
