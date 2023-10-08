import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { dummySpaceXMissions } from "../Assets/Other/DomySpacexMission";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "rocketUsed", headerName: "RocketUsed", width: 130 },
  {
    field: "success",
    headerName: "Success",
    width: 130,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.success ? "Yes" : "No",
  },
  { field: "manufacturer", headerName: "Manufacturer", width: 130 },
];
const SpaceXMissionTable = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <DataGrid
        style={{
          background: "white",
        }}
        rows={dummySpaceXMissions}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 4 },
          },
        }}
        pageSizeOptions={[4]}
        // checkboxSelection
        autoHeight
      />
    </div>
  );
};

export default SpaceXMissionTable;
