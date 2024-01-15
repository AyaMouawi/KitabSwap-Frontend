import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllSaleBooks } from "../../redux/actions/saleBooks";
import "../css/Dashboard.css";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { productsData } from "./datas";
import AddProduct from "./DashModals/AddProduct";
import DeleteProduct from "./DashModals/DeleteProduct";
import EditProduct from "./DashModals/EditProduct";

function ProductsSection() {

  const dispatch = useDispatch();

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
            onClick={() => openEditProductModal()}
          />
          <img
            className="h-6 w-6"
            src="../Images/dashboardIcons/delete.png"
            alt="delete"
            onClick={() => openDeleteProductModal()}
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div className="font-lateef">
      <div className="flex justify-end items-center mr-24">
        <div className="ml-8 flex items-center">
          <div
            className="relative inline-block text-left scale-95 z-20"
            ref={dropdownRef}
          >
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-black bg-white hover:bg-white  focus:outline-none border border-black font-medium  text-xl px-6 py-2 text-center inline-flex items-center   "
              type="button"
            >
              Filter By
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

            {isDropdownOpen && (
              <div className="absolute  bg-white divide-y    w-44 ">
                <ul className="py-2 text-xl text-black ">
                  <li>
                    <button
                      className="block px-4 py-2   hover:text-book"
                      onClick={toggleDropdown}
                    >
                      Available
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2   hover:text-book"
                      onClick={toggleDropdown}
                    >
                      Sold Out
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2   hover:text-book"
                      onClick={toggleDropdown}
                    >
                      Discounted
                    </button>
                  </li>
                  <li>
                    <div className="block px-4 py-2  ">
                      Genre
                      <form>
                        <label class="ml-6 flex items-center hover:text-book">
                          <input
                            type="checkbox"
                            name="All"
                            class="h-4 w-4 mr-2"
                          />
                          <span class="flex-grow">All</span>
                        </label>
                        <label class="ml-6 flex items-center hover:text-book">
                          <input
                            type="checkbox"
                            name="Fantasy"
                            class="h-4 w-4 mr-2"
                          />
                          <span class="flex-grow">Fantasy</span>
                        </label>
                        <label class="ml-6 flex items-center hover:text-book">
                          <input
                            type="checkbox"
                            name="Romance"
                            class="h-4 w-4 mr-2"
                          />
                          <span class="flex-grow">Romance</span>
                        </label>
                        <label class="ml-6 flex items-center hover:text-book">
                          <input
                            type="checkbox"
                            name="Mystery"
                            class="h-4 w-4 mr-2"
                          />
                          <span class="flex-grow">Mystery</span>
                        </label>
                        <label class="ml-6 flex items-center hover:text-book">
                          <input
                            type="checkbox"
                            name="Tragedy"
                            class="h-4 w-4 mr-2"
                          />
                          <span class="flex-grow">Tragedy</span>
                        </label>
                        <label class="ml-6 flex items-center hover:text-book">
                          <input
                            type="checkbox"
                            name="Poetry"
                            class="h-4 w-4 mr-2"
                          />
                          <span class="flex-grow">Poetry</span>
                        </label>
                        <label class="ml-6 flex items-center hover:text-book">
                          <input
                            type="checkbox"
                            name="Drama"
                            class="h-4 w-4 mr-2"
                          />
                          <span class="flex-grow">Drama</span>
                        </label>
                        <label class="ml-6 flex items-center hover:text-book">
                          <input
                            type="checkbox"
                            name="Horror"
                            class="h-4 w-4 mr-2"
                          />
                          <span class="flex-grow">Horror</span>
                        </label>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
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
              <EditProduct closeEditProductModal={closeEditProductModal} />
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
