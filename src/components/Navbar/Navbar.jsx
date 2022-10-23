import React from "react";
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import TopFriends from "./TopFriends/TopFriends";



const Navbar = (props) => {
  return (
    <div>
      <nav className={s.nav} id="nav">
        <div className={s.item}>
          <NavLink className={navData => navData.isActive ? s.active : s.item} to='/profile' >profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink className={navData => navData.isActive ? s.active : s.item} to='/dialogs' >messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink className={navData => navData.isActive ? s.active : s.item} to='/news' >News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink className={navData => navData.isActive ? s.active : s.item} to='/music' >Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink className={navData => navData.isActive ? s.active : s.item} to='/settings' >Settings</NavLink>
        </div>
      </nav>
      <TopFriends state={props.state} dispatch={props.dispatch} names={props.state.names}/>
    </div>
    
  )
  
}
export default Navbar
