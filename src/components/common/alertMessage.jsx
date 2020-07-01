import React from 'react';


const AlertMessage = ({ error }) => {

    if (!error) return null;
    return <div className="alert alert-danger">{error}</div>

}

export default AlertMessage;
