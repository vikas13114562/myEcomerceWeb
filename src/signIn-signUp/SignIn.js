
import React, { useState } from "react";
import FormInput from "./FormInput";



import Button from "../button/Button";
import './signIn.styles.scss'

import {
  signInAuthUserWithEmailAndPassword,
  
  signInWithGooglePopup,
} from "../utils/firebaseUtils/Firebase";


export default function SignIn() {
  const obj = { 
    email: "",
    password: "",
    
  };

  function resetFormField() {
    setFormData(obj);
  }

  const signInWithGoogle = async ()=> {
    await signInWithGooglePopup()
    
  }

  const [formData, setFormData] = useState(obj);

  const { email, password } = formData;

 

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function sendDataToFireBase(e) {
    e.preventDefault();
    try{
      const {user} = await signInAuthUserWithEmailAndPassword(email,password);
      
    }
    catch(error) {
      alert(error.code)
    }
   
  }

  return (
    <>
        <div className="sign-up-container">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={(e) => sendDataToFireBase(e)}>
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
           <div className="button-container-div">
              <Button type="submit">Sign In</Button>
              <Button buttonType = "google" onClick = {signInWithGoogle} type = "button">Google Sign In</Button>
           </div>
        </form>
       </div> 
        
    </>
  );
}
