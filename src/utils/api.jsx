import axios from "axios";

const API_KEY = "5d2208c4eeeb7b80232c7ad99a4a811a";
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
        return response.data
    } catch (error) {
        throw new Error("Failed to fetch the weather data")
    }
}

export default getWeatherData