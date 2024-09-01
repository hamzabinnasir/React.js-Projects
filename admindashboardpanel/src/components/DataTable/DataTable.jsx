import "./DataTable.css"
import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
// Importing Rows and Columns
import { userRows, userColumns } from "./dummyData";
import { Link } from "react-router-dom";

export default function DataTableList() {
  const [data, setData] = useState(userRows);

  // Deleting Rows
  const deleteRow = (id) =>{
    setData(data.filter((element) =>
      element.id !== id
    ))
  }
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 243,
      renderCell: (params) => {
        return (
          <>
            <div className="actionContainer">
              <button className="actionBtn view"><Link className="link" to={":userid"}>View</Link></button>
              <button className="actionBtn decline" onClick={() => deleteRow(params.row.id)}>Decline</button>
            </div>
          </>
        )
      }
    }
  ]
  return (
    <>
      <div className="dataTableSection">
        <div className="dataTableHeader">
          <h1>Add New User</h1>
          <button id="addNewBtn"><Link className="link" to={"new"}>Add New</Link></button>
        </div>
        {/* *** reminder *** */}
        <DataGrid className="dataTable"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              // is main pageSize define kr k page ko refresh zaroor krna hai
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          // *** reminder ***
          disableRowSelectionOnClick
        />
      </div>
    </>
  );
}
