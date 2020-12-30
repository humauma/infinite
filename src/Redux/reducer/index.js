import {combineReducers} from 'redux';
import recipeReducer from './recipeReducer';
import catReducer from './category'

const rootReducer = combineReducers({
    recipeReducer,
    catReducer
})

export default rootReducer;