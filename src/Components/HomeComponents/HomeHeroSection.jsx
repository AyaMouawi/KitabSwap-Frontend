import "../css/homeherosection.css";

function HomeHeroSection() {
  return (
    <div className="flex items-center justify-between bg-gray-100 HomeHeroSection-container px-28 pr-2 h-[90vh] font-lateef">

      <div className="flex flex-col  homeherosection-title-cont w-fit">
   
        <h1 className="text-5xl mb-10 homeherosection-title w-[35rem] text-justify">
          Where every <span className="font-love-light text-7xl"> book </span>{" "}
          has a story, and every story finds a new home
        </h1>

        <p className="text-3xl  homeherosection-subtitle font-light">
        Book store and trading point for all books lover{" "}
        </p>

        <a href="#about"> <button className="bg-book text-white py-2 px-4 border border-book w-fit text-3xl inline-block font-extralight mt-10">
          Know More
        </button></a>
      </div>

      <div className="homeherosection-img w-1/2 mr-14">
        <img
          src="../Images/HeroPic.png"
          alt="Hero Image"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default HomeHeroSection;
