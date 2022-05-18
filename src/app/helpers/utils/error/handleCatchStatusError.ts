export const handleCatchStatusError = (error:any) => {
    if (error.response.status === 401) {
        throw new Error("Unauthorized")
    }
    if (error.response.status === 403) {
        throw new Error("Forbidden")
    }
    if (error.response.status === 500) {
        throw new Error("Server Error")
    }
    if (error.response.status === 404) {
        return error
    }
}
