import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getStateStorage, setStateStorage } from "../components/localStorage/LocalStorage";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { userReducers } from "../reducers/userReducer";
import { weatherReducers } from "../reducers/weatherReducer";


const composeEnhancers = (typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//local storage
const storageState = getStateStorage()

const reducers = combineReducers({
   login: loginReducer,
   register: registerReducer,
   weather: weatherReducers,
   user: userReducers
})

export const store = createStore(
    reducers, 
    storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => setStateStorage(store.getState()));