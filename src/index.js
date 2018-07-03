import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // QUESTION: what is a promise?
import reduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);// NOTE: MIddlewares are func that take in action and depending on action tpye/payoad, it can choose to manipulate it or choose to pass it etc before it passs to reducers


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
 document.querySelector('.container')
);
