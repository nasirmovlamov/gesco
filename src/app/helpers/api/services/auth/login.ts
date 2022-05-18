import { AXIOS_CONFIG } from "../../config"
import { axiosInstance } from "../../interceptor"
import { handleCatchStatusError } from "app/helpers/utils/error/handleCatchStatusError"

export const loginService = async () => {
    try {
        const data = { 
            email:"nasirmovlamov@gmail.com",
            password : "nasir1234"
        }
        const response = await axiosInstance(AXIOS_CONFIG.AUTH.LOGIN)
        return response.data
    } catch (error:any) {
        handleCatchStatusError(error)
    }
}
