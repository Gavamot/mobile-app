import { put, takeEvery, all, call  } from 'redux-saga/effects'
import Actions from '../actions/crud'

const delay = (ms) => new Promise(res => setTimeout(res, ms))
const action = (name, paramerters) => {
  let res = { type : name, ...paramerters };
  if(paramerters &&
    (Array.isArray(paramerters) || typeof(paramerters) !== 'object'))
      res = { type : name, value : paramerters };
  return res;
}

function* helloSaga() {
  yield console.info('Redux-saga is started!')
}

function* incrementAsync() {
  yield call(delay, 1000)
  yield put(action(Actions.INCREMENT))
}

function* watchIncrementAsync() {
  yield takeEvery(Actions.INCREMENT_ASYNC, incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
