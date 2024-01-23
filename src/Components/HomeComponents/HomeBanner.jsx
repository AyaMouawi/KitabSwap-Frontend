import "../css/homebanner.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getHighlighted} from "../../redux/actions/banner";

function HomeBanner() {

  const dispatch = useDispatch();


  useEffect(() => {
    
    dispatch(getHighlighted());
 
 }, [dispatch]);

 const banner = useSelector ((state) => state.banners);




  return (
    <div className="w-full flex items-center justify-center  font-lateef font-light HomeBanner-container">
        <div className="HomeBanner-container-mini flex items-center justify-between  w-full mx-24 mb-12">
    <div className="HomeBanner-title-btn ml-32 mt-auto mb-7 ">
        <h1 className="text-4xl mb-4 w-[32rem]">{banner[0]?.content}</h1>
        <button className="bg-book text-white py-2 px-4 border border-book w-fit text-3xl inline-block font-extralight  mb-5 hover:bg-gray-100 hover:text-book hover: border-book">
        {banner[0]?.buttonText}
          </button>
    </div>
    <div className="HomeBanner-img-cont">
        <img src={banner[0]?.image} alt="" className="HomeBanner-img mr-24" />
    </div>
    </div>
</div>
  );
}

export default HomeBanner;
