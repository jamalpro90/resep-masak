/* eslint-disable react/prop-types */
import React from 'react';
import './Button.scss';

const Button = ({ text, type, onClick }) => {
  return (
    <button type={type} className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
