import { createSlice } from "@reduxjs/toolkit";
import { authToken, apiCall } from "../../api/index";
const amadeusUrlV1 = import.meta.env.VITE_AMADEUS_URL_V1;

const initialState = {
  isLoading: false,
  data: [],
  error: {},
};

const airlineDestinationList = createSlice({
  name: 'getAirlineDestination',
  initialState,
  reducers: {
      getAirlineDestinationStart(state) {
          state.isLoading = true;
      },
      getAirlineDestinationComplete(state, action) {
          state.isLoading = false;
          state.data = action.payload;
      },
      getAirlineDestinationError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },      
  }
});

export const { getAirlineDestinationStart, getAirlineDestinationComplete, getAirlineDestinationError } = airlineDestinationList.actions;

export const getAirlineDestination = () => async (dispatch) => {
    try {
      dispatch(getAirlineDestinationStart());
      await authToken();
      const response = await apiCall(`${amadeusUrlV1}/airline/destinations?airlineCode=LA`, null, 'GET');
      console.log(response.data.data);
      dispatch(getAirlineDestinationComplete(response.data.data));
    } catch (error) {
      console.log(error);
      dispatch(getAirlineDestinationError(error));
    }
}

export const isLoadingAirlineDestinationList = (state) => state.airlineDestinationList.isLoading;
export const airlineDestinationListData = (state) => state.airlineDestinationList.data;
export const airlineDestinationListError = (state) => state.airlineDestinationList.error;

export default airlineDestinationList.reducer;
