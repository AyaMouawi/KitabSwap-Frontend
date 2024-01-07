import { useEffect, useState, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "../css/Dashboard.css";
import EditBanner from "./DashModals/EditBanner";
import { bannerData } from "./datas";

function BannerSection() {
  /* MATERIAL REACT TABLE STUFF */
  const data = useMemo(() => bannerData, []);
  const columns = [
    { header: "Text", accessorKey: "text" },
    {
      header: "Thumbnail",
      accessorKey: "thumbnail",
      Cell: ({ renderedCellValue, row }) => (
        <img
          className="h-28 w-20"
          src={"../Images/" + row.original.thumbnail}
        ></img>
      ),
    },
    { header: "Button Text", accessorKey: "btnText" },
    { header: "Link", accessorKey: "link" },
    {
      accessorKey: "edit",
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
            onClick={() => openEditBannerModal()}
          />
        </div>
      ),
      enableSorting: false,
    },
    {
      accessorKey: "radio",
      header: "",
      Cell: ({ renderedCellValue, row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <input
            className="h-6 w-6"
            type="radio"
            alt="edit"
            checked
          />
        </div>
      ),
      enableSorting: false,
    },
  ];
  const table = useMaterialReactTable({
    columns,
    data,
    enableTopToolbar: false,
    enableSorting: false,
    enablePagination: false,
    enableColumnActions: false,
  });
  /* MODAL STUFF */
  const [showEditBannerModal, setShowEditBannerModal] = useState(false);

  const openEditBannerModal = () => {
    setShowEditBannerModal(true);
  };

  const closeEditBannerModal = () => {
    setShowEditBannerModal(false);
  };
 
  return (
    <div className="font-lateef">
      <div className="overflow-x-auto mx-20">
        <MaterialReactTable table={table} />
      </div>
      {showEditBannerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 relative z-10">
            <button
              onClick={closeEditBannerModal}
              className="absolute top-0 right-0 m-4 px-2 py-1 text-xl"
            >
              X
            </button>
            <EditBanner closeEditBannerModal={closeEditBannerModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default BannerSection;