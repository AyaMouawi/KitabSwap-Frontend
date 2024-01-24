import React, { useState} from "react";
import NavBar from "../FrequentlyUsed/NavBar";
import Footer from "../FrequentlyUsed/Footer";
import HomeHeroSection from "../HomeComponents/HomeHeroSection";
import AboutSection from "../HomeComponents/AboutSection";
import HomeBanner from "../HomeComponents/HomeBanner";
import HomeArrival from "../HomeComponents/HomeArrival";

function HomePage() {

  const [cartKey, setCartKey] = useState(0);
  const updateCartKey = () => {
    setCartKey((prevKey) => prevKey + 1);
  };

  return (
    <div key={cartKey}>

      <NavBar />
      <HomeHeroSection />
      <AboutSection />
      <HomeBanner />
      <HomeArrival updateCartKey = {updateCartKey}/>
      <Footer />
       
    
    </div>
  );
}

export default HomePage;
