import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, content: 'i am Jonhy silver hand' },
                { id: 2, content: 'hello folks' },
                { id: 3, content: 'Whats up im using drugs' },
            ],
            newPostText: '',
        },
        dialogPage: {
            messages: [
                { id: 1, message: 'im an alcoholic' },
                { id: 2, message: 'Hi' },
                { id: 3, message: 'Zdarova' },
                { id: 4, message: 'whats up ist me GandoniO' },
            ],
            dialogs: [
                { id: 1, name: 'Maksym' },
                { id: 2, name: 'Daasha' },
                { id: 3, name: 'Sergey' },
                { id: 4, name: 'Sexgay' },
                { id: 5, name: 'Vsevlasovich' },
                
            ],
            newMessageText: '',
        },
        sidebar: {
            names: [
                { id: 1, name: 'Maksym' },
                { id: 2, name: 'Dasha' },
                { id: 3, name: 'Sergey' },
            ]


        }
    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
    },
    addPost(postMessage) {
        if (postMessage.length > 0) {

            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                content: postMessage
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state)
        } else alert('nothing to post')
    },
    changeNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state)
    },
    addMessage(messageText) {
        const newMessage = {
            id: 1,
            message: messageText,
        }
        this._state.dialogPage.messages.push(newMessage)
        this._state.dialogPage.newMessageText = '';
        this._rerenderEntireTree(this._state)
    },
    changeMessageText(newText) {
        this._state.dialogPage.newMessageText = newText;
        this._rerenderEntireTree(this._state)
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._rerenderEntireTree(this._state)
    }
}

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postMessage: postText })
export const onPostChangeActionCreator = (postText) => ({ type: CHANGE_NEW_POST_TEXT, newText: postText })
export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE, messageText: text })
export const onMessageChangeActionCreator = (text) => ({ type: CHANGE_MESSAGE_TEXT, newText: text })

export default store;
