const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, content: 'i am Jonhy silver hand' },
        { id: 2, content: 'hello folks' },
        { id: 3, content: 'Whats up im using drugs' },
    ],
    newPostText: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                content: action.postMessage
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case CHANGE_NEW_POST_TEXT:
            console.log(state.newPostText)
            state.newPostText = action.newText;
            return state
        default: return state;
    }
}
export default profileReducer;