import React from "react";
import logo from './../../Img/logo.png'
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt='logo' className={s.mainLogo} id="logo" />
        </header>
    )
}
export default Header