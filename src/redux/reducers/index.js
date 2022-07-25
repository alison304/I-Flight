import { combineReducers } from '@reduxjs/toolkit';

//Reducers
import landing from './landing';
import detailList from  '../slices/detail';
//Slices
import airlineDestinationList from '../slices/landing';

export default combineReducers({
  landing,
  airlineDestinationList,
  detailList
});
