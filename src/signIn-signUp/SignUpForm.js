
import React, { useState } from "react";
import FormInput from "./FormInput";
import './form-input.styles.scss'
import Button from "../button/Button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../utils/firebaseUtils/Firebase";


export default function SignUpForm() {
  const obj = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  function resetFormField() {
    setFormData(obj);
  }

  const [formData, setFormData] = useState(obj);

  const { displayName, email, password, confirmPassword } = formData;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function sendDataToFireBase(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password not matching");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      alert(error.code);
    }
  }

  return (
    <>
        
        <div className="sign-up-container">
            <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={(e) => sendDataToFireBase(e)}>
            
            <FormInput
            label = "Full Name"
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            />

            
            <FormInput
            label = "Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            />

            
            <FormInput
            label = "Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            />
            
            <FormInput
            label = "Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            />

            <Button type="submit">Sign Up</Button>
        </form>
        </div>
    </>
  );
}
