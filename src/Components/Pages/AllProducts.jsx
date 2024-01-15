import React, { useState, useEffect, useRef } from "react";
import ProductItem from "../HomeComponents/ProductItem";
import Footer from "../FrequentlyUsed/Footer";
import NavBar from "../FrequentlyUsed/NavBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hourglass } from 'ldrs'
import { getAllAvailableSaleBooks } from "../../redux/actions/saleBooks";
import { getAllGenres } from "../../redux/actions/genres";
import "../css/AllProducts.css";

function AllProducts() {
  hourglass.register()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 
  const [isLoading, setIsLoading] = useState (true);
  const [checkedGenre, setCheckedGenre] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectAllGenres, setSelectAllGenres] = useState(false);
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [sortOption, setSortOption] = useState(null);
  const [sortedProducts, setSortedProducts] = useState([]);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getAllAvailableSaleBooks());
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching saleBooks:", error);
        setIsLoading(false);
      }
    };
    fetchBookData();
  }, [dispatch]);

  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        await dispatch(getAllGenres());
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenreData();
  }, [dispatch]);

  const saleBooks = useSelector((state) => state.saleBooks);
  const genres = useSelector ((state) => state.genres);
  const [value, setValue] = useState((minPrice + maxPrice) / 2);

  useEffect(() => {
    const allPrices = saleBooks.map((book) => parseFloat(book.price));
    const minBookPrice = Math.min(...allPrices);
    const maxBookPrice = Math.max(...allPrices);
    setMinPrice(minBookPrice);
    setMaxPrice(maxBookPrice);
    setValue(Number((minBookPrice + maxBookPrice) / 2).toFixed(2));
  }, [saleBooks]);

  

  const handleGenreChange = (event) => {
    const genre = event.target.name;
    if (genre === "All") {
      setCheckedGenre([genre]);
      setSelectAllGenres(true);
    } else {
      setCheckedGenre((prevCheckedGenres) => {
        if (prevCheckedGenres.includes("All")) {
          return prevCheckedGenres.filter((g) => g !== "All");
        }
        return prevCheckedGenres;
      });

      if (event.target.checked) {
        setSelectAllGenres(false);
        setCheckedGenre((prevCheckedGenres) => [...prevCheckedGenres, genre]);
      } else {
        setCheckedGenre((prevCheckedGenres) =>
          prevCheckedGenres.filter((g) => g !== genre)
        );
      }
    }
  };

 

  useEffect(() => {
    if (selectAllGenres) {
      setFilteredBooks(
        saleBooks.filter((book) => {
          const isDiscounted = showDiscounted ? (book.discount !== null && parseFloat(book.discount) > 0) : true;
          const isInRange = parseFloat(book.price) >= minPrice && parseFloat(book.price) <= value;
          const searchMatch = (
            book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            book.authorName.toLowerCase().includes(searchInput.toLowerCase())
          );
  
          return isDiscounted && isInRange && searchMatch;
        })
      );
    } else {
      const filtered = saleBooks.filter((book) => {
        const isDiscounted = showDiscounted ? (book.discount !== null && parseFloat(book.discount) > 0) : true;
        const isInRange = parseFloat(book.price) >= minPrice && parseFloat(book.price) <= value;
        const searchMatch = (
          book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.authorName.toLowerCase().includes(searchInput.toLowerCase())
        );
  
        return (
          searchMatch &&
          (checkedGenre.length === 0 || checkedGenre.includes(book.genreName)) &&
          isDiscounted &&
          isInRange
        );
      });
  
      const sorted = sortProducts(filtered);
      setSortedProducts(sorted);
  
      setFilteredBooks(filtered);
    }
  }, [checkedGenre, saleBooks, selectAllGenres, showDiscounted, minPrice, value, searchInput, sortOption]);

  const handleSelectAllChange = (event) => {
    setSelectAllGenres(event.target.checked);
    setCheckedGenre([]);
  };

  const handleDiscountedChange = (event) => {
    setShowDiscounted(event.target.checked);
  };


  console.log("saleBookssss", saleBooks)
  console.log("genresss", genres)
  console.log ("checkedgenres",checkedGenre )

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
  

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    toggleDropdown(); };

    const sortProducts = (books) => {
      switch (sortOption) {
        case "newest":
          return [...books].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        case "highToLow":
          return [...books].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        case "lowToHigh":
          return [...books].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        default:
          return books;
      }
    };

  const productsPerPage = 4; 
  const totalProducts = filteredBooks.length;

  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredBooks.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ).map((saleBook) => (
    <ProductItem key={saleBook.saleBook_id} saleBook={saleBook}  />
  ));


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
              className="text-lg leading-none text-left text-gray-600 px-2 py-2 w-full border border-black outline-none"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
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
            <p className="text-xl mr-4">{filteredBooks.length} products</p>{" "}
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
                        onClick={() => handleSortChange("newest")}
                      >
                        Newest Arrivals
                      </button>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2   hover:text-book"
                        onClick={() => handleSortChange("highToLow")}
                      >
                        Price High To Low
                      </button>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2   hover:text-book"
                        onClick={() => handleSortChange("lowToHigh")}
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
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="All"
                  checked={selectAllGenres}
                  onChange={handleSelectAllChange}
                  className="h-4 w-4 mr-2"
                />
                <span className="flex-grow text-2xl">All</span>
                <span className="text-xl italic"> {filteredBooks.length} products</span>
              </label>
              {genres.map((genre) => (
            <label key={genre.genre_id} className="flex items-center">
              <input
                type="checkbox"
                name={genre.genreName}
                checked={checkedGenre.includes(genre.genreName)}
                onChange={handleGenreChange}
                className="h-4 w-4 mr-2"
              />
              <span className="flex-grow text-2xl">{genre.genreName}</span>
              <span className="text-xl italic"> {genre.saleBookCount}products</span>
            </label>
          ))}
              </form>
            </div>
         
            {/* PRICE RANGE PRICE RANGE PRICE RANGE PRICE RANGE PRICE RANGE PRICE RANGE */}
            <div className="border-b-2 w-72 border-black my-2"></div>
            <div className="text-4xl">Price Range</div>
            <div className="border-b-2 w-72 mb-6 border-black my-2"></div>
            <div className="w-full justify-center flex mb-2">
            <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="appearance-none h-0.5 bg-black w-52  AllProducts-slider"
              />
            </div>
              <div className="flex items-center w-52 mx-auto justify-between">
              <span className="">${minPrice}</span>
              <span>${value}</span>
              <span className="">${maxPrice}</span>
              </div>

            <div className="border-b-2 w-72 border-black my-2"></div>
            <form>
              <label class="flex items-center mt-8">
              <input
                    type="checkbox"
                    name="discounted"
                    checked={showDiscounted}
                    onChange={handleDiscountedChange}
                    className="h-4 w-4 mr-2"
                  />
                <span class="flex-grow text-2xl">Discounted</span>
              </label>
            </form>
          </div>
        {/* PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS */}
          <div className="flex-grow p-4 pl-2">
          {isLoading ? (
            <div className="flex items-center justify-center h-40">
              <l-hourglass
                size="40"
                bg-opacity="0.1"
                speed="1.75"
                color="rgb(183,86,66)"
              ></l-hourglass>
            </div>
          ) : filteredBooks.length === 0 ? (
            <div className="text-center mt-4 text-xl">
              No books with these prices in this genre.
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-start gap-4 HomeArrival-items-cont mx-12">
              {currentProducts}
            </div>
          )}
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
