import React from 'react';
import style from './style.module.css';
import Logo from '../../assets/mmpLogo.png';
import Avatar from '../../assets/avatar.png'

export function Header() {
  return (
    <header>
        <div className={style.headerContainer}>
            <div className={style.headerL}>
                <img src={Logo} alt="logo" />
                <span>MakeMyPass</span>
            </div>
            <div className={style.headerR}>
                <span>Hi, adnankattekaden43</span>
                <img src={Avatar} alt="avatar" />
            </div>
        </div>
    </header>
  )
}
