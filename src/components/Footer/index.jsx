import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/hoomans-logo.webp";

export default function Footer() {
  return (
    <footer>
      <div className={style.footerContainer}>
        <div className={style.footerL}>
          <a href="">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className={style.footerR}>
          <a href="">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "rgb(164, 164, 164)", fontSize: "20px" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "rgb(164, 164, 164)", fontSize: "20px" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ color: "rgb(164, 164, 164)", fontSize: "20px" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faTelegramPlane}
              style={{ color: "rgb(164, 164, 164)", fontSize: "20px" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
