import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger();
  const middlewares = [sagaMiddleware, loggerMiddleware];

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(rootSaga);

  return store;
}


