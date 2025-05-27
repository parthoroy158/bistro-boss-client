import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthContext from "../AuthContext/AuthContext";
import auth from "../../../firebase/firebase.init";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    const axiosPublic = UseAxiosPublic()

    const createNewUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        setLoading(false)
        return signOut(auth)
    }

    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signInWithGoogle = () => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = {
                    email: currentUser.email
                }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        console.log(res.data.token)
                        if (res.data.token) {
                            localStorage.setItem('Access Token', res.data.token)
                        }
                    })
            }
            else {
                localStorage.removeItem('Access Token')
            }
            setLoading(false)
            console.log("This is the current user:", currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const userInfo = {
        signInWithGoogle,
        createNewUser,
        user,
        loading,
        userSignIn,
        userSignOut,
        userUpdateProfile
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;