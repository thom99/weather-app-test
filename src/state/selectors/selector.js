import { initialState } from "../reducers/reducers";

export const selectCordsTurin = (state) => state?.weather?.cordsTurin ?? initialState
export const selectCordsLondon = (state) => state?.weather?.cordsLondon ?? initialState
export const selectCordsRome = (state) => state?.weather?.cordsRome ?? initialState

export const selectWeatherTurin = (state) => state?.weather?.weatherTurin ?? initialState
export const selectWeatherLondon = (state) => state?.weather?.weatherLondon ?? initialState
export const selectWeatherRome = (state) => state?.weather?.weatherRome ?? initialState