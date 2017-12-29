/**
 * Created by robbie on 8/12/17.
 */
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import { createStore } from 'redux';
import todoApp from '../reducers';
// import registerServiceWorker from './registerServiceWorker';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    todoApp,
    persistedState,
  );
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000));
  return store;
};

export default configureStore;
