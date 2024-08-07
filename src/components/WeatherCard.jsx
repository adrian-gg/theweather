import { useContext } from 'react'
import { SettingsContext } from '../context/settings'
import TypingTextEffect from './TypingTextEffect'
import Icons from './Icons'
import '../styles/WeatherCard.css'

const WeatherCard = ({ weatherData, setReload }) => {
  const { getTranslation } = useContext(SettingsContext)

  const handleClickReload = () => {
    window.scrollTo(0, 0)
    setReload((prevState) => !prevState)
  }

  return (
    <>
      <div className='weather_card__container'>
        <main className='weather_card'>
          <header className='weather_card__header'>
            <div className='weather_card__header-data weather_card__header-data--top'>
              <div className='weather_card__header-city'>
                <TypingTextEffect order={1}>
                  {weatherData.name}
                </TypingTextEffect>
                <span className='weather_card__header-country'>
                  <TypingTextEffect order={1}>
                    {weatherData.country}
                  </TypingTextEffect>
                </span>
              </div>
              <div className='weather_card__header-date'>
                <div className='weather_card__header-day'>
                  <TypingTextEffect order={1}>
                    {weatherData.date?.fullday}
                  </TypingTextEffect>
                </div>
                <div className='weather_card__header-time'>
                  <TypingTextEffect order={1}>
                    {weatherData.date?.time}
                  </TypingTextEffect>
                </div>
              </div>
            </div>
            <div className='weather_card__header-icon'>
              <Icons icon={weatherData.icon}></Icons>
            </div>
            <div className='weather_card__header-data weather_card__header-data--bot'>
              <div className='weather_card__header-temperature'>
                <TypingTextEffect order={1}>
                  {weatherData.temp}
                </TypingTextEffect>
              </div>
              <div className='weather_card__header-description'>
                <TypingTextEffect order={1} multiline={true} alignText={'r'}>
                  {weatherData.description}
                </TypingTextEffect>
              </div>
            </div>
          </header>

          <div className='weather_card__body'>
            <div className='weather_card__reload'>
              <button onClick={handleClickReload}>
                <TypingTextEffect>
                  {getTranslation('update_data')}
                </TypingTextEffect>
              </button>
            </div>
            <div className='weather_card__details'>
              <dl className='weather_card__details-list'>
                {weatherData.details ? (
                  weatherData.details.map(({ name, data }, i) => {
                    return (
                      <div
                        key={`detail_${i}`}
                        className='weather_card__details-item'
                      >
                        <dt className='weather_card__details-title'>
                          <TypingTextEffect>{name}</TypingTextEffect>
                        </dt>
                        <dd className='weather_card__details-info'>
                          <TypingTextEffect order={1}>{data}</TypingTextEffect>
                        </dd>
                      </div>
                    )
                  })
                ) : (
                  <></>
                )}
              </dl>
            </div>
            <div className='weather_card__forecast'>
              <div className='weather_card__forecast-title'>
                <p>
                  <TypingTextEffect>
                    {getTranslation('forecast')}
                  </TypingTextEffect>
                </p>
              </div>
              <ul className='weather_card__forecast-list'>
                {weatherData.daily_forecasts ? (
                  weatherData.daily_forecasts.map((forecast, i) => {
                    return (
                      <li
                        key={'forecast' + i}
                        className='weather_card__forecast-item'
                      >
                        <div className='weather_card__forecast-icon'>
                          <Icons icon={forecast.icon}></Icons>
                        </div>
                        <div className='weather_card__forecast-temp'>
                          <TypingTextEffect order={1}>
                            {forecast.temp_minmax}
                          </TypingTextEffect>
                        </div>
                        <div className='weather_card__forecast-date'>
                          <TypingTextEffect order={1}>
                            {forecast.date}
                          </TypingTextEffect>
                        </div>
                      </li>
                    )
                  })
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default WeatherCard
