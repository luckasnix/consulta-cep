import { addrsReducer } from './addrsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    addrs: addrsReducer
});

export default rootReducer;