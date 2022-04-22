import { Pagination } from "@mui/material";
import React from "react";

function PaginationRow({ totalPages, handlePage }) {
  let arr = new Array(totalPages).fill(0).map((e, i) => i + 1);
  console.log(totalPages)
  return (
    <div style={{ display: "flex" }}>
      <Pagination
        onChange={(e, v) => handlePage(v)}
        count={totalPages}
        color="primary"
      />
      {/* {arr.map((e) => {
        return (
          <div
            style={{
              width: "5vw",
              height: "5vw",
              padding: "5px",
              border: "1px solid",
                }}
                onClick={()=>{handlePage(e)}}
          >
            {e}
          </div>
        );
      })} */}
    </div>
  );
}

export default PaginationRow;
