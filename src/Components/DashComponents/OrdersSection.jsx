import { useEffect, useState, useRef, useMemo } from "react";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "../css/Dashboard.css";
import DeleteOrder from "./DashModals/DeleteOrder";
import EditOrder from "./DashModals/EditOrder";
import { ordersData } from "./datas";

function OrdersSection() {
/* MATERIAL REACT TABLE STUFF */
  const data = useMemo(() => ordersData, []);
  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Date", accessorKey: "date" },
    { header: "Quantity", accessorKey: "qty" },
    { header: "Total", accessorKey: "total" },
    { header: "Status", accessorKey: "status" },
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
            onClick={() => openEditOrderModal()}
          />
          <img
            className="h-6 w-6"
            src="../Images/dashboardIcons/delete.png"
            alt="delete"
            onClick={() => openDeleteOrderModal()}
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

    positionGlobalFilter: "right",
    muiSearchTextFieldProps: {
      placeholder: `Search in ${data.length} orders`,
      sx: { minWidth: "300px" },
      variant: "outlined",
    },
    muiPaginationProps: {
      showRowsPerPage: false,
      shape: "rounded",
    },
    paginationDisplayMode: "pages",
  });
/* MODAL STUFF */
  const [showDeleteOrderModal, setShowDeleteOrderModal] = useState(false);
  const [showEditOrderModal, setShowEditOrderModal] = useState(false);

  const openDeleteOrderModal = () => {
    setShowDeleteOrderModal(true);
  };

  const closeDeleteOrderModal = () => {
    setShowDeleteOrderModal(false);
  };

  const openEditOrderModal = () => {
    setShowEditOrderModal(true);
  };

  const closeEditOrderModal = () => {
    setShowEditOrderModal(false);
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
                      Pending
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2   hover:text-book"
                      onClick={toggleDropdown}
                    >
                      Delivered
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mx-20">
        <MaterialReactTable table={table} />

        {showDeleteOrderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10">
              <button
                onClick={closeDeleteOrderModal}
                className="absolute top-0 right-0 m-4 px-2 py-1 text-xl"
              >
                X
              </button>
              <DeleteOrder closeDeleteOrderModal={closeDeleteOrderModal} />
            </div>
          </div>
        )}
        {showEditOrderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10">
              <button
                onClick={closeEditOrderModal}
                className="absolute top-0 right-0 m-4 px-2 py-1 text-xl"
              >
                X
              </button>
              <EditOrder closeEditOrderModal={closeEditOrderModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdersSection;
