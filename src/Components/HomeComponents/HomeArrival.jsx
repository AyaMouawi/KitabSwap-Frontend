import React, { useState, useEffect } from "react";

import "../css/HomeArrival.css"
import ProductItem from './ProductItem';

function HomeArrival() {


  return (
    <div className='w-full mx-auto p-4 HomeArrival-cont font-lateef font-light mt-10'>
        <p className="text-5xl text-center  underline HomeArrival-title text-book">Latest Arrivals</p>
        <div className="homeCategeries-link-container mb-5 italic text-right">
        <a href="" className="text-3xl homeCategeries-link hover:text-book mr-20">See all books <span className="ml-2 text-3xl">&#8594;</span></a>
        </div>
            <div className="flex flex-wrap items-center justify-between HomeArrival-items-cont mx-20"> 
       
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          
        </div>
        
    </div>
  );
}

export default HomeArrival;
