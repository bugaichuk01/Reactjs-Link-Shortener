import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "./reducers/auth.slice";
import linksReducer from "./reducers/links.slice";

const rootReducer = combineReducers({
    auth: authReducer,
    links: linksReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>