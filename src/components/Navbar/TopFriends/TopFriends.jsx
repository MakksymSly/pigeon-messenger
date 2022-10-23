import React from "react";
import s from './TopFriends.module.css'
import avatar from './../../../Img/avatar.jpg'

const TopFriends = (props) => {
    let state = props.state.getState();
    let friend = state.sidebar.names.map(name => <div key={name.id} className={s.friend}><div><img alt='avatar' src={avatar} /></div><div>{name.name}</div></div>)
    return (
        <div className={s.topFriends}>
            <div className={s.topFriendsTitle}>Friends</div>
            {friend}
        </div>

    );
}

export default TopFriends