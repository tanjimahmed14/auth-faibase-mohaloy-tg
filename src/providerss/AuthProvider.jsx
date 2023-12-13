import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../fairbase/fairbase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword( auth, email, password)
  }

  // login user
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }
  const singInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  // effect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setLoading(false)
      setUser(currentUser);
      console.log('This is current section user', currentUser);
    })
    return () => {
      unSubscribe()
    }
  },[])
  const authInfo = { user,loading, createUser, signInUser, singInWithGoogle, logOut};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
