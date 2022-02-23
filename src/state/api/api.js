import axios from 'axios'
const apiKey = "66a07e951bc70a87c9f33d8cf514c10a"

export async function getCoordinatesTurin() {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=Turin&appid=${apiKey}`
    return await axios.get(url)
}

export async function getCoordinatesLondon() {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&appid=${apiKey}`
    return await axios.get(url)
}

export async function getCoordinatesRome() {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=Rome&appid=${apiKey}`
    return await axios.get(url)
}

export async function getWeatherTurin({ lat, lon }) {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    return await axios.get(url)
}

export async function getWeatherLondon({ lat, lon }) {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    return await axios.get(url)
}

export async function getWeatherRome({ lat, lon }) {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    return await axios.get(url)
}