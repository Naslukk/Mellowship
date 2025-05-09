import React from "react";
import style from "./style.module.css";
import SearchIcon from "../../assets/searchIcon.svg";
import { Dropdown } from "../Dropdown";
import Table from "../Table";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";

dayjs.extend(relativeTime);

function GuestsList() {
  const [searchQuery, setSearchQuery] = useState("");

  var tableData = [
    {
      name: "Naslu",
      username: "cch2373e",
      unchecked: false,
      tiketGreen: false,
      createdAt: dayjs("2025-05-03T10:00:00"),
    },
    {
      name: "Afiya",
      username: "af12345",
      unchecked: false,
      tiketGreen: false,
      createdAt: dayjs("2025-04-28T15:30:00"),
    },
    {
      name: "Jithin",
      username: "jt67890",
      unchecked: false,
      tiketGreen: false,
      createdAt: dayjs("2025-05-01T09:00:00"),
    },
    {
      name: "Sneha",
      username: "sn9321",
      unchecked: true,
      tiketGreen: false,
      createdAt: dayjs("2025-05-07T18:45:00"),
    },
    {
      name: "Rahul",
      username: "rh4455",
      unchecked: false,
      tiketGreen: true,
      createdAt: dayjs("2025-05-06T12:15:00"),
    },
    {
      name: "Diya",
      username: "dy1122",
      unchecked: true,
      tiketGreen: false,
      createdAt: dayjs("2025-05-04T08:00:00"),
    },
    {
      name: "Vishnu",
      username: "vs7889",
      unchecked: false,
      tiketGreen: false,
      createdAt: dayjs("2025-04-30T14:00:00"),
    },
    {
      name: "Arya",
      username: "ar3344",
      unchecked: true,
      tiketGreen: true,
      createdAt: dayjs("2025-05-02T11:45:00"),
    },
    {
      name: "Farhan",
      username: "fh5566",
      unchecked: false,
      tiketGreen: false,
      createdAt: dayjs("2025-05-05T13:20:00"),
    },
    {
      name: "Meera",
      username: "mr9900",
      unchecked: true,
      tiketGreen: true,
      createdAt: dayjs("2025-04-29T16:10:00"),
    },
    {
      name: "Arjun",
      username: "aj4521",
      unchecked: false,
      tiketGreen: true,
      createdAt: dayjs("2025-05-08T09:30:00"),
    },
    {
      name: "Neha",
      username: "nh8822",
      unchecked: true,
      tiketGreen: false,
      createdAt: dayjs("2025-05-07T14:15:00"),
    },
    {
      name: "Kiran",
      username: "kr2345",
      unchecked: false,
      tiketGreen: false,
      createdAt: dayjs("2025-05-06T17:50:00"),
    },
    {
      name: "Divya",
      username: "dv7766",
      unchecked: true,
      tiketGreen: true,
      createdAt: dayjs("2025-05-05T11:20:00"),
    },
    {
      name: "Manoj",
      username: "mj1098",
      unchecked: false,
      tiketGreen: true,
      createdAt: dayjs("2025-05-04T10:05:00"),
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  tableData = tableData.filter((data) => {
    return (
      data.name.toLowerCase().includes(searchQuery) ||
      data.username.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div className={style.gustListContainer}>
      <h1>Guests List</h1>
      <div className={style.searchBar}>
        <img src={SearchIcon} alt="icon" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className={style.rowContainer}>
        <h1>Recent Guests(30)</h1>
        <div className={style.buttonsContainer}>
          <button className={style.button}>Select Multiple</button>
          <Dropdown
            width="160px"
            defaultValue="Checked In"
            options={["Checked In", "Checked Out"]}
          />
          <Dropdown
            width="180px"
            defaultValue="Approval Status"
            options={["Approved", "Rejected", "Pending"]}
          />
          <Dropdown
            width="190px"
            defaultValue="Registration Status"
            options={["Completed", "Pending"]}
          />
        </div>
      </div>
      <Table tableData={tableData} />
    </div>
  );
}

export default GuestsList;
