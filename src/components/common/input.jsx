import React from 'react';
import AlertMessage from './alertMessage';


const InputTextControl = ({ name, value, onChange, label, error }) => {

    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input name={name}
                id={name}
                className="form-control"
                value={value}
                onChange={onChange}
            />
            <AlertMessage error={error} />
        </div>
    );
}

// InputTextControl.propTypes = {
//     //value:PropTypes.string,
//     onChange: PropTypes.func,
//     label: PropTypes.string

// }
export default InputTextControl;