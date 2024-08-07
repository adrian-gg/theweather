const API_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = ''

export const get = async (path) => {
  try {
    const response = await fetch(`${API_URL}${path}&appid=${API_KEY}`)

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error when making the request:', error)
    throw new Error('The information could not be obtained.')
  }
}
