import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { getHousesDB } from '../actions/actionCreators';

const initialState = {
  houses: null,
  sendingRequest: false
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.dispatch(getHousesDB());

export default store;
