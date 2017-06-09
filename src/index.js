import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import ReduxPromise from 'redux-promise'; 

// ReduxPromise will stop any actions whose payload is a Promise, and once the Promise finishes, 
// it will dispatch another action of the same type but with a new payload: the response object itself.
// This is how AJAX requests work in Redux.

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
