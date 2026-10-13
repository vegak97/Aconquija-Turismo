import { useEffect, useState } from 'react'

export function WeatherIcon({ type }) {
  const common = {
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: 'false',
  }

  if (type === 'sun') {
    return <svg {...common}><circle cx="16" cy="16" r="5.5" /><path d="M16 3.5v3M16 25.5v3M3.5 16h3M25.5 16h3M7.2 7.2l2.1 2.1M22.7 22.7l2.1 2.1M24.8 7.2l-2.1 2.1M9.3 22.7l-2.1 2.1" /></svg>
  }

  if (type === 'partly-cloudy') {
    return <svg {...common}><path d="M18.5 6.5v2.2M10.8 9.7 9.2 8.1M24 10.5h-2.2M21.5 5.8 20 7.4" /><path d="M18.5 13.8a5.2 5.2 0 1 0-9.9-2.1" /><path d="M8 25h16.1a4.5 4.5 0 0 0 .1-9 6.7 6.7 0 0 0-12.8-1.4A5.2 5.2 0 0 0 8 25Z" /></svg>
  }

  if (type === 'cloud') {
    return <svg {...common}><path d="M8 25h16.2a5.3 5.3 0 0 0 .2-10.6 8.3 8.3 0 0 0-15.7-1.7A6.2 6.2 0 0 0 8 25Z" /><path d="M11 19h10" opacity=".45" /></svg>
  }

  if (type === 'fog') {
    return <svg {...common}><path d="M8 18h16a4.5 4.5 0 0 0 .1-9 6.8 6.8 0 0 0-12.8-1.4A5.2 5.2 0 0 0 8 18Z" /><path d="M5 22h17M9 26h17" /></svg>
  }

  if (type === 'rain') {
    return <svg {...common}><path d="M8 19h16a4.5 4.5 0 0 0 .1-9 6.8 6.8 0 0 0-12.8-1.4A5.2 5.2 0 0 0 8 19Z" /><path d="m11 22-1 3M18 22l-1 3M25 22l-1 3" /></svg>
  }

  if (type === 'snow') {
    return <svg {...common}><path d="M8 18h16a4.5 4.5 0 0 0 .1-9 6.8 6.8 0 0 0-12.8-1.4A5.2 5.2 0 0 0 8 18Z" /><path d="M11 22v4M9.3 23l3.4 2M12.7 23l-3.4 2M21 22v4M19.3 23l3.4 2M22.7 23l-3.4 2" /></svg>
  }

  if (type === 'storm') {
    return <svg {...common}><path d="M8 19h16a4.5 4.5 0 0 0 .1-9 6.8 6.8 0 0 0-12.8-1.4A5.2 5.2 0 0 0 8 19Z" /><path d="m17 19-4 6h4l-1 4 5-7h-4l1-3" /></svg>
  }

  return <svg {...common}><path d="M8 24h16a4.5 4.5 0 0 0 .1-9 6.8 6.8 0 0 0-12.8-1.4A5.2 5.2 0 0 0 8 24Z" /><path d="M7 6v2M5 7h4" /></svg>
}

function WeatherBadge() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    let cancelled = false

    const loadWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-27.9&longitude=-65.8&current=temperature_2m,weather_code&timezone=America%2FArgentina%2FCatamarca')
        if (!response.ok) throw new Error('No se pudo consultar el clima')
        const data = await response.json()
        if (!cancelled && data.current) {
          setWeather({
            temperature: Math.round(data.current.temperature_2m),
            code: data.current.weather_code,
          })
        }
      } catch {
        if (!cancelled) setWeather(null)
      }
    }

    loadWeather()
    const refreshId = window.setInterval(loadWeather, 15 * 60 * 1000)

    return () => {
      cancelled = true
      window.clearInterval(refreshId)
    }
  }, [])

  const weatherCode = weather?.code
  let iconType = 'partly-cloudy'
  let condition = 'Clima variable'
  if (weatherCode === 0) { iconType = 'sun'; condition = 'Despejado' }
  else if ([1, 2].includes(weatherCode)) { iconType = 'partly-cloudy'; condition = 'Parcialmente nublado' }
  else if (weatherCode === 3) { iconType = 'cloud'; condition = 'Nublado' }
  else if ([45, 48].includes(weatherCode)) { iconType = 'fog'; condition = 'Niebla' }
  else if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
    iconType = 'rain'; condition = 'Lluvia o llovizna'
  }
  else if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) { iconType = 'snow'; condition = 'Nieve' }
  else if ([95, 96, 99].includes(weatherCode)) { iconType = 'storm'; condition = 'Tormenta' }

  return (
    <div className="weather-badge" title={`${condition} en Aconquija, Catamarca`} aria-label={`Clima actual en Aconquija: ${condition}, ${weather ? `${weather.temperature} grados` : 'sin datos'}`}>
      <span className="weather-icon"><WeatherIcon type={iconType} /></span>
      <span className="weather-temp">{weather ? `${weather.temperature}°` : '—°'}</span>
      <span className="weather-location">Aconquija</span>
    </div>
  )
}
