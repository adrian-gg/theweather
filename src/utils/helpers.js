export const getDayPercent = (currentDayPercent, date) => {
  if (date) {
    const totalSecondsInDay = 86400
    const now = date ? new Date(date) : new Date()
    const hour = now.getHours() * 60 * 60
    const min = now.getMinutes() * 60
    const totalSeconds = hour + min
    const percentageElapsed = Math.floor(
      (totalSeconds * 100) / totalSecondsInDay,
    )
    return percentageElapsed
  } else {
    return currentDayPercent
  }
}

export const getWindDirection = (degrees) => {
  // prettier-ignore
  const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
  degrees = (degrees + 360) % 360
  const index = Math.floor((degrees + 11.25) / 22.5) % 16
  return directions[index]
}
