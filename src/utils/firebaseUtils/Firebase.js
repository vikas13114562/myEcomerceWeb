import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    
} from 'firebase/firestore'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkcInTVgjUiwLXNAPqbIcQkw6td_lS1qE",
  authDomain: "engineerscap.firebaseapp.com",
  projectId: "engineerscap",
  storageBucket: "engineerscap.appspot.com",
  messagingSenderId: "166659906653",
  appId: "1:166659906653:web:26fa65f7f29c6005d5c1b4",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const provider  = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account',
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocFromAuth = async(userAuth, additionalInfo ={})=> {
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createDate = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createDate,
                ...additionalInfo,
            })
        }
        catch(error) {
            return;
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password) return;

     return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password) return;

     return await signInWithEmailAndPassword(auth, email, password)
}