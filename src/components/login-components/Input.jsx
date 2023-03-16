import React from "react";

const Input = ({ placeHolder, label }) => {
    return (
        <div className='input-container'>
            {label}
            <input type='text' 
            placeholder={placeHolder} />
        </div>
    );
};

export { Input }