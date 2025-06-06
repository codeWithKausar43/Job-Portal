/* eslint-disable react/prop-types */
 
 
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  const createUser = (email, password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email,password)
  }

const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

const signOutUser = () =>{
    setLoading(true)
    return signOut(auth)
}

  useEffect(()=>{
  const unsubscribe  =  onAuthStateChanged(auth, currentUser =>{
        setLoading(false)
        setUser(currentUser)
        console.log(currentUser)
    })
    return () =>{
        unsubscribe()
    }
  },[])


    const authInfo = {
        user,
        loading,
        setLoading,
        setUser,
        createUser,
        signInUser,
        googleLogin,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;