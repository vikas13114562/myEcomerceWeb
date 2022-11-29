import React from "react";
import "./form-input.styles.scss";

export default function FormInput({ label, ...otherData }) {
  return (
    <div className="group">
        <input className="form-input" {...otherData} />
      {label && (
        <label
          className={`${otherData.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
      
    </div>
  );
}
