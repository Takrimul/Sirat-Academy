import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const provider = new FacebookAuthProvider();

const FacebookSign = () => {
    const handlefacebook = () => {

       

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                console.log(user)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(error)
            });
    }
    return (
        <button
            type="button"
            class="btn btn-primary mt-2"
            onClick={handlefacebook}
        >
            <i class="fab fa-facebook"></i>&nbsp;Sign in with Facebook
        </button>
    )
}

export default FacebookSign
