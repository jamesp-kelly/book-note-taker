import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadMockData } from './mockData.js';

const configureStore = () => {
  const persistedState = loadMockData();

  const store = createStore(
    rootReducer,
    persistedState
  );

  return store;
};

export default configureStore;