import React from "react";
import s from  './Profile.module.css'
import avatar from './../../Img/avatar.jpg'
// import MyPosts from "./../Posts/MyPosts";
import MyPostsContainer from "../Posts/MyPostsContainer";




const Profile = (props) => {
    return (
        <div className={s.mainContent}>
            <div className={s.UserWall}>
                {/* <img className={s.userWallImg} alt='img' src={userUpwall} /> */}
                <div className="userWallImg"></div>
            </div>
            <div className={s.Avatar}>
                {/* avatar+desctription */}
                <img className={s.avatarImg} alt='img' src={avatar} />
                <div className={s.name}> Maksym S.</div>
                <div className={s.description} >
                    <div>Date of Birth: 0 november</div>
                    <div>City: Odesa</div>
                    <div> Web Site: https://git-hub/makksymsly</div>
                </div>
            </div>
            <MyPostsContainer store={props.store} />
        </div>
    )
}
export default Profile