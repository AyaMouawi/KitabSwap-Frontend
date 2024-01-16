import { useEffect, useState, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../../redux/actions/orders";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "../css/Dashboard.css";
import DeleteOrder from "./DashModals/DeleteOrder";
import EditOrder from "./DashModals/EditOrder";
import { ordersData } from "./datas";

function OrdersSection() {

  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    
     dispatch(getAllOrders());
  
  }, [dispatch]);
  

  const orderData = useSelector ((state) => state.orders);
console.log('orders', orderData)

/* MATERIAL REACT TABLE STUFF */
  const data = orderData;
  const columns = [
    { header: "Name", accessorKey: "userInfo.userName" },
    { header: "Date", accessorKey: "orderDate" },
    { header: "Quantity", accessorKey: "totalQuty" },
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
            onClick={() => {
              openEditOrderModal();
              setOrderId(row.original.orderId);}
            }
          />
          <img
            className="h-6 w-6"
            src="../Images/dashboardIcons/delete.png"
            alt="delete"
            onClick={() => {openDeleteOrderModal(); setOrderId(row.original.orderId);}}
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
              <DeleteOrder closeDeleteOrderModal={closeDeleteOrderModal} orderId= {orderId}/>
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
              <EditOrder closeEditOrderModal={closeEditOrderModal} orderId= {orderId} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdersSection;
