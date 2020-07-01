import React from 'react';

const InputSelectControl = ({ name, value, onChange, label, error, options }) => {

    if (!options) return null;

    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <select className="form-control" onChange={onChange} name={name} value={value}>
                <option value="">Select...</option>
                {
                    options.map((item) => <option
                        key={item._id}
                        value={item._id}
                    >{item.name}</option>)
                }
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default InputSelectControl;