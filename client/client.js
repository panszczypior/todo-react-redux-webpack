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

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
