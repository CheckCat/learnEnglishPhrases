import reportWebVitals from './reportWebVitals';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles/style.css';
import './styles/adaptive.css';

import { createStore } from 'redux';
import { Provider } from "react-redux";

import { App } from './App';
import { rootReducer } from './redux/rootReducer';



const store = createStore(
  rootReducer,
  devToolsEnhancer()
);

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
