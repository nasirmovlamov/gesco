import { PayloadAction } from "@reduxjs/toolkit";
import { statusEnum } from "app/type-definition/enums/statusLoading";

export const setStatusPending = (state: any, action: PayloadAction<any>) => {
    state.status = statusEnum.loading;
}

export const setStatusRejected = (state: any, action: PayloadAction<any>) => {
    state.status = statusEnum.failed;
    state.error = action.payload;
}
    
export const setStatusIdle = (state: any, action: PayloadAction<any>) => {
    state.status = statusEnum.idle;
}


export const setStatusSucceeded = (state: any, action: PayloadAction<any>) => {
    state.status = statusEnum.succeeded;
}
