import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit"

import { getMeService } from "app/helpers/api/services/auth/me"
import { loginService } from "app/helpers/api/services/auth/login"
import { refreshTokenService } from "app/helpers/api/services/auth/refreshToken"

export {}

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (data:any) => loginService()
)


export const meThunk = createAsyncThunk(
    "auth/getMe",
    getMeService     
)


export const refreshTokenThunk = createAsyncThunk(
    "auth/refreshToken",
    refreshTokenService
)     
