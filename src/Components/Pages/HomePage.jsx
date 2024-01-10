import NavBar from "../FrequentlyUsed/NavBar";
import Footer from "../FrequentlyUsed/Footer";
import HomeHeroSection from "../HomeComponents/HomeHeroSection";
import AboutSection from "../HomeComponents/AboutSection";
import HomeBanner from "../HomeComponents/HomeBanner";
import HomeArrival from "../HomeComponents/HomeArrival";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HomeHeroSection />
      <AboutSection />
      <HomeBanner />
      <HomeArrival />

      <Footer />
       
    
    </div>
  );
}

export default HomePage;
