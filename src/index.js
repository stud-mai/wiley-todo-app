import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import throttle from 'lodash.throttle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import appReducer from './reducer';
import { saveState, loadState } from './persistState';

import './App.css';

const loggerMiddleware = createLogger();
const persistedState = loadState();

const store = createStore(
  appReducer,
  persistedState,
  applyMiddleware(loggerMiddleware),
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}), 5000);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
