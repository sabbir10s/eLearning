import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const Main = () => {
  return (
    <div className=" font-Inter">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
