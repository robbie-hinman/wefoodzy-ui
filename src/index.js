import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './components/App';
import {loadState, saveState} from './data/localStorage';
import throttle from 'lodash/throttle';
// import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();

let store = createStore(
    todoApp,
    persistedState
);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
