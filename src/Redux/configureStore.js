import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const initialState = {}
const middleware = [thunk]

const configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  )
}

export default configureStore
