import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        }
        )
        return () => {
            unsubscribe();
        }

    }, [])

    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, displayName, photoURL)
    }
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = { createUser, userLogin, providerLogin, user, LogOut, loading, setLoading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;