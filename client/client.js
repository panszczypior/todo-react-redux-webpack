import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';


const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
