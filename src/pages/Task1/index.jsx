import React from "react";
import style from "./style.module.css";
import { Header } from "../../components/Header";
import EventLogo from "../../assets/EventLogo.png";
import Arrow from "../../assets/arrow.svg";
import DocIcon from "../../assets/doc.svg";
import { Menu } from "../../components/Menu";

import DropIcon from "../../assets/dUser.svg";
import BlockIcon from "../../assets/bUser.svg";
import ExportIcon from "../../assets/export.svg";
import AddGustIcon from "../../assets/add_gust.svg";
import GustList from "../../components/GuestsList";
import Footer from "../../components/Footer";


function Task1() {
  return (
    <div className={style.mainContainer}>
      <Header />

      <div className={style.innerContainer}>
        <div className={style.innerNav}>
          <div className={style.innerNavL}>
            <button className={style.button}>
              <img
                src={Arrow}
                alt="arrow"
                style={{ width: "16px", height: "16" }}
              />
            </button>
            <img src={EventLogo} alt="event_logo" />
            <h1>Paradox Productions Meet-Up</h1>
          </div>
          <div className={style.innerNavR}>
            <img src={DocIcon} alt="doc_icon" />
            <span>View Docs</span>
          </div>
        </div>

        <Menu />

        <div className={style.programDataContainer}>
          <div className={style.dataRow1}>
            <h1>At a Glance</h1>
            <p>Last Registered 1st May at 7:42 PM</p>
          </div>
          <div className={style.dataRow2}>
            <h1 style={{ color: "#47C97E" }}>
              80 <span>unique guests</span>
            </h1>
            <div>
              <h1>
                59 <span>shortlisted</span> 11 <span>unclaimed</span>
              </h1>
            </div>
          </div>

          <div className={style.dataRow3}>
            <div className={style.proBar1}></div>
            <div className={style.proBar2}></div>
            <div className={style.proBar3}></div>
            <div className={style.proBar4}></div>
          </div>

          <div className={style.dataRow4}>
            <ul>
              <li style={{ color: "#9B4FD3" }}>• (280) Special Ticket</li>
              <li style={{ color: "#2EAF6D" }}>• (3) Demo Paid Ticket</li>
              <li style={{ color: "#E6E8EC" }}>• (4) Hackathon</li>
              <li style={{ color: "#7C9BF2" }}>• (50) New Ticket</li>
            </ul>
          </div>

          <div className={style.buttonsRow}>
            <button className={style.button}>Dropped Users
              <img src={DropIcon} alt="icon" />
            </button>
            <button className={style.button}>Blacklisted Users
              <img src={BlockIcon} alt="icon" />
            </button>
            <button className={style.button}>Export Data
              <img src={ExportIcon} alt="icon" />
            </button>
            <button className={style.button}>Add Guest
              <img src={AddGustIcon} alt="icon" />
            </button>
          </div>

          <GustList/>

        </div>
      <Footer/>
      </div>
    </div>
  );
}

export default Task1;
