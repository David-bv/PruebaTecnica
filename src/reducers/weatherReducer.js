import { typesWeather } from "../types/types"


const initialState = {
    weatherData: []
}

export const weatherReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesWeather.add:
            return {
                weatherData: [action.payload]
            }
        default:
            return state;
    }
}