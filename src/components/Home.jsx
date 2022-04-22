import { ClipLoader } from "react-spinners";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PaginationRow from "./PaginationRow";
import "./Home.css";
import { Button, TextField } from "@mui/material";
const client_id = process.env.REACT_APP_CLIENT_ID;

function Home() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    text && getData();
  }, [page]);
  async function getData() {
    setLoading(true);
    let response = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${text}&client_id=${client_id}`
    );
    setTotalPages(response.data.total_pages);
    setData(response.data.results);
    // console.log(response.data);
    setLoading(false);
  }

  function handlePage(num) {
    setPage(num);
  }
  return (
    <div>
      <div className="input_box">
        <TextField
          id="standard-basic"
          label="Search..."
          variant="standard"
          onKeyUp={(e) => {
            setText(e.target.value);
          }}
        />
        <Button variant="contained" onClick={getData}>
          Search
        </Button>
      </div>
      {loading ? (
        <div className="loading">
          <ClipLoader />
        </div>
      ) : (
        <div className="img_container">
          {data.map((e) => {
            //   console.log(e)
            return (
              <div className="img_card">
                <img src={e.urls.small} alt="" />
              </div>
            );
          })}
        </div>
      )}
      <div className="paginations_container">
        <PaginationRow handlePage={handlePage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Home;
