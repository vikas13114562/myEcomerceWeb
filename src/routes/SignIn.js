import React from 'react'
import {signInWithGooglePopup, createUserDocFromAuth} from '../utils/firebaseUtils/Firebase'
import SignUpForm from '../sign-up-form/SignUpForm'

export default function SignIn() {

  const logGoogleUser = async ()=> {
    const {user} = await signInWithGooglePopup()
    createUserDocFromAuth(user)
    
  }
  return (
    <div>
      <SignUpForm />
      <button onClick = {logGoogleUser}>Sign in with google</button>
    </div>
  )
}
