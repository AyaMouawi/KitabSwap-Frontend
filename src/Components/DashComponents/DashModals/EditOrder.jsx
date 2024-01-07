import { useState, useEffect, useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
  } from "material-react-table";
  import { editOrdersData } from '../datas';
function EditOrder() {

    const data = useMemo(() => editOrdersData, []);
    const columns = [
        {header:"id", accessorKey:"id"},
      { header: "Category", accessorKey: "category" },
      { header: "Name", accessorKey: "name" },

      { header: "Thumbnail", accessorKey: "thumbnail",
      Cell: ({ renderedCellValue, row }) => (
      
        <img className='h-28 w-20'
         src={"../Images/"+row.original.thumbnail} 
      ></img>
      
      ), },
      { header: "Price", accessorKey: "price" },
      { header: "Discounted", accessorKey: "discounted" },
    ];
    const table = useMaterialReactTable({
        columns,
        data,
        enableTopToolbar:false,
        initialState: {
          showGlobalFilter: true,
          pagination: { pageSize: 2 },
          columnVisibility: { id: false }
        },

        muiPaginationProps: {
          showRowsPerPage: false,
          shape: "rounded",
        },
        paginationDisplayMode: "pages",

        enableColumnActions: false,
        enableSorting:false,
      });
    return (
        <div className='font-lateef'>
            <p className="text-red-700 text-3xl text-center underline my-5">Edit Order</p>
            <div className="text-center">
                <form className="py-4">
                    <div className="flex mb-4">
                        <input className="flex-1 px-4 py-2 bg-gray-100 text-xl text-black text-left" defaultValue={"Customer Full Name"} />
                         
                        
                        <span className="mx-4"></span>
                     
                        <input className="flex-1 px-4 py-2 bg-gray-100 text-xl text-black text-left" defaultValue={"Date"} />
                            <select
                                // value={status}
                                // onChange={(e) => setStatus(e.target.value)}
                                className=" px-4 py-2 bg-gray-100 focus:outline-none text-lg text-black ml-2"
                            >
                                <option value="">Status</option>
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
            <input className="flex-1 px-4 py-2 bg-gray-100 text-xl text-black text-left" defaultValue={"Total Price"} />
                <span className="mx-4"></span>
                <input className="flex-1 px-4 py-2 bg-gray-100 text-xl text-black text-left" defaultValue={"Shipment Method"} />
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
