import {AuthReducer} from './auth/Auth.slice'
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    AuthReducer: AuthReducer,
})

