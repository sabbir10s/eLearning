import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="font-Inter">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
