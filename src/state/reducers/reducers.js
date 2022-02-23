import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    cordsTurin: {},
    cordsLondon: {},
    cordsRome: {},
    weatherTurin: {},
    weatherLondon: {},
    weatherRome: {}
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState: initialState,
    reducers: {
        setCordsTurin: (state, action) => {
            state.cordsTurin = action.payload
        },
        setCordsLondon: (state, action) => {
            state.cordsLondon = action.payload
        },
        setCordsRome: (state, action) => {
            state.cordsRome = action.payload
        },
        setWeatherTurin: (state, action) => {
            state.weatherTurin = action.payload
        },
        setWeatherLondon: (state, action) => {
            state.weatherLondon = action.payload
        },
        setWeatherRome: (state, action) => {
            state.weatherRome = action.payload
        }
    }
})

export const { setCordsTurin, setCordsLondon, setCordsRome, setWeatherTurin, setWeatherLondon, setWeatherRome } = weatherSlice.actions

export default weatherSlice.reducer