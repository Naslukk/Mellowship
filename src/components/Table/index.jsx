import React from "react";
import style from "./style.module.css";
import TableRow from "../TableRow";

function Table({ tableData }) {
  return (
    <div className={style.tableWrapper}>
      <div className={style.tableContainer}>
        {tableData.length > 0 ? (
          tableData.map((item, index) => <TableRow key={index} data={item} />)
        ) : (
          <p>No data found.</p>
        )}
      </div>
      <div className={style.tableControlers}>
        <p style={{ color: "rgba(255, 255, 255, 0.4)" }}>69 Records</p>
        <div>
          <span style={{ color: "rgba(255, 255, 255, 0.4)" }}>Per Page: </span>
          <span className={style.pageCounter}>30</span>
        </div>
        <div>
          <p style={{ color: "rgba(255, 255, 255, 0.4)" }}>1 of 3</p>
          <button style={{ opacity: "0.4" }}>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
}

export default Table;
