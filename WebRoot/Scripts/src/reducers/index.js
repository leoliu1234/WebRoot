import { combineReducers } from 'redux';
import home from './home';
import dashboard from './dashboard';
import favorite from './favorite';

const rootReducer = combineReducers({
    home,
    dashboard,
    favorite
});

export default rootReducer;