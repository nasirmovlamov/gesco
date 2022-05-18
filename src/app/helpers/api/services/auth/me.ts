import { AXIOS_CONFIG } from "../../config"
import { axiosInstance } from "../../interceptor"
import { handleCatchStatusError } from "app/helpers/utils/error/handleCatchStatusError"

export const getMeService = async (data:any) => {
    try {
        const response = await axiosInstance(AXIOS_CONFIG.AUTH.ME)
        return response.data
    } catch (error:any) {
        handleCatchStatusError(error)
    }
}