export const fetchWeather = async (coord1, coord2) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?&lat=${encodeURI(coord2)}&lon=${encodeURI(coord1)}&units=metric&lang=es&exclude=alerts&appid=88ce7766777bde6e023987763fdc9ffc`
  const resp = await fetch(url)
  const data = await resp.json()

  return data
}