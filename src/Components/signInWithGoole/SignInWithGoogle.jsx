import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import UseAxiosPublic from "../../Pages/Shared/AxiosPublic/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SignInWithGoogle = () => {
    const { signInWithGoogle } = useAuth()
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()

    const handleSubmit = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })


            })
            .catch(error => {
                console.log(error, "error")
            })
    }
    return (
        <div>
            <button className='btn btn-ghost rounded  w-full border-black' onClick={handleSubmit} ><FaGoogle />  Sign In With Google</button>
        </div>
    );
};

export default SignInWithGoogle;