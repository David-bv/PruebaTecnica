
export const getStateStorage = () => {
    const weatherStorage = localStorage.getItem('weather');
    if (weatherStorage === null ) {
        return undefined
    }
    return JSON.parse(weatherStorage);
}

export const setStateStorage = state => {
    const weatherState = JSON.stringify(state);
    localStorage.setItem('weather', weatherState)
}