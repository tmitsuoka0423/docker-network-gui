import { combineReducers, createStore } from 'redux';
import { IState } from './states/IStates';
import userReducer from './reducers/UserReducer';

const combineReducer = combineReducers<IState>({
  user: userReducer,
});

export const store = createStore(combineReducer);

export default store;
