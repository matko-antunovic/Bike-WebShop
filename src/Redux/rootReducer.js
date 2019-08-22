import { combineReducers } from 'redux';
import bikesReducer from "./bikes/bikesReducer";

const rootReducer = combineReducers({
    bikes:bikesReducer
})


export default rootReducer
