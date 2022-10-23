import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'


const Dialogs = (props) => {
    let state = props.dialogPage;
    let dialogElements = state.dialogs.map(name => <DialogItem key={name.id} name={name.name} id={name.id} />)
    let messageElements = state.messages.map(message => <Message key={message.id} message={message.message} />)
    let textarea = React.createRef()
    let addMessage = () => {
        let text = textarea.current.value;
        props.addMessageActionCreator(text);
        // props.store.dispatch(addMessageActionCreator(text))
        
};
    let onMessageChange = () => {
        let text = textarea.current.value;
        props.onMessageChangeActionCreator(text)
        // props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange} value={state.newMessageText} type="text" ref={textarea}></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>


    );
}

export default Dialogs