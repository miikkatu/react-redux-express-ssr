import { applyMiddleware, compose, createStore } from 'redux';

import reducers from './reducers';

export default function configureStore(initialState = {}) {
  const middleware = [
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
  ));

  return store;
}
