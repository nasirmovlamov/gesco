import { useEffect, useState } from "react"

export const useInputErrorHandle = ({isFormSubmit , isBlured , isEmpty, isInValid , emptyError , invalidError, isClicked , value}: any) => {
    const [error , setError] = useState<any>()
    const [errorClass , setErrorClass] = useState<any>()
    const [errorSpanText , setErrorSpanText] = useState<any>(true)
    
    useEffect(() => {
        if(isFormSubmit) {
            if(isEmpty) {
                setError(emptyError)
                setErrorClass("is-invalid")
                setErrorSpanText(true)
                return  
            } else {
                if(isInValid) {
                    setErrorClass("")
                    setErrorSpanText("")
                    setError(false)
                } else {
                    setErrorClass("is-invalid")
                    setErrorSpanText(true)
                    setError(invalidError)
                }
            }
        }else {
            if(isClicked ) {
                    if(isEmpty) {
                        setError(emptyError)
                        setErrorClass("is-invalid")
                        setErrorSpanText(true)
                        return 
                    } else {
                        if(isInValid) {
                            setErrorClass("")
                            setErrorSpanText("")
                            setError(false)
                        } else {
                            setErrorClass("is-invalid")
                            setErrorSpanText(true)
                            setError(invalidError)
                        }
                    }
            }
        }
    }, [isBlured,isFormSubmit,])
    

    return ({error, errorClass, errorSpanText})
}