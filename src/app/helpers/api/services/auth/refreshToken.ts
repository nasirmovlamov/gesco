import { AXIOS_CONFIG } from "../../config"
import { axiosInstance } from "../../interceptor"
import { handleCatchStatusError } from "app/helpers/utils/error/handleCatchStatusError"

export const refreshTokenService = async (data:any) => {
    try {
        const response = await axiosInstance(AXIOS_CONFIG.AUTH.REFRESH_TOKEN)
        return response.data
    } catch (error:any) {
        handleCatchStatusError(error)
    }
}
