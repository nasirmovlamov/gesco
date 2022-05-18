import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { loginThunk, meThunk, refreshTokenThunk } from './Auth.thunk'
import { setStatusPending, setStatusRejected, setStatusSucceeded } from '../../thunkStatusHandler'

import { RootState } from '../../store'
import { statusEnum } from 'app/type-definition/enums/statusLoading'

export interface AuthInterface {
    data:{} | null,
    error: {} | null,
    message: string | null,
    status: statusEnum,
}

const AuthState: AuthInterface = {
    data: null,
    error: null,
    message: null,
    status: statusEnum.loading,
}


export const AuthSlice = createSlice({
  name: 'auth-slice',
  initialState: AuthState,
  reducers: {
    handleLoginFormChange:()=>{},
    handleLoginFormSubmit:()=>{},
    increment: (state:AuthInterface) => {
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase( loginThunk.pending, (state, action: any) => {
        setStatusPending(state, action)
    })
    builder.addCase( loginThunk.rejected, (state, action: any) => {
        setStatusRejected(state, action)
    })
    builder.addCase( loginThunk.fulfilled, (state, action: any) => {
        setStatusSucceeded(state, action)
        state.data = action.payload.data
    })


    builder.addCase( meThunk.pending, (state, action: any) => {
        setStatusPending(state, action)
    })
    builder.addCase( meThunk.rejected, (state, action: any) => {
        setStatusRejected(state, action)
    })
    builder.addCase( meThunk.fulfilled, (state, action: any) => {
        setStatusSucceeded(state, action)
        state.data = action.payload.data
    })


    builder.addCase( refreshTokenThunk.pending, (state, action: PayloadAction<any>) => {
        setStatusPending(state, action)
    })
    builder.addCase( refreshTokenThunk.rejected, (state, action: PayloadAction<any>) => {
        setStatusRejected(state, action)
    })
    builder.addCase( refreshTokenThunk.fulfilled, (state, action: PayloadAction<any>) => {
        setStatusSucceeded(state, action)
        state.data = action.payload.data
    })
    
  },
})

export const {} = AuthSlice.actions

export const AuthData = (state:RootState) => state.AuthReducer
// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const AuthReducer = AuthSlice.reducer