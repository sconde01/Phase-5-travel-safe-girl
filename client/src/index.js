import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux' ;
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';


import rootReducer from './redux/reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} > 
    <App />
    </Provider>
  </React.StrictMode>
);


