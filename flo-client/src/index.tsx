import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

declare module "react-google-maps" {
  export var GoogleMap: GoogleMap;
}

interface GoogleMap {
    (any): any;
}


ReactDOM.render(
  <App />,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

