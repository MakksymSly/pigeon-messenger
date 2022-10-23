import React from "react";
import s from './Post.module.css'
import avatar from './../../../Img/avatar.jpg'
import like from './../../../Img/like.png'
import { useState } from "react";




const Post = (props) => {
    let [toggle, setToggle] = useState(false);
    const [likes, setLikes] = useState(0);

    const giveLike = () => {
        if (!toggle) {
            setLikes(likes + 1);
            setToggle(!toggle);
        }
        if (toggle) {
            setLikes(likes - 1);
            setToggle(!toggle);
            return
        }
    }

    return (
        <div className={s.mainPost}>
            <div className={s.post}>
                <img className={s.postImg} alt="logo" src={avatar} />
                <div className={s.postAuth}>Maksym S</div>
                <div className={s.postLike}>
                    <img onClick={giveLike} alt='img' src={like} />
                    <div onClick={giveLike} className={s.postLikeText}>
                        like
                    </div>
                    <div className={s.postLikeCounter}>{likes}</div>
                </div>
                <div className={s.postText}>{props.message}</div>
            </div>
        </div>
    );
}
export default Post