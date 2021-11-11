import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const signUpWithEmailPassword = (name, email, password) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        //   set the new user
        const newUser = { email, displayName: name };
        //   update user state with new user.
        setUser(newUser);
        //   Update firebase user information.
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginWithEmailPassword = (email, password) => {
    //   To login in the system with email and password.
    
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log("Inside the Login with email and password:: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logOut = () => {
    //   To log out from the system.
    setIsLoading(true);
    signOut(auth)
      .then(() => setUser({}))
      .catch((error) => {
        console.log("Inside the Logout:: ", error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(()=>{
      onAuthStateChanged(auth, user=>{
          if(user){
              setUser(user);
          }
          else{
              setUser({});
          }
          setIsLoading(false);
      })
  },[])

  return {
    user,
    isLoading,
    authError,
    signUpWithEmailPassword,
    loginWithEmailPassword,
    logOut,
  };
};

export default useFirebase;
