import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import { getLatestSaleBooks } from "../../redux/actions/saleBooks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../css/HomeArrival.css"
import ProductItem from './ProductItem';

function HomeArrival({updateCartKey}) {

  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getLatestSaleBooks())
  },[dispatch]);

const Latest = useSelector((state) => state.saleBooks);


  return (
    <div className='w-full mx-auto p-4 HomeArrival-cont font-lateef font-light mt-10'>
        <p className="text-5xl text-center  underline HomeArrival-title text-book">Latest Arrivals</p>
        <div className="homeCategeries-link-container mb-5 italic text-right">
        <Link to={"/Shop"}><a href="" className="text-3xl homeCategeries-link hover:text-book mr-20">See all books <span className="ml-2 text-3xl">&#8594;</span></a></Link>
        </div>
            <div className="flex flex-wrap items-center justify-between HomeArrival-items-cont mx-20"> 
       
          
        {Latest.map((book) => (
          <ProductItem key={book.id} saleBook={book} updateCartKey = {updateCartKey} />
        ))}
       
          
        </div>
        
    </div>
  );
}

export default HomeArrival;
