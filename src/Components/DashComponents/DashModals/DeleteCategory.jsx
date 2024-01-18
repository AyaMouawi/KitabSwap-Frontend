import { useDispatch } from "react-redux";
import {deleteById} from "../../../redux/actions/genres";

function DeleteCategory({ closeDeleteCategoryModal , genreId }) {

  const dispatch = useDispatch();
console.log("genreid", genreId)
  const handleConfirmDelete = () => {
       dispatch(deleteById(genreId));
       closeDeleteCategoryModal(); 
   };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <p className="text-3xl m-12 mx-auto px-12">
          Deleting this genre will delete all the books related to it. Are you sure you wanna delete it?
        </p>
        <div className="flex justify-center p-6 items-center">
          <button
            className="bg-white text-book py-1 px-2 border border-book w-32 text-3xl inline-block  mr-4"
            onClick={handleConfirmDelete}
          >
            Delete
          </button>
        </div>
        {}
      </div>
    </div>
  );
}

export default DeleteCategory;
