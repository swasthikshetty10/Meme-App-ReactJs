import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import { StateProvider } from './Contexts/StateProvider';
import reducer , { initialState } from './Contexts/reducer';


ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer = {reducer}> 
        <App /> 
        </StateProvider>
       
    </React.StrictMode>

     
     
     , document.getElementById('root'));

registerServiceWorker();