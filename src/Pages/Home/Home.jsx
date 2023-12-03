import BlogsSection from "../../Components/Home/BlogsSection";
import Collaboration from "../../Components/Home/Collaboration";
import CoursesSection from "../../Components/Home/CoursesSection";
import HeroSection from "../../Components/Home/HeroSection";
import ServiceSection from "../../Components/Home/ServiceSection";
import TestimonialSection from "../../Components/Home/TestimonialSection";
import TutorsSection from "../../Components/Home/TutorsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Collaboration />
      <ServiceSection />
      <CoursesSection />
      <TutorsSection />
      <TestimonialSection />
      <BlogsSection />
    </div>
  );
};

export default Home;
