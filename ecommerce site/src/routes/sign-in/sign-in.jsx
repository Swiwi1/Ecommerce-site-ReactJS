

import React from 'react'
import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form'


const SignIn = () => {
  

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

    // const logGoogleRedirectUser = async () => {
    //   const { user } = await signInWithGoogleRedirect()
    //   console.log({user})
    // }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign up with Google popup</button>
      <SignUpForm/>
      </div>
  )
}

export default SignIn