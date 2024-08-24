import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import LatestBlog from "../components/LatestBlog";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactsSection";
import Announcement from "../components/Announcement";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <Announcement />
      <FeaturedSection />
      <BlogSection />
      <LatestBlog />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
