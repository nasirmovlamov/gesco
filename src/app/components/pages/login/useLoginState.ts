import { useState } from "react";

export const useLoginState = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isFormSubmit, setFormSubmit] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    return {isPasswordVisible,setPasswordVisible,isFormSubmit,setFormSubmit,emailValue,setEmailValue,passwordValue,setPasswordValue,emailRegex,passwordRegex};
}