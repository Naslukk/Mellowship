import React, { useState } from "react";
import styles from "./style.module.css";
import arrowIcon from "../../assets/downArrow.svg";

export const Dropdown = ({ width, defaultValue, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  return (
    <div className={styles.dropdown} style={{ width: width }}>
      <div className={styles.selector} onClick={() => setOpen(!open)}>
        <span>{selected}</span>
        <div className={styles.divider}></div>
        <img
          src={arrowIcon}
          alt="Arrow"
          className={`${styles.arrow} ${open ? styles.rotate : ""}`}
        />
      </div>
      {open && (
        <ul className={styles.menu}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
