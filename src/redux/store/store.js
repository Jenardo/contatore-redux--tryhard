import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import counterReducer from '../reducer/reducer';
import counterWatch from '../sagas/counter';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const counter = createSagaMiddleware();

export default createStore(
  counterReducer,
  composeEnhancer(applyMiddleware(counter))
);

counter.run(counterWatch);
