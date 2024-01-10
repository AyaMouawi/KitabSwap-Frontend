import React, { useState,useEffect, useRef } from "react";
import Footer from "../FrequentlyUsed/Footer";
import NavBar from "../FrequentlyUsed/NavBar";
import "../css/AllProducts.css";
import TradeItem from "../TradeComponents/TradeItem";
import { hourglass } from 'ldrs'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllTradeBooks } from "../../redux/actions/tradeBook";
import { getAllGenres } from "../../redux/actions/genres";

function TradePage() {
  hourglass.register();
  const [isLoading, setIsLoading] = useState (true);
  const [checkedGenre, setCheckedGenre] = useState([]);
  const [selectAllGenres, setSelectAllGenres] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getAllTradeBooks());
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching tradeBooks:", error);
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

  const genres = useSelector ((state) => state.genres);
  const tradeBook = useSelector ((state) => state.tradeBooks);
  console.log("tradeBook", tradeBook)

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
        tradeBook.filter((book) => {
          const searchMatch = (
            book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            book.authorName.toLowerCase().includes(searchInput.toLowerCase())
          );
  
          return searchMatch;
        })
      );
    } else {
      const filtered = tradeBook.filter((book) => {
        const searchMatch = (
          book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.authorName.toLowerCase().includes(searchInput.toLowerCase())
        );
  
        return (
          searchMatch &&
          (checkedGenre.length === 0 || checkedGenre.includes(book.genreName))
        );
      });

      setFilteredBooks(filtered);
    }
  }, [checkedGenre, tradeBook, selectAllGenres,  searchInput]);

  const handleSelectAllChange = (event) => {
    setSelectAllGenres(event.target.checked);
    setCheckedGenre([]);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalProducts = filteredBooks.length;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredBooks.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ).map((tradeBook, index) => (
    <TradeItem key={index} tradeBook={tradeBook} />
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
        <div className="flex mt-20">
          {/*----------------------------------- CATEGORIES -----------------------------------------------------------------------   */}
          <div className="w-fit ml-16 scale-95">
            <div className="border-b-2 w-72 border-black my-2"></div>

            <div className="text-4xl">Genres</div>

            <div className="border-b-2 w-72 border-black my-2"></div>

            <div className="">
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
              <span className="text-xl italic"> {genre.tradeBookCount}products</span>
            </label>
          ))}
              </form>
            </div>

            <div className="p-4 pb-0 pl-0">
              <div className="flex w-full ">
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
              </div>
            </div>
          </div>

          {/* PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS PRODUCTS */}
          <div className="flex-grow p-4 pl-2">
          {filteredBooks.length === 0 ? (
              <div className="text-center text-xl text-gray-900">
                No books in this genre.
              </div>
            ) : (
              <>
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
                      {currentPage} <span className="mx-0.25">/</span>{" "}
                      {Math.ceil(totalProducts / productsPerPage)}
                    </p>

                    <button
                      onClick={nextPage}
                      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
                      disabled={
                        currentPage === Math.ceil(totalProducts / productsPerPage)
                      }
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
              </>
            )}
          </div>
        </div> 
      </div> 

      <Footer />
    </>
  );
}

export default TradePage;
