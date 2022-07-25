import { GET_AIRLINE_DESTINATION_START, GET_AIRLINE_DESTINATION_COMPLETE,  GET_AIRLINE_DESTINATION_ERROR } from '../actions/landing';
  
const initialState = {
    isLoading: false,
    data: [],
    error: {},
};


const airlineDestinationList = (state = initialState, action) => {
    switch (action.type) {
      case GET_AIRLINE_DESTINATION_START:
        return {...state, isLoading: true, data: []};
      case GET_AIRLINE_DESTINATION_COMPLETE:
        return {...state, isLoading: false, data: action.payload };
      case GET_AIRLINE_DESTINATION_ERROR:
        return {...state, isLoading: false, error: action.error };
      default:
        return state;
    }
}

export default airlineDestinationList;
