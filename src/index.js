import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

import data from './data.json';
import { Provider } from "react-redux";
import { rootReducer } from './redux/rootReducer';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  data,
  devToolsEnhancer()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
