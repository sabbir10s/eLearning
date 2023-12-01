import Collaboration from "../../Components/Home/Collaboration";
import CoursesSection from "../../Components/Home/CoursesSection";
import HeroSection from "../../Components/Home/HeroSection";
import ServiceSection from "../../Components/Home/ServiceSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <Collaboration />
      <ServiceSection />
      <CoursesSection />
    </div>
  );
};

export default Home;
