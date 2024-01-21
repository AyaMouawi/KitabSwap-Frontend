import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllSaleBooks } from "../../redux/actions/saleBooks";
import "../css/Dashboard.css";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import AddProduct from "./DashModals/AddProduct";
import DeleteProduct from "./DashModals/DeleteProduct";
import EditProduct from "./DashModals/EditProduct";

function ProductsSection() {

  const dispatch = useDispatch();
  const [bookId, setBookId] = useState('');
  const [bookData, setBookData] = useState('');
  console.log('theBookID', bookId)

  useEffect(() => {
    
    dispatch(getAllSaleBooks());
 
 }, [dispatch]);

 const saleBooks = useSelector ((state) => state.saleBooks);
  /* MATERIAL REACT TABLE STUFF */
  const data =  saleBooks;
  const columns = [
    { header: "Category", accessorKey: "genreName" },
    { header: "Name", accessorKey: "title" },
    {
      header: "Thumbnail",
      accessorKey: "book_image",
      Cell: ({ renderedCellValue, row }) => (
        <img
          className="h-28 w-20"
          src={row.original.book_image}
        ></img>
      ),
      enableSorting: false,
    },
    { header: "Price", accessorKey: "price" },
    {
      header: "Quantity",
      accessorKey: "quantity",
      Cell: ({ renderedCellValue, row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {row.original.quantity} products
        </div>
      ),
    },
    {
      header: "Discounted",
      accessorKey: "discount",
      size: 30,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      enableSorting: false,
    },
    {
      header: "Status",
      accessorKey: "status",
      size: 100,
      enableSorting: false,
    },

    {
      accessorKey: "edit/delete",
      header: "",
      Cell: ({ renderedCellValue, row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            className="h-6 w-6"
            src="../Images/dashboardIcons/edit.png"
            alt="edit"
            onClick={() => {openEditProductModal(); setBookId(row.original.saleBook_id); setBookData(row.original)}}
          />
          <img
            className="h-6 w-6"
            src="../Images/dashboardIcons/delete.png"
            alt="delete"
            onClick={() => {openDeleteProductModal(); setBookId(row.original.saleBook_id)}}
          />
        </div>
      ),
      enableSorting: false,
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data,
    enableHiding: false,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableColumnFilters: false,
    enableColumnActions: false,
    initialState: {
      showGlobalFilter: true,
      pagination: { pageSize: 3 },
    },

    muiPaginationProps: {
      showRowsPerPage: false,
      shape: "rounded",
    },
    paginationDisplayMode: "pages",
    defaultColumn: {
      minSize: 0,
      maxSize: 140,
      size: 140,
    },
    positionGlobalFilter: "right",
    muiSearchTextFieldProps: {
      placeholder: `Search in ${data.length} products`,
      sx: { minWidth: "300px" },
      variant: "outlined",
    },
  });

  /* MODAL STUFF */
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);

  const openAddProductModal = () => {
    setShowAddProductModal(true);
  };

  const closeAddProductModal = () => {
    setShowAddProductModal(false);
  };

  const openDeleteProductModal = () => {
    setShowDeleteProductModal(true);
  };

  const closeDeleteProductModal = () => {
    setShowDeleteProductModal(false);
  };

  const openEditProductModal = () => {
    setShowEditProductModal(true);
  };

  const closeEditProductModal = () => {
    setShowEditProductModal(false);
  };
  /* DROPDOWN STUFF */
  
  return (
    <div className="font-lateef">
         
      <div className="overflow-x-auto mx-20">
        <MaterialReactTable table={table} />
        {showDeleteProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10">
              <button
                onClick={closeDeleteProductModal}
                className="absolute top-0 right-0 m-4 px-2 py-1"
              >
                X
              </button>
              <DeleteProduct
                closeDeleteProductModal={closeDeleteProductModal}
                bookId = {bookId}
              />
            </div>
          </div>
        )}
        {showEditProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10">
              <button
                onClick={closeEditProductModal}
                className="absolute top-0 right-0 m-4 px-2 py-1 text-xl"
              >
                X
              </button>
              <EditProduct closeEditProductModal={closeEditProductModal} bookData={bookData}/>
            </div>
          </div>
        )}

        <button
          className="text-book border border-book px-4 py-2 hover:bg-book hover:text-white text-xl mt-4"
          onClick={openAddProductModal}
        >
          Add Product
        </button>
        {showAddProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10">
              <button
                onClick={closeAddProductModal}
                className="absolute top-0 right-0 m-4 px-2 py-1 text-xl"
              >
                X
              </button>
              <AddProduct closeAddProductModal={closeAddProductModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsSection;
