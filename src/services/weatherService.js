import axios from 'axios'

const key = process.env.REACT_APP_API_KEY
const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=60.169857&lon=24.9427473&appid=${key}&units=metric&exclude=minutely&lang=fi`

const getWeather = async () => {
    return await axios.get(baseUrl)
}

const exportedObject = { getWeather }
export default exportedObject