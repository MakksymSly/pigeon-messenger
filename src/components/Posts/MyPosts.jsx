import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { addPostActionCreator,onPostChangeActionCreator } from '../../Redux/store'


const MyPosts = (props) => {
   let postElements = props.post.map(post => <Post key={post.id} message={post.content} />)
   let newPostelement = React.createRef();
   
   let addPost = () => {
      let text = newPostelement.current.value;
      props.addPost(text);
      // props.dispatch(addPostActionCreator(text));
   };

   const onPostChange = () => {
      let text = newPostelement.current.value;
      props.updateNewPostText(text);
      // let text = newPostelement.current.value;
      // props.dispatch(onPostChangeActionCreator(text));
   }


   return (
      <div className={s.postContainer}>
         <div className={s.NewPost}>
            <div className={s.NewPostTitle}>My posts</div>
            <div><input onChange={onPostChange} value={props.newPostText} ref={newPostelement} className={s.NewPostInput} type='text' placeholder="have something to share?" /></div>
            <div className={s.NewPostButton}><button onClick={addPost}>post</button></div>
         </div>
         {postElements}
      </div>
   );
}

export default MyPosts