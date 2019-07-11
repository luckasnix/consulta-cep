import { combineReducers } from 'redux';
import { addrsReducer } from './addrsReducer';

const rootReducer = combineReducers({
    addrs: addrsReducer
});

export default rootReducer;