
import { createStore, applyMiddleware, compose } from 'redux'
import reduser from './reducers/CrudReduser'
import {createEpicMiddleware} from 'redux-observable'
import rootEpic from './epics'
import ajax from 'axios'

const configureStore = () => {

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      ajax,
    },
  });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reduser,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );
  epicMiddleware.run(rootEpic);
  return store;
}

const store = configureStore();

export default store;
