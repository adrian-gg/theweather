import { useContext, useEffect } from 'react'
import { SettingsContext } from '../context/settings'
import TypingTextEffect from './TypingTextEffect'
import Form from './Form'
import '../styles/Sidebar.css'

const Sidebar = ({ cities, city, setCity, setOpenMenu }) => {
  const {
    temperatureUnit,
    isAnimationEnabled,
    getTranslation,
    changeTemperature,
    animationToggle,
  } = useContext(SettingsContext)

  const handleClick = (e) => {
    setCity(e)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setOpenMenu(false)
  }, [city, temperatureUnit])

  return (
    <>
      <div className='sidebar'>
        <h3 className='sidebar__logo'>theweather</h3>
        <div className='sidebar__options'>
          <details name='accordion' className='sidebar__cities' open>
            <summary className='sidebar__title sidebar__cities-title'>
              <span>
                <TypingTextEffect>{getTranslation('cities')}</TypingTextEffect>
              </span>
            </summary>
            <ul className='sidebar__cities-list'>
              {cities.map((c, i) => {
                return (
                  <li
                    key={c + i}
                    className={
                      c == city
                        ? 'sidebar__cities-item sidebar__cities-item--selected'
                        : 'sidebar__cities-item'
                    }
                    onClick={() => handleClick(c)}
                  >
                    <TypingTextEffect order={1}>{c}</TypingTextEffect>
                  </li>
                )
              })}
            </ul>
          </details>

          <details name='accordion' className='sidebar__form'>
            <summary className='sidebar__title sidebar__form-title'>
              <span>
                <TypingTextEffect>{getTranslation('contact')}</TypingTextEffect>
              </span>
            </summary>
            <Form />
          </details>

          <details name='accordion' className='sidebar__settings' open>
            <summary className='sidebar__title sidebar__settings-title'>
              <span>
                <TypingTextEffect>
                  {getTranslation('settings')}
                </TypingTextEffect>
              </span>
            </summary>
            <div className='sidebar__settings-content'>
              <div className='sidebar__settings-item'>
                <label htmlFor='temperature-unit'>
                  <TypingTextEffect order={1}>
                    {getTranslation('temperature_unit')}
                  </TypingTextEffect>
                </label>
                <select
                  id='temperature-unit'
                  value={temperatureUnit}
                  onChange={changeTemperature}
                >
                  <option value='C'>ºC</option>
                  <option value='F'>ºF</option>
                </select>
              </div>
              <div className='sidebar__settings-item'>
                <label htmlFor='animation-toggle'>
                  <TypingTextEffect order={1}>
                    {getTranslation('animation_texts')}
                  </TypingTextEffect>
                </label>
                <input
                  type='checkbox'
                  id='animation-toggle'
                  checked={isAnimationEnabled}
                  onChange={animationToggle}
                />
              </div>
            </div>
          </details>
        </div>
      </div>
    </>
  )
}

export default Sidebar
