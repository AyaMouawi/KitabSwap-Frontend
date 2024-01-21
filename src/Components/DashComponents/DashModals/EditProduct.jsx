import { useState, useEffect } from "react";
import { getAllGenres } from "../../../redux/actions/genres";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function EditProduct({ closeEditProductModal, bookData }) {
  const [applyDiscount, setApplyDiscount] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [selectedGenre, setSelectedGenre] = useState('');

  const dispatch = useDispatch();

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

  console.log("genres", genres)

  const handleSubmit = () => {
    closeEditProductModal();
  };

  const handleCheckboxChange = (e) => {
    setApplyDiscount(e.target.checked);
    if (!e.target.checked) {
      setDiscountPercentage("");
    }
  };

  console.log("bookData", bookData)

  return (
    <div className="font-lateef w-[32rem] px-12">
      <p className="text-book text-3xl text-center underline my-5">
        Edit Product
      </p>
      <div className="text-center">
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="flex flex-grow mb-4">
            <select
              className="px-4 py-2 mr-4 bg-gray-100 focus:outline-none text-xl text-black w-full"
              value={selectedGenre} 
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">Select Genre</option>
              {genres.map((genre) => (
                <option
                  key={genre.genre_id}
                  className="capitalize"
                  value={genre.genreName}
                >
                  {genre.genreName}
                </option>
              ))}
            </select>
            </div>
            <div className="flex flex-grow mb-4">
              <select
                // value={role}
                // onChange={handleRoleChange}
                className=" px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black w-full"
              >
                <option value="">Status</option>
                <option value="available">Available</option>
                <option value="sold out">Sold out</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <div className="">
              <input
                type="file"
                id="file"
                className="opacity-0 hidden"
              />
              <label
                className="flex px-4 py-2 bg-gray-100 text-gray-400 text-xl cursor-pointer"
                htmlFor="file"
              >
                Image input fields
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="">
              <input
                type="text"
                name="authorName"
                placeholder="Author Name"
                defaultValue={bookData.authorName || ""}
                className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                defaultValue={bookData.quantity || 0}
                className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            <textarea
              rows={5}
              placeholder="Description"
              defaultValue={bookData.description || ""}
              className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black resize-none"
            />
          </div>
          <div className="mb-4">
            <div className="">
              <input
                type="number"
                name="price"
                placeholder="Price"
                defaultValue={bookData.price || 0}
                className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={applyDiscount}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <p className="text-black text-xl">
                  Apply discount percentage
                </p>
              </div>
              {applyDiscount && (
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Discount percentage %"
                    defaultValue={bookData.discount || 0}
                    className="px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-start">
            <button className="text-book border border-book px-4 py-2 hover:bg-book hover:text-white text-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;

