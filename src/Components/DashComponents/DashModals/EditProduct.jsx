import { useState, useEffect } from "react";
import { getAllGenres } from "../../../redux/actions/genres";
import { useDispatch, useSelector } from "react-redux";
import { updateSaleBook } from "../../../redux/actions/saleBooks";

function EditProduct({ closeEditProductModal, bookData }) {
  const [applyDiscount, setApplyDiscount] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(bookData.genre_id || '');
  const [selectedStatus, setSelectedStatus] = useState(bookData.status || '');

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

  const genres = useSelector((state) => state.genres);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", e.target.title.value || ""); 
    formData.append("book_name", bookData.book_name);
    formData.append("genre_id", e.target.genre_id.value || "");
    formData.append("authorName", e.target.authorName.value || "");
    formData.append("price", e.target.price.value || "");
    formData.append("quantity", e.target.quantity.value || "");
    formData.append("description", e.target.description.value || "");
    formData.append("status", e.target.selectedStatus.value || "");
    formData.append("discount", applyDiscount ? e.target.discountPercentage.value || 0 : 0);

    formData.append("image", e.target.file.files[0]);

    try {
      await dispatch(updateSaleBook(bookData.saleBook_id, formData));
      closeEditProductModal();
    } catch (error) {
      console.log("Failed to update this book:", error);
  
    }
  };

  const handleCheckboxChange = (e) => {
    setApplyDiscount(e.target.checked);
    if (!e.target.checked) {
      setDiscountPercentage("");
    }
  };


  return (
    <div className="font-lateef w-[32rem] px-12">
      <p className="text-book text-3xl text-center underline my-5">
        Edit Product
      </p>
      <div className="text-center">
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="flex flex-grow mb-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={bookData.title || ""}
                className="flex flex-grow w-full md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                required
              />
            </div>
            <div className="flex flex-grow mb-4">
              <select
                name="genre_id"
                className="px-4 py-2 mr-4 bg-gray-100 focus:outline-none text-xl text-black w-full"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value="">Select Genre</option>
                {genres.map((genre) => (
                  <option
                    key={genre.genre_id}
                    className="capitalize"
                    value={genre.genre_id}
                  >
                    {genre.genreName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-grow mb-4">
              <select
                name="selectedStatus"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black w-full"
              >
                <option value="">Status</option>
                <option value="available">Available</option>
                <option value="sold out">Sold</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex">
              <div className="w-1/2">
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="opacity-0 hidden "
                />
                <label
                  className="flex px-4 py-2 bg-gray-100 text-gray-400 text-xl cursor-pointer flex flex-grow"
                  htmlFor="file"
                >
                  Image input fields
                </label>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src={bookData.book_image} alt="" className="w-28" />
              </div>
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
              name="description"
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
                  name="applyDiscount"
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
                    name="discountPercentage"
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
