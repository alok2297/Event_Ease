import {combineReducers} from 'redux';
import cityReducer from './cityReducer';

const reducers = combineReducers({
    city: cityReducer,
});

export default reducers;