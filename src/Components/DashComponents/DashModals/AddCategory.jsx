import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGenre } from '../../../redux/actions/genres';

function AddCategory({ closeAddCategoryModal }) {
  const dispatch = useDispatch();
  const [genreName, setGenreName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (genreName.trim() === '') {
      return;
    }

    dispatch(addGenre(genreName));
    setGenreName('');
    closeAddCategoryModal();
  };

  console.log("Submitting genreName:", genreName);

  return (
    <div className="font-lateef">
      <p className="text-book text-4xl text-center underline my-5">
        Add Category
      </p>
      <div className="text-center">
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex-1 h-12">
              <input
                type="text"
                placeholder="Category name"
                value={genreName}
                onChange={(e) => setGenreName(e.target.value)}
                className="w-[32rem] px-4 py-2 bg-gray-100 focus:outline-none text-2xl text-black"
              />
            </div>
            <span className="mx-4"></span>
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

export default AddCategory;
