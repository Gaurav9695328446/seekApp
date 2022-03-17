import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducers';
import userReducer from './users/reducers';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
