import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree=(state)=>{
root.render(
    <App state={store} dispatch={store.dispatch.bind(store)} />
);
}
rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});

// store.subscribe(() => rerenderEntireTree(store.getState()))