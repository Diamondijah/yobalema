import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    origin: {
      location: {
        lat: 14.716677,
        lng: -17.467686,
      },
      description: "Keur Massar",
    },
    destination: null,
    travelTimeInformation: null,
  };
  
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;
//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destinationn;
export const selectTravelTimeInformationn = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;