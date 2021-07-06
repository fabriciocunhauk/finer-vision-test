import React from 'react';
import './button.css';

const Button = ({ type, onClick, style, content }) => {
    return (
        <div>
            <button style={style} type={type} onClick={onClick}>{content}</button>
        </div>
    );
};

export default Button;
