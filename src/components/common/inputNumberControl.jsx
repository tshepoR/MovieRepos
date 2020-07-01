import React from 'react';
import AlertMessage from './alertMessage';




const InputNumberControl = ({ name, value, onChange, label, error }) => {

    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input name={name}
                type="number"
                id={name}
                className="form-control"
                value={value}
                onChange={onChange}
            />
            <  error={error} />
        </div>
    );
}


export default InputNumberControl;