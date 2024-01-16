import { useState, useEffect, useMemo } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getById} from "../../../redux/actions/orders";
import {
    MaterialReactTable,
    useMaterialReactTable,
  } from "material-react-table";


function EditOrder(orderId) {

 
    const dispatch = useDispatch();
    
    console.log('id', orderId.orderId)

    
    useEffect(() => {
    dispatch(getById(orderId.orderId));     
      }, [dispatch]);

      const order = useSelector((state) => state.orders);
      console.log('order', order)

      const [status, setStatus] = useState(order.status);

      const orderData = order?.orderDetails || [];
      console.log("orderData",orderData)
      

    const data = orderData;
    const columns = [
    {header:"id", accessorKey:"bookId"},
      { header: "Name", accessorKey: "bookInfo.title" },
      { header: "Quantity", accessorKey: "quantity" },
      { header: "Price", accessorKey: "totalPrice" },

      { header: "Thumbnail", accessorKey: "bookInfo.bookImage",
      Cell: ({ renderedCellValue, row }) => (
      
        <img className='h-28 w-20'
         src={row.original.bookInfo.bookImage} 
      ></img>
      
      ), },
     
      
    ];
    const table = useMaterialReactTable({
        columns,
        data,
        enableTopToolbar: false,
        initialState: {
          showGlobalFilter: true,
          pagination: { pageSize: 2 },
          columnVisibility: { id: false },
        },
        muiPaginationProps: {
          showRowsPerPage: false,
          shape: "rounded",
        },
        paginationDisplayMode: "pages",
        enableColumnActions: false,
        enableSorting: false,
      });

    
     

    return (
        <div className='font-lateef'>
            <p className="text-red-700 text-3xl text-center underline my-5">Edit Order</p>
            <div className="text-center">
                <form className="py-4">
                    <div className="flex mb-4">
                        <input className="flex-1 px-4 py-2 bg-gray-100 text-xl text-black text-left" disabled defaultValue={order.userInfo?.userName} />
                         
                        
                        <span className="mx-4"></span>
                     
                        <input className="flex-1 px-4 py-2 bg-gray-100 text-xl text-black text-left" disabled defaultValue={order.orderDate} />
                        <select
                            value={status} 
                            onChange={(e) => setStatus(e.target.value)} 
                            className="px-4 py-2 bg-gray-100 focus:outline-none text-lg text-black ml-2"
                        >
                            <option value="pending">Pending</option>
                            <option value="delivered">Delivered</option>
                        </select>
                       
                    </div>
                    <div className="flex mb-4">
                        <div className="overflow-x-auto">
                        <MaterialReactTable table={table} />
                        </div>
                    </div>
         
            <div className="flex mb-4">
            <input className="flex-1 px-4 py-2 bg-gray-100 text-xl text-black text-left" disabled defaultValue={order.total} />
                <span className="mx-4"></span>
                <input className="flex-1 px-4 py-2 bg-gray-100 text-xl text-black text-left"  disabled defaultValue={order.shipmentMethod} />
            </div>

            <div className="flex justify-end">
                <button
                    className="text-book border border-book px-4 py-2 hover:bg-book hover:text-white text-xl">
                    Submit
                </button>
            </div>
        </form>
            </div >
        </div >
    );
}

export default EditOrder;
