import React, { useEffect, useCallback } from "react"
import "./app.css"
import OverView from "../OverView/OverView";
import Details from "../Details/Details";
import { useDispatch, useSelector } from "react-redux";
import { getCoordinatesLondon, getCoordinatesRome, getCoordinatesTurin } from '../../state/api/api'
import { setCordsRome, setCordsTurin, setCordsLondon } from "../../state/reducers/reducers";
import { getWeatherTurin, getWeatherRome, getWeatherLondon } from '../../state/api/api'
import { setWeatherTurin, setWeatherRome, setWeatherLondon } from "../../state/reducers/reducers";
import { selectCordsTurin, selectCordsLondon, selectCordsRome } from "../../state/selectors/selector";

function App() {
  const cordsTurin = useSelector(selectCordsTurin)
  const cordsLondon = useSelector(selectCordsLondon)
  const cordsRome = useSelector(selectCordsRome)
  const dispatch = useDispatch()
  const dayWeek = new Date().toString().split(" ")[0]
  const month = new Date().toString().split(" ")[1]
  const number = new Date().toString().split(" ")[2]
  const hour = Math.ceil(parseInt(new Date().toString().split(" ")[4]))

  useEffect(() => {
    getCoordinatesTurin().then(res => {
      if (res.status === 200) {
        dispatch(setCordsTurin(res.data[0]))
      }
    })
    getCoordinatesLondon().then(res => {
      if (res.status === 200) {
        dispatch(setCordsLondon(res.data[0]))
      }
    })
    getCoordinatesRome().then(res => {
      if (res.status === 200) {
        dispatch(setCordsRome(res.data[0]))
      }
    })
  }, [dispatch])

  const functionDispatchHook = useCallback((cords, method, action) => {
    if (cords.lat !== undefined && cords.lon !== undefined) {
      method(cords).then(res => {
        if (res.status === 200) {
          dispatch(action(res.data))
        }
      })
    }
  }, [dispatch])

  useEffect(() => {
    functionDispatchHook(cordsTurin, getWeatherTurin, setWeatherTurin)
  }, [cordsTurin, functionDispatchHook])
  useEffect(() => {
    functionDispatchHook(cordsLondon, getWeatherLondon, setWeatherLondon)
  }, [cordsLondon, functionDispatchHook])

  useEffect(() => {
    functionDispatchHook(cordsRome, getWeatherRome, setWeatherRome)
  }, [cordsRome, functionDispatchHook])


  return (
    <div className="App">
      <OverView dayWeek={dayWeek} month={month} number={number} hour={hour}></OverView>
      <Details dayWeek={dayWeek} month={month} number={number}></Details>
    </div>
  );
}

export default App