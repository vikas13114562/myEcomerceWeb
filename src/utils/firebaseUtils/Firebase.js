import { initializeApp } from "firebase/app";


import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    
} from 'firebase/firestore'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey)

    const batch = writeBatch(db);

    objectToAdd.forEach(element => {
        const docRef = doc(collectionRef, element.title.toLowerCase());
        batch.set(docRef, element);


    });
    await batch.commit()
    console.log('done');
}

export const getCollectionsAndDocuments = async() => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef);
    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
        const {title, items} = docSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{})

    return categoryMap;
}

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

export const signOutUser = async() => {
    await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}