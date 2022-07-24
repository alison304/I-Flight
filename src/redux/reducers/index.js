import { combineReducers } from '@reduxjs/toolkit';

//Reducers
import landing from './landing';

//Slices
import airlineDestinationList from '../slices/landing';

export default combineReducers({
  landing,
  airlineDestinationList,
});
