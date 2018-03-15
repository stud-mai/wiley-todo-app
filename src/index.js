import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import appReducer from './reducer';

import './App.css';

const loggerMiddleware = createLogger();

const store = createStore(
  appReducer,
  applyMiddleware(loggerMiddleware),
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
