import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { store } from './redux';
import { Provider } from 'react-redux';

import App from './App';

import './style.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
