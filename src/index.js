import React from 'react';
import ReactDOM from 'react-dom/client';
import Epias from './Epias';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { saveState } from './redux/browser-storage';
import contractsServer from './server';

// localStorage save last points
store.subscribe(() => {
  saveState(store.getState());
});

// fake server
if (process.env.NODE_ENV === 'development') {
  contractsServer();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Epias />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
