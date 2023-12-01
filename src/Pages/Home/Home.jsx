import Collaboration from "../../Components/Home/Collaboration";
import CoursesSection from "../../Components/Home/CoursesSection";
import HeroSection from "../../Components/Home/HeroSection";
import ServiceSection from "../../Components/Home/ServiceSection";
import TutorsSection from "../../Components/Home/TutorsSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <Collaboration />
      <ServiceSection />
      <CoursesSection />
      <TutorsSection />
    </div>
  );
};

export default Home;
