export const fetchCity = async (city) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(city)}.json?access_token=pk.eyJ1IjoiZGF2aWQtYi12IiwiYSI6ImNsMHNiend5MjA5ZGwzaXFkeGZhbm9qM2YifQ._cVcagZyeecJR5Hi2rQ2jQ`
    const resp = await fetch(url)
    const data = await resp.json()
    const filtro = data.features
    const dataLocation = filtro.find(s => s.place_name.toLowerCase().includes(city.toLowerCase()))

    return dataLocation.center
}