import React from 'react'
import SignUp from '../../component/sign-up-form/SignUp';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/Firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response)
        createUserDocumentFromAuth(response.user)
    }
    return (
        <div>
            <h1>This is sample Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUp />
        </div>
    )
}

export default SignIn