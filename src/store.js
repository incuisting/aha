import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
let middleware = [sagaMiddleware, logger]
const store = createStore(rootReducer, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)
export default store
