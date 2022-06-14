import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBlSUGYxPP16fDPw9kAv9TBcYWo99tmZU4",
    authDomain: "crwn-clothing-db-277bf.firebaseapp.com",
    projectId: "crwn-clothing-db-277bf",
    storageBucket: "crwn-clothing-db-277bf.appspot.com",
    messagingSenderId: "466100173292",
    appId: "1:466100173292:web:17133a4304bcc5739668c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef);
    // console.log(userSnapShot)
    // console.log(userSnapShot.exists())

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;

}
