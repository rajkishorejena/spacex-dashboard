import { GET_SPACEX_ROCKET_DATA } from "../Service/queries"; // Importing GraphQL query
import client from "../Service/Apollo"; // Importing GraphQL client

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
interface RocketTable {
  company: string;
  country: string;
  boosters: number;
  active: boolean;
  id: string;
  mass: {
    kg: number;
  };
  name: string;
  type: string;
}

function DataTable() {
  const [rows, setRows] = useState<RocketTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const tableCellStyle = {
    fontSize: "16px",
    color: "black",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: GET_SPACEX_ROCKET_DATA,
        });
        // setRows(data);
        console.log("data", data);
        setRows([]);
        data.rockets.map((data: RocketTable) => {
          setRows((prvRows) => [
            ...prvRows,
            {
              id: data.id,
              active: data.active,
              boosters: data.boosters,
              company: data.company,
              country: data.country,
              mass: data.mass,
              name: data.name,
              type: data.type,
            },
          ]);
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log(rows);
  return (
    <section>
      {loading ? (
        <p>We are loading the table</p>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={tableCellStyle}>Name</TableCell>
                <TableCell align="center" style={tableCellStyle}>
                  Company{" "}
                </TableCell>
                <TableCell align="center" style={tableCellStyle}>
                  Country
                </TableCell>
                <TableCell align="center" style={tableCellStyle}>
                  Boosters
                </TableCell>
                <TableCell align="center" style={tableCellStyle}>
                  Mass
                </TableCell>
                <TableCell align="center" style={tableCellStyle}>
                  Type
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows.map((value: RocketTable) => {
                  console.log("value", value);
                  return (
                    <TableRow
                      key={value.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {value.name}
                      </TableCell>
                      <TableCell align="center">{value.company}</TableCell>
                      <TableCell align="center">{value.country}</TableCell>
                      <TableCell align="center">{value.boosters}</TableCell>
                      <TableCell align="center">{value.mass.kg}</TableCell>
                      <TableCell align="center">{value.type}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </section>
  );
}

export default DataTable;
