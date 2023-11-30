import Collaboration from "../../Components/Home/Collaboration";
import HeroSection from "../../Components/Home/HeroSection";
import ServiceSection from "../../Components/Home/ServiceSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <Collaboration />
      <ServiceSection />
    </div>
  );
};

export default Home;
