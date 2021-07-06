import React from 'react';
import './button.css';

const Button = ({ type, onClick, style }) => {
    return (
        <div>
            <button style={style} type={type} onClick={onClick}>{'Next >'}</button>
        </div>
    );
};

export default Button;
