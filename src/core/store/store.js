import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import navigationSlice from './navigation/navigation.slice';
import { all, fork } from 'redux-saga/effects'
import watchFetchNavigation from './navigation/navigation.saga'

export default function* rootSaga() {
  yield all([
    fork(watchFetchNavigation),
  ])
}

const logger = createLogger({
  collapsed: true,
  diff: true
})


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
  },
  middleware: [sagaMiddleware, logger]
});

sagaMiddleware.run(rootSaga)
