import { useEffect, useState,useMemo } from "react";
import "../css/Dashboard.css";
import AddUser from "./DashModals/AddUser";
import DeleteUser from "./DashModals/DeleteUser";
import EditUser from "./DashModals/EditUser";
import {
    MaterialReactTable,
    useMaterialReactTable,
  } from "material-react-table";
  import { teamData } from "./datas";
function TeamSection() {
    /* MATERIAL REACT TABLE STUFF */
    const data = useMemo(() => teamData, []);

    const columns = [
        { header: "Name", accessorKey: "name" },
    
        { header: "Email", accessorKey: "email" },
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
                  onClick={() => openEditUserModal()}
                />
                <img
                  className="h-6 w-6"
                  src="../Images/dashboardIcons/delete.png"
                  alt="delete"
                  onClick={() => openDeleteUserModal()}
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
        enableSorting:false,
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
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
    const [showEditUserModal, setShowEditUserModal] = useState(false);
   
   
    const openDeleteUserModal = () => {

        setShowDeleteUserModal(true);
    };

    const openAddUserModal = () => {

        setShowAddUserModal(true);
    };

    const closeAddUserModal = () => {

        setShowAddUserModal(false);
    };

    const closeDeleteUserModal = () => {
        setShowDeleteUserModal(false);
    };

  

    const openEditUserModal = () => {
  
        setShowEditUserModal(true);
    };

    const closeEditUserModal = () => {
        setShowEditUserModal(false);
    };

    return (
        <div className="font-lateef">

            <div className="overflow-x-auto mx-20">
            <MaterialReactTable table={table} />

                {showDeleteUserModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <div className="bg-white p-6 relative z-10">
                            <button onClick={closeDeleteUserModal} className="absolute top-0 right-0 m-4 px-2 py-1">X</button>
                            <DeleteUser  closeDeleteUserModal={closeDeleteUserModal} />
                        </div>
                    </div>
                )}
                {showEditUserModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <div className="bg-white p-6 relative z-10">
                            <button onClick={closeEditUserModal} className="absolute top-0 right-0 m-4 px-2 py-1 text-xl">X</button>
                            <EditUser closeEditUserModal={closeEditUserModal} />
                        </div>
                    </div>
                )}

                <button className="text-book border border-book px-4 py-2 hover:bg-book hover:text-white text-xl mt-4"
                    onClick={openAddUserModal}>
                    Add User
                </button>
                {showAddUserModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <div className="bg-white p-6 relative z-10">
                            <button onClick={closeAddUserModal} className="absolute top-0 right-0 m-4 px-2 py-1 text-xl">X</button>
                            <AddUser  closeAddUserModal={closeAddUserModal} />
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default TeamSection;
