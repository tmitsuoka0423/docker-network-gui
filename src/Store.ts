import { combineReducers, createStore } from 'redux';
import { IState } from './states/IStates';
import taskReducer from ',/reducers/TaskReducer';

const combineReducer = combineReducers<IState>({
  taskList: taskReducer,
});

export const store = createStore(combineReducer);

export default store;
