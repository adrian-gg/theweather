import { useState, useEffect, useContext } from 'react'
import { SettingsContext } from './context/settings.jsx'
import { useWeather } from './hooks/useWeather'
import { getDayPercent } from './utils/helpers.js'
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import WeatherCard from './components/WeatherCard'
import './styles/App.css'

function App() {
  const { language, temperatureUnit, temperatureUnits } =
    useContext(SettingsContext)
  const [weatherData, setWeatherData] = useState({})
  const [dayPercent, setDayPercent] = useState(0)
  const [reload, setReload] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [cities] = useState([
    'London',
    'Berlin',
    'Tokyo',
    'San Francisco',
    'New York',
  ])
  const [city, setCity] = useState(cities[0])
  const { getWeather } = useWeather()
  const stypeCurrentPosition = {
    '--currentPosition': `${dayPercent}%`,
  }

  useEffect(() => {
    const path = `weather?q=${city}&units=${temperatureUnits[temperatureUnit].api_name}&lang=${language}`
    getWeather(path).then((data) => setWeatherData(data))

    return () => setWeatherData({})
  }, [language, city, reload, temperatureUnit])

  useEffect(() => {
    const newState = getDayPercent(dayPercent, weatherData.date?.dt)
    if (dayPercent != newState) {
      setDayPercent(newState)
    }
  }, [weatherData])

  return (
    <>
      <div className='background' style={stypeCurrentPosition}>
        <div
          className={openMenu ? 'container_box sidebar--open' : 'container_box'}
        >
          <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Sidebar
            cities={cities}
            city={city}
            setCity={setCity}
            setOpenMenu={setOpenMenu}
          />
          <WeatherCard weatherData={weatherData} setReload={setReload} />
        </div>
      </div>
    </>
  )
}

export default App
