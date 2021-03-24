import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import storeInit from './store/store';

ReactDOM.render(
  <Provider store={storeInit}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
