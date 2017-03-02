import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';

let initialState = {
  todos: [{
    id:0,
    text: 'hello there',
    completed: false,
  }]
};

const reduxDevTools = {
  reduxDevTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
};

const store = configureStore(initialState, reduxDevTools);

render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('app')
);
