import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div id="about" className="flex items-center px-32 font-lateef mt-8 ml-8">
      <div className="homeherosection-img w-1/2 mt-12 ">
        <img
          src="../Images/AboutPic.png"
          alt="Hero Image"
          className="object-cover w-[80%] ml-16"
        />
      </div>
      <div className="flex flex-col  homeherosection-title-cont w-1/2">
        <h1 className="text-3xl mb-4 homeherosection-title font-light text-justify w-4/5">
          We open your door to a community where stories are cherished, shared,
          and exchanged. Embrace the joy of reading, discover new tales, and let
          <span className="font-love-light text-5xl"> KitabSwap </span> be the doorway to endless adventures right at your doorstep.
        </h1>
        <div className="flex ">
          <Link to={"/Shop"}><button className="bg-book text-white py-2 px-4 border border-book w-fit text-3xl inline-block font-extralight mt-5">
            Start Shopping
          </button></Link>
          <Link to={"/Trade"}><button className="bg-book text-white py-2 px-4 border border-book w-fit text-3xl inline-block font-extralight mt-5 ml-8">
            Start Trading
          </button> </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
