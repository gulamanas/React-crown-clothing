import React from 'react';
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'goole-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonTypes, ...otherProps }) => {
  return (
    <div className={`button-container ${BUTTON_TYPE_CLASSES[buttonTypes]}`} {...otherProps}>
      {children}
    </div>
  );
};

export default Button;
