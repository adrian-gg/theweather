import { useState, createContext } from 'react'
import translations from './translations'

export const SettingsContext = createContext()

export function SettingsProviders({ children }) {
  const languages = [
    {
      name: 'EN',
      lang: 'en',
    },
    {
      name: 'ES',
      lang: 'es',
    },
  ]
  const temperatureUnits = {
    C: {
      api_name: 'metric',
      symbol: 'ºC',
    },
    F: {
      api_name: 'imperial',
      symbol: 'ºF',
    },
  }
  const [language, setLanguage] = useState('en')
  const [temperatureUnit, setTemperatureUnit] = useState('C')
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true)

  const getTranslation = (key) => {
    return translations[language][key] || key
  }
  const changeTemperature = (e) => {
    setTemperatureUnit(e.target.value)
  }
  const animationToggle = () => {
    setIsAnimationEnabled(!isAnimationEnabled)
  }

  return (
    <SettingsContext.Provider
      value={{
        language,
        languages,
        temperatureUnit,
        temperatureUnits,
        isAnimationEnabled,
        setLanguage,
        getTranslation,
        changeTemperature,
        animationToggle,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
