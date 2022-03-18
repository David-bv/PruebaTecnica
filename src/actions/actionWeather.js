import { typesWeather } from "../types/types"

export const addWeather = (weather) => {
    return {
        type: typesWeather.add,
        payload: weather
    }
}
