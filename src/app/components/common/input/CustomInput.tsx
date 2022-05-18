import { useInputErrorHandle } from "./useInputErrorHandle";
import { useState } from "react";

export interface CustomInputProps {
    value: string;
    onChange: (value: string) => void;
    required: boolean;
    isFormSubmit:boolean
    regex: RegExp;
    emptyError: string;
    invalidError: string;
    type?: string;
    placeHolder?: string;
}


export const CustomInput = (props: CustomInputProps) => {
    const { onChange, required, isFormSubmit, regex , emptyError , invalidError,value ,type, placeHolder} = props

    const [isBlured, setIsBlured] = useState(true);
    const [isInValid, setIsInValid] = useState(true);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isClicked, setIsClicked] = useState(false);
    
    const {error, errorClass, errorSpanText} = useInputErrorHandle({isFormSubmit , isBlured , isEmpty, isInValid , emptyError , invalidError, isClicked, value,})

    const handleFocus = () => {
        setIsClicked(true)
        setIsBlured(true)
    }
    
    
    const handleBlur = () => {
        setIsBlured(false)
    };

    const handleChange = (e: any) => {
        setIsClicked(true)
        onChange(e.target.value)
        if(e.target.value.length === 0) {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
        if(regex.test(e.target.value)) {
            setIsInValid(true)
        } else {
            setIsInValid(false)
        }
        
    };


    
    return (
        <>
            <input
                type={type}
                className={`form-control ${errorClass}`}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                required={required}
                placeholder={placeHolder}
            />
            <div  style={{height:"20px"}}>
                {errorSpanText && <span className="text-danger text-sm invalid">{error}</span>}
            </div>
          
        </>
    );
};
