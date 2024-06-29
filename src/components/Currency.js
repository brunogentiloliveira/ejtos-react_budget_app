import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css'

const Currency = () => {
    const [currency, setCurrency] = useState('');
    const { dispatch } = useContext(AppContext);

    const handleChange = (event) => {
        const selectedCurrency = event.target.getAttribute('value');
        setCurrency(selectedCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    return (
        <div className="dropdown">
            <button className="dropbtn">{`Currency (${currency})`}</button>
            <div className="dropdown-content">
                <a href="#" value="$" name="dollar" onClick={handleChange}>Currency ($ Dollar)</a>
                <a href="#" defaultvalue value="£" name="pound" onClick={handleChange}>Currency (£ Pound)</a>
                <a href="#" value="€" name="euro" onClick={handleChange}>Currency (€ Euro)</a>
                <a href="#" value="₹" name="ruppee" onClick={handleChange}>Currency (₹ Ruppee)</a>
            </div>
        </div>
    );
}

export default Currency;