import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './base.scss'
import store from '../src/redux/store'
import {Provider} from "react-redux"
import {BrowserRouter as Router} from 'react-router-dom'



ReactDOM.render(
 <Provider store={store}>
   <Router>

<App />
   </Router>
 </Provider>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

