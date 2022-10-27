import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./modules";

//스토어 선언
const store = createStore(rootReducer);
//console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Provider로 store로 넣어서 App을 감싸면 우리가 렌더링 하는
    //그 어떤 컴포넌트던지 리덕스 스토어로 접근 가능
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
