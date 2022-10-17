import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)



const UserContext = ({ children }) => {
    const [user, setUser] = useState({displayName: 'Akhas'})
    // const user = {
    //     displayName: 'Akhash'
    // }
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // google signIn popUp
    const signInWihGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }



    const logOut = () =>{
      return  signOut(auth) ;

    }




    // Why are we doing this?
    useEffect(()=>{
       const unSubcribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('context unsubcribed useEffect',currentUser);
        })
        return () =>{
            unSubcribe();
        }
    },[])


    const authInfo = { user, createUser, signIn, logOut, signInWihGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;