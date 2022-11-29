import React from "react";
import './button.styles.scss'

const buttonClasses = {
    google:'google-sign-in',
    inverted:'inverted'
}

export default function Button({children,buttonType,...otherProps}) {
  return (
    <div>
      <button
        className={`button-container ${buttonClasses[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
}
