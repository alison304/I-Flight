import { createSlice } from "@reduxjs/toolkit";
import {  apiCall } from "../../api/index";
const amadeusUrlV1 = "https://test.api.amadeus.com/v2/shopping/flight-offers";
import { format } from 'date-fns'

const initialState = {
    isLoading: false,
    data: [],
    error: {},
  };

  const detailList = createSlice({
    name: 'detailList',
    initialState,
    reducers: {
        getDetailStart(state) {
            state.isLoading = true;
        },
        getDetailComplete(state, action) {
            state.isLoading = false;
            state.data = action.payload;
        },
        getDetailError(state, action) {
          state.isLoading = false;
          state.error = action.payload;
      },      
    }
  });

  const {reducer, actions} = detailList;
  const { getDetailStart,getDetailComplete,getDetailError }= actions;

  export default reducer;

export const requestResults = (params) => async (dispatch) =>{
    /*let resp = {
        origen: params.origen,
        destino: params.destino,
        adultos: params.adultos,
        niños: params.niños,
        fechaIda: params.fechaIda,
        fechaRegreso: params.fechaRegreso,
    }*/

    let urlencoded = new URLSearchParams()
    urlencoded.append('originLocationCode', params.origen)
    urlencoded.append('destinationLocationCode', params.destino)
    urlencoded.append('adults', params.adultos)
    urlencoded.append('children', params.niños)
    urlencoded.append('departureDate', format(params.fechaIda, 'yyyy-MM-dd'))
    urlencoded.append('returnDate', format(params.fechaIda, 'yyyy-MM-dd'))

    try {
        dispatch(getDetailStart());
        const response = await apiCall(`${amadeusUrlV1}?${urlencoded}`, null, 'GET');
        dispatch(getDetailComplete(response.data.data))
    } catch(error){
        dispatch(getDetailError(error))
    }
}

export const loading = (state)=> state.detailList.isLoading;
export const complete = (state)=> state.detailList.data;
export const errorDetail = (state)=> state.detailList.error;



        
