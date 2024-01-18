import { useDispatch } from "react-redux";
import {deleteById} from "../../../redux/actions/orders";

function DeleteOrder({ closeDeleteOrderModal, orderId}) {
 
    console.log("deleteId", orderId)
    const dispatch = useDispatch();

   const handleConfirmDelete = () => {
        dispatch(deleteById(orderId));
        closeDeleteOrderModal(); 
    };

    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <p className="text-3xl m-12 mx-auto px-12">
                    Are you sure you want to delete this Order?
                </p>
                <div className="flex justify-center p-6 items-center">
                    <button className="bg-white text-book py-1 px-2 border border-book w-32 text-3xl inline-block  mr-4"
                        onClick={handleConfirmDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteOrder;