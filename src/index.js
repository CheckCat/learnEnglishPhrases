import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';

import { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles/style.css';
import './styles/adaptive.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

import App from './App';
import { rootReducer } from './redux/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
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
