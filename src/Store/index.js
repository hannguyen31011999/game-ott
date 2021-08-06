import { createStore, combineReducers } from 'redux';
import xucXacReducer from './Reducers/GameXucXacReducer';
import gameOttReducer from './Reducers/GameOttReducer';
import moviesReducer from './Reducers/MoviesReducer';

const rootReducer = combineReducers({
    xucXacReducer,
    gameOttReducer,
    moviesReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;