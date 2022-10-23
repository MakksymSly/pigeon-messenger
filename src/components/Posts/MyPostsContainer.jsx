import React from "react";
import { addPostActionCreator,onPostChangeActionCreator } from '../../Redux/store'
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
   let state = props.store.getState();
   
   let addPost = (text) => {
      props.store.dispatch(addPostActionCreator(text));
   };

   const onPostChange = (text) => {
      console.log('1')
      let action = onPostChangeActionCreator(text);
      props.store.dispatch(action);
   }


   return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} post={state.profilePage.posts}
   newPostText={state.profilePage.newPostText}/>);
}

export default MyPostsContainer