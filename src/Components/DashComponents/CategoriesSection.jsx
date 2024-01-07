import { useEffect, useState, useMemo, useRef } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "../css/Dashboard.css";
import AddCategory from "./DashModals/AddCategory";
import DeleteCategory from "./DashModals/DeleteCategory";
import EditCategory from "./DashModals/EditCategory";
import { categoriesData } from "./datas";
function CategoriesSection() {
  /* MATERIAL REACT TABLE STUFF */
  const data = useMemo(() => categoriesData, []);
  const columns = [
    { header: "Category", accessorKey: "category" },
    {
      header: "Quantity",
      accessorKey: "qty",
      Cell: ({ renderedCellValue, row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {row.original.qty} products
        </div>
      ),
    },
    { header: "discounted", accessorKey: "discounted" },
    {
      header: "highlight",
      accessorKey: "highlight",
      Cell: ({ renderedCellValue, row }) => (
        <div
          className="ml-4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <input
            type="checkbox"
            defaultChecked={row.original.highlight === 1}
          />
        </div>
      ),
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
            onClick={() => openEditCategoryModal()}
          />
          <img
            className="h-6 w-6"
            src="../Images/dashboardIcons/delete.png"
            alt="delete"
            onClick={() => openDeleteCategoryModal()}
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
      pagination: { pageSize: 4 },
    },

    enableTopToolbar: false,
    muiPaginationProps: {
      showRowsPerPage: false,
      shape: "rounded",
    },
    paginationDisplayMode: "pages",
  });

  /* MODAL STUFF */

  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const openAddCategoryModal = () => {
    setShowAddCategoryModal(true);
  };

  const closeAddCategoryModal = () => {
    setShowAddCategoryModal(false);
  };

  const openDeleteCategoryModal = () => {
    setShowDeleteCategoryModal(true);
  };

  const closeDeleteCategoryModal = () => {
    setShowDeleteCategoryModal(false);
  };

  const openEditCategoryModal = () => {
    setShowEditCategoryModal(true);
  };

  const closeEditCategoryModal = () => {
    setShowEditCategoryModal(false);
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
      <div className="overflow-x-auto mx-20">
        <MaterialReactTable table={table} />
        {showDeleteCategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10">
              <button
                onClick={closeDeleteCategoryModal}
                className="absolute top-0 right-0 m-4 px-2 py-1 text-xl"
              >
                X
              </button>
              <DeleteCategory
                closeDeleteCategoryModal={closeDeleteCategoryModal}
              />
            </div>
          </div>
        )}
        {showEditCategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10">
              <button
                onClick={closeEditCategoryModal}
                className="absolute top-0 right-0 m-4 px-2 py-1 text-xl"
              >
                X
              </button>
              <EditCategory closeEditCategoryModal={closeEditCategoryModal} />
            </div>
          </div>
        )}

        <button
          className="text-book border border-book px-4 py-2 hover:bg-book hover:text-white text-xl mt-4"
          onClick={openAddCategoryModal}
        >
          Add Category
        </button>
        {showAddCategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10">
              <button
                onClick={closeAddCategoryModal}
                className="absolute top-0 right-0 m-4 px-2 py-1  text-xl"
              >
                X
              </button>
              <AddCategory closeAddCategoryModal={closeAddCategoryModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoriesSection;
