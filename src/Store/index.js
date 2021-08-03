import { createStore, combineReducers } from 'redux';
import xucXacReducer from './Reducers/GameXucXacReducer';
import gameOttReducer from './Reducers/GameOttReducer';

const rootReducer = combineReducers({
    xucXacReducer,
    gameOttReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;