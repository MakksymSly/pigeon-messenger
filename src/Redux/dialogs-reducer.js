const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';


let initialState = {
    messages: [
        { id: 1, message: 'im an alcoholic' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Zdarova' },
        { id: 4, message: 'whats up ist me GandoniO' },
    ],
    dialogs: [
        { id: 1, name: 'Maksym' },
        { id: 2, name: 'Dasha' },
        { id: 3, name: 'Sergey' },
        { id: 4, name: 'Sexgay' },
        { id: 5, name: 'Vsevlasovich' },
        
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: state.messages.length+1,
                message: action.messageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            debugger
            return state
        case CHANGE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state
        default: return state;
    }       


}

export default dialogsReducer;