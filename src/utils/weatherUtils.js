import { getWindDirection } from './helpers'

export const getAdjustedDate = (timestamp, timezone) => {
  const localTimezoneOffset = new Date().getTimezoneOffset() * 60
  const adjustedTimestamp = (timestamp + timezone + localTimezoneOffset) * 1000
  return new Date(adjustedTimestamp)
}

export const formatFullDay = (date, language, monthNames) => {
  const day = date.getDate()
  const monthName = monthNames[date.getMonth()]
  return language === 'en'
    ? `${monthName} ${day.toString().padStart(2, '0')}`
    : `${day.toString().padStart(2, '0')} ${monthName}`
}

export const formatTime = (adjustedDate, currentDate) => {
  const hour = adjustedDate.getHours()
  const min = currentDate.getMinutes()
  return `${hour.toString().padStart(2, '0')}:${min
    .toString()
    .padStart(2, '0')}`
}

export const formatTemperature = (temp, tempUnit) => {
  return temp ? Math.floor(temp) + tempUnit : '##' + tempUnit
}

export const getDetails = (dataCurrent, getTranslation, tempUnit) => {
  return [
    {
      name: getTranslation('temp_min'),
      data: Math.floor(dataCurrent.main.temp_min) + tempUnit,
    },
    {
      name: getTranslation('temp_max'),
      data: Math.floor(dataCurrent.main.temp_max) + tempUnit,
    },
    {
      name: getTranslation('feels_like'),
      data: Math.floor(dataCurrent.main.feels_like) + tempUnit,
    },
    {
      name: getTranslation('wind'),
      data: `${dataCurrent.wind.speed.toString()}${
        tempUnit === 'ºC' ? 'm/s' : 'mph'
      } ${getWindDirection(dataCurrent.wind.deg)}`,
    },
    {
      name: getTranslation('pressure'),
      data: dataCurrent.main.pressure.toString() + 'hPa',
    },
    { name: getTranslation('clouds'), data: dataCurrent.clouds.all + '%' },
    {
      name: getTranslation('humidity'),
      data: dataCurrent.main.humidity.toString() + '%',
    },
    {
      name: getTranslation('visibility'),
      data: (dataCurrent.visibility / 1000).toString() + 'km',
    },
  ]
}

export const addRainDetails = (dataCurrent, formattedData, getTranslation) => {
  if (dataCurrent.rain) {
    formattedData.details.push({
      name: getTranslation('rain'),
      data: `${dataCurrent.rain?.['1h'] ?? dataCurrent.rain?.['3h']}mm`,
    })
  }
}

export const addSnowDetails = (dataCurrent, formattedData, getTranslation) => {
  if (dataCurrent.snow) {
    formattedData.details.push({
      name: getTranslation('snow'),
      data: `${dataCurrent.snow?.['1h'] ?? dataCurrent.snow?.['3h']}mm`,
    })
  }
}

export const generateDailyForecasts = (
  forecast,
  language,
  monthNames,
  tempUnit,
) => {
  const dailyForecasts = forecast
    .filter((iData) => new Date(iData.dt_txt).getHours() === 12)
    .map((iData) => {
      const date = new Date(iData.dt_txt)
      const iDateKey = iData.dt_txt.slice(0, 10)
      const arraySameDay = forecast.filter(
        (jData) => iDateKey === jData.dt_txt.slice(0, 10),
      )
      const minTemp = Math.min(...arraySameDay.map((obj) => obj.main.temp_min))
      const maxTemp = Math.max(...arraySameDay.map((obj) => obj.main.temp_max))
      const tempMinMax = `${Math.floor(minTemp)}/${Math.floor(
        maxTemp,
      )}${tempUnit}`
      return {
        icon: iData.weather[0].icon,
        main: iData.weather[0].main,
        temp_minmax: tempMinMax,
        date: formatFullDay(date, language, monthNames),
      }
    })

  return dailyForecasts.slice(0, 5)
}
