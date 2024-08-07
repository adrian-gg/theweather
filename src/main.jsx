import React from 'react'
import ReactDOM from 'react-dom/client'
import { SettingsProviders } from './context/settings'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProviders>
      <App />
    </SettingsProviders>
  </React.StrictMode>,
)
