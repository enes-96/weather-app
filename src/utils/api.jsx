import axios from "axios";

const API_KEY = "5d2208c4eeeb7b80232c7ad99a4a811a";
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch the weather data", error);
    }
};

const getHourlyWeatherData = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch the forecast weather data", error);
    }
};

const getAirQuality = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/air_pollution?lat=${city.coord?.lat}&lon=${city.coord?.lon}&appid=${API_KEY}`);

        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch the forecast weather data", error);
    }
};

export { getWeatherData, getHourlyWeatherData, getAirQuality };
