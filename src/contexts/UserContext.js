import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../assets/utilities/firebase.config';


export const AuthContext = createContext()

// called auth

const auth = getAuth(app)




const UserContext = ({children}) => {

    // signup functionalities

const createUser = (email,password)=>{

    return  createUserWithEmailAndPassword(auth,email,password)
  
  }

    const authInfo = {createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;