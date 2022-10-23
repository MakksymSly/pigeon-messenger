import React from "react";
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../Redux/store'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage
    let addMessage = (text) => {
        props.store.dispatch(addMessageActionCreator(text))
        
};
    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (<Dialogs dialogPage={state} onMessageChangeActionCreator={onMessageChange} addMessageActionCreator={addMessage}/> );
}

export default DialogsContainer