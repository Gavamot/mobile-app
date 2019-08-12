
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reduser from './reducers'
import {rootSaga} from './sagas/sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reduser, compose(applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureStore();

export default store;

