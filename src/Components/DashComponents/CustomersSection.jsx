import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../css/Dashboard.css";
import ViewCustomer from "./DashModals/ViewCustomer";
import { customersData } from "./datas";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {getAllClients} from '../../redux/actions/users';

function CustomersSection() {

  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const[singleUserData , setSingleUserData]= useState(null);

  useEffect(() => {
    
     dispatch(getAllClients());
  
  }, [dispatch]);

  const users = useSelector ((state) => state.users)
    /* MATERIAL REACT TABLE STUFF */
  const data = users;
  const columns = [
    { header: "Name", accessorKey: "fullName" },
    { header: "Email", accessorKey: "email" },
    { header: "Number of Orders", accessorKey: "orderCount" },

    {
      accessorKey: "viewCustomer",
      header: "",
      Cell: ({ renderedCellValue, row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
          onClick={() => {openViewCustomerModal(); setSingleUserData(row.original)}}
        >
          <button
            className=" text-book italic"

          >
            view details
          </button>
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
      placeholder: `Search in ${data.length} customers`,
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
  const [showViewCustomerModal, setShowViewCustomerModal] = useState(false);
  const openViewCustomerModal = () => {
    setShowViewCustomerModal(true);
  };

  const closeViewCustomerModal = () => {
    setShowViewCustomerModal(false);
  };
  
  return (
    <div>
      <div className="overflow-x-auto mx-20">
      <MaterialReactTable table={table} />
        {showViewCustomerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10">
              <button
                onClick={closeViewCustomerModal}
                className="absolute top-0 right-0 m-4 px-2 py-1 text-xl"
              >
                X
              </button>
              <ViewCustomer closeViewCustomerModal={closeViewCustomerModal} userData = {singleUserData}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomersSection;
