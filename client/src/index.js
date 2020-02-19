import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";

//redux-persist:
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./redux/store";

import App from './App';
import './index.css';


ReactDOM.render(
     //passing store as value in the Provider
     
     <Provider store={store}>    
          <BrowserRouter >
          <PersistGate persistor={persistor}>
               <App />
          </PersistGate>
          </BrowserRouter >
     </Provider>, document.getElementById('root'));
   