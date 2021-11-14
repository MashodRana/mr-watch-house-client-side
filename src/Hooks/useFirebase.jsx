import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);
  const history = useHistory();

  const signUpWithEmailPassword = (name, email, password) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        //   set the new user
        const newUser = { email, displayName: name };

        //   update user state with new user.
        setUser(newUser);

        // save user to the database
        saveUser(email, name, 'POST');

        //   Update firebase user information.
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => { })
          .catch((error) => { });
        // history.push('/')
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
        // const user = userCredential.user;
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

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setIsAdmin(data.admin));
  }, [user.email])

  return {
    user,
    isAdmin,
    isLoading,
    authError,
    signUpWithEmailPassword,
    loginWithEmailPassword,
    logOut,
  };
};

export default useFirebase;
