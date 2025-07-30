
import React, { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label:string;
    type:string;
    error?:string;
}

function InputField({label,type, error,...rest}:InputProps){
    return(
        <div className="form-group">
            <label>{label}</label>
            <input type={type} {...rest}/>

            {error&& <span>{error}</span>}
        </div>
    );
}

export default InputField;