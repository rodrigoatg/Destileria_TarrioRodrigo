import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDcXN_6nLuEwccy1bhtZVazvjcNXrv7s5c",

  authDomain: "destileriabo-tarrio.firebaseapp.com",

  projectId: "destileriabo-tarrio",

  storageBucket: "destileriabo-tarrio.appspot.com",

  messagingSenderId: "472316988263",

  appId: "1:472316988263:web:396cd57721a023d6927dc2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);