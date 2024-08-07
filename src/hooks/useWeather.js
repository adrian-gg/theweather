import { useContext } from 'react'
import { SettingsContext } from '../context/settings'
import { get } from '../utils/httpClient'
import {
  getAdjustedDate,
  formatFullDay,
  formatTime,
  formatTemperature,
  getDetails,
  addRainDetails,
  addSnowDetails,
  generateDailyForecasts,
} from '../utils/weatherUtils'
import translations from '../context/translations'

export function useWeather() {
  const { language, temperatureUnit, temperatureUnits, getTranslation } =
    useContext(SettingsContext)
  const dayNames = translations[language].__days
  const monthNames = translations[language].__months

  const getWeather = async (path) => {
    try {
      const dataCurrentWeather = await get(path)
      const forecast5Path = `forecast?lat=${dataCurrentWeather.coord.lat}&lon=${dataCurrentWeather.coord.lon}&units=${temperatureUnits[temperatureUnit].api_name}&lang=${language}`
      const dataForecast5 = await get(forecast5Path)
      return formatData(dataCurrentWeather, dataForecast5.list)
    } catch (error) {
      console.error('Error fetching weather data:', error)
      throw error
    }
  }

  const formatData = (dataCurrent, dataForecast) => {
    const adjustedDate = getAdjustedDate(dataCurrent.dt, dataCurrent.timezone)
    const currentDate = new Date()

    const formattedData = {
      date: {
        fullday: formatFullDay(adjustedDate, language, monthNames),
        time: formatTime(adjustedDate, currentDate),
        dt: adjustedDate.getTime(),
      },
      name: dataCurrent.name,
      temp: formatTemperature(
        dataCurrent.main.temp,
        temperatureUnits[temperatureUnit].symbol,
      ),
      country: dataCurrent.sys.country,
      main: dataCurrent.weather[0].main,
      icon: dataCurrent.weather[0].icon,
      description: dataCurrent.weather[0].description,
      details: getDetails(
        dataCurrent,
        getTranslation,
        temperatureUnits[temperatureUnit].symbol,
      ),
      daily_forecasts: generateDailyForecasts(
        dataForecast,
        language,
        monthNames,
        temperatureUnits[temperatureUnit].symbol,
      ),
    }

    addRainDetails(dataCurrent, formattedData, getTranslation)
    addSnowDetails(dataCurrent, formattedData, getTranslation)

    return formattedData
  }

  return { getWeather }
}
