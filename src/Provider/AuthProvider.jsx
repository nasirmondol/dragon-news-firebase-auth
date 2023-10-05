import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { getAuth } from 'firebase/auth';
import app from "../firebase/firebase.config";

const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const LogOut = () =>{
    return signOut(auth);
  }

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
        return () =>{
            unSubscribe();
        }
    })
  }, [])


  console.log(user)



    const authInfo = { user, loading, createUser, LogOut, signInUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;