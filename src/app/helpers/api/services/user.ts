import { AXIOS_CONFIG } from "../config"
import { axiosInstance } from "../interceptor"
import { handleCatchStatusError } from "app/helpers/utils/error/handleCatchStatusError"

export const listUsersService = async (data:any) => {
    try {
        const response = await axiosInstance(AXIOS_CONFIG.USER.LIST_USERS)
        return response.data
    } catch (error:any) {
        handleCatchStatusError(error)
    }
}


export const showUserService = async (data:any) => {
    try {
        const response = await axiosInstance(`/users/${data.id}`, AXIOS_CONFIG.USER.SHOW_USER)
        return response.data
    } catch (error:any) {
        handleCatchStatusError(error)
    }
}

export const createUserService = async (data:any) => {
    try {
        const response = await axiosInstance(AXIOS_CONFIG.USER.CREATE_USER)
        return response.data
    } catch (error:any) {
        handleCatchStatusError(error)
    }
}

export const updateUserService = async (data:any) => {
    try {
        const response = await axiosInstance(`/users/${data.id}`, AXIOS_CONFIG.USER.UPDATE_USER)
        return response.data
    } catch (error:any) {
        handleCatchStatusError(error)
    }
}

export const deleteUserService = async (data:any) => {
    try {
        const response = await axiosInstance(`/users/${data.id}`, AXIOS_CONFIG.USER.DELETE_USER)
        return response.data
    } catch (error:any) {
        handleCatchStatusError(error)
    }
}


