import React from 'react';

const ButtonControl = ({ errors, label, handleClick }) => {
    if (errors)
        return <button className="btn btn-primary" disabled={Object.keys(errors).length > 0 ? true : false}>{label}</button>
    else
        return <button onClick={handleClick} className="btn btn-primary">{label}</button>

}

export default ButtonControl;