import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'
import avatar from './../../../Img/avatar.jpg'

const DialogItem =(props)=>{
    let path = '/dialogs/' + props.id; 
    return (
        <div className={s.dialog +' '+ s.active}>
            
            <NavLink className={s.userAvatar} to={path}><img alt="img" className={s.avatar} src={avatar}/></NavLink>
            <NavLink className={s.username} to={path}>{props.name}</NavLink>
            </div>
    );
}
export default DialogItem