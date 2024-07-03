// index.js

import { combineReducers } from 'redux';
import uiReducer from './uiReducer';  // Import your uiReducer

const rootReducer = combineReducers({
  uiReducer,
  // other reducers can be added here
});

export default rootReducer;
