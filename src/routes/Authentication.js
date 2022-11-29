import React from 'react'
import {signInWithGooglePopup, createUserDocFromAuth} from '../utils/firebaseUtils/Firebase'
import SignUpForm from '../signIn-signUp/SignUpForm'
import SignIn from '../signIn-signUp/SignIn'
import './auth.styles.scss'

export default function Authentication() {


  return (
    <div className='auth-container'>
      <SignIn />
      <SignUpForm />
      
    </div>
  )
}
