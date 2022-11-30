import {createContext, useState, useEffect} from 'react'
import { onAuthStateChangedListener,createUserDocFromAuth } from '../utils/firebaseUtils/Firebase';

export const UserContext = createContext({
    currUser:null,
    setCurrUser:() => null,
});


export const UserProvider = ({children}) => {
    
    const [currUser, setCurrUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) createUserDocFromAuth(user)
            setCurrUser(user)
        })
        return unsubscribe
    },[])

    const value  = {
        currUser,
        setCurrUser,
    }

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}