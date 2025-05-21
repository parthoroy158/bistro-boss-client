import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../AuthContext/AuthContext";
import auth from "../../../firebase/firebase.init";



const AuthProvider = ({ children }) => {

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        createNewUser,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;