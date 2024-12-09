import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Singup/Firebase/Firebase';


export const Authcontex = createContext();
const auth = getAuth(app);
const UserContex = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    const createuser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const sininuser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            setloading(false)
        })
        return () => unsubcribe();
    }, [])

    const Authinfo = { user, loading, createuser, sininuser, logout }

    return (
        <div>
            <Authcontex.Provider value={Authinfo}>
                {children}
            </Authcontex.Provider>
        </div>
    );
};

export default UserContex;