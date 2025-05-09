import React from "react";
import style from "./style.module.css";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import PenIcon from '../../assets/penIcon.svg';
import TickIcon from '../../assets/tickIcon.svg';
import DolarIcon from '../../assets/dolarIcon.svg';
import TiketIcon from '../../assets/tiketIcon.svg';
import UnTickedIcon from '../../assets/untickedIcon.svg';
import GreenTiketIcon from '../../assets/greenTiketIcon.svg';



dayjs.extend(relativeTime);

export default function TableRow({data}) {
  return (
    <div className={style.tableRowContainer}>
      <div className={style.tDataL}>
        <p className={style.name}>{data?.name}</p>
        <p className={style.uName}>{data?.username}</p>
      </div>
      <div className={style.tDataR}>
        <p>{data?.createdAt ? dayjs(data.createdAt).fromNow() : 'Date not available'}</p>
        <img src={PenIcon} alt="pen_icon" />
        <img src={data?.unchecked ? UnTickedIcon : TickIcon} alt="tick_icon" />
        <img src={DolarIcon} alt="dolar_icon" />
        <img src={data?.tiketGreen ? GreenTiketIcon : TiketIcon} alt="ticket_icon" />
      </div>
    </div>
  );
}
