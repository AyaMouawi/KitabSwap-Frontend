import React, { useState, useEffect, useRef } from "react";
import ProductItem from "../HomeComponents/ProductItem";
import Footer from "../FrequentlyUsed/Footer";
import NavBar from "../FrequentlyUsed/NavBar";

import "../css/AllProducts.css";
function AllProducts() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);
  const [value, setValue] = useState((300 + 45) / 2);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const productsPerPage = 8; 
  const totalProducts = 22; 

  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Array.from(
    { length: productsPerPage },
    (_, index) => {
      const productIndex = indexOfFirstProduct + index;
      return productIndex < totalProducts ? (
        <ProductItem key={productIndex}  />
      ) : null;
    }
  );


  const nextPage = () => {
    if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <NavBar />
      <div className="font-lateef ">
        <div className="p-4 pb-0">
        <div className="flex justify-end mr-20">
          <div className=" flex justify-start w-fit items-center py-7 relative">
            <input
              className="text-lg   leading-none text-left text-gray-600 px-2 py-2 w-full border border-black outline-none"
              type="text"
              placeholder="Search"
            />
            <svg
              className="absolute right-3 z-10 w-6 cursor-pointer"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke="black"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M21 21L15 15"
                stroke="black"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* DROPDOWN PRODUCTS */}
          <div className="ml-8 flex items-center">
            <p className="text-xl mr-4">146 products</p>{" "}
            <div className="relative inline-block text-left scale-95 z-20" ref={dropdownRef}>
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-black bg-white hover:bg-white  focus:outline-none border border-black font-medium  text-xl px-6 py-2 text-center inline-flex items-center   "
                type="button"
              >
                Sort Products By
                <svg
                  className={`w-4 h-2.5 ms-3 transition-transform ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute  bg-white divide-y    w-44 ">
                  <ul className="py-2 text-xl text-black ">
                    <li>
                      <button
                        className="block px-4 py-2   hover:text-book"
                        onClick={toggleDropdown}
                      >
                        Newest Arrivals
                      </button>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2   hover:text-book"
                        onClick={toggleDropdown}
                      >
                        Price High To Low
                      </button>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2   hover:text-book"
                        onClick={toggleDropdown}
                      >
                        Price Low To High
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
        <div className="flex">
           {/*----------------------------------- CATEGORIES -----------------------------------------------------------------------   */}
          <div className="w-fit ml-16 scale-95">
            <div className="border-b-2 w-72 border-black my-2"></div>
           
           
            <div className="text-4xl">Genres</div>

            <div className="border-b-2 w-72 border-black my-2"></div>

            <div className="mb-8">
              <form>
                <label class="flex items-center">
                  <input type="checkbox" name="All" class="h-4 w-4 mr-2" />
                  <span class="flex-grow text-2xl">All</span>
                  <span class=" text-xl italic">142 products</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" name="Fantasy" class="h-4 w-4 mr-2" />
                  <span class="flex-grow text-2xl">Fantasy</span>
                  <span class=" text-xl italic">12 products</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" name="Romance" class="h-4 w-4 mr-2" />
                  <span class="flex-grow text-2xl">Romance</span>
                  <span class=" text-xl italic">14 products</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" name="Mystery" class="h-4 w-4 mr-2" />
                  <span class="flex-grow text-2xl">Mystery</span>
                  <span class=" text-xl italic">6 products</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" name="Tragedy" class="h-4 w-4 mr-2" />
                  <span class="flex-grow text-2xl">Tragedy</span>
                  <span class=" text-xl italic">4 products</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" name="Poetry" class="h-4 w-4 mr-2" />
                  <span class="flex-grow text-2xl">Poetry</span>
                  <span class=" text-xl italic">20 products</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" name="Drama" class="h-4 w-4 mr-2" />
                  <span class="flex-grow text-2xl">Drama</span>
                  <span class=" text-xl italic">14 products</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" name="Horror" class="h-4 w-4 mr-2" />
                  <span class="flex-grow text-2xl">Horror</span>
                  <span class=" text-xl italic">11 products</span>
                </label>
              </form>
            </div>
         
            {/* PRICE RANGE PRICE RANGE PRICE RANGE PRICE RANGE PRICE RANGE PRICE RANGE */}
            <div className="border-b-2 w-72 border-black my-2"></div>
            <div className="text-4xl">Price Range</div>
            <div className="border-b-2 w-72 mb-6 border-black my-2"></div>
            <div className="w-full justify-center flex mb-2">
              <input
                type="range"
                min="45"
                max="300"
                value={value}
                onChange={handleChange}
                className=" appearance-none h-0.5 bg-black w-52  AllProducts-slider"
              />
            </div>
            <div className="flex items-center w-52 mx-auto justify-between">
              <span className="">$45</span>
              <span>${value}</span>
              <span className="">$300</span>
            </div>

            <div className="border-b-2 w-72 border-black my-2"></div>
            <form>
              <label class="flex items-center mt-8">
                <input type="checkbox" name="All" class="h-4 w-4 mr-2" />
                <span class="flex-grow text-2xl">Discounted</span>
              </label>
            </form>
          </div>
        {/* PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS */}
          <div className="flex-grow p-4 pl-2">
      <div className="flex flex-wrap items-center justify-start gap-4 HomeArrival-items-cont mx-12">
        {currentProducts}
      </div>
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center gap-3">
          <button
            onClick={prevPage}
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <p className="text-xl text-gray-900">
            {currentPage} <span className="mx-0.25">/</span>{' '}
            {Math.ceil(totalProducts / productsPerPage)}
          </p>

          <button
            onClick={nextPage}
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
            disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AllProducts;
